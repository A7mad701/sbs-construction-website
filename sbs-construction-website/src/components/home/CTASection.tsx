"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/locale-context";

export function CTASection() {
  const { t } = useLanguage();
  return (
    <section className="bg-sbs-orange-600 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {t("home.ctaTitle")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sbs-orange-100">
            {t("home.ctaSubtitle")}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 font-semibold text-sbs-orange-600 transition-colors hover:bg-sbs-orange-50"
            >
              {t("common.contactUs")}
              <svg className="h-5 w-5 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-white px-8 py-4 font-semibold text-white transition-colors hover:bg-white/10"
            >
              {t("common.browseEquipment")}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
