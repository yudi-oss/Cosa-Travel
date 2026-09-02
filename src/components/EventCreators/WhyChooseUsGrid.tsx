const REASONS = [
  {
    title: "Full service",
    copy: "Enjoy seamless event planning from initial concept to final execution. Our expert consulting guarantees a smooth and effortless process for you.",
  },
  {
    title: "Tailored experiences",
    copy: "We pride ourselves on our tailor-made concepts and extensive destination know-how. Every detail fits in perfectly with your plans and wishes.",
  },
  {
    title: "Exclusive network",
    copy: "Our global network of partners means exclusive access and local insights. Our innovative sustainable approach enhances every aspect of your event.",
  },
  {
    title: "Established excellence",
    copy: "Our track record speaks for itself: since 1979, we have been driven by passion, accumulating experience to ensure that your event exceeds all expectations.",
  },
];

function ReasonIcon({ index }: { index: number }) {
  const shapes = [
    // Full service — flower / asterisk
    <path
      key="flower"
      d="M18 4v28M4 18h28M8.3 8.3l19.4 19.4M27.7 8.3 8.3 27.7"
      stroke="#eab98f"
      strokeWidth="2.2"
      strokeLinecap="round"
    />,
    // Tailored experiences — check / leaf
    <path
      key="check"
      d="M6 19l8 9L30 8"
      stroke="#9aa79a"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />,
    // Exclusive network — circle
    <circle key="circle" cx="18" cy="18" r="13" fill="#eab98f" />,
    // Established excellence — feather
    <path
      key="feather"
      d="M27 6C15 8 8 18 6 30c9-3 18-9 21-21z"
      fill="#c9d0c9"
    />,
  ];

  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
      {shapes[index]}
    </svg>
  );
}

export default function WhyChooseUsGrid() {
  return (
    <section className="bg-[#f8f7f4] pb-16">
      <div className="max-w-[1180px] mx-auto px-8">
        <h2 className="font-heading italic font-light text-[32px] md:text-[36px] text-neutral-900 mb-5">
          Why choose us for your event
        </h2>
        <p className="text-[14px] leading-[1.7] text-neutral-700 max-w-[760px] mb-12">
          Whether it&apos;s a special occasion or an annual conference,
          finding fresh ideas can be challenging. Let Cosa take the lead.
          Whatever you have in mind, we can make it happen: rewarding
          employees with a snow adventure in Finland, hosting a party aboard
          a private ship in the Red Sea, enjoying a gala dinner with amazing
          views of Table Mountain. From first consultation to final souvenir
          video, we take care of every detail so you don&apos;t have to.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {REASONS.map((r, i) => (
            <div key={r.title}>
              <div className="mb-4">
                <ReasonIcon index={i} />
              </div>
              <h3 className="text-[14px] text-neutral-900 mb-1.5">
                {r.title}
              </h3>
              <p className="text-[12.5px] leading-[1.6] text-neutral-600">
                {r.copy}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
