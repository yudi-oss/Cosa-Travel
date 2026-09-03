export default function CSRContactBanner() {
  return (
    <section id="csr-contact" className="bg-[#f8f7f4] pb-20 pt-4">
      <div className="max-w-[1180px] mx-auto px-8">
        <h2 className="font-heading italic font-light text-[32px] md:text-[36px] text-neutral-900 mb-5">
          Contact us for more details
        </h2>

        <p className="text-[14px] text-neutral-700 mb-16">
          If you&apos;d like more information about Cosa, please contact us
          now.
        </p>

        <div className="flex flex-wrap items-center gap-x-14 gap-y-6">
          <span className="text-[14px] text-neutral-500">Cosa Network</span>
          <img
            src="/logos/serandipians.png"
            alt="Serandipians"
            className="h-10 w-auto"
          />
          <img src="/logos/pure.png" alt="Pure" className="h-14 w-auto" />
          <img src="/logos/wendy.png" alt="AITO" className="h-14 w-auto" />
          <img
            src="/logos/switchzerland.png"
            alt="Switzerland Member"
            className="h-9 w-auto"
          />
        </div>
      </div>
    </section>
  );
}
