"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/locale-context";

const HERO_IMAGES = [
  "/img/hero/excavator-1.jpg",
  "/img/hero/crane-lifting.jpg",
  "/img/hero/construction-workers.jpg",
  "/img/hero/industrial-machinery.jpg",
  "/img/hero/sustainable-building.jpg",
  "/img/hero/heavy-equipment.jpg",
  "/img/hero/excavator-2.jpg",
  "/img/hero/building-site.jpg",
  "/img/hero/construction-crane.jpg",
  "/img/hero/modern-construction.jpg",
];

export function HeroSlider() {
  const { t, dir } = useLanguage();
  const isRtl = dir === "rtl";
  return <HeroSliderInner key={dir} t={t} isRtl={isRtl} />;
}

function HeroSliderInner({
  t,
  isRtl,
}: {
  t: (key: string) => string;
  isRtl: boolean;
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, duration: 25, containScroll: false, direction: isRtl ? "rtl" : "ltr" },
    [Autoplay({ delay: 5000, stopOnInteraction: false }), Fade()]
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", () => setSelectedIndex(emblaApi.selectedScrollSnap()));
  }, [emblaApi]);

  return (
    <section
      className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-sbs-gray-950"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 overflow-hidden" ref={emblaRef}>
        <div className="flex h-full">
          {HERO_IMAGES.map((src, index) => (
            <div
              key={src}
              className="relative min-w-0 flex-[0_0_100%]"
              style={{ minHeight: "90vh" }}
            >
              <div className="absolute inset-0">
                <Image
                  src={src}
                  alt=""
                  fill
                  className="object-cover"
                  priority={index === 0}
                  quality={85}
                  sizes="100vw"
                />
              </div>
              <div className="absolute inset-0 bg-sbs-gray-950/70" aria-hidden />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="mx-auto max-w-7xl px-4 py-24 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-sbs-orange-500">
            {t("home.tagline")}
          </p>
          <h1
            id="hero-heading"
            className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            {t("home.headline")}
            <br />
            <span className="text-sbs-orange-500">{t("home.headlineAccent")}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-sbs-gray-300 sm:text-xl">
            {t("home.subtitle")}
          </p>
          <Link
            href="/products"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-sbs-orange-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition-colors hover:bg-sbs-orange-500 focus:outline-none focus:ring-2 focus:ring-sbs-orange-500 focus:ring-offset-2 focus:ring-offset-sbs-gray-950 rtl:flex-row-reverse"
          >
            {t("common.viewEquipment")}
            <svg
              className="h-5 w-5 rtl:rotate-180"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>

      <button
        type="button"
        onClick={scrollPrev}
        className="absolute left-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-sbs-gray-900/90 p-2.5 text-white backdrop-blur-sm transition-all hover:bg-sbs-orange-600 focus:outline-none focus:ring-2 focus:ring-sbs-orange-500 sm:left-4 sm:p-3 rtl:left-auto rtl:right-2 sm:rtl:right-4"
        aria-label="Previous slide"
      >
        <svg className="h-5 w-5 sm:h-6 sm:w-6 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        type="button"
        onClick={scrollNext}
        className="absolute right-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-sbs-gray-900/90 p-2.5 text-white backdrop-blur-sm transition-all hover:bg-sbs-orange-600 focus:outline-none focus:ring-2 focus:ring-sbs-orange-500 sm:right-4 sm:p-3 rtl:right-auto rtl:left-2 sm:rtl:left-4"
        aria-label="Next slide"
      >
        <svg className="h-5 w-5 sm:h-6 sm:w-6 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2 sm:bottom-8">
        {HERO_IMAGES.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => scrollTo(index)}
            className={`h-2 w-2 rounded-full transition-colors ${
              index === selectedIndex ? "bg-sbs-orange-500 w-8" : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
