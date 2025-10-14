import Link from "next/link";

export default function ResourcesIntro() {
  return (
    <section className="relative isolate overflow-hidden py-16 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <h1 className="text-4xl font-extrabold text-amber-300 sm:text-5xl">
            Resources to Elevate Your Brokerage
          </h1>
          <p className="mt-4 text-base leading-relaxed text-white/80 sm:mt-6 sm:text-lg">
            Access expert insights, proven strategies, and real-world success stories designed specifically for
            commercial real estate professionals. Our comprehensive resource library helps brokers optimise operations,
            accelerate growth, and stay ahead of market trends.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/resources"
              className="inline-flex items-center justify-center rounded-lg bg-[#8167FF] px-5 py-3 text-sm font-semibold text-white shadow-[0_20px_45px_-25px_rgba(129,103,255,0.85)] transition hover:-translate-y-0.5 hover:bg-[#6d54f0] sm:text-base"
            >
              Explore Resources
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/15 transition hover:bg-white/15 sm:text-base"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
