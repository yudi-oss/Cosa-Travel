const MOMENTS = [
  {
    image: "https://picsum.photos/seed/cosa-ec-jonas/500/620",
    caption: "Jonas — always ready for action",
  },
  {
    image: "https://picsum.photos/seed/cosa-ec-hannah/500/620",
    caption: "Hannah — balance is the key",
  },
  {
    image: "https://picsum.photos/seed/cosa-ec-nina/500/620",
    caption: "Nina — hands-on leadership",
  },
  {
    image: "https://picsum.photos/seed/cosa-ec-melissa/500/620",
    caption: "Melissa — service with a smile",
  },
];

export default function InActionGrid() {
  return (
    <section className="bg-[#f8f7f4] pb-16">
      <div className="max-w-[1180px] mx-auto px-8">
        <h2 className="font-heading italic font-light text-[32px] md:text-[36px] text-neutral-900 mb-5">
          In action
        </h2>
        <p className="text-[14px] leading-[1.7] text-neutral-700 max-w-[700px] mb-12">
          Here&apos;s a sneak peek at some of our past events, with the Cosa
          team always on hand.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {MOMENTS.map((m) => (
            <div key={m.caption}>
              <div
                className="w-full aspect-[4/5] bg-cover bg-center mb-3"
                style={{ backgroundImage: `url('${m.image}')` }}
              />
              <p className="text-[13px] text-neutral-700 leading-[1.5]">
                {m.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
