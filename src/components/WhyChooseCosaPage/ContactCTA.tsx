"use client";

export default function ContactCTA() {
  function goToSignup() {
    document.querySelector("#signup")?.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <section className="relative overflow-hidden bg-[#f8f7f4]">
      {/* =========================
          DECORATIVE TRIANGLES
      ========================== */}
      <div className="pointer-events-none absolute inset-0">
        {/* Large triangle */}
        <div
          className="absolute left-1/2 top-[38px] h-[470px] w-[500px] -translate-x-1/2"
          style={{
            background:
              "linear-gradient(180deg, rgba(201,208,203,0.72) 0%, rgba(201,208,203,0.20) 100%)",
            clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)",
          }}
        />

        {/* Middle triangle */}
        <div
          className="absolute left-1/2 top-[250px] h-[380px] w-[405px] -translate-x-1/2"
          style={{
            background:
              "linear-gradient(180deg, rgba(201,208,203,0.58) 0%, rgba(201,208,203,0.18) 100%)",
            clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)",
          }}
        />

        {/* Small triangle */}
        <div
          className="absolute left-1/2 top-[465px] h-[240px] w-[265px] -translate-x-1/2"
          style={{
            background:
              "linear-gradient(180deg, rgba(201,208,203,0.45) 0%, rgba(201,208,203,0.10) 100%)",
            clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)",
          }}
        />
      </div>

      {/* =========================
          CTA CONTENT
      ========================== */}
      <div className="relative z-10 mx-auto min-h-[620px] w-full max-w-[1056px] px-[46px]">
        {/* Heading + text */}
        <div className="absolute left-[46px] top-[235px]">
          <h2 className="font-heading text-[52px] font-light italic leading-[1.1] text-[#171717]">
            Contact us and see where it takes you
          </h2>

          <p className="mt-[42px] text-[16px] leading-[1.5] text-[#292929]">
            Get in touch with us so we can make the magic happen for you.
          </p>

          {/* Contact details */}
          <div className="mt-[38px] flex gap-[70px]">
            <div>
              <p className="mb-[10px] text-[12px] uppercase tracking-[0.12em] text-[#777]">
                Write to us
              </p>

              <a
                href="mailto:mail@cosatravel.ch"
                className="text-[15px] text-[#707070] transition-colors hover:text-black"
              >
                mail@cosatravel.ch
              </a>
            </div>

            <div>
              <p className="mb-[10px] text-[12px] uppercase tracking-[0.12em] text-[#777]">
                Call us
              </p>

              <a
                href="tel:+41442694040"
                className="text-[15px] text-[#707070] transition-colors hover:text-black"
              >
                +41 44 269 40 40
              </a>
            </div>
          </div>
        </div>

        {/* =========================
            RIGHT CTA BUTTON
        ========================== */}
        <button
          type="button"
          onClick={goToSignup}
          className="absolute right-[0px] top-[326px] rounded-[9px] border border-[#8FA08F] px-[28px] py-[13px] text-[14px] text-[#556455] transition-all duration-300 hover:bg-[#556455] hover:text-white"
        >
          Contact Us
        </button>
      </div>
    </section>
  );
}