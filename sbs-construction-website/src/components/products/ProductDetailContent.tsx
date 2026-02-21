"use client";

import Link from "next/link";
import type { Product } from "@/data";
import { ProductImageGallery } from "./ProductImageGallery";
import { RelatedProducts } from "./RelatedProducts";
import { getRelatedProducts } from "@/data";
import { useLanguage } from "@/lib/locale-context";

interface ProductDetailContentProps {
  product: Product;
}

function formatSpecKey(key: string): string {
  return key
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (s) => s.toUpperCase())
    .trim();
}

export function ProductDetailContent({ product }: ProductDetailContentProps) {
  const { t } = useLanguage();
  const specs = product.specifications;
  const specEntries = Object.entries(specs).filter(([, v]) => v != null && v !== "");
  const relatedProducts = getRelatedProducts(product.id, product.category, 4);

  return (
    <div className="bg-sbs-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Link
          href="/products"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-sbs-gray-400 transition-colors hover:text-sbs-orange-500 rtl:flex-row-reverse"
        >
          <svg className="h-5 w-5 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          {t("common.backToEquipment")}
        </Link>

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <ProductImageGallery product={product} />
          </div>

          <div className="lg:col-span-6">
            <div className="lg:sticky lg:top-24">
              <p className="text-sm font-medium uppercase tracking-wider text-sbs-orange-500">
                {t(`products.categoriesMap.${product.category}`) || product.category}
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {product.name}
              </h1>
              <p className="mt-2 text-lg text-sbs-gray-400">{product.brand}</p>
              <p className="mt-6 text-sbs-gray-300 leading-relaxed">
                {product.fullDescription}
              </p>

              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-sbs-orange-600 px-8 py-4 font-semibold text-white transition-colors hover:bg-sbs-orange-500 sm:w-auto rtl:flex-row-reverse"
                >
                  {t("common.requestInquiry")}
                  <svg className="h-5 w-5 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {specEntries.length > 0 && (
          <div className="mt-16">
            <h2 className="text-xl font-semibold text-white">{t("products.specifications")}</h2>
            <div className="mt-4 overflow-hidden rounded-xl border border-sbs-gray-800">
              <table className="min-w-full divide-y divide-sbs-gray-800">
                <tbody className="divide-y divide-sbs-gray-800 bg-sbs-gray-900/50">
                  {specEntries.map(([key, value]) => (
                    <tr key={key} className="transition-colors hover:bg-sbs-gray-800/50">
                      <td className="px-6 py-4 text-sm font-medium text-sbs-gray-400">
                        {formatSpecKey(key)}
                      </td>
                      <td className="px-6 py-4 text-sm text-white">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        <RelatedProducts products={relatedProducts} />
      </div>
    </div>
  );
}
