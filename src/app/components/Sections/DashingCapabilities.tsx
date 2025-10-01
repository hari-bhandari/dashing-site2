const capabilities = [
  {
    title: "Realtime Quoting",
    description:
      "Generate accurate quotes instantly with integrated product data and dynamic pricing, reducing manual effort and accelerating deal closures.",
  },
  {
    title: "Finance Dashboard",
    description:
      "Track profitability, cash flow, and key performance indicators in real-time with comprehensive dashboards and reporting tools.",
  },
  {
    title: "Inventory Control",
    description:
      "Manage stock levels, track movements, and optimise your inventory with precision, ensuring product availability and minimising holding costs.",
  },
  {
    title: "Compliance Tools",
    description:
      "Maintain audit trails and regulatory compliance with automated reporting features tailored for broker operations.",
  },
];

export default function DashingCapabilities() {
  return (
    <section className="relative isolate overflow-hidden bg-[#150a35] py-20 text-white sm:py-24">
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(250,204,21,0.35),transparent_70%)]"
        aria-hidden
      />
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 text-center sm:px-6 lg:px-8">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold text-amber-300 sm:text-5xl">Everything You Need in One System</h2>
          <p className="text-lg text-white/70 sm:text-xl">
            Dashing Distribution unifies all critical brokerage functions into a single, intuitive platform, streamlining operations and empowering your team.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((capability) => (
            <article
              key={capability.title}
              className="flex h-full flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 text-left shadow-[0_40px_80px_-60px_rgba(12,10,43,0.7)] backdrop-blur"
            >
              <div className="flex aspect-[4/3] w-full items-center justify-center rounded-2xl border border-dashed border-white/20 bg-white/10 text-sm font-semibold uppercase tracking-[0.25em] text-white/60">
                Placeholder
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-amber-200">{capability.title}</h3>
                <p className="text-sm leading-relaxed text-white/75">{capability.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
