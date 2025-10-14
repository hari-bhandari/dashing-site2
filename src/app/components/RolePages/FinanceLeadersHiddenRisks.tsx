export default function FinanceLeadersHiddenRisks() {
  const items = [
    {
      title: "Manual processes slow down reporting",
      body:
        "Time-consuming manual data entry and reconciliation delays critical financial insights.",
    },
    {
      title: "Limited visibility over cashflow and stock",
      body:
        "Fragmented systems make it impossible to see the complete financial picture in real-time.",
    },
    {
      title: "Compliance and risk management challenges",
      body:
        "Meeting regulatory requirements becomes complex without integrated compliance tools.",
    },
    {
      title: "Hard to measure true business performance",
      body:
        "Disconnected data sources prevent accurate assessment of overall business health.",
    },
  ];

  return (
    <section className="w-full px-6 py-16 sm:py-24">
      <div className="mx-auto w-full max-w-7xl">
        <h2 className="text-3xl font-extrabold leading-tight text-amber-400 sm:text-4xl">
          Finance leaders in brokering face hidden risks:
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-xl ring-1 ring-white/10 backdrop-blur-sm"
            >
              <h3 className="text-lg font-extrabold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-300">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
