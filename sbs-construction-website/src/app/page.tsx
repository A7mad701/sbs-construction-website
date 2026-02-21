import {
  HeroSlider,
  AboutPreview,
  FeaturedEquipment,
  ServicesSection,
  WhyChooseSection,
  StatisticsSection,
  CTASection,
} from "@/components/home";
import { products } from "@/data";

export const metadata = {
  title: "Construction Equipment in Jordan | Sustainable Building Solutions | SBS Co.",
  description:
    "Premium construction equipment and heavy machinery supplier in Jordan. Sustainable building solutions, lifting equipment, and technical consultation for infrastructure and industrial projects.",
  openGraph: {
    title: "Construction Equipment in Jordan | Sustainable Building Solutions | SBS Co.",
    description:
      "Premium construction equipment and heavy machinery supplier in Jordan. Sustainable building solutions for infrastructure and industrial projects.",
  },
};

export default function Home() {
  return (
    <>
      <HeroSlider />
      <AboutPreview />
      <FeaturedEquipment products={products} />
      <ServicesSection />
      <WhyChooseSection />
      <StatisticsSection />
      <CTASection />
    </>
  );
}
