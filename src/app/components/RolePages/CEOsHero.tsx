import Link from "next/link";

export default function FinanceLeadersHero() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 -z-10 bg-[url('/office.webp')] bg-cover bg-center"
        aria-hidden
      />
      {/* Dark overlay */}
      <div
        className="absolute inset-0 -z-10 bg-black/60"
        aria-hidden
      />
      {/* Subtle vignette */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_50%_40%,rgba(91,33,182,0.25)_0%,rgba(0,0,0,0.6)_50%,rgba(0,0,0,0.85)_100%)]"
        aria-hidden
      />

      <div className="mx-auto flex min-h-[70vh] w-full max-w-7xl flex-col justify-center px-6 py-16 sm:py-28">
        <h1 className="max-w-5xl text-4xl font-extrabold leading-tight text-white drop-shadow sm:text-5xl md:text-6xl">
          Achieve Profitable Growth with Broker-Specific ERP
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-gray-200">
          Scaling a brokerage shouldn&apos;t come with growing pains. Dashing gives CEOs clarity, efficiency, and confidence to grow sustainably.
        </p>
        <div className="mt-8">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-lime-400 px-5 py-3 text-sm font-semibold text-[#0a2440] shadow-lg ring-1 ring-white/10 transition hover:bg-lime-500"
          >
            <span role="img" aria-label="pointing hand">👉</span>
            Book a Demo - See How Dashing Can Help You Scale
          </Link>
        </div>
      </div>

      {/* Watermark placeholder bottom-right */}
      <div className="pointer-events-none absolute bottom-4 right-4 -z-10 select-none text-4xl font-extrabold tracking-tight text-white/5">
        Finsight Analytics
      </div>
    </section>
  );
}
