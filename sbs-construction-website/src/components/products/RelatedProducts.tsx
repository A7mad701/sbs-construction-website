"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Product } from "@/data";
import { useLanguage } from "@/lib/locale-context";
import { ProductImage } from "./ProductImage";

interface RelatedProductsProps {
  products: Product[];
}

export function RelatedProducts({ products }: RelatedProductsProps) {
  const { t } = useLanguage();
  if (products.length === 0) return null;

  return (
    <section className="mt-24 border-t border-sbs-gray-800 pt-16">
      <h2 className="text-2xl font-bold text-white">{t("products.relatedEquipment")}</h2>
      <p className="mt-2 text-sbs-gray-400">
        {t("products.relatedDesc")}
      </p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <Link
              href={`/products/${product.id}`}
              className="group block overflow-hidden rounded-xl border border-sbs-gray-800 bg-sbs-gray-900 transition-all duration-300 hover:border-sbs-orange-500/50"
            >
              <ProductImage
                product={product}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="p-4">
                <h3 className="font-semibold text-white group-hover:text-sbs-orange-400 transition-colors">
                  {product.name}
                </h3>
                <p className="mt-1 text-sm text-sbs-gray-400">{product.brand}</p>
                <span className="mt-2 inline-block text-sm font-medium text-sbs-orange-500">
                  {t("common.viewDetails")} →
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
