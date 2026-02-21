"use client";

import { useState } from "react";
import { ProductCard } from "./ProductCard";
import type { Product } from "@/data";
import { useLanguage } from "@/lib/locale-context";

interface ProductListingProps {
  products: Product[];
  categories: readonly string[];
}

export function ProductListing({ products, categories }: ProductListingProps) {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredProducts =
    selectedCategory === null
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const countKey = filteredProducts.length === 1 ? "products.productFound" : "products.productsFound";

  return (
    <div className="flex flex-col gap-8 lg:flex-row">
      <aside className="lg:w-64 lg:shrink-0">
        <div className="rounded-xl border border-sbs-gray-800 bg-sbs-gray-900 p-6 lg:sticky lg:top-24 text-start">
          <h3 className="font-semibold text-white">{t("products.categories")}</h3>
          <nav className="mt-4 space-y-1">
            <button
              type="button"
              onClick={() => setSelectedCategory(null)}
              className={`block w-full rounded-lg px-4 py-2.5 text-start text-sm font-medium transition-colors duration-200 ${
                selectedCategory === null
                  ? "bg-sbs-orange-600 text-white"
                  : "text-sbs-gray-400 hover:bg-sbs-gray-800 hover:text-white"
              }`}
            >
              {t("products.allEquipment")}
            </button>
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`block w-full rounded-lg px-4 py-2.5 text-start text-sm font-medium transition-colors duration-200 ${
                  selectedCategory === category
                    ? "bg-sbs-orange-600 text-white"
                    : "text-sbs-gray-400 hover:bg-sbs-gray-800 hover:text-white"
                }`}
              >
                {t(`products.categoriesMap.${category}`) || category}
              </button>
            ))}
          </nav>
        </div>
      </aside>
      <div className="min-w-0 flex-1">
        <p className="mb-6 text-sm text-sbs-gray-400 text-start">
          {filteredProducts.length} {t(countKey)}
        </p>
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {filteredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
