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
    <section className="relative h-[535px] overflow-hidden bg-[#f8f7f4]">

      {/* ==============================
          DECORATIVE CIRCLES
      =============================== */}
      <div className="pointer-events-none absolute inset-0">

        {/* Circle 1 — top */}
        <div
          className="
            absolute
            right-[215px]
            top-[62px]
            h-[330px]
            w-[330px]
            rounded-full
          "
          style={{
            background:
              "radial-gradient(circle at 50% 38%, rgba(155,170,160,0.42) 0%, rgba(155,170,160,0.30) 55%, rgba(155,170,160,0.20) 100%)",
          }}
        />

        {/* Circle 2 — right */}
        <div
          className="
            absolute
            right-[-5px]
            top-[205px]
            h-[335px]
            w-[335px]
            rounded-full
          "
          style={{
            background:
              "radial-gradient(circle at 50% 35%, rgba(155,170,160,0.40) 0%, rgba(155,170,160,0.28) 55%, rgba(155,170,160,0.18) 100%)",
          }}
        />

        {/* Circle 3 — bottom left */}
        <div
          className="
            absolute
            right-[475px]
            top-[205px]
            h-[290px]
            w-[290px]
            rounded-full
          "
          style={{
            background:
              "radial-gradient(circle at 50% 35%, rgba(155,170,160,0.38) 0%, rgba(155,170,160,0.26) 55%, rgba(155,170,160,0.16) 100%)",
          }}
        />
      </div>

      {/* ==============================
          CONTENT
      =============================== */}
      <div className="relative mx-auto h-full max-w-[1416px]">

        <div
          className="
            absolute
            left-[20.8%]
            top-[225px]
            w-[700px]
          "
        >

          {/* Quote */}
          <p
            className="
              font-heading
              text-[46px]
              font-light
              italic
              leading-[1.18]
              tracking-[-0.025em]
              text-[#171717]
            "
          >
            &ldquo;{current.text}&rdquo;
          </p>

          {/* ==============================
              AUTHOR
          =============================== */}
          <div className="mt-5 flex items-center gap-4">

            <span className="h-px w-[43px] bg-[#999]" />

            <p className="text-[13px] leading-none text-[#777]">
              {current.author} · {current.location} · ★★★★★
            </p>

          </div>

          {/* ==============================
              SLIDER
          =============================== */}
          <div className="mt-14 flex items-center gap-[5px]">

            {QUOTES.map((quote, index) => (
              <button
                key={quote.author}
                type="button"
                onClick={() => setActive(index)}
                aria-label={`Show testimonial ${index + 1}`}
                className="
                  flex
                  h-[12px]
                  items-center
                  justify-center
                  cursor-pointer
                "
              >
                <span
                  className={`
                    block
                    rounded-full
                    transition-all
                    duration-300
                    ${
                      active === index
                        ? "h-[6px] w-[30px] bg-[#1f4b3e]"
                        : "h-[6px] w-[7px] bg-[#8c918d]"
                    }
                  `}
                />
              </button>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}