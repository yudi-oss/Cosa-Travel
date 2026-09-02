interface AdvantageItem {
  image: string;
  title: string;
  copy: string;
}

const ADVANTAGES: AdvantageItem[] = [
  {
    image: "/whyus/get-natural.png",
    title: "Get natural",
    copy: "We give you the chance to reconnect with nature, switch off and enjoy the moment completely",
  },
  {
    image: "/whyus/immerse-yourself.png",
    title: "Immerse yourself",
    copy: "Our speciality is authentic experiences that let you really feel a place and support local communities sustainably",
  },
  {
    image: "/whyus/feel-alive.png",
    title: "Feel alive",
    copy: "With us you'll go on an unforgettable adventure that will release the exhilarating energy we all need. It's time to feel alive again!",
  },
];

export default function AdvantageGrid() {
  return (
    <section className="bg-[#f8f7f4] py-16">
      <div className="max-w-[1180px] mx-auto px-8">
        <h2 className="font-heading italic font-light text-[32px] text-neutral-900 mb-5">
          The Cosa advantage
        </h2>
        <p className="text-[14px] leading-[1.7] text-neutral-700 max-w-[700px] mb-12">
          Our mission is to tailor every trip to the individual, so that no
          two trips are the same. But every one of them has the Cosa
          advantage with these three elements.
        </p>

        <div className="flex flex-col sm:flex-row gap-x-8 gap-y-10">
          {ADVANTAGES.map((item, index) => (
            <div
              key={item.title}
              className={`flex-1 ${index === 1 ? "sm:mt-0" : "sm:mt-12"}`}
            >
              <div
                className="w-full aspect-[4/5] bg-cover bg-center mb-4"
                style={{ backgroundImage: `url('${item.image}')` }}
              />
              <h3 className="text-[16px] text-neutral-900 mb-2">
                {item.title}
              </h3>
              <p className="text-[13px] leading-[1.7] text-neutral-600">
                {item.copy}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}