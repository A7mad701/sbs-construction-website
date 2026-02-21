"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/data";
import { useLanguage } from "@/lib/locale-context";
import { LanguageToggle } from "./LanguageToggle";

const navKeys: Record<string, string> = {
  "/": "nav.home",
  "/about": "nav.about",
  "/products": "nav.products",
  "/services": "nav.services",
  "/projects": "nav.projects",
  "/contact": "nav.contact",
};

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useLanguage();
  return (
    <header className="sticky top-0 z-50 w-full border-b border-sbs-gray-800 bg-sbs-gray-950/95 backdrop-blur supports-[backdrop-filter]:bg-sbs-gray-950/90">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:z-[100] focus:rounded focus:bg-sbs-orange-600 focus:px-4 focus:py-2 focus:text-white focus:outline-none focus:ring-2 focus:ring-white focus:left-4 rtl:focus:left-auto rtl:focus:right-4"
      >
        {t("common.skipToContent")}
      </a>
      <nav className="mx-auto flex max-w-7xl flex-row items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <Link
          href="/"
          className="shrink-0 text-xl font-bold tracking-tight text-white transition-colors duration-200 hover:text-sbs-orange-400"
        >
          {siteConfig.shortName}
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {Object.entries(navKeys).map(([href, key]) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-medium text-sbs-gray-300 transition-colors duration-200 hover:text-sbs-orange-400"
            >
              {t(key)}
            </Link>
          ))}
          <LanguageToggle />
        </div>

        <div className="flex items-center gap-4 lg:hidden">
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-lg p-2 text-sbs-gray-300 hover:bg-sbs-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-sbs-orange-500 focus:ring-offset-2 focus:ring-offset-sbs-gray-950"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? t("common.closeMenu") : t("common.openMenu")}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div id="mobile-nav" className="border-t border-sbs-gray-800 bg-sbs-gray-900 lg:hidden" role="navigation" aria-label="Mobile navigation">
          <div className="flex flex-col gap-1 px-4 py-4 rtl:text-end">
            <div className="mb-4 flex justify-end rtl:justify-start">
              <LanguageToggle />
            </div>
            {Object.entries(navKeys).map(([href, key]) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium text-sbs-gray-300 transition-colors duration-200 hover:bg-sbs-gray-800 hover:text-sbs-orange-400"
              >
                {t(key)}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
