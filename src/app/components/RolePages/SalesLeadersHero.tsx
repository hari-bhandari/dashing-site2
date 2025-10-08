import Link from "next/link";

export default function SalesLeadersHero() {
  return (
    <section className="relative isolate overflow-hidden">
  <div className="mx-auto grid max-w-7xl items-stretch gap-0 overflow-hidden rounded-3xl px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        {/* Left panel */}
  <div className="relative flex flex-col justify-center overflow-hidden px-6 py-16 sm:px-10">
          <div
            className="pointer-events-none absolute inset-0 -z-10"
            aria-hidden
          />

          <div className="space-y-5">
            <h1 className="text-4xl font-extrabold text-amber-300 sm:text-5xl">
              Close More Deals, Faster
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
              Finally, a broker-specific ERP that gives sales leaders real-time quoting, transparency,
              and workflows built to win deals.
            </p>
            <div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#8167FF] px-5 py-3 text-sm font-semibold text-white shadow-[0_20px_45px_-25px_rgba(129,103,255,0.85)] transition hover:-translate-y-0.5 hover:bg-[#6d54f0]"
              >
                <span aria-hidden>👉</span>
                Book a Demo — See It in Action
              </Link>
            </div>
          </div>
        </div>

        {/* Right panel image placeholder */}
  <div className="relative min-h-[320px] overflow-hidden">
          <div className="flex h-full w-full items-center justify-center bg-[url('/Pattern.svg')] bg-cover bg-center p-6 text-white/70">
            <div className="flex h-[360px] w-full max-w-md items-center justify-center rounded-[2rem] ring-1 ring-white/15 bg-white/10 text-center text-sm font-semibold uppercase tracking-[0.25em]">
              Image Placeholder
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
