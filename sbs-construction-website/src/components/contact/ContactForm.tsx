"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/locale-context";

export interface ContactFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
}

const initialValues: ContactFormData = {
  name: "",
  company: "",
  email: "",
  phone: "",
  message: "",
};

export function ContactForm() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState<ContactFormData>(initialValues);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      await new Promise((r) => setTimeout(r, 500));
      setStatus("success");
      setFormData(initialValues);
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 text-start">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-sbs-gray-300">
            {t("contact.name")}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            autoComplete="name"
            className="mt-2 block w-full rounded-lg border border-sbs-gray-700 bg-sbs-gray-800 px-4 py-3 text-white placeholder-sbs-gray-500 focus:border-sbs-orange-500 focus:outline-none focus:ring-1 focus:ring-sbs-orange-500"
            placeholder={t("contact.namePlaceholder")}
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-sbs-gray-300">
            {t("contact.company")}
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            autoComplete="organization"
            className="mt-2 block w-full rounded-lg border border-sbs-gray-700 bg-sbs-gray-800 px-4 py-3 text-white placeholder-sbs-gray-500 focus:border-sbs-orange-500 focus:outline-none focus:ring-1 focus:ring-sbs-orange-500"
            placeholder={t("contact.companyPlaceholder")}
          />
        </div>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-sbs-gray-300">
            {t("contact.email")}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            autoComplete="email"
            className="mt-2 block w-full rounded-lg border border-sbs-gray-700 bg-sbs-gray-800 px-4 py-3 text-white placeholder-sbs-gray-500 focus:border-sbs-orange-500 focus:outline-none focus:ring-1 focus:ring-sbs-orange-500"
            placeholder={t("contact.emailPlaceholder")}
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-sbs-gray-300">
            {t("contact.phone")}
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            autoComplete="tel"
            className="mt-2 block w-full rounded-lg border border-sbs-gray-700 bg-sbs-gray-800 px-4 py-3 text-white placeholder-sbs-gray-500 focus:border-sbs-orange-500 focus:outline-none focus:ring-1 focus:ring-sbs-orange-500"
            placeholder={t("contact.phonePlaceholder")}
          />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-sbs-gray-300">
          {t("contact.message")}
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          required
          className="mt-2 block w-full rounded-lg border border-sbs-gray-700 bg-sbs-gray-800 px-4 py-3 text-white placeholder-sbs-gray-500 focus:border-sbs-orange-500 focus:outline-none focus:ring-1 focus:ring-sbs-orange-500"
          placeholder={t("contact.messagePlaceholder")}
        />
      </div>
      {status === "success" && (
        <p className="rounded-lg bg-sbs-green-900/30 px-4 py-3 text-sm text-sbs-green-400">
          {t("contact.successMessage")}
        </p>
      )}
      {status === "error" && (
        <p className="rounded-lg bg-red-900/30 px-4 py-3 text-sm text-red-400">
          {t("contact.errorMessage")}
        </p>
      )}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-lg bg-sbs-orange-600 px-8 py-4 font-semibold text-white transition-colors hover:bg-sbs-orange-500 disabled:opacity-50 sm:w-auto"
      >
        {status === "submitting" ? t("common.sending") : t("common.sendMessage")}
      </button>
    </form>
  );
}
