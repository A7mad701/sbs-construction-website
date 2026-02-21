"use client";

import Link from "next/link";
import { servicesDetail } from "@/data/services";
import { ServiceCard } from "./ServiceCard";
import { useLanguage } from "@/lib/locale-context";

export function ServicesPageContent() {
  const { t, dir } = useLanguage();
  return (
    <div className="bg-sbs-gray-900" dir={dir}>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-16 text-start">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {t("services.pageTitle")}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-sbs-gray-400">
            {t("services.pageDesc")}
          </p>
        </div>

        <div className="space-y-12 lg:space-y-16">
          {servicesDetail.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        <div className="mt-20 rounded-2xl border border-sbs-gray-800 bg-sbs-gray-900/50 p-8 text-center lg:p-12">
          <h2 className="text-xl font-semibold text-white">
            {t("services.ctaTitle")}
          </h2>
          <p className="mt-4 text-sbs-gray-400">
            {t("services.ctaDesc")}
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-sbs-orange-600 px-8 py-4 font-semibold text-white transition-colors hover:bg-sbs-orange-500 rtl:flex-row-reverse"
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
