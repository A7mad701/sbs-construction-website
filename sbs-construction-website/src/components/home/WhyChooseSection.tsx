"use client";

import { motion } from "framer-motion";
import { whyChooseItems } from "@/data";
import { useLanguage } from "@/lib/locale-context";

const whyChooseKeys: Record<string, string> = {
  "wc-1": "whyChoose.industryExpertise",
  "wc-2": "whyChoose.qualityBrands",
  "wc-3": "whyChoose.regionalPresence",
  "wc-4": "whyChoose.sustainableFocus",
};

const icons: Record<string, React.ReactNode> = {
  award: (
    <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>
  ),
  star: (
    <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
  ),
  "map-pin": (
    <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  leaf: (
    <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
  ),
};

export function WhyChooseSection() {
  const { t } = useLanguage();
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-sbs-orange-600">
            {t("home.whyChoose")}
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-sbs-gray-950 sm:text-4xl">
            {t("home.whyChooseTitle")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sbs-gray-600">
            {t("home.whyChooseDesc")}
          </p>
        </motion.div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseItems.map((item, index) => {
            const key = whyChooseKeys[item.id];
            return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-sbs-orange-100 text-sbs-orange-600 transition-all duration-300 hover:scale-105 hover:bg-sbs-orange-500 hover:text-white hover:shadow-lg hover:shadow-sbs-orange-500/20">
                {icons[item.icon]}
              </div>
              <h3 className="mt-6 font-semibold text-sbs-gray-950">{key ? t(`${key}.title`) : item.title}</h3>
              <p className="mt-3 text-sbs-gray-600">{key ? t(`${key}.description`) : item.description}</p>
            </motion.div>
          );})}
        </div>
      </div>
    </section>
  );
}
