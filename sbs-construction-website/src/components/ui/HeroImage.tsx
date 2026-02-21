"use client";

import Image from "next/image";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80";

export function HeroImage() {
  return (
    <Image
      src={HERO_IMAGE}
      alt="Construction equipment and sustainable building solutions"
      fill
      className="object-cover opacity-40"
      priority
      quality={85}
      sizes="100vw"
    />
  );
}
