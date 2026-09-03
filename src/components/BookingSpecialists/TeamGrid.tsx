const TEAM = [
  {
    name: "Marianne Von Arx",
    role: "Business Travel Specialist",
    image: "/Bookingspecialist/mariannevox.png"},
  {
    name: "Beatrice Winkler",
    role: "Business Travel Specialist",
    image: "/Bookingspecialist/beatrice.png",
  },
  {
    name: "Korine Weideli",
    role: "Business Travel Specialist",
    image: "/Bookingspecialist/korine.png",
  },
];

export default function TeamGrid() {
  return (
    <section className="bg-[#f8f7f4] pb-16">
      <div className="max-w-[1180px] mx-auto px-8">
        <h2 className="font-heading italic font-light text-[32px] md:text-[36px] text-neutral-900 mb-5">
          Would you like to know more?
        </h2>
        <p className="text-[14px] leading-[1.7] text-neutral-700 max-w-[700px] mb-12">
          If you&apos;d like more information or want to book, please get in
          touch with one of us. Either call us directly or use the contact
          form below.
        </p>

        <div className="flex flex-wrap gap-8">
          {TEAM.map((member) => (
            <div key={member.name} className="w-[170px]">
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
