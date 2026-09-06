const ITEMS = [
  {
    image: "/images/explore/where-events-are-experiences.jpg",
    tag: "Inspiration",
    region: "North Africa",
    title: "Where events are experiences",
  },
  {
    image: "/images/explore/new-york-alphabet.jpg",
    tag: "Inspiration",
    region: "USA & Canada",
    title: "A New York alphabet",
  },
  {
    image: "/images/explore/secret-base-north.jpg",
    tag: "Experience",
    region: "Northern Europe",
    title: "A secret base in the north",
  },
  {
    image: "/images/explore/thousand-islands.jpg",
    tag: "Inspiration",
    region: "Southeast Asia",
    title: "A thousand islands, one heartbeat",
  },
  {
    image: "/images/explore/albania.jpg",
    tag: "Country",
    region: "Southern Europe",
    title: "Albania",
  },
  {
    image: "/images/explore/athens.jpg",
    tag: "Destination",
    region: "Southern Europe",
    title: "Athens",
  },
];

export default function DestinationGrid() {
  return (
    <section className="bg-[#f8f7f4] py-12">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {ITEMS.map((item) => (
            <a href="#" key={item.title} className="group block">
              <div
                className="aspect-[4/3] bg-cover bg-center mb-3 overflow-hidden bg-neutral-200"
                style={{ backgroundImage: `url('${item.image}')` }}
              />
              <p className="text-[11px] text-neutral-500 mb-1">
                {item.tag} <span className="mx-1">·</span> {item.region}
              </p>
              <h3 className="text-[14px] font-medium text-neutral-900 group-hover:text-neutral-600 transition-colors">
                {item.title}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}