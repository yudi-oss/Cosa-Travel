interface InspirationRowProps {
  heading: string;
  country: string;
  category: string;
  copy: string;
  image: string;
  buttonLabel: string;
  href: string;
  reverse?: boolean; // true = image on left, text on right
}

export default function InspirationRow({
  heading,
  country,
  category,
  copy,
  image,
  buttonLabel,
  href,
  reverse = false,
}: InspirationRowProps) {
  return (
    <section className="bg-bg pb-16">
      <div className="max-w-[1180px] mx-auto px-8">
        <h2 className="font-editorial italic font-light text-editorial-sm md:text-editorial-md text-ink mb-8 md:mb-10">
          {heading}
        </h2>

        <div className="grid md:grid-cols-12 gap-8 items-start">
          <div
            className={`md:col-span-5 ${reverse ? "md:order-2" : "md:order-1"}`}
          >
            <h3 className="font-sans text-h4 text-ink mb-1">{country}</h3>
            <p className="text-caption text-muted mb-4">{category}</p>
            <p className="text-body-sm leading-[1.7] text-ink/80 mb-6 max-w-[420px]">
              {copy}
            </p>
            <a
              href={href}
              className="inline-flex items-center border border-line rounded-pill px-6 py-2.5 text-button text-ink hover:border-primary hover:text-primary transition-colors duration-300"
            >
              {buttonLabel}
            </a>
          </div>

          <div
            className={`md:col-span-7 ${reverse ? "md:order-1" : "md:order-2"}`}
          >
            <div
              className="w-full aspect-[16/10] bg-cover bg-center"
              style={{ backgroundImage: `url('${image}')` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}