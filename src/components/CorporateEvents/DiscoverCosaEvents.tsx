"use client";

import { useState } from "react";
import Modal from "@/components/Shared/Modal";

const ITEMS = [
  {
    title: "Events",
    image: "/corporateevents/events.png",
    summary:
      "Imagine a candlelit dinner for 100 friends in magical Marrakech. Or maybe a wildlife safari for 25 senior managers in ...",
    body: "Imagine a candlelit dinner for 100 friends in magical Marrakech. Or maybe a wildlife safari for 25 senior managers in the Maasai Mara. From intimate gatherings to large-scale celebrations, our event creators design experiences that feel entirely your own, with every detail considered so you can be a guest at your own occasion.",
  },
  {
    title: "Private events",
    image: "/corporateevents/privateevents.png",
    summary:
      "Milestone are meant to be marked in style. We know how imortant that is and how much it means to...",
    body: "Milestones are meant to be marked in style. We know how important that is and how much it means to you, so our team handles every detail of your private celebration, from venue and catering to entertainment and guest logistics, so you can simply enjoy the occasion.",
  },
  {
    title: "Group Travel",
    image: "/corporateevents/grouptravel.png",
    summary:
      "If your heart sinks at the words group travel don't worry. Group travel with us means fifteen friend taking a ...",
    body: "If your heart sinks at the words group travel, don't worry. Group travel with us means fifteen friends taking a wildlife safari together, not fifteen friends arguing about the itinerary. We handle the planning and logistics so your group can focus on the experience.",
  },
];

export default function DiscoverCosaEvents() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const active = openIndex !== null ? ITEMS[openIndex] : null;

  return (
    <>
      <section className="bg-[#f8f7f4] pb-20">
        <div className="max-w-[1180px] mx-auto px-8">
          <h2 className="font-heading italic font-light text-[32px] md:text-[36px] text-neutral-900 mb-10">
            Discover Cosa Events
          </h2>

          <div className="grid sm:grid-cols-3 gap-8">
            {ITEMS.map((item, i) => (
              <div key={item.title}>
                <div
                  className="w-full aspect-[4/3] bg-cover bg-center mb-4"
                  style={{ backgroundImage: `url('${item.image}')` }}
                />
                <h3 className="text-[15px] text-neutral-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-[13px] leading-[1.6] text-neutral-600 mb-4">
                  {item.summary}
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
        title={active?.title}
      >
        {active && <p>{active.body}</p>}
      </Modal>
    </>
  );
}
