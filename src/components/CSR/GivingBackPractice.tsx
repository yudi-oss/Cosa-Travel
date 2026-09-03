"use client";

import { useState } from "react";
import Modal from "@/components/Shared/Modal";

const PROJECTS = [
  {
    title: "Seeds of change",
    summary:
      "Phuket is home to communities with differing opportunities. Seeds of Change empowers underprivileged individuals through education. During an event, we spent a day supporting the NGO by helping renovate their newly acquired but neglected campus.",
    body: "Phuket is home to communities with differing opportunities. Seeds of Change empowers underprivileged individuals through education. During an event, we spent a day supporting the NGO by helping renovate their newly acquired but neglected campus — repainting classrooms, building furniture and landscaping the grounds so students had a proper place to learn.",
  },
  {
    title: "Footprint in the sand",
    summary:
      "During an event in Turkey, we tackled ocean plastic pollution. 120 attendees joined a beach cleanup near Istanbul, while a smaller group, led by author Jess French, wrote a children's book to raise awareness on this issue.",
    body: "During an event in Turkey, we tackled ocean plastic pollution. 120 attendees joined a beach cleanup near Istanbul, while a smaller group, led by author Jess French, wrote a children's book to raise awareness on this issue — later donated to local schools to keep the conversation about plastic pollution going long after the event ended.",
  },
  {
    title: "School with a future",
    summary:
      "Our goal: a new future for a primary school in Langa township. We built a new multi-purpose playground and drought-resistant kitchen gardens. Now the kids could work, eat and play in safety.",
    body: "Our goal: a new future for a primary school in Langa township. We built a new multi-purpose playground and drought-resistant kitchen gardens. Now the kids could work, eat and play in safety, with fresh produce from the gardens supporting the school's feeding programme year-round.",
  },
  {
    title: "Building little homes",
    summary:
      "The Little Home project in East London helps house homeless people — and our group supported them by building three new homes. The challenge was to do it in five hours flat, with a team of willing helpers.",
    body: "The Little Home project in East London helps house homeless people — and our group supported them by building three new micro-homes. The challenge was to do it in five hours flat, with a fifteen-strong team of willing helpers. And we made it, with time to spare, handing over the keys the very same day.",
  },
];

export default function GivingBackPractice() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const active = openIndex !== null ? PROJECTS[openIndex] : null;

  return (
    <>
      <section className="bg-[#f8f7f4] pb-20">
        <div className="max-w-[1180px] mx-auto px-8">
          <h2 className="font-heading italic font-light text-[32px] md:text-[36px] text-neutral-900 mb-6 max-w-[420px]">
            Giving back in practice
          </h2>

          <p className="text-[14px] leading-[1.7] text-neutral-700 max-w-[820px] mb-14">
            What does incorporating CSR within Cosa events actually mean in
            the real world? We focus on carefully selected hands-on projects
            that match our vision and finalise the details for a rewarding
            day. From the first consultation, we offer a full service to
            find the most suitable projects with the right partners. We love
            it if we can integrate CSR projects into our clients&apos;
            incentive trips and events.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {PROJECTS.map((p, i) => (
              <div key={p.title}>
                <div
                  className="w-full aspect-[4/3] bg-cover bg-center mb-4"
                  style={{
                    backgroundImage: "url('/corporateevents/capeverde.png')",
                  }}
                />
                <h3 className="text-[14.5px] text-neutral-900 mb-2">
                  {p.title}
                </h3>
                <p className="text-[12.5px] leading-[1.6] text-neutral-600 mb-4 line-clamp-4">
                  {p.summary}
                </p>
                <button
                  onClick={() => setOpenIndex(i)}
                  className="inline-flex items-center border border-neutral-400 rounded-full px-5 py-2 text-[12px] text-neutral-900 hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-colors cursor-pointer"
                >
                  Read More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Modal open={!!active} onClose={() => setOpenIndex(null)} title={active?.title}>
        {active && <p>{active.body}</p>}
      </Modal>
    </>
  );
}
