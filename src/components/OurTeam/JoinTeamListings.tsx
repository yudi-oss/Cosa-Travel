"use client";

import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

type Job = {
  title: string;
  type: string;
  department: string;
  description: string;
};

const JOBS: Job[] = [
  {
    title: "Project Manager Events & Incentives",
    type: "80% – 100%",
    department: "Events",
    description:
      "Based in our Zurich office, you'll plan and deliver bespoke events and incentive trips for corporate clients — from the first briefing call through to on-site delivery and the final invoice. We're looking for someone organised, calm under pressure, and genuinely excited by logistics.",
  },
];

export default function JoinTeamListings() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(i: number) {
    setOpenIndex((current) => (current === i ? null : i));
  }

  return (
    <section className="bg-[#f8f7f4] pt-4 pb-16">
      <div className="max-w-[980px] mx-auto px-8">
        <div className="grid grid-cols-[1fr_1fr_1fr_32px] gap-4 border-b border-neutral-300 pb-3 text-[13px] text-neutral-500">
          <span>Job title</span>
          <span>Employment type</span>
          <span>Department</span>
          <span />
        </div>

        {JOBS.map((job, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={job.title} className="border-b border-neutral-200">
              <button
                onClick={() => toggle(i)}
                className="w-full grid grid-cols-[1fr_1fr_1fr_32px] gap-4 items-center py-5 text-left cursor-pointer"
              >
                <span className="text-[14px] text-neutral-900">
                  {job.title}
                </span>
                <span className="text-[13px] text-neutral-600">
                  {job.type}
                </span>
                <span className="text-[13px] text-neutral-600">
                  {job.department}
                </span>
                <span className="flex justify-end text-neutral-700">
                  {isOpen ? <FiMinus /> : <FiPlus />}
                </span>
              </button>

              {isOpen && (
                <div className="pb-6 pr-10 max-w-[720px]">
                  <p className="text-[13.5px] leading-[1.7] text-neutral-600 mb-4">
                    {job.description}
                  </p>
                  <a
                    href={`mailto:careers@cosatravel.ch?subject=Application: ${encodeURIComponent(
                      job.title
                    )}`}
                    className="inline-flex items-center border border-neutral-300 rounded-full px-5 py-2 text-[13px] text-neutral-800 hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-colors"
                  >
                    Apply for this role
                  </a>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
