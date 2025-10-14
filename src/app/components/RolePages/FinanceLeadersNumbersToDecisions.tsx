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
    <section className="w-full px-6 py-16 sm:py-24">
      <div className="mx-auto w-full max-w-7xl">
        <h2 className="text-3xl font-extrabold leading-tight text-amber-400 sm:text-4xl">
          From numbers to decisions, simplified in one system
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2">
          {items.map((it) => (
            <div key={it.num}>
              <div className="mb-3 flex items-center gap-4 text-sm font-semibold text-white/70">
                <span>{it.num}</span>
                <span className="h-px w-full flex-1 bg-white/20" />
              </div>
              <h3 className="text-lg font-extrabold text-white">{it.title}</h3>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-gray-300">{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
