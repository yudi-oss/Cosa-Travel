"use client";

import { useState } from "react";
import Modal from "./Modal";

const PAGES: Record<string, { title: string; body: string[] }> = {
  contact: {
    title: "Contact",
    body: [
      "Reach the Cosa team at mail@cosatravel.ch or +41 44 269 40 40, Monday to Friday, 9am–6pm CET.",
      "Prefer to write? Use the general contact form further up this page and a member of the team will come back to you within one working day.",
    ],
  },
  faq: {
    title: "FAQ",
    body: [
      "How far in advance should I book? We recommend reaching out at least 8–12 weeks before you'd like to travel, though we can often work with shorter timelines.",
      "Do you only plan trips for Switzerland? No — while Switzerland is our home turf, our travel designers plan journeys worldwide.",
      "Can Cosa help with group or corporate travel? Yes, our corporate travel and event creator teams specialise in exactly this.",
    ],
  },
  data: {
    title: "Data Policy",
    body: [
      "Cosa Travel Ltd collects only the information needed to plan and deliver your trip: your name, contact details, and travel preferences.",
      "We never sell your data to third parties. Information shared with partners (hotels, airlines, local guides) is limited to what's required to fulfil your booking.",
    ],
  },
  terms: {
    title: "Terms & Conditions",
    body: [
      "All itineraries proposed by Cosa Travel Ltd are bespoke and subject to availability at the time of confirmation.",
      "Deposits and cancellation terms vary by supplier and will be confirmed in writing before you book. Full terms are provided with every quote.",
    ],
  },
  cookies: {
    title: "Cookies Management",
    body: [
      "This site uses essential cookies to remember your preferences (such as language and currency) and analytics cookies to help us improve your experience.",
      "You can clear cookies at any time from your browser settings.",
    ],
  },
};

export default function Footer() {
  const [open, setOpen] = useState<string | null>(null);
  const active = open ? PAGES[open] : null;

  return (
    <footer className="bg-[#f8f7f4] border-t border-neutral-200">
      <div className="max-w-[980px] mx-auto px-8 py-12 grid sm:grid-cols-3 gap-8 text-[13px] text-neutral-500">
        <div className="flex flex-col gap-3">
          <button
            onClick={() => setOpen("contact")}
            className="text-left hover:text-neutral-900 transition-colors"
          >
            Contact
          </button>
          <button
            onClick={() => setOpen("faq")}
            className="text-left hover:text-neutral-900 transition-colors"
          >
            FAQ
          </button>
          <button
            onClick={() => setOpen("data")}
            className="text-left hover:text-neutral-900 transition-colors"
          >
            Data Policy
          </button>
          <button
            onClick={() => setOpen("terms")}
            className="text-left hover:text-neutral-900 transition-colors"
          >
            Terms &amp; conditions
          </button>
          <button
            onClick={() => setOpen("cookies")}
            className="text-left hover:text-neutral-900 transition-colors"
          >
            Cookies management
          </button>
        </div>

        <div className="flex flex-col gap-3 mt-[76px]">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-900 transition-colors"
          >
            Instagram
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-900 transition-colors"
          >
            Linkedin
          </a>
        </div>

        <div className="sm:text-right text-neutral-700">
          <p>Cosa Travel</p>
          <p>Ltd</p>
          <p>Utoquai 55</p>
          <p>8008 Zurich</p>
          <p>Switzerland</p>
          <a
            href="mailto:mail@cosatravel.ch"
            className="block mt-2 hover:text-neutral-900 transition-colors"
          >
            mail@cosatravel.ch
          </a>
          <a
            href="tel:+41442694040"
            className="block hover:text-neutral-900 transition-colors"
          >
            +41 44 269 40 40
          </a>
        </div>
      </div>

      <div className="text-center pb-8">
        <a
          href="#top"
          className="text-[12px] text-neutral-500 hover:text-neutral-900 transition-colors"
        >
          Back to top
        </a>
      </div>

      <Modal open={!!active} onClose={() => setOpen(null)} title={active?.title}>
        {active?.body.map((p, i) => (
          <p key={i} className={i > 0 ? "mt-4" : ""}>
            {p}
          </p>
        ))}
      </Modal>
    </footer>
  );
}
