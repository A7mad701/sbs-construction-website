"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/locale-context";

export function AboutPreview() {
  const { t, dir } = useLanguage();
  const isRtl = dir === "rtl";
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: isRtl ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center text-start"
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-sbs-orange-600">
              {t("about.aboutUs")}
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-sbs-gray-950 sm:text-4xl">
              {t("home.aboutTitle")}
            </h2>
            <p className="mt-6 text-lg text-sbs-gray-600">
              {t("home.aboutPreview")}
            </p>
            <p className="mt-4 text-sbs-gray-600">
              {t("home.aboutPreview2")}
            </p>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 font-semibold text-sbs-orange-600 transition-colors hover:text-sbs-orange-500 rtl:flex-row-reverse"
            >
              {t("common.learnMore")}
              <svg className="h-5 w-5 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: isRtl ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-2xl bg-sbs-gray-100"
          >
            <div className="aspect-[4/3] flex items-center justify-center bg-gradient-to-br from-sbs-gray-800 to-sbs-gray-900">
              <div className="text-center text-white">
                <p className="text-6xl font-bold text-sbs-orange-500">SBS</p>
                <p className="mt-2 text-sm text-sbs-gray-400">{t("about.sustainableBuildingSolutions")}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
