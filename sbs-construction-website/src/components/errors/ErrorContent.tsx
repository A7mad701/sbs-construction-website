"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/locale-context";

interface ErrorContentProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export function ErrorContent({ error, reset }: ErrorContentProps) {
  const { t } = useLanguage();

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4">
      <h1 className="text-2xl font-bold text-white">{t("errors.somethingWentWrong")}</h1>
      <p className="mt-4 text-center text-sbs-gray-400">
        {t("errors.unexpectedError")}
      </p>
      <div className="mt-8 flex gap-4">
        <button
          type="button"
          onClick={reset}
          className="rounded-lg bg-sbs-orange-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-sbs-orange-500"
        >
          {t("common.tryAgain")}
        </button>
        <Link
          href="/"
          className="rounded-lg border border-sbs-gray-600 px-6 py-3 font-semibold text-white transition-colors hover:border-sbs-orange-500 hover:text-sbs-orange-400"
        >
          {t("common.goHome")}
        </Link>
      </div>
    </div>
  );
}
