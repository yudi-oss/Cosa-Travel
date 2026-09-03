"use client";

import { useState } from "react";

const QUOTES = [
  {
    text: "It is rare that vacations exceed expectations, and this one absolutely did. We ended up with the honeymoon of our dreams.",
    author: "Bryan",
  },
  {
    text: "From the cheese cellars to the cable cars, every single day felt like it had been planned just for us.",
    author: "Nadia",
  },
  {
    text: "We've travelled a lot, but Cosa showed us a side of Switzerland we never would have found on our own.",
    author: "Michael",
  },
];

export default function Testimonial() {
  const [active, setActive] = useState(0);
  const current = QUOTES[active];

  return (
    <section className="relative bg-[#f8f7f4] py-16 overflow-hidden">
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
      </div>

      <div className="relative z-10 max-w-[1180px] mx-auto px-8">
        <p className="font-heading italic font-light text-[26px] md:text-[30px] text-neutral-900 leading-snug max-w-[680px]">
          &ldquo;{current.text}&rdquo;
        </p>

        <div className="flex items-center gap-3 mt-5">
          <span className="w-8 h-px bg-neutral-400" />
          <p className="text-[12px] text-neutral-500">{current.author}</p>
        </div>

        <div className="relative z-[9999] flex items-center gap-3 mt-8">
          {QUOTES.map((quote, index) => (
            <button
              key={quote.author}
              type="button"
              onClick={() => setActive(index)}
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
