"use client";

import { useLanguage } from "@/lib/locale-context";

export function ProjectsPageContent() {
  const { t } = useLanguage();
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-white">{t("projects.pageTitle")}</h1>
      <p className="mt-4 text-sbs-gray-300">{t("projects.pageDesc")}</p>
    </div>
  );
}
