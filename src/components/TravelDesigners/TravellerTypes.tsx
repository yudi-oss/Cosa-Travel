"use client";

const TYPES = [
  {
    title: "The workationer",
    copy: "Working remotely anywhere you can but mixing business and pleasure.",
    image: "/traveldesigner/workstationer.png",
  },
  {
    title: "Family Fun",
    copy: "Exploring the world with your loved ones, from age 1 or 100.",
    image: "/traveldesigner/familyfun.png",
  },
  {
    title: "Variety seeker",
    copy: "As much adventure as relaxation and always looking for somewhere new.",
    image: "/traveldesigner/seeker.png",
  },
  {
    title: "Lifestyle connoisseur",
    copy: "Travel is all about hidden gems, unique experiences and sustainable luxury.",
    image: "/traveldesigner/lifestyle.png",
  },
  {
    title: "Hopeful romantic",
    copy: "Seeking special moments for two, whether on holiday or on honeymoon.",
    image: "/traveldesigner/romantic.png",
  },
  {
    title: "Forever curious",
    copy: "Open to new ideas and new places with an emphasis on history, art and culture.",
    image: "/traveldesigner/curious.png",
  },
];

// Which TYPES index goes in which column (reading left-to-right, top-to-bottom).
const COLUMNS = [
  [0, 3], // The workationer, Lifestyle connoisseur
  [1, 4], // Family Fun, Hopeful romantic
  [2, 5], // Variety seeker, Forever curious
];

function TravellerCard({
  item,
  onClick,
}: {
  item: (typeof TYPES)[number];
  onClick: () => void;
}) {
  return (
    <button type="button" onClick={onClick} className="text-left group cursor-pointer">
      <div
        className="w-full aspect-[4/3] bg-cover bg-center mb-3 transition-opacity group-hover:opacity-90"
        style={{ backgroundImage: `url('${item.image}')` }}
      />

      <h3 className="text-[14px] font-medium text-neutral-900 mb-1">
        {item.title}
      </h3>

      <p className="text-[12.5px] text-neutral-500 leading-snug">
        {item.copy}
      </p>
    </button>
  );
}

export default function TravellerTypes() {
  function goToSignup() {
    document.querySelector("#signup")?.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <section className="bg-[#f8f7f4] py-16">
      <div className="max-w-[1180px] mx-auto px-8">
        <h2 className="font-heading italic font-light text-[30px] text-neutral-900 text-center leading-snug mb-16">
          Start your journey here
          <br />
          What type of traveller are you?
        </h2>

        <div className="flex flex-col sm:flex-row gap-x-10 gap-y-12">
          {COLUMNS.map((colIndexes, colIdx) => (
            <div
              key={colIdx}
              className={`flex-1 flex flex-col gap-y-14 ${
                colIdx === 1 ? "sm:mt-0" : "sm:mt-20"
              }`}
            >
              {colIndexes.map((i) => (
                <TravellerCard key={TYPES[i].title} item={TYPES[i]} onClick={goToSignup} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
