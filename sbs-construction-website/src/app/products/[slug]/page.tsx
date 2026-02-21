import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { products, getProductById } from "@/data";
import { ProductDetailContent } from "@/components/products/ProductDetailContent";
import { createPageMetadata } from "@/lib/metadata";
import { t } from "@/lib/i18n";

export interface ProductPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.id,
  }));
}

export function generateMetadata({ params }: ProductPageProps): Metadata {
  const product = getProductById(params.slug);
  if (!product) return { title: t("en", "products.productNotFound") };
  return createPageMetadata({
    title: product.name,
    description: `${product.shortDescription} ${product.brand} - Construction equipment in Jordan.`,
    path: `/products/${params.slug}`,
  });
}

export default function ProductDetailPage({ params }: ProductPageProps) {
  const product = getProductById(params.slug);

  if (!product) notFound();

  return <ProductDetailContent product={product} />;
}
