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
    <section className="relative overflow-hidden bg-[#f8f7f4] pt-16 pb-20">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="absolute right-[-60px] top-[-40px] h-[280px] w-[420px] rounded-[50%]"
          style={{
            background:
              "linear-gradient(180deg, rgba(201,208,203,0.55) 0%, rgba(201,208,203,0.15) 100%)",
          }}
        />
        <div
          className="absolute right-[80px] top-[60px] h-[180px] w-[260px] rounded-[50%]"
          style={{
            background:
              "linear-gradient(180deg, rgba(201,208,203,0.45) 0%, rgba(201,208,203,0.1) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1180px] mx-auto px-8">
        <p className="text-[12px] uppercase tracking-[0.12em] text-neutral-500 mb-4">
          {t.eyebrow}
        </p>

        <blockquote className="font-heading italic font-light text-[28px] md:text-[34px] leading-[1.25] text-neutral-900 max-w-[720px] mb-5">
          &ldquo;{t.quote}&rdquo;
        </blockquote>

        <p className="text-[13px] text-neutral-500 mb-6">— {t.attribution}</p>

        <div className="flex gap-2">
          {TESTIMONIALS.map((item, i) => (
            <button
              key={item.attribution}
              onClick={() => setActive(i)}
              aria-label={`Show testimonial ${i + 1}`}
              className={`h-[3px] rounded-full transition-all cursor-pointer ${
                i === active
                  ? "w-8 bg-neutral-900"
                  : "w-4 bg-neutral-300 hover:bg-neutral-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
