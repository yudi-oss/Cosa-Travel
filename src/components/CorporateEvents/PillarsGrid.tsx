const PILLARS = [
  {
    title: "Unique experiences",
    copy: "We offer exclusive and memorable experiences that participants wouldn't typically have access to.",
  },
  {
    title: "Seamless logistics",
    copy: "We oversee the smooth planning and execution of everything from transport and accommodation to meals and activities.",
  },
  {
    title: "Star treatment",
    copy: "We make sure that every participant is treated like a superstar and feels rewarded for their fantastic contribution to your company.",
  },
];

export default function PillarsGrid() {
  return (
    <section className="bg-[#f8f7f4] pb-16">
      <div className="max-w-[1180px] mx-auto px-8">
        <div className="grid sm:grid-cols-3 gap-10">
          {PILLARS.map((p) => (
            <div key={p.title}>
              <div className="mb-5">
                <img
                  src="/corporateevents/activities.png"
                  alt=""
                  aria-hidden="true"
                  className="w-[46px] h-[46px] object-contain"
                />
              </div>
              <h3 className="text-[15px] font-medium text-neutral-900 mb-2">
                {p.title}
              </h3>
              <p className="text-[13.5px] leading-[1.7] text-neutral-600 max-w-[320px]">
                {p.copy}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}