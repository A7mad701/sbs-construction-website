"use client";

import { products, productCategories } from "@/data";
import { ProductListing } from "./ProductListing";
import { useLanguage } from "@/lib/locale-context";

export function ProductsPageContent() {
  const { t } = useLanguage();
  return (
    <div className="bg-sbs-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 text-start">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {t("products.catalogTitle")}
          </h1>
          <p className="mt-4 max-w-2xl text-sbs-gray-400">
            {t("products.catalogDesc")}
          </p>
        </div>
        <ProductListing products={products} categories={productCategories} />
      </div>
    </div>
  );
}
