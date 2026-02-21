"use client";

import { useState } from "react";
import Image from "next/image";
import type { Product } from "@/data";
import { basePath } from "@/lib/base-path";

const PLACEHOLDER = "/img/placeholder.jpg";

interface ProductImageProps {
  product: Product;
  sizes: string;
  className?: string;
}

function FallbackContent({ product }: { product: Product }) {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <span className="text-4xl font-bold text-sbs-gray-700 transition-colors group-hover:text-sbs-orange-500/40">
        {product.name.charAt(0)}
      </span>
    </div>
  );
}

export function ProductImage({ product, sizes, className = "" }: ProductImageProps) {
  const src = product.images?.filter(Boolean)[0];
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div className={`relative aspect-[4/3] overflow-hidden bg-sbs-gray-800 ${className}`.trim()}>
        {src && failed ? (
          <Image
            src={basePath + PLACEHOLDER}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
          />
        ) : (
          <FallbackContent product={product} />
        )}
      </div>
    );
  }

  return (
    <div className={`relative aspect-[4/3] overflow-hidden bg-sbs-gray-800 ${className}`.trim()}>
      <Image
        src={basePath + src}
        alt={product.name}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
        quality={85}
        sizes={sizes}
        onError={() => setFailed(true)}
      />
    </div>
  );
}
