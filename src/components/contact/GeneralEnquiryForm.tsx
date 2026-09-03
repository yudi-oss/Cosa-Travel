"use client";

import { useState } from "react";

export default function GeneralEnquiryForm() {
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!agreed) return;
    setSubmitted(true);
  }

  return (
    <section id="contact-form" className="bg-[#f8f7f4] pb-16">
      <div className="max-w-[980px] mx-auto px-8">
        <h2 className="font-heading italic font-light text-[32px] md:text-[36px] text-neutral-900 mb-10">
          General enquiries
        </h2>

        {submitted ? (
          <p className="text-[15px] text-neutral-700">
            Thanks for reaching out — a member of the Cosa team will be in
            touch shortly.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-[790px]">
            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-[12px] mb-2 text-neutral-600">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  required
                  className="w-full border border-neutral-200 bg-white px-4 py-3 text-sm placeholder:text-neutral-400 focus:outline-none focus:border-neutral-500"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-[12px] mb-2 text-neutral-600">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  required
                  className="w-full border border-neutral-200 bg-white px-4 py-3 text-sm placeholder:text-neutral-400 focus:outline-none focus:border-neutral-500"
                  placeholder="John Doe"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-[12px] mb-2 text-neutral-600">
                  email <span className="text-red-500">*</span>
                </label>
                <input
                  required
                  type="email"
                  className="w-full border border-neutral-200 bg-white px-4 py-3 text-sm placeholder:text-neutral-400 focus:outline-none focus:border-neutral-500"
                  placeholder="john@gmail.com"
                />
              </div>
              <div>
                <label className="block text-[12px] mb-2 text-neutral-600">
                  Phone <span className="text-red-500">*</span>
                </label>
                <input
                  required
                  type="tel"
                  className="w-full border border-neutral-200 bg-white px-4 py-3 text-sm placeholder:text-neutral-400 focus:outline-none focus:border-neutral-500"
                  placeholder="+41 79 123 45 67"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-[12px] mb-2 text-neutral-600">
                Any question you&apos;d like to add? (optional)
              </label>
              <textarea
                rows={4}
                className="w-full border border-neutral-200 bg-white px-4 py-3 text-sm placeholder:text-neutral-400 focus:outline-none focus:border-neutral-500 resize-none"
              />
            </div>

            <div className="mb-8">
              <p className="text-[12px] mb-2 text-neutral-600">
                GDPR <span className="text-red-500">*</span>
              </p>
              <label className="flex items-start gap-3 text-[13px] text-neutral-600 cursor-pointer">
                <input
                  type="checkbox"
                  required
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-0.5"
                />
                I agree to receive communications from Cosa Travel Ltd. as
                per the Privacy Policy and GDPR regulations.
              </label>
            </div>

            <button
              type="submit"
              className="inline-flex items-center border border-neutral-300 rounded-full px-6 py-2 text-[13px] text-neutral-800 hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-colors cursor-pointer"
            >
              Send
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
