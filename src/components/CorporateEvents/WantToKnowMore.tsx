"use client";

import { useRouter, usePathname } from "next/navigation";

export default function WantToKnowMore() {
  const router = useRouter();
  const pathname = usePathname();

  function goToContact() {
    if (pathname === "/") {
      document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/#contact");
    }
  }

  return (
    <section className="bg-[#f8f7f4] pb-20">
      <div className="max-w-[1180px] mx-auto px-8">
        <h2 className="font-heading italic font-light text-[32px] md:text-[36px] text-neutral-900 mb-10">
          Want to know more?
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className="w-full aspect-[4/3] bg-cover bg-center"
            style={{ backgroundImage: "url('/corporateevents/knowmore.png')" }}
          />

          <div className="max-w-md">
            <p className="text-[14px] leading-[1.7] text-neutral-700 mb-8">
              Our specialist team of event creators is waiting to hear from
              you. Get in touch so that we can discuss your needs, go over
              your options and create an event you&apos;ll remember forever.
            </p>

            <button
              onClick={goToContact}
              className="inline-flex items-center border border-neutral-400 rounded-full px-6 py-2.5 text-sm text-neutral-900 hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-colors cursor-pointer"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
