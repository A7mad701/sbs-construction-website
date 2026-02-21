"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Product } from "@/data";
import { useLanguage } from "@/lib/locale-context";
import { ProductImage } from "./ProductImage";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { t } = useLanguage();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.03 }}
    >
      <Link
        href={`/products/${product.id}`}
        className="group block overflow-hidden rounded-xl border border-sbs-gray-800 bg-sbs-gray-900 transition-all duration-300 hover:border-sbs-orange-500/50 hover:shadow-lg hover:shadow-sbs-orange-500/5"
      >
        <ProductImage
          product={product}
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />
        <div className="p-6 text-start">
          <p className="text-xs font-medium uppercase tracking-wider text-sbs-orange-500">
            {product.category}
          </p>
          <h3 className="mt-2 font-semibold text-white transition-colors group-hover:text-sbs-orange-400">
            {product.name}
          </h3>
          <p className="mt-2 line-clamp-2 text-sm text-sbs-gray-400">
            {product.shortDescription}
          </p>
          <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-sbs-orange-500 transition-colors group-hover:text-sbs-orange-400 rtl:flex-row-reverse">
            {t("common.viewDetails")}
            <svg className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
