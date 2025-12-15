import { IconHourglass, IconEyeOff, IconShieldX, IconChartBar } from "@tabler/icons-react";

type Risk = {
  title: string;
  body: string;
};

export default function FinanceLeadersHiddenRisks() {
  const items: Risk[] = [
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

  const icons = [IconHourglass, IconEyeOff, IconShieldX, IconChartBar];

  return (
    <section className="w-full px-6 py-16 sm:py-24 bg-white">
      <div className="mx-auto w-full max-w-7xl">
        <h2 className="text-3xl font-extrabold leading-tight text-[#0a2440] sm:text-4xl">
          Finance leaders in brokering face hidden risks:
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {items.map((item, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <article
                key={item.title}
                className="rounded-2xl border border-white/30 bg-white/[0.05] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_25px_60px_-35px_rgba(0,0,0,0.55)] ring-1 ring-white/10 backdrop-blur-sm"
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15">
                  <Icon className="h-6 w-6 text-lime-400" aria-hidden />
                </div>
                <h3 className="text-base font-semibold text-[#0a2440] sm:text-lg">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#0a2440]/70 sm:text-base">
                  {item.body}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
