import Image from "next/image";

const SERVICES = [
  {
    icon: "/icons/traveldesginersalt.png",
    title: "Travel designers",
    phone: "+41 44 269 40 42",
    email: "world@cosatravel.ch",
  },
  {
    icon: "/icons/corporatelevel.png",
    title: "Corporate travel",
    phone: "+41 44 269 40 42",
    email: "business@cosatravel.ch",
  },
  {
    icon: "/icons/eventcreators.png",
    title: "Event creators",
    phone: "+41 44 269 40 42",
    email: "events@cosatravel.ch",
  },
  {
    icon: "/icons/traveldesigners.png",
    title: "Travel designers",
    phone: "+41 44 269 40 42",
    email: "dmc@cosatravel.ch",
  },
];

export default function ServicesGrid() {
  return (
    <section className="bg-[#f8f7f4] py-16">
      <div className="max-w-[1180px] mx-auto px-8">
        <h2 className="font-heading italic font-light text-[32px] text-neutral-900 mb-5">
          The Cosa service
        </h2>

        <p className="text-[14px] leading-[1.7] text-neutral-700 max-w-[700px] mb-2">
          By now, you&apos;re possibly asking yourself: what does Cosa
          actually do? The answer is simple. We make your travel dreams come
          true. Using our wealth of experience and knowledge, we create
          individual itineraries tailored to your needs, no matter if
          it&apos;s a trip around the world or an event around the corner.
          Below is a quick overview of our services or click on the link to
          get an in-depth look at what we can do for you.
        </p>

        <a
          href="#"
          className="inline-block text-[13px] text-[#c96442] underline underline-offset-2 mb-12"
        >
          Discover all our services
        </a>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {SERVICES.map((s) => (
            <div key={s.title + s.email}>
              <Image src={s.icon} alt={s.title} width={30} height={30} className="mb-3" />
              <h3 className="text-[14px] text-neutral-900 mb-1.5">
                {s.title}
              </h3>
              <a
                href={`tel:${s.phone.replace(/\s+/g, "")}`}
                className="block text-[12.5px] text-neutral-500 hover:text-neutral-900 transition-colors"
              >
                {s.phone}
              </a>
              <a
                href={`mailto:${s.email}`}
                className="block text-[12.5px] text-neutral-500 hover:text-neutral-900 transition-colors"
              >
                {s.email}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
