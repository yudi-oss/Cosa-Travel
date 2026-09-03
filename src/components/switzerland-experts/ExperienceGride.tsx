const EXPERIENCES = [
  {
    title: "Casting bells",
    image: "https://picsum.photos/seed/cosa-se-bells/700/560",
    copy: "Switzerland wouldn't be Switzerland without its bells. You hear them everywhere from cows to churches, but have you ever seen one made by hand? Probably not so we'll take you to Peter's bell-smith workshop so you can feel the heat as he moulds the metal.",
  },
  {
    title: "Making cheese",
    image: "https://picsum.photos/seed/cosa-se-cheese/700/900",
    copy: "Mountains, cows and views. It's hard to think of a more authentic Swiss experience than visiting a working farm up in the Alps. Even better is being able to watch the cheese being made, a process that includes cooking the curds and rubbing the rinds with salt.",
  },
  {
    title: "Going local",
    image: "https://picsum.photos/seed/cosa-se-local/700/560",
    copy: "Our private guides will take you to cobbled backstreets and hidden valleys so that you both see the sights and hear the stories behind them. As much as we love the trains for exploring the country, the best way to experience the real Switzerland is on foot with a local.",
  },
];

export default function ExperienceGrid() {
  return (
    <section className="bg-[#f8f7f4] pb-20">
      <div className="max-w-[1180px] mx-auto px-8">

        {/* Intro */}
        <div className="mb-20">
          <h2 className="font-heading italic font-light text-[42px] md:text-[52px] leading-none text-neutral-900 mb-10">
            Uniquely Swiss
          </h2>

          <p className="text-[16px] md:text-[18px] leading-[1.6] text-neutral-700 max-w-[1080px]">
            Every Swiss tour is meticulously created using your own wishes, be
            that meeting the farmer who gives his cows a unique beer treatment
            or riding the rails like a local. Or even tucking into some hot
            raclette, that lesser-known cousin of fondue. Here are three
            amazing Swiss experiences you could enjoy.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="grid sm:grid-cols-3 gap-8 md:gap-10 items-start">

          {EXPERIENCES.map((item, index) => (
            <div
              key={item.title}
              className={`
                ${index === 1 ? "sm:-translate-y-[180px]" : ""}
              `}
            >
              {/* Image */}
              <div
                className="w-full aspect-[4/3] bg-cover bg-center mb-5"
                style={{
                  backgroundImage: `url('${item.image}')`,
                }}
              />

              {/* Title */}
              <h3 className="text-[20px] md:text-[22px] text-neutral-900 font-normal mb-4">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-[16px] md:text-[17px] leading-[1.55] text-neutral-600">
                {item.copy}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}