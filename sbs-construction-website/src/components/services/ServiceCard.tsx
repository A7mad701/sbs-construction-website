"use client";

import { motion } from "framer-motion";
import type { ServiceDetail } from "@/data/services";
import { useLanguage } from "@/lib/locale-context";

const serviceDetailKeys: Record<string, string> = {
  "equipment-supply": "services.detail.equipmentSupply",
  "sustainable-building": "services.detail.sustainableBuilding",
  "heavy-machinery": "services.detail.heavyMachinery",
  "technical-consultation": "services.detail.technicalConsultation",
};

const icons: Record<string, React.ReactNode> = {
  truck: (
    <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
    </svg>
  ),
  leaf: (
    <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
  ),
  cog: (
    <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  chart: (
    <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
};

interface ServiceCardProps {
  service: ServiceDetail;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  const { t, tArray } = useLanguage();
  const key = serviceDetailKeys[service.id];
  const title = key ? t(`${key}.title`) : service.title;
  const description = key ? t(`${key}.description`) : service.description;
  const features = key ? tArray(`${key}.features`) : service.features;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="rounded-2xl border border-sbs-gray-800 bg-sbs-gray-900 p-8 transition-colors hover:border-sbs-orange-500/30 lg:p-10"
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-sbs-orange-600/20 text-sbs-orange-500">
        {icons[service.icon]}
      </div>
      <h2 className="mt-6 text-xl font-bold text-white sm:text-2xl">
        {title}
      </h2>
      <p className="mt-4 text-sbs-gray-400 leading-relaxed">
        {description}
      </p>
      <ul className="mt-6 space-y-3">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 rtl:flex-row-reverse">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sbs-orange-500" />
            <span className="text-sm font-medium text-sbs-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
    </motion.article>
  );
}
