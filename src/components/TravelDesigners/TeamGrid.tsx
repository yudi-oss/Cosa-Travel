"use client";

import { useState } from "react";
import Modal from "@/components/Shared/Modal";

const TEAM = [
  {
    name: "Enzo D. Marraffino",
    role: "Travel designer",
    image: "/traveldesigner/enzo.png",
    email: "enzo@cosatravel.ch",
  },
  {
    name: "Alexandra Durrer",
    role: "Travel designer",
    image: "/traveldesigner/alexandra.png",
    email: "alexandra@cosatravel.ch",
  },
  {
    name: "Megan Fischer",
    role: "Travel designer",
    image: "/traveldesigner/megan.png",
    email: "megan@cosatravel.ch",
  },
  {
    name: "Livia Acar",
    role: "Travel designer",
    image: "/traveldesigner/livia.png",
    email: "livia@cosatravel.ch",
  },
];

export default function TeamGrid() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const active = openIndex !== null ? TEAM[openIndex] : null;

  return (
    <section className="bg-[#f8f7f4] py-16">
      <div className="max-w-[980px] mx-auto px-8">
        <h2 className="font-heading italic font-light text-[26px] text-neutral-900 mb-2">
          Would you like to know more?
        </h2>
        <p className="text-[14px] text-neutral-600 mb-10">
          Get in touch with one of us so we can make the magic happen for
          you.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {TEAM.map((member, i) => (
            <button
              key={member.name}
              onClick={() => setOpenIndex(i)}
              className="text-left cursor-pointer group"
            >
              <div
                className="w-full aspect-[4/5] bg-cover bg-center mb-3 transition-opacity group-hover:opacity-90"
                style={{ backgroundImage: `url('${member.image}')` }}
              />
              <h3 className="text-[14px] text-neutral-900">{member.name}</h3>
              <p className="text-[12.5px] text-neutral-500">{member.role}</p>
            </button>
          ))}
        </div>
      </div>

      <Modal open={!!active} onClose={() => setOpenIndex(null)} title={active?.name}>
        <p className="mb-4">{active?.role}</p>
        <a
          href={`mailto:${active?.email}`}
          className="inline-flex items-center border border-neutral-300 rounded-full px-5 py-2 text-[13px] text-neutral-800 hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-colors"
        >
          Email {active?.name.split(" ")[0]}
        </a>
      </Modal>
    </section>
  );
}
