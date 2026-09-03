const MOMENTS = [
  {
    image: "/eventcreator/jonas.png",
    caption: "Jonas — always ready for action",
  },
  {
    image: "/eventcreator/hannah.png",
    caption: "Hannah — balance is the key",
  },
  {
    image: "/eventcreator/nina.png",
    caption: "Nina — hands-on leadership",
  },
  {
    image: "/eventcreator/melissa.png",
    caption: "Melissa — service with a smile",
  },
];

export default function InActionGrid() {
  return (
    <section className="bg-[#f8f7f4] pb-16">
      <div className="max-w-[890px] mx-auto px-6">

        {/* Heading */}
        <h2 className="font-heading italic font-light text-[36px] text-neutral-900 mb-7">
          In action
        </h2>

        {/* Description */}
        <p className="text-[14px] leading-[1.7] text-neutral-900 max-w-[700px] mb-11">
          Here&apos;s a sneak peek at some of our past events, with the Cosa
          team always on hand.
        </p>

        {/* Staggered image grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 items-start">
          {MOMENTS.map((m, index) => (
            <div
              key={m.caption}
              className={index % 2 === 0 ? "md:translate-y-[82px]" : ""}
            >
              {/* Image */}
              <div
                className="w-full aspect-[2/3] bg-cover bg-center"
                style={{
                  backgroundImage: `url('${m.image}')`,
                }}
              />

              {/* Caption */}
              <p className="mt-3 text-[14px] text-neutral-800 leading-[1.5]">
                {m.caption}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}