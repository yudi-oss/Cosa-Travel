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

        {/* Heading */}
        <h2 className="font-heading italic font-light text-[32px] md:text-[36px] leading-[1.2] text-neutral-900 mb-5">
          Do you want to know more?
        </h2>

        {/* Description - stretches across the photo width */}
        <p className="text-[13px] md:text-[14px] leading-[1.55] text-neutral-900 w-full max-w-[1120px] mb-10">
          If you&apos;d like to know more about Cosa events, please get in
          touch. Either call us, fill out the contact form below or meet the
          whole events team. We&apos;d love to start planning your event with
          you.
        </p>

        {/* Team */}
        <div className="grid grid-cols-4 gap-x-4">
          {TEAM.map((member) => (
            <div key={member.name} className="min-w-0">

              {/* Image */}
              <div
                className="w-full aspect-[3/4] bg-cover bg-center mb-3"
                style={{
                  backgroundImage: `url('${member.image}')`,
                }}
              />

              {/* Name */}
              <h3 className="text-[15px] leading-[1.3] text-neutral-900">
                {member.name}
              </h3>

              {/* Role */}
              <p className="text-[11px] leading-[1.4] text-neutral-500">
                {member.role}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}