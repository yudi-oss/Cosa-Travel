export default function OfficeSection() {
  return (
    <section className="bg-[#f8f7f4] pb-16">
      <div className="max-w-[980px] mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className="w-full aspect-[4/5] md:aspect-[5/6] bg-cover bg-center"
            style={{
              backgroundImage: `url('https://picsum.photos/seed/cosa-contact-office/800/960')`,
            }}
          />

          <div>
            <h2 className="font-heading italic font-light text-[30px] text-neutral-900 mb-8">
              Our office at Lake Zurich
            </h2>

            <div className="grid grid-cols-2 gap-8">
              <div className="text-right text-[13px] text-neutral-600 leading-[1.8]">
                <p>Cosa Travel</p>
                <p>Ltd</p>
                <p>Utoquai 55</p>
                <p>8008 Zurich</p>
                <p>Switzerland</p>
              </div>

              <div className="text-[13px] text-neutral-600 leading-[1.8]">
                <p>Monday to Friday, 8:30 to 17:30</p>
                <p>or at any time by appointment</p>
                <a
                  href="tel:+41442694040"
                  className="block mt-2 hover:text-neutral-900 transition-colors"
                >
                  +41 44 269 40 40
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
