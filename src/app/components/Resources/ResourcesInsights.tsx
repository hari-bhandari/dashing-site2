

import { IconTarget, IconFileInvoice, IconRocket } from "@tabler/icons-react";

export default function ResourcesInsights() {
  return (
    <section className="relative isolate overflow-hidden bg-white py-16 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-2xl font-semibold uppercase tracking-widest text-lime-400">Insights</p>
          <h2 className="mt-2 text-4xl font-extrabold text-[#0a2440] sm:text-5xl">Expert Insights &amp; Industry Knowledge</h2>
          <p className="mx-auto mt-4 max-w-4xl text-xl leading-relaxed text-[#0a2440]/80">
          Practical articles, guides, and broker perspectives on the challenges that matter most - from quoting speed and inventory control to migrating away from legacy software.
          </p>
        </div>

        {/* Category cards */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Sales Efficiency */}
          <article className="group rounded-2xl border border-[#0a2440]/10 bg-white p-6 shadow-[0_25px_60px_-35px_rgba(12,10,43,0.15)] transition-transform duration-200 hover:-translate-y-1">
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#0a2440]/5">
              <IconTarget className="h-8 w-8 text-[#0a2440]" aria-hidden />
            </div>
            <h3 className="text-2xl font-bold text-[#0a2440]">Sales Efficiency</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#0a2440]/80">
              Practical guides on quoting faster, improving RFQ win rates, and giving your sales team the visibility they need to close before the competition does.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-[#0a2440]/85">
              {['Improving RFQ response times','Quoting accuracy and margin control','Pipeline visibility for sales teams'].map(item => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-lime-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
          {/* Finance & Control */}
          <article className="group rounded-2xl border border-[#0a2440]/10 bg-white p-6 shadow-[0_25px_60px_-35px_rgba(12,10,43,0.15)] transition-transform duration-200 hover:-translate-y-1">
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#0a2440]/5">
              <IconFileInvoice className="h-8 w-8 text-[#0a2440]" aria-hidden />
            </div>
            <h3 className="text-xl font-bold text-[#0a2440]">Finance &amp; Control</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#0a2440]/80">
              Guides on the financial visibility broker owners and finance directors actually need: cashflow, inventory value, deal margins, and compliance without the manual work.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-[#0a2440]/85">
              {['Real-time cashflow and margin tracking','Inventory valuation and cost control','Audit trails and compliance reporting'].map(item => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-lime-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
          {/* Growth Strategies */}
          <article className="group rounded-2xl border border-[#0a2440]/10 bg-white p-6 shadow-[0_25px_60px_-35px_rgba(12,10,43,0.15)] transition-transform duration-200 hover:-translate-y-1">
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#0a2440]/5">
              <IconRocket className="h-8 w-8 text-[#0a2440]" aria-hidden />
            </div>
            <h3 className="text-xl font-bold text-[#0a2440]">Growth Strategies</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#0a2440]/80">
              Insights on building a broker operation that doesn&apos;t break as you grow, from moving off spreadsheets to choosing systems that compound over time.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-[#0a2440]/85">
              {['Moving beyond spreadsheets and legacy software','KPIs worth tracking in a broker business','Choosing software that grows with you'].map(item => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-lime-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
