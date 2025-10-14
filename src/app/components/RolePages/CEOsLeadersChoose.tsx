export default function CEOsLeadersChoose() {
  return (
    <section className="relative isolate overflow-hidden py-16 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-amber-300 sm:text-5xl">
          Leaders choose Dashing to scale with confidence
        </h2>

        {/* Quote + logo */}
        <div className="mt-8">
          <div className="flex items-start gap-5">
            <div className="h-full w-1 rounded bg-amber-300/80" aria-hidden />
            <div className="space-y-5">
              <p className="text-2xl font-bold leading-snug text-amber-200 sm:text-3xl md:text-4xl">
                &ldquo;I finally have an ERP software that I can rely on and where I know I will get the support and
                flexibility that is needed in this industry.&rdquo;
              </p>
              {/* Logo placeholder */}
              <div className="flex h-12 w-64 items-center justify-center rounded-md border border-dashed border-white/25 bg-white/5 text-xs font-semibold uppercase tracking-wider text-white/60">
                Logo
              </div>
            </div>
          </div>
        </div>

        {/* Bottom blurbs */}
        <div className="mt-10 grid gap-10 sm:grid-cols-2">
          <div>
            <h3 className="text-xl font-extrabold text-amber-300 sm:text-2xl">Built by brokers, for brokers.</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/80 sm:text-base">Emphasis on peer validation</p>
          </div>
          <div>
            <h3 className="text-xl font-extrabold text-amber-300 sm:text-2xl">Full support included</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/80 sm:text-base">
              Reassurance: Full onboarding, training, and support included.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
