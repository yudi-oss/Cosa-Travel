const PILLARS = [
  {
    title: "Impactful integration",
    copy: "Every project we offer has a lasting impact, be that environmental and/or social. We find the right partners for us (and for you).",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M20 4c-6 0-9 5-9 10 0 4 2 6 3 8 1 2 1 3 1 5h10c0-2 0-3 1-5 1-2 3-4 3-8 0-5-3-10-9-10Z"
          fill="#2b2b2b"
        />
        <path
          d="M20 4c-6 0-9 5-9 10 0 4 2 6 3 8 1 2 1 3 1 5h5V4Z"
          fill="#c98a5e"
          opacity="0.85"
        />
        <rect x="15" y="29" width="10" height="3" rx="1.5" fill="#2b2b2b" />
      </svg>
    ),
  },
  {
    title: "Focused team-building",
    copy: "Give your teams an extra incentive and your event an added purpose by helping out and giving back in the places you visit.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g>
          <ellipse cx="20" cy="12" rx="5" ry="7" fill="#e8896a" />
          <ellipse cx="20" cy="12" rx="5" ry="7" fill="#f0b98e" transform="rotate(72 20 20)" />
          <ellipse cx="20" cy="12" rx="5" ry="7" fill="#e8896a" transform="rotate(144 20 20)" />
          <ellipse cx="20" cy="12" rx="5" ry="7" fill="#f0b98e" transform="rotate(216 20 20)" />
          <ellipse cx="20" cy="12" rx="5" ry="7" fill="#e8896a" transform="rotate(288 20 20)" />
        </g>
        <circle cx="20" cy="20" r="3" fill="#8a5a3f" />
      </svg>
    ),
  },
  {
    title: "Holistic engagement",
    copy: "Empower your employees to connect with their values and align both personal and professional development.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 4a16 16 0 0 1 0 32V4Z" fill="#c98a5e" />
        <path d="M20 4a16 16 0 0 0 0 32V4Z" fill="#7a93a6" />
      </svg>
    ),
  },
];

export default function CSRPillars() {
  return (
    <section className="bg-[#f8f7f4] pb-24">
      <div className="max-w-[1180px] mx-auto px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {PILLARS.map((p) => (
            <div key={p.title}>
              <div className="w-10 h-10 mb-4">{p.icon}</div>
              <h3 className="text-[14.5px] font-medium text-neutral-900 mb-2">
                {p.title}
              </h3>
              <p className="text-[13px] leading-[1.65] text-neutral-600 max-w-[280px]">
                {p.copy}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
