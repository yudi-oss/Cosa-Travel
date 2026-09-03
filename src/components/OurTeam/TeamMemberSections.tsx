type Member = {
  name: string;
  role: string;
  quote: string;
  image: string;
};

const MARIANNE: Member = {
  name: "Marianne Von Arx",
  role: "Business travel specialist",
  quote:
    "I felt a moment of happiness when a penguin walked over my shoes in Antarctica",
  image: "https://picsum.photos/seed/cosa-team-marianne/500/500",
};

const BEATRICE: Member = {
  name: "Beatrice Winkler",
  role: "Business travel specialist",
  quote:
    "I felt a moment of happiness when a penguin walked over my shoes in Antarctica",
  image: "https://picsum.photos/seed/cosa-team-beatrice/500/500",
};

const KORINE: Member = {
  name: "Korine Weideli",
  role: "Business travel specialist",
  quote: "Snorkelling in the Maldives and spotting manta rays & turtles – unforgettable",
  image: "https://picsum.photos/seed/cosa-team-korine/500/500",
};

const SECTIONS: { heading: string; members: Member[] }[] = [
  { heading: "The Management", members: [MARIANNE, BEATRICE] },
  { heading: "Travel designers", members: [MARIANNE, BEATRICE, KORINE] },
  {
    heading: "Business Travel Specialist",
    members: [MARIANNE, BEATRICE, KORINE],
  },
  { heading: "Switzerland Experts", members: [MARIANNE, BEATRICE, KORINE] },
  { heading: "Event Creator", members: [MARIANNE, BEATRICE, KORINE] },
  {
    heading: "Branding And Marketing",
    members: [MARIANNE, BEATRICE, KORINE],
  },
  {
    heading: "Finance And Administration",
    members: [MARIANNE, BEATRICE, KORINE],
  },
];

export default function TeamMemberSections() {
  return (
    <>
      {SECTIONS.map((section) => (
        <section key={section.heading} className="bg-[#f8f7f4] pt-14 pb-4">
          <div className="max-w-[980px] mx-auto px-8">
            <h2 className="font-heading italic font-light text-[30px] md:text-[34px] text-neutral-900 mb-8">
              {section.heading}
            </h2>

            <div className="grid sm:grid-cols-3 gap-8">
              {section.members.map((member) => (
                <div key={`${section.heading}-${member.name}`}>
                  <div
                    className="w-full aspect-square bg-cover bg-center mb-4"
                    style={{ backgroundImage: `url('${member.image}')` }}
                  />
                  <h3 className="text-[16px] text-neutral-900">
                    {member.name}
                  </h3>
                  <p className="text-[12.5px] text-neutral-500 mb-3">
                    {member.role}
                  </p>
                  <p className="text-[13px] leading-[1.6] text-neutral-600">
                    {member.quote}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
