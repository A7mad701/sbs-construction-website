"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Product } from "@/data";
import { useLanguage } from "@/lib/locale-context";
import { ProductImage } from "@/components/products/ProductImage";

const featuredIds = [
  "pc-rbc-90-d",
  "sl-mrt-ss8",
  "bc-gq46",
  "cm-200",
  "vr-650d",
  "bl-mrt-qb10",
];

interface FeaturedEquipmentProps {
  products: Product[];
}

export function FeaturedEquipment({ products }: FeaturedEquipmentProps) {
  const { t } = useLanguage();
  const featured = products.filter((p) => featuredIds.includes(p.id));
  const displayProducts = featured.length >= 6 ? featured : products.slice(0, 6);

  return (
    <section className="bg-sbs-gray-950 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-sbs-orange-500">
            {t("home.equipmentCatalog")}
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {t("home.featuredEquipment")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sbs-gray-400">
            {t("home.featuredEquipmentDesc")}
          </p>
        </motion.div>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {displayProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Link
                href={`/products/${product.id}`}
                className="group block overflow-hidden rounded-xl border border-sbs-gray-800 bg-sbs-gray-900 transition-colors hover:border-sbs-orange-500/50"
              >
                <ProductImage
                  product={product}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="p-6">
                  <p className="text-xs font-medium text-sbs-orange-500">{product.category}</p>
                  <h3 className="mt-2 font-semibold text-white group-hover:text-sbs-orange-400 transition-colors">
                    {product.name}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm text-sbs-gray-400">
                    {product.shortDescription}
                  </p>
                  <p className="mt-3 text-sm font-medium text-sbs-orange-500 group-hover:text-sbs-orange-400 transition-colors">
                    {t("common.viewDetails")} →
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            href="/products"
            className="inline-flex items-center gap-2 rounded-lg border border-sbs-orange-500 px-6 py-3 font-semibold text-sbs-orange-500 transition-colors hover:bg-sbs-orange-500 hover:text-white rtl:flex-row-reverse"
          >
            {t("common.viewAllEquipment")}
            <svg className="h-5 w-5 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
