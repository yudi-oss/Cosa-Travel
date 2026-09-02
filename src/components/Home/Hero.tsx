export default function Hero() {
  return (
    <section className="relative">
      <div
        className="h-[760px] bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/Hero.png')",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Text */}
        <div className="relative h-full flex items-end">
        <div className="pb-28 pl-16 md:pl-20 text-white max-w-[1100px]">
            <h1
  className="
  font-heading
  italic
  font-light
  text-[64px] md:text-[72px]
  leading-[0.9]
  tracking-[-0.02em]
  text-white
  "
>
  Come With Us
  <br />
  and Discover the World
</h1>

            <p className="mt-5 text-lg">
              Personalised travel and events created for you by Cosa
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}