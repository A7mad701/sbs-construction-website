"use client";

import { useLanguage } from "@/lib/locale-context";

export function DirWrapper({ children }: { children: React.ReactNode }) {
  const { dir } = useLanguage();
  return (
    <div dir={dir} className="flex min-h-0 flex-1 flex-col">
      {children}
    </div>
  );
}
