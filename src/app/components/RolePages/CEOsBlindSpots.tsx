import { IconAlertTriangle, IconCheck } from "@tabler/icons-react";

export default function CEOsBlindSpots() {
  const blindSpots = [
    "Manual reporting takes days, hindering quick decisions.",
    "No single source of truth for cash flow or stock, leading to discrepancies.",
    "Compliance risk keeps you awake at night, fearing audits.",
  ];

  const realTime = [
    "Live dashboards provide immediate insights into cash flow & inventory.",
    "Automated reporting you can trust, saving time and reducing errors.",
    "Compliance built into daily workflow, ensuring peace of mind.",
  ];

  return (
    <section className="relative isolate overflow-hidden py-16 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-lime-400">Visibility</p>
        <h2 className="mt-2 text-4xl font-extrabold text-white sm:text-5xl">From blind spots to real-time control</h2>

        <div className="mt-8 grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="text-xl font-extrabold text-red-500 sm:text-2xl">Blind Spots</h3>
            <ul className="mt-4 space-y-3">
              {blindSpots.map((t) => (
                <li key={t} className="grid grid-cols-[36px_auto] items-start gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15">
                    <IconAlertTriangle className="h-4 w-4 text-red-500" aria-hidden />
                  </span>
                  <span className="text-base leading-relaxed text-white/90">{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-extrabold text-lime-400 sm:text-2xl">Real-Time Control</h3>
            <ul className="mt-4 space-y-3">
              {realTime.map((t) => (
                <li key={t} className="grid grid-cols-[36px_auto] items-start gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15">
                    <IconCheck className="h-4 w-4 text-lime-400" aria-hidden />
                  </span>
                  <span className="text-base leading-relaxed text-white/90">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Placeholder image */}
        <div className="mt-10">
          <div className="flex aspect-[16/9] w-full items-center justify-center rounded-2xl border border-white/15 bg-[url('/Pattern.svg')] bg-cover bg-center text-sm font-semibold uppercase tracking-[0.25em] text-white/70 ring-1 ring-white/10">
            Image Placeholder
          </div>
        </div>
      </div>
    </section>
  );
}
