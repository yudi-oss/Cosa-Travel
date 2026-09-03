"use client";

import { useRef, useState } from "react";

const IMAGES = [
  "/corporateevents/hero.jpg",
  "/traveldesigner/gettingtoknow.png",
  "/traveldesigner/livia.png",
  "/corporateevents/capeverde.png",
  "/images/fire.png",
];

export default function CSRImpressions() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  function scrollToIndex(i: number) {
    const el = scrollerRef.current;
    if (!el) return;
    const child = el.children[i] as HTMLElement | undefined;
    child?.scrollIntoView({
      behavior: "smooth",
      inline: "start",
      block: "nearest",
    });
    setActive(i);
  }

  return (
    <section className="bg-[#f8f7f4] pb-20">
      <div className="max-w-[1180px] mx-auto px-8">
        <h2 className="font-heading italic font-light text-[32px] md:text-[36px] text-neutral-900 mb-10">
          CSR impressions
        </h2>
      </div>

      <div
        ref={scrollerRef}
        className="flex gap-2 overflow-x-auto pl-8 lg:pl-[calc((100vw-1180px)/2+32px)] scroll-smooth [&::-webkit-scrollbar]:hidden"
        style={{ scrollbarWidth: "none" }}
      >
        {IMAGES.map((img, i) => (
          <div
            key={img + i}
            className="shrink-0 w-[500px] h-[420px] bg-cover bg-center"
            style={{ backgroundImage: `url('${img}')` }}
          />
        ))}
        <div className="shrink-0 w-8" aria-hidden />
      </div>

      <div className="max-w-[1180px] mx-auto px-8 mt-10 flex items-center gap-2">
        {IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToIndex(i)}
            aria-label={`Show image ${i + 1}`}
            className="p-1 cursor-pointer"
          >
            <span
              className={`block rounded-full transition-all duration-300 ${
                active === i
                  ? "w-6 h-[3px] bg-neutral-800"
                  : "w-[3px] h-4 bg-neutral-300"
              }`}
            />
          </button>
        ))}
      </div>
    </section>
  );
}
