export default function InspirationsCompassBanner() {
  return (
    <section className="bg-bg pb-16">
      <div className="max-w-[1180px] mx-auto px-8">
        <div className="grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-4 flex flex-col items-center md:items-start">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="mb-3">
              <path
                d="M24 4v6M24 38v6M4 24h6M38 24h6M24 16l6 8-6 8-6-8 6-8Z"
                stroke="currentColor"
                className="text-slate"
                strokeWidth="1.4"
                strokeLinejoin="round"
              />
            </svg>
            <p className="font-editorial italic text-h4 text-ink">Cosa</p>
            <p className="text-caption uppercase tracking-[0.15em] text-muted">
              Inspirations
            </p>
          </div>

          <div className="md:col-span-8">
            <p className="text-body-sm leading-[1.8] text-ink/80 max-w-[520px]">
              Our annual Inspirations are so great, they get their own seal
              of approval. Wherever you see this compass logo on an
              article, it means that we&apos;ve chosen it as one of our
              Inspirations. All seven Inspirations for 2026 appear on this
              special map.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}