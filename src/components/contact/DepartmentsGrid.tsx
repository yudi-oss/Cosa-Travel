import Image from "next/image";

const DEPARTMENTS = [
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

export default function DepartmentsGrid() {
  return (
    <section className="bg-[#f8f7f4] pt-12 pb-16">
      <div className="max-w-[980px] mx-auto px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {DEPARTMENTS.map((d) => (
            <div key={d.title + d.email}>
              <Image
                src={d.icon}
                alt={d.title}
                width={30}
                height={30}
                className="mb-3"
              />
              <h3 className="text-[14px] text-neutral-900 mb-1.5">
                {d.title}
              </h3>
              <a
                href={`tel:${d.phone.replace(/\s+/g, "")}`}
                className="block text-[12.5px] text-neutral-500 hover:text-neutral-900 transition-colors"
              >
                {d.phone}
              </a>
              <a
                href={`mailto:${d.email}`}
                className="block text-[12.5px] text-neutral-500 hover:text-neutral-900 transition-colors"
              >
                {d.email}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

