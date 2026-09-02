"use client";

import { useState } from "react";

const QUOTES = [
  {
    text: "Many thanks for your superb assistance and for being so committed to customers.",
    author: "Elena Marchetti",
    location: "Florence, Italy",
  },
  {
    text: "Every detail was handled with such care — it felt like the trip planned itself.",
    author: "James Whitfield",
    location: "London, UK",
  },
  {
    text: "Cosa turned a vague idea into the best holiday we've ever taken.",
    author: "Priya Nair",
    location: "Mumbai, India",
  },
];

export default function Testimonial() {
  const [active, setActive] = useState(0);

  const current = QUOTES[active];

  return (
    <section className="relative bg-[#f8f7f4] py-24 overflow-hidden">

      {/* Decorative circles */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[560px] h-[420px] pointer-events-none">
        <div
          className="absolute right-40 top-0 w-64 h-64 rounded-full"
          style={{
            background:
              "linear-gradient(180deg, rgba(150,166,156,0.55) 0%, rgba(150,166,156,0.25) 55%, rgba(150,166,156,0) 100%)",
          }}
        />

        <div
          className="absolute right-0 top-24 w-72 h-72 rounded-full"
          style={{
            background:
              "linear-gradient(180deg, rgba(150,166,156,0.5) 0%, rgba(150,166,156,0.22) 55%, rgba(150,166,156,0) 100%)",
          }}
        />

        <div
          className="absolute right-52 top-40 w-56 h-56 rounded-full"
          style={{
            background:
              "linear-gradient(180deg, rgba(150,166,156,0.5) 0%, rgba(150,166,156,0.22) 55%, rgba(150,166,156,0) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[720px] mx-auto px-8">

        {/* Quote */}
        <p className="font-heading italic font-light text-[28px] md:text-[32px] text-neutral-900 leading-snug">
          &ldquo;{current.text}&rdquo;
        </p>

        {/* Author */}
        <div className="flex items-center gap-3 mt-5">
          <span className="w-8 h-px bg-neutral-400" />

          <p className="text-[12px] text-neutral-500">
            {current.author} · {current.location} · ★★★★★
          </p>
        </div>

        {/* Indicators */}
        <div className="relative z-[9999] flex items-center gap-3 mt-10">
          {QUOTES.map((quote, index) => (
            <button
              key={quote.author}
              type="button"
              onMouseDown={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setActive(index);
              }}
              aria-label={`Show testimonial ${index + 1}`}
              className="relative z-[9999] flex items-center justify-center w-10 h-10 cursor-pointer"
            >
              <span
                className={`rounded-full transition-all duration-300 ${
                  active === index
                    ? "w-7 h-2 bg-neutral-800"
                    : "w-2 h-2 bg-neutral-300"
                }`}
              />
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}