import Link from "next/link";

export default function SalesLeadersFinalCTA() {
  return (
    <section className="relative isolate overflow-hidden py-16 sm:py-24">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
        {/* Left: image placeholder */}
        <div className="order-2 lg:order-1">
          <div className="flex aspect-[4/5] w-full items-center justify-center rounded-2xl border border-dashed border-white/20 bg-[url('/Pattern.svg')] bg-cover bg-center text-sm font-semibold uppercase tracking-[0.25em] text-white/70">
            Image Placeholder
          </div>
        </div>

        {/* Right: copy + CTA */}
        <div className="order-1 space-y-6 lg:order-2">
          <h2 className="text-4xl font-extrabold text-amber-300 sm:text-5xl">Ready to win more deals?</h2>
          <p className="max-w-xl text-2xl font-semibold leading-snug text-white/90">
            See how <span className="text-white">Dashing</span> empowers broker sales teams with speed, clarity, and confidence.
          </p>
          <div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#8167FF] px-6 py-3 text-base font-semibold text-white shadow-[0_20px_45px_-25px_rgba(129,103,255,0.85)] transition hover:-translate-y-0.5 hover:bg-[#6d54f0]"
            >
              <span aria-hidden>👉</span>
              Book a Demo Today
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
