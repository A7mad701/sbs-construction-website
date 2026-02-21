import { ProductsPageContent } from "@/components/products/ProductsPageContent";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Construction Equipment Catalog",
  description:
    "Browse our complete range of construction equipment in Jordan. Plate compactors, lifting equipment, rebar machinery, concrete equipment, and heavy machinery from trusted brands.",
  path: "/products",
});

export default function ProductsPage() {
  return <ProductsPageContent />;
}
