"use client";

import { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { statistics } from "@/data";
import { useLanguage } from "@/lib/locale-context";

const statKeys: Record<string, string> = {
  "Years Experience": "statistics.yearsExperience",
  "Projects Completed": "statistics.projectsCompleted",
  "Equipment Types": "statistics.equipmentTypes",
  "Client Satisfaction": "statistics.clientSatisfaction",
};

function AnimatedCounter({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0);
  const duration = 2000;
  const steps = 60;
  const stepValue = value / steps;
  const stepDuration = duration / steps;

  useEffect(() => {
    if (!inView) return;
    let current = 0;
    const timer = setInterval(() => {
      current += stepValue;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);
    return () => clearInterval(timer);
  }, [inView, value, stepValue, stepDuration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export function StatisticsSection() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-sbs-gray-950 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {statistics.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <p className="text-4xl font-bold text-sbs-orange-500 sm:text-5xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} inView={isInView} />
              </p>
              <p className="mt-2 text-sbs-gray-400">{statKeys[stat.label] ? t(statKeys[stat.label]) : stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
