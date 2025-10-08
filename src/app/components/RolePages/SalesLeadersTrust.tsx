import { IconCheck } from "@tabler/icons-react";

export default function SalesLeadersTrust() {
  return (
    <section className="relative isolate overflow-hidden py-16 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* top spacing handled by section */}
        <div className="pb-8 sm:pb-10">
        {/* Background placeholder */}
        <div className="mb-8 flex h-56 w-full items-center justify-center rounded-2xl border border-dashed border-white/20 bg-white/5 text-sm font-semibold uppercase tracking-[0.25em] text-white/70">
          Background Image Placeholder
        </div>
        <h2 className="text-4xl font-extrabold text-amber-300 sm:text-5xl">Trusted by brokers like you</h2>
        </div>
        <div className="mt-2 flex max-w-5xl flex-col gap-6">
          <div className="flex items-start gap-4">
            <div className="h-full w-1 rounded-full bg-amber-300/70" aria-hidden />
            <p className="text-2xl font-bold leading-snug text-amber-200 sm:text-3xl md:text-4xl">
              &ldquo;I highly recommend Dashing if you want to get ahead of the competition. Their professionalism,
              expertise, and exceptional distribution solutions have greatly benefited my business. Their team is
              responsive and dedicated, providing outstanding customer service. They are lightyears ahead of any
              other software!!&rdquo;
            </p>
          </div>

          {/* Logo strip placeholder */}
          <div className="mt-2 flex items-center gap-4 opacity-80">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="flex h-8 w-28 items-center justify-center rounded-md border border-dashed border-white/25 bg-white/5 text-[10px] font-semibold uppercase tracking-wider text-white/60"
              >
                Logo
              </div>
            ))}
          </div>

          {/* Commitment bar */}
          <div className="mt-8 w-full rounded-lg bg-emerald-700/90 px-5 py-4 text-white shadow-[0_20px_45px_-30px_rgba(0,0,0,0.6)] ring-1 ring-emerald-400/30">
            <div className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md bg-emerald-600/80">
                <IconCheck className="h-4 w-4" aria-hidden />
              </span>
              <p className="text-sm sm:text-base">
                <span className="font-semibold">Commitment:</span> full onboarding, training, and satisfaction guarantee.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
