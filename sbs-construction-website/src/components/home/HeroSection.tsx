"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/locale-context";
import { HeroImage } from "@/components/ui/HeroImage";

export function HeroSection() {
  const { t } = useLanguage();
  return (
    <section
      className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-sbs-gray-950"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0">
        <div className="relative h-full w-full">
          <HeroImage />
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-sbs-gray-950/90 via-sbs-gray-950/75 to-sbs-gray-950" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-6"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-sbs-orange-500">
            {t("home.tagline")}
          </p>
          <h1 id="hero-heading" className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            {t("home.headline")}
            <br />
            <span className="text-sbs-orange-500">{t("home.headlineAccent")}</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-sbs-gray-300 sm:text-xl">
            {t("home.subtitle")}
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-lg bg-sbs-orange-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition-colors hover:bg-sbs-orange-500 focus:outline-none focus:ring-2 focus:ring-sbs-orange-500 focus:ring-offset-2 focus:ring-offset-sbs-gray-950"
            >
              {t("common.viewEquipment")}
              <svg className="h-5 w-5 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
