"use client";

import { useState } from "react";

const TESTIMONIALS = [
  {
    eyebrow: "Group Travel",
    quote:
      "Cosa organised a varied trip for us with a great mix of culture, fine cuisine and a wonderful concert evening. A big thank you!",
    attribution: "Sylvie & Antoinette, Lucerne Symphony Orchestra",
  },
  {
    eyebrow: "Corporate Events",
    quote:
      "From the first call to the closing dinner, every detail was handled beautifully. Our team is still talking about it months later.",
    attribution: "Markus Lindt, Head of Sales, Nordic Pharma",
  },
  {
    eyebrow: "Private Events",
    quote:
      "Cosa turned my mother's 70th birthday into something none of us will ever forget. Thoughtful, warm and flawlessly organised.",
    attribution: "Camille Roux, Geneva",
  },
];

export default function Testimonial() {
  const [active, setActive] = useState(0);
  const t = TESTIMONIALS[active];

  return (
    <section className="relative overflow-hidden bg-[#f8f7f4] pt-12 pb-20 md:pt-16 md:pb-24">

      {/* Decorative blobs */}
      <div
        className="pointer-events-none absolute right-[-80px] top-[-25px] h-[250px] w-[380px] rounded-[50%]"
        style={{
          background:
            "linear-gradient(180deg, rgba(201,208,203,0.55) 0%, rgba(201,208,203,0.12) 100%)",
        }}
      />

      <div
        className="pointer-events-none absolute right-[80px] top-[45px] h-[175px] w-[270px] rounded-[50%]"
        style={{
          background:
            "linear-gradient(180deg, rgba(201,208,203,0.45) 0%, rgba(201,208,203,0.08) 100%)",
        }}
      />

      <div className="relative z-10 max-w-[900px] mx-auto px-6">

        {/* Testimonial content */}
        <div className="max-w-[610px]">

          <p className="text-[10px] uppercase tracking-[0.12em] text-neutral-500 mb-5">
            {t.eyebrow}
          </p>

          <blockquote className="font-heading italic font-light text-[27px] md:text-[31px] leading-[1.28] text-neutral-900 mb-5">
            &ldquo;{t.quote}&rdquo;
          </blockquote>

          <div className="flex items-center gap-3 mb-6">
            <span className="text-[12px] text-neutral-500">
              — {t.attribution}
            </span>
          </div>

          {/* Slider indicators */}
          <div className="flex items-center gap-2">
            {TESTIMONIALS.map((item, i) => (
              <button
                key={item.attribution}
                onClick={() => setActive(i)}
                aria-label={`Show testimonial ${i + 1}`}
                className={`h-[3px] rounded-full transition-all cursor-pointer ${
                  i === active
                    ? "w-9 bg-neutral-900"
                    : "w-4 bg-neutral-300 hover:bg-neutral-400"
                }`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}