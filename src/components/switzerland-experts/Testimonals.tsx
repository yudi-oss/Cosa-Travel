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
    <section className="relative bg-[#f8f7f4] py-24 md:py-32 overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute -right-16 md:right-0 top-1/2 -translate-y-1/2 w-[520px] h-[520px] md:w-[640px] md:h-[640px] pointer-events-none">
        <div className="absolute right-[160px] top-0 w-[340px] h-[340px] md:w-[400px] md:h-[400px] rounded-full bg-[#b6c2b8]/65" />
        <div className="absolute right-0 top-[130px] w-[380px] h-[380px] md:w-[440px] md:h-[440px] rounded-full bg-[#b6c2b8]/45" />
      </div>

      <div className="relative z-10 max-w-[1180px] mx-auto px-8">
        <p className="font-heading italic font-light text-[32px] md:text-[40px] text-neutral-900 leading-[1.35] max-w-[600px]">
          &ldquo;{current.text}&rdquo;
        </p>

        <div className="flex items-center gap-3 mt-6">
          <span className="w-8 h-px bg-neutral-400" />
          <p className="text-[13px] text-neutral-500">{current.author}</p>
        </div>

        <div className="relative z-[9999] flex items-center gap-3 mt-10">
          {QUOTES.map((quote, index) => (
            <button
              key={quote.author}
              type="button"
              onClick={() => setActive(index)}
              aria-label={`Show testimonial ${index + 1}`}
              className="relative z-[9999] flex items-center justify-center cursor-pointer"
            >
              <span
                className={`rounded-full transition-all duration-300 ${
                  active === index
                    ? "w-12 h-2.5 bg-[#556455]"
                    : "w-4 h-2 bg-neutral-300"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
