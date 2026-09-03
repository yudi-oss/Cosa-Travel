import Link from "next/link";

export default function CSRIntro() {
  return (
    <section className="bg-[#f8f7f4] pb-16 pt-16">
      <div className="max-w-[1180px] mx-auto px-8">
        <p className="text-[14px] leading-[1.75] text-neutral-700 max-w-[880px]">
          Travel brings rewards in so many ways. It&apos;s not just about
          exploring new places and experiencing new things, but also about
          giving back to local communities. At Cosa, we believe that
          Corporate Social Responsibility (or CSR for short) can be an
          integral part of{" "}
          <Link
            href="/event-creators"
            className="underline decoration-neutral-400 underline-offset-2 hover:text-neutral-900"
          >
            our events and incentive trips
          </Link>
          . That&apos;s why we&apos;ve developed an exciting CSR portfolio,
          one that we are always looking to expand. Here&apos;s what giving
          back with Cosa really means:
        </p>
      </div>
    </section>
  );
}
