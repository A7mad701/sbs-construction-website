"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/locale-context";

export function NotFoundContent() {
  const { t } = useLanguage();
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-bold text-white">404</h1>
      <p className="mt-4 text-sbs-gray-400">{t("errors.pageNotFound")}</p>
      <Link
        href="/"
        className="mt-8 rounded-lg bg-sbs-orange-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-sbs-orange-500"
      >
        {t("common.returnHome")}
      </Link>
    </div>
  );
}
