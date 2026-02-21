"use client";

import { ContactForm } from "./ContactForm";
import { footerData } from "@/data";
import { useLanguage } from "@/lib/locale-context";

export function ContactPageContent() {
  const { t } = useLanguage();
  return (
    <div className="bg-sbs-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {t("contact.title")}
          </h1>
          <p className="mt-4 max-w-2xl text-sbs-gray-400">
            {t("contact.subtitle")}
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-sbs-gray-800 bg-sbs-gray-900/50 p-8 lg:p-10">
              <h2 className="text-xl font-semibold text-white">{t("contact.sendMessage")}</h2>
              <p className="mt-2 text-sbs-gray-400">
                {t("contact.sendMessageDesc")}
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="rounded-2xl border border-sbs-gray-800 bg-sbs-gray-900/50 p-8">
              <h2 className="text-xl font-semibold text-white">{t("contact.contactInfo")}</h2>
              <address className="mt-6 not-italic">
                <p className="text-sbs-gray-400">{t("footer.address.line1")}</p>
                <p className="text-sbs-gray-400">{t("footer.address.line2")}</p>
                <p className="mt-4">
                  <a
                    href={`tel:${footerData.phone.replace(/\s/g, "")}`}
                    className="text-sbs-orange-500 transition-colors hover:text-sbs-orange-400"
                  >
                    {footerData.phone}
                  </a>
                </p>
                <p className="mt-2">
                  <a
                    href={`mailto:${footerData.email}`}
                    className="text-sbs-orange-500 transition-colors hover:text-sbs-orange-400"
                  >
                    {footerData.email}
                  </a>
                </p>
              </address>
            </div>

            <div className="overflow-hidden rounded-2xl border border-sbs-gray-800 bg-sbs-gray-800">
              <div className="aspect-[4/3] flex items-center justify-center bg-sbs-gray-800">
                <div className="text-center text-sbs-gray-500">
                  <svg
                    className="mx-auto h-12 w-12"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <p className="mt-2 text-sm">{t("contact.mapPlaceholder")}</p>
                  <p className="text-xs text-sbs-gray-600">
                    {t("footer.address.line1")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
