export interface ArchiveItem {
  year: string;
  title: string;
  excerpt: string;
  image: string;
  href: string;
}

const ALL_YEARS: ArchiveItem[] = [
  {
    year: "2023",
    title: "Cosa inspirations for 2023",
    excerpt:
      "Our mission is to inspire you to explore the world, and what better way to do that than with some ...",
    image: "/images/inspirations/archive/2023.jpg",
    href: "/cosa-inspirations/2023",
  },
  {
    year: "2024",
    title: "Cosa inspirations for 2024",
    excerpt:
      "With so many places and experiences to choose from, making a decision can be hard. That's where we come in. ...",
    image: "/images/inspirations/archive/2024.jpg",
    href: "/cosa-inspirations/2024",
  },
  {
    year: "2025",
    title: "Cosa inspirations for 2025",
    excerpt:
      "Walking across the salt flats of Bolivia, driving along the coast of Australia, paddling through the wilderness of Canada. These ...",
    image: "/images/inspirations/archive/2025.jpg",
    href: "/cosa-inspirations/2025",
  },
  {
    year: "2026",
    title: "Cosa inspirations for 2026",
    excerpt:
      "Every year brings a world of possibilities. Our latest Inspirations reveal seven extraordinary journeys that capture the spirit of discovery ...",
    image: "/images/inspirations/archive/2026.jpg",
    href: "/cosa-inspirations",
  },
];

export default function MoreInspirationsGrid({
  excludeYear,
}: {
  excludeYear: string;
}) {
  const items = ALL_YEARS.filter((y) => y.year !== excludeYear).slice(0, 3);

  return (
    <section className="bg-bg pb-16">
      <div className="max-w-[1180px] mx-auto px-8">
        <h2 className="font-editorial italic font-light text-editorial-sm md:text-editorial-md text-ink mb-10">
          More destinations for you
        </h2>

        <div className="grid sm:grid-cols-3 gap-8">
          {items.map((item) => (
            <div key={item.year}>
              <div
                className="w-full aspect-[4/3] bg-cover bg-center mb-4"
                style={{ backgroundImage: `url('${item.image}')` }}
              />
              <p className="text-caption text-muted mb-2">
                Inspiration <span className="mx-1">·</span> World
              </p>
              <h3 className="text-body-default font-medium text-ink mb-2">
                {item.title}
              </h3>
              <p className="text-body-sm text-ink/70 leading-[1.6] mb-4">
                {item.excerpt}
              </p>
              
              <a
                href={item.href}
                className="inline-flex items-center border border-line rounded-pill px-5 py-2 text-button text-ink hover:border-primary hover:text-primary transition-colors duration-300"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}