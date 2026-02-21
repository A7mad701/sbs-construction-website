"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/locale-context";

export function AboutPageContent() {
  const { t } = useLanguage();
  return (
    <div className="bg-sbs-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-start">
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          {t("about.pageTitle")}
        </h1>
        <p className="mt-6 text-lg text-sbs-gray-300 leading-relaxed">
          {t("about.pageDesc")}
        </p>
        <p className="mt-6 text-sbs-gray-400 leading-relaxed">
          {t("about.intro")}
        </p>
        <p className="mt-6 text-sbs-gray-400 leading-relaxed">
          {t("about.mission")}
        </p>
        <p className="mt-6 text-sbs-gray-400 leading-relaxed">
          {t("about.values")}
        </p>
        <Link
          href="/contact"
          className="mt-10 inline-flex items-center gap-2 rounded-lg bg-sbs-orange-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-sbs-orange-500 hover:shadow-lg hover:shadow-sbs-orange-500/20 rtl:flex-row-reverse"
        >
          {t("common.getInTouch")}
          <svg className="h-5 w-5 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </div>
    </div>
  );
}
