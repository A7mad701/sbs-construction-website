"use client";

import Link from "next/link";
import { siteConfig, footerData } from "@/data";
import { useLanguage } from "@/lib/locale-context";

const navKeys: Record<string, string> = {
  "/": "nav.home",
  "/about": "nav.about",
  "/products": "nav.products",
  "/services": "nav.services",
  "/projects": "nav.projects",
  "/contact": "nav.contact",
};

const socialIcons: Record<string, React.ReactNode> = {
  linkedin: (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  twitter: (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  facebook: (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  ),
};

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-sbs-gray-800 bg-sbs-gray-950">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2 rtl:text-end">
            <Link
              href="/"
              className="text-xl font-bold text-white transition-colors hover:text-sbs-orange-400"
            >
              {siteConfig.shortName}
            </Link>
            <p className="mt-2 text-sm text-sbs-gray-400">{siteConfig.name}</p>
            <p className="mt-1 text-sm text-sbs-gray-500">
              {t("footer.tagline")}
            </p>
          </div>

          <div className="rtl:text-end">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-sbs-gray-400">
              {t("footer.contact")}
            </h3>
            <address className="mt-4 not-italic text-sbs-gray-300">
              <p className="text-sm">{t("footer.address.line1")}</p>
              <p className="text-sm">{t("footer.address.line2")}</p>
              <p className="mt-2">
                <a
                  href={`tel:${footerData.phone.replace(/\s/g, "")}`}
                  className="transition-colors hover:text-sbs-orange-400"
                >
                  {footerData.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${footerData.email}`}
                  className="transition-colors hover:text-sbs-orange-400"
                >
                  {footerData.email}
                </a>
              </p>
            </address>
          </div>

          <div className="rtl:text-end">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-sbs-gray-400">
              {t("footer.quickLinks")}
            </h3>
            <ul className="mt-4 space-y-2">
              {Object.entries(navKeys).map(([href, key]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-sbs-gray-300 transition-colors hover:text-sbs-orange-400"
                  >
                    {t(key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-sbs-gray-800 pt-8 sm:flex-row rtl:sm:flex-row-reverse">
          <p className="text-sm text-sbs-gray-500">
            © {new Date().getFullYear()} {siteConfig.shortName}. {t("footer.rights")}
          </p>
          <div className="flex gap-4">
            {footerData.social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sbs-gray-400 transition-colors hover:text-sbs-orange-400"
                aria-label={item.name}
              >
                {socialIcons[item.icon]}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
