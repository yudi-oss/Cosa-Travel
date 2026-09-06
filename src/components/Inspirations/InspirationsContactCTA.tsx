export default function InspirationsContactCTA() {
  return (
    <section className="relative bg-bg pb-24 overflow-hidden">
      {/* Decorative triangle */}
      <div
        className="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-0 w-[500px] h-[420px] opacity-70"
        style={{
          background:
            "linear-gradient(180deg, rgba(124,148,131,0.35) 0%, rgba(124,148,131,0.05) 100%)",
          clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1180px] mx-auto px-8">
        <h2 className="font-editorial italic font-light text-editorial-sm md:text-editorial-md text-ink mb-6 max-w-[620px]">
          Contact us and see where it takes you
        </h2>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <p className="text-body-default text-ink/80">
            Get in touch with us so we can make the magic happen for you.
          </p>
          
          <a
            href="/contacts"
            className="inline-flex items-center border border-line rounded-pill px-6 py-2.5 text-button text-ink hover:border-primary hover:text-primary transition-colors duration-300 self-start md:self-auto"
          >
            Contact Us
          </a>
        </div>

        <div className="flex flex-col sm:flex-row gap-10 mt-10">
          <div>
            <p className="text-caption uppercase tracking-wide text-muted mb-1">
              Write to us
            </p>
            <a href="mailto:mail@cosatravel.ch" className="text-body-sm text-ink">
              mail@cosatravel.ch
            </a>
          </div>
          <div>
            <p className="text-caption uppercase tracking-wide text-muted mb-1">
              Call us
            </p>
            <a href="tel:+41442694040" className="text-body-sm text-ink">
              +41 44 269 40 40
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}