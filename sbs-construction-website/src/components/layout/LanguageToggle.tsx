"use client";

import { useLanguage } from "@/lib/locale-context";

export function LanguageToggle() {
  const { locale, setLocale, t } = useLanguage();

  return (
    <div className="flex rounded-md border border-sbs-gray-600 bg-sbs-gray-800 p-0.5">
      <button
        type="button"
        onClick={() => setLocale("en")}
        aria-pressed={locale === "en"}
        aria-label={t("common.switchToEnglish")}
        className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sbs-orange-500 focus:ring-offset-2 focus:ring-offset-sbs-gray-800 ${
          locale === "en"
            ? "bg-sbs-orange-600 text-white"
            : "text-sbs-gray-300 hover:bg-sbs-gray-700 hover:text-white"
        }`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLocale("ar")}
        aria-pressed={locale === "ar"}
        aria-label={t("common.switchToArabic")}
        className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sbs-orange-500 focus:ring-offset-2 focus:ring-offset-sbs-gray-800 ${
          locale === "ar"
            ? "bg-sbs-orange-600 text-white"
            : "text-sbs-gray-300 hover:bg-sbs-gray-700 hover:text-white"
        }`}
      >
        AR
      </button>
    </div>
  );
}
