const items = [
  {
    num: "01",
    title: "Consolidate all financial and inventory data",
    body:
      "Bring together all your disparate data sources into one unified platform for complete visibility.",
  },
  {
    num: "02",
    title: "View live dashboards and forecasts",
    body:
      "Access real-time insights and predictive analytics to understand your business performance instantly.",
  },
  {
    num: "03",
    title: "Generate accurate reports in seconds",
    body:
      "Create comprehensive financial reports automatically, eliminating manual errors and saving valuable time.",
  },
  {
    num: "04",
    title: "Improve decision-making with real-time insights",
    body:
      "Make informed strategic decisions based on current, accurate data rather than outdated spreadsheets.",
  },
];

export default function FinanceLeadersNumbersToDecisions() {
  return (
    <section className="w-full py-16 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-lime-400">Decisions</p>
        <h2 className="mt-2 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
          From numbers to decisions, simplified in one system
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {items.map((it) => (
            <article
              key={it.num}
              className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_25px_60px_-35px_rgba(0,0,0,0.55)] ring-1 ring-white/10 backdrop-blur-sm transition-transform duration-200 hover:-translate-y-0.5 hover:border-white/20"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15">
                  <span className="text-xs font-extrabold text-lime-400">{it.num}</span>
                </div>
                <span className="h-px flex-1 bg-white/15" />
              </div>
              <h3 className="text-base font-semibold text-white sm:text-lg">{it.title}</h3>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">{it.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
