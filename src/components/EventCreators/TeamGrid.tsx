const TEAM = [
  {
    name: "Deborah Faber",
    role: "Head of the events team",
    image: "https://picsum.photos/seed/cosa-ec-deborah/400/400",
  },
  {
    name: "Jonas Vogel",
    role: "Event Creator",
    image: "https://picsum.photos/seed/cosa-ec-jonasvogel/400/400",
  },
  {
    name: "Melissa Blaschi",
    role: "Event creator",
    image: "https://picsum.photos/seed/cosa-ec-melissab/400/400",
  },
  {
    name: "Hannah Bachtod",
    role: "Event creator",
    image: "https://picsum.photos/seed/cosa-ec-hannahb/400/400",
  },
];

export default function TeamGrid() {
  return (
    <section className="bg-[#f8f7f4] pb-16">
      <div className="max-w-[1180px] mx-auto px-8">
        <h2 className="font-heading italic font-light text-[32px] md:text-[36px] text-neutral-900 mb-5">
          Do you want to know more?
        </h2>
        <p className="text-[14px] leading-[1.7] text-neutral-700 max-w-[700px] mb-12">
          If you&apos;d like to know more about Cosa events, please get in
          touch. Either call us, fill out the contact form below or meet the
          whole events team. We&apos;d love to start planning your event
          with you.
        </p>

        <div className="flex flex-wrap gap-8">
          {TEAM.map((member) => (
            <div key={member.name} className="w-[150px]">
              <div
                className="w-full aspect-square bg-cover bg-center mb-3"
                style={{ backgroundImage: `url('${member.image}')` }}
              />
              <h3 className="text-[14px] text-neutral-900">{member.name}</h3>
              <p className="text-[12.5px] text-neutral-500">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}