"use client";

import { useState } from "react";
import Link from "next/link";

type Service = {
  label: string;
  title: string;
  image: string;
  copy: string;
  href: string;
};

const services: Service[] = [
  {
    label: "Travel Designers",
    title: "Travel Designers",
    image: "/images/travel-designers.jpg",
    copy: "Travel is our passion and planning our specialty. Combining these two produces exclusive tours with personalised itineraries, premium hotels and private guides. We love to inspire people with our passion for travel then deliver exemplary service.",
    href: "/travel-designers",
  },
  {
    label: "Event Creators",
    title: "Event Creators",
    image: "https://picsum.photos/seed/cosa-events/900/700",
    copy: "From intimate gatherings to large-scale celebrations, we design events that feel entirely your own — every detail considered so you can be a guest at your own occasion.",
    href: "/event-creators",
  },
  {
    label: "Corporate Events",
    title: "Corporate Events",
    image: "https://picsum.photos/seed/cosa-corporate-hero/900/700",
    copy: "From incentive trips to showcasing your company to the world, we create business events packed with moments no one will forget — with VIP access to attractions, cultural immersions and adventurous activities.",
    href: "/corporate-events",
  },
  {
    label: "Booking Specialists",
    title: "Booking Specialists",
    image: "https://picsum.photos/seed/cosa-booking/900/700",
    copy: "Behind every seamless trip is a team handling the logistics you never see — flights, transfers and reservations managed with precision, so your journey runs exactly to plan.",
    href: "/booking-specialists",
  },
  {
    label: "Switzerland Experts",
    title: "Switzerland Experts",
    image: "https://picsum.photos/seed/cosa-switzerland/900/700",
    copy: "Home turf, home advantage. Our Swiss specialists know the valleys, the villages and the addresses you won't find in a guidebook.",
    href: "/switzerland-experts",
  },
];

export default function WhatWeDo() {
  const [active, setActive] = useState<number>(0);

  const service = services[active];

  return (
    <section id="what-we-do" className="bg-[#f8f7f4] pb-24">
      <div className="max-w-5xl mx-auto px-8">
        <h2 className="font-heading italic font-light text-[40px] md:text-[44px] text-neutral-900 mb-5">
          What we can do for you
        </h2>

        <p className="text-[15px] leading-relaxed text-neutral-700 max-w-2xl mb-12">
          We are a boutique travel studio specialising in personalised itineraries and a complete service tailored to your needs.
           Below is a taster of what we can do for you, or click here for a more in-depth look at everything we offer, 
           from family holidays to business events.
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap gap-x-10 gap-y-3 border-b border-neutral-300 pb-5 mb-12">
          {services.map((serviceItem, index) => (
            <button
              key={serviceItem.label}
              type="button"
              onClick={() => setActive(index)}
              className={`text-[15px] transition-colors ${
                index === active
                  ? "text-neutral-900 underline underline-offset-8 decoration-1"
                  : "text-neutral-500 hover:text-neutral-900"
              }`}
            >
              {serviceItem.label}
            </button>
          ))}
        </div>

        {/* Active Service Panel */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div
            className="aspect-[4/3] w-full bg-cover bg-center"
            style={{
              backgroundImage: `url("${service.image}")`,
            }}
          />

          {/* Text */}
          <div className="max-w-sm">
            <h3 className="font-heading font-medium text-[19px] text-neutral-900 mb-3">
              {service.title}
            </h3>

            <p className="text-[15px] leading-relaxed text-neutral-700 mb-6">
              {service.copy}
            </p>

            <Link
  href={service.href}
  className="inline-flex items-center border border-neutral-400 rounded-[20px] px-8 py-4 text-[15px] tracking-[0.08em] text-neutral-700 hover:border-[#c96f4d] hover:text-[#c96f4d] transition-all duration-300"
>
  Learn More
</Link>
          </div>
        </div>
      </div>
    </section>
  );
}