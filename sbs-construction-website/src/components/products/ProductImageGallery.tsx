"use client";

import { useState } from "react";
import Image from "next/image";
import type { Product } from "@/data";
import { basePath } from "@/lib/base-path";

interface ProductImageGalleryProps {
  product: Product;
}

export function ProductImageGallery({ product }: ProductImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const images = product.images.filter(Boolean);
  const hasImages = images.length > 0;
  const currentImage = hasImages ? images[selectedIndex] : null;

  return (
    <div className="space-y-4">
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-sbs-gray-800 bg-sbs-gray-800">
        {currentImage ? (
          <Image
            src={basePath + currentImage}
            alt={product.name}
            fill
            className="object-cover"
            quality={85}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <span className="text-9xl font-bold text-sbs-gray-700">
              {product.name.charAt(0)}
            </span>
          </div>
        )}
      </div>
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-2">
          {images.map((src, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setSelectedIndex(index)}
              className={`relative h-20 w-20 shrink-0 overflow-hidden rounded-lg border-2 transition-colors [&>img]:object-cover ${
                selectedIndex === index
                  ? "border-sbs-orange-500"
                  : "border-sbs-gray-700 hover:border-sbs-gray-600"
              }`}
            >
              <Image
                src={basePath + src}
                alt={`${product.name} - image ${index + 1}`}
                fill
                className="object-cover"
                quality={85}
                sizes="80px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
