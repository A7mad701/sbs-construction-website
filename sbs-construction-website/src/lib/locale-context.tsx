"use client";

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  useCallback,
} from "react";
import { translations, type Locale } from "./i18n";

const STORAGE_KEY = "sbs-locale";

function getStoredLocale(): Locale {
  if (typeof window === "undefined") return "en";
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored === "ar" ? "ar" : "en";
}

function setStoredLocale(locale: Locale) {
  if (typeof window !== "undefined") {
    localStorage.setItem(STORAGE_KEY, locale);
  }
}

function getNested(obj: Record<string, unknown>, path: string): string | string[] | undefined {
  const keys = path.split(".");
  let current: unknown = obj;
  for (const key of keys) {
    if (!current || typeof current !== "object") return undefined;
    const arr = Array.isArray(current);
    const hasKey = arr ? /^\d+$/.test(key) && Number(key) < (current as unknown[]).length : key in current;
    if (!hasKey) return undefined;
    current = arr ? (current as unknown[])[Number(key)] : (current as Record<string, unknown>)[key];
  }
  if (typeof current === "string") return current;
  if (Array.isArray(current) && current.every((x) => typeof x === "string")) return current as string[];
  return undefined;
}

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
  tArray: (key: string) => string[];
  dir: "ltr" | "rtl";
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setLocaleState(getStoredLocale());
    setMounted(true);
  }, []);

  const prevLocaleRef = useRef<Locale | null>(null);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
    setStoredLocale(locale);
    if (prevLocaleRef.current !== null && prevLocaleRef.current !== locale) {
      document.body.style.transition = "opacity 0.15s ease";
      document.body.style.opacity = "0.7";
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          document.body.style.opacity = "1";
        });
      });
    }
    prevLocaleRef.current = locale;
  }, [locale, mounted]);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
  }, []);

  const t = useCallback(
    (key: string): string => {
      const value = getNested(
        translations[locale] as Record<string, unknown>,
        key
      );
      return typeof value === "string" ? value : Array.isArray(value) ? value.join(", ") : key;
    },
    [locale]
  );

  const tArray = useCallback(
    (key: string): string[] => {
      const value = getNested(
        translations[locale] as Record<string, unknown>,
        key
      );
      return Array.isArray(value) ? value : [];
    },
    [locale]
  );

  const value: LanguageContextValue = {
    locale,
    setLocale,
    t,
    tArray,
    dir: locale === "ar" ? "rtl" : "ltr",
  };

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LocaleProvider");
  }
  return context;
}

export const useLocale = useLanguage;
