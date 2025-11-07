import Link from "next/link";

const pointsBefore = [
  "Spreadsheets everywhere, data silos",
  "Slow quoting, costing you missed deals",
  "No real-time view of cashflow or stock levels",
  "Growth adding complexity, not profit margins",
];

const pointsAfter = [
  "All your critical data in one place",
  "Generate quotes in minutes",
  "Real-time dashboards for finance & sales insights",
  "Sustainable growth without extra overhead",
];

export default function DashingTransformation() {
  return (
    <section className="relative isolate overflow-hidden bg-white py-20 text-[#0a2440] sm:py-24">
      <div
        className="absolute inset-0 -z-10"
        aria-hidden
      />
      <div className="mx-auto flex max-w-5xl flex-col gap-12 px-4 text-center sm:px-6 lg:px-8">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold text-[#0a2440] sm:text-5xl">
            From Chaos to Clarity — See the Difference
          </h2>
          <p className="text-lg text-[#0a2440] sm:text-xl">
            Are outdated processes holding your business back? Discover how Dashing transforms common broker challenges into streamlined, profitable operations.
          </p>
        </div>
        <div className="grid gap-8 text-left sm:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_40px_80px_-60px_rgba(12,10,43,0.7)]">
            <h3 className="text-lg font-semibold text-red-500">Before: The Old Way</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/80 sm:text-base">
              {pointsBefore.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 text-rose-500">✘</span>
                  <span className = "text-[#0a2440]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_40px_80px_-60px_rgba(12,10,43,0.7)]">
            <h3 className="text-lg font-semibold text-emerald-500">After: With Dashing</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/80 sm:text-base">
              {pointsAfter.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 text-emerald-500">✔</span>
                  <span className = "text-[#0a2440]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mx-auto flex w-full max-w-xl flex-col items-center gap-8">
          <div className="flex h-64 w-full items-center justify-center rounded-[2rem] border border-dashed border-white/20 bg-white/5 text-lg font-semibold uppercase tracking-[0.25em] text-[#0a2440]">
            Placeholder Image
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-lime-400 px-6 py-3 text-[#0a2440] font-bold shadow-[0_25px_45px_-20px_rgba(109,75,255,0.9)] transition hover:-translate-y-0.5 hover:bg-[#5a3bdc]"
          >
            <span role="img" aria-hidden>
              👉
            </span>
            Book a Demo — Move to the After
          </Link>
        </div>
      </div>
    </section>
  );
}
