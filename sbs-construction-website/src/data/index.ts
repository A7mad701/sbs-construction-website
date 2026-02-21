export const siteConfig = {
  name: "Hakmi & Abbas Sustainable Building Solutions Co.",
  shortName: "SBS Co.",
} as const;

export { navLinks, footerData } from "./navigation";
export {
  products,
  productCategories,
  getProductById,
  getRelatedProducts,
  type Product,
} from "./products";
export { services, whyChooseItems, statistics } from "./homepage";
