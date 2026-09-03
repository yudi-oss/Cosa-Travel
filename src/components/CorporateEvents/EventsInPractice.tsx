"use client";

import { useState } from "react";
import Modal from "@/components/Shared/Modal";

const CASE_STUDIES = [
  {
    title: "Cape Verde",
    location: "Cape Verde",
    image: "/corporateevents/capeverde.png",
    summary:
      "A week in the Atlantic aboard a luxury private yacht, hopping from one island to the next: This anniversary voyage won't be forgotten",
    body: "To mark a milestone company anniversary, we chartered a private yacht for a week-long journey through the Cape Verde archipelago. Each day brought a new island, new snorkelling spots and new beach landings by inflatable tender, with the whole itinerary built around downtime, teamwork and a bit of adventure in equal measure.",
  },
  {
    title: "South Africa",
    location: "South Africa",
    image: "/corporateevents/events.png",
    summary:
      "Coastal drives in vintage sports cars, private vineyard lunches and beachfront dinners under the stars",
    body: "For a South African leadership retreat, we combined coastal drives in vintage sports cars with private vineyard lunches, wrapping up each evening with a beachfront dinner under the stars. The pace was relaxed by design, leaving plenty of room for informal conversation and connection.",
  },
  {
    title: "Japan",
    location: "Japan",
    image: "/corporateevents/privateevents.png",
    summary:
      "Tokyo's neon energy paired with the calm of Kyoto's temples, temples and a traditional ryokan evening",
    body: "A sales incentive trip to Japan paired Tokyo's neon energy with the calm of Kyoto's temples. Private guides led the group through backstreet food tours, a tea ceremony and an evening at a traditional ryokan, giving high performers a trip that felt worlds away from the office.",
  },
  {
    title: "Italy",
    location: "Italy",
    image: "/corporateevents/activities.png",
    summary:
      "An Italian product launch for 80 guests at a private villa on the Amalfi Coast",
    body: "An Italian product launch event brought 80 guests to a private villa on the Amalfi Coast, complete with a live cooking demonstration, a boat trip along the coastline and a closing gala dinner overlooking the sea.",
  },
];

export default function EventsInPractice() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const active = openIndex !== null ? CASE_STUDIES[openIndex] : null;

  return (
    <>
      <section className="bg-[#f8f7f4] pb-16">
        <div className="max-w-[1180px] mx-auto px-8">
          <h2 className="font-heading italic font-light text-[32px] md:text-[36px] text-neutral-900 mb-10">
            Corporate events impressions
          </h2>

          <div
            className="w-full aspect-[16/9] bg-cover bg-center mb-16"
            style={{
              backgroundImage:
                "url('/corporateevents/car.jpg')",
            }}
          />

          <h2 className="font-heading italic font-light text-[32px] md:text-[36px] text-neutral-900 mb-5">
            Corporate events in practice
          </h2>
          <p className="text-[14px] leading-[1.7] text-neutral-700 max-w-[760px] mb-12">
            It&apos;s one thing to hear about what we can do for you but it
            all becomes real once you can see what we have done in the past.
            Take a look at some previous corporate events that we have
            organised in South Africa, Japan and Italy.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {CASE_STUDIES.map((c, i) => (
              <div key={c.location}>
                <div
                  className="w-full aspect-square bg-cover bg-center mb-4"
                  style={{ backgroundImage: `url('${c.image}')` }}
                />
                <h3 className="text-[15px] text-neutral-900 mb-2">
                  {c.title}
                </h3>
                <p className="text-[13px] leading-[1.6] text-neutral-600 mb-4">
                  {c.summary}
                </p>
                <button
                  onClick={() => setOpenIndex(i)}
                  className="inline-flex items-center border border-neutral-400 rounded-full px-5 py-2 text-[12.5px] text-neutral-900 hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-colors cursor-pointer"
                >
                  Read More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Modal
        open={!!active}
        onClose={() => setOpenIndex(null)}
        title={active ? `${active.title} — ${active.location}` : undefined}
      >
        {active && <p>{active.body}</p>}
      </Modal>
    </>
  );
}
