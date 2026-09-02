export default function IntroText({ children }: { children: React.ReactNode }) {
  return (
    <section className="bg-[#f8f7f4] py-16">
      <div className="max-w-3xl mx-auto text-center px-8">
        <p className="text-[15px] leading-[1.9] text-neutral-700">
          {children}
        </p>
      </div>
    </section>
  );
}
