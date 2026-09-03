const TEAM = [
  {
    name: "Simon Kessler",
    role: "Head of swiss team",
    image: "https://picsum.photos/seed/cosa-se-simon/400/400",
  },
  {
    name: "Ana Marques",
    role: "Switzerland expert",
    image: "https://picsum.photos/seed/cosa-se-ana/400/400",
  },
  {
    name: "Laura Gonzalez",
    role: "Switzerland expert",
    image: "https://picsum.photos/seed/cosa-se-laura/400/400",
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
          Our team of Swiss specialists is waiting to hear from you. Get in
          touch with one of us so we can start you off on your Swiss
          adventure.
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
