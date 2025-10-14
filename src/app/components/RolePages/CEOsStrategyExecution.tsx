export default function CEOsStrategyExecution() {
  const items = [
    "Streamline operations across sales, finance, and ops",
    "Gain real-time visibility for smarter decisions",
    "Scale without friction or unnecessary overhead",
    "Deliver sustainable, profitable growth",
  ];

  return (
    <section className="relative isolate overflow-hidden py-16 sm:py-24">
      <div className="mx-auto grid w-full max-w-7xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
        {/* Left: heading + numbered items */}
        <div>
          <h2 className="text-4xl font-extrabold text-amber-300 sm:text-5xl">
            From strategy to execution, simplified in one system
          </h2>

          <ol className="mt-8 space-y-8">
            {items.map((text, idx) => (
              <li key={text}>
                <div className="text-sm font-semibold tracking-widest text-white/60">{String(idx + 1).padStart(2, "0")}</div>
                <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">{text}</h3>
                <div className="mt-3 h-px w-full bg-white/25" aria-hidden />
              </li>
            ))}
          </ol>
        </div>

        {/* Right: placeholder image */}
        <div className="relative">
          <div className="flex aspect-[4/5] w-full items-center justify-center rounded-2xl border border-white/15 bg-[url('/Pattern.svg')] bg-cover bg-center text-sm font-semibold uppercase tracking-[0.25em] text-white/70 ring-1 ring-white/10">
            Image Placeholder
          </div>
        </div>
      </div>
    </section>
  );
}
