export default function GiveBackCTA() {
  return (
    <section className="bg-[#f8f7f4] pb-24">
      <div className="max-w-[1180px] mx-auto px-8">
        <h2 className="font-heading italic font-light text-[32px] md:text-[36px] text-neutral-900 mb-10">
          Would you like to give back?
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className="w-full aspect-[4/3] bg-cover bg-center"
            style={{ backgroundImage: "url('/images/fire.png')" }}
          />

          <div className="max-w-md">
            <p className="text-[14px] leading-[1.7] text-neutral-700 mb-8">
              Sustainability and philanthropy are a core part of our work.
              If you&apos;d like to help us help others, we&apos;re here to
              support you completely. Are you interested in giving back?
              Then get in touch.
            </p>

            <a
              href="#csr-contact"
              className="inline-flex items-center border border-neutral-400 rounded-full px-6 py-2.5 text-sm text-neutral-900 hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
