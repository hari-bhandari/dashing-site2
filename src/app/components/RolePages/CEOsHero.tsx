import Link from "next/link";

export default function CEOsHero() {
  return (
    <section className="relative isolate overflow-hidden rounded-3xl">
      {/* Background image */}
      <div
        className="absolute inset-0 -z-10 bg-[url('/office.webp')] bg-cover bg-center"
        aria-hidden
      />
      {/* Overlay tint */}
      <div className="absolute inset-0 -z-10 bg-[#1B1440]/75" aria-hidden />

      <div className="px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="max-w-4xl">
          <h1 className="text-4xl font-extrabold leading-tight text-amber-300 sm:text-5xl md:text-6xl">
            Achieve Profitable Growth with Broker-Specific ERP
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/90 sm:text-lg">
            Scaling a brokerage shouldn&#39;t come with growing pains. Dashing gives CEOs clarity, efficiency, and
            confidence to grow sustainably.
          </p>
          <div className="mt-6">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#8167FF] px-6 py-3 text-base font-semibold text-white shadow-[0_20px_45px_-25px_rgba(129,103,255,0.85)] transition hover:-translate-y-0.5 hover:bg-[#6d54f0]"
            >
              <span aria-hidden>👉</span>
              Book a Demo – See How Dashing Can Help You Scale
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
