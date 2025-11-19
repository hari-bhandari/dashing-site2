

import { IconTarget, IconFileInvoice, IconRocket } from "@tabler/icons-react";

export default function ResourcesInsights() {
  return (
    <section className="relative isolate overflow-hidden bg-white py-16 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-lime-400">Insights</p>
          <h2 className="mt-2 text-4xl font-extrabold text-[#0a2440] sm:text-5xl">Expert Insights &amp; Industry Knowledge</h2>
          <p className="mx-auto mt-4 max-w-4xl text-base leading-relaxed text-[#0a2440]/80 sm:text-lg">
            Stay informed with our curated collection of articles covering the most pressing challenges facing commercial
            real estate brokers today. Our SEO-driven content delivers actionable strategies to help you work smarter,
            not harder.
          </p>
        </div>

        {/* Category cards */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Sales Efficiency */}
          <article className="group rounded-2xl border border-[#0a2440]/10 bg-white p-6 shadow-[0_25px_60px_-35px_rgba(12,10,43,0.15)] transition-transform duration-200 hover:-translate-y-1">
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#0a2440]/5">
              <IconTarget className="h-5 w-5 text-lime-400" aria-hidden />
            </div>
            <h3 className="text-xl font-bold text-[#0a2440]">Sales Efficiency</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#0a2440]/80">
              Streamline your deal flow with proven methodologies and cutting-edge technology solutions that reduce
              friction and accelerate closings.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-[#0a2440]/85">
              {['Lead qualification frameworks','Deal pipeline optimisation','Client relationship management'].map(item => (
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
              <IconFileInvoice className="h-5 w-5 text-lime-400" aria-hidden />
            </div>
            <h3 className="text-xl font-bold text-[#0a2440]">Finance &amp; Control</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#0a2440]/80">
              Master the financial aspects of brokerage operations with comprehensive guides on reporting, compliance,
              and cost management.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-[#0a2440]/85">
              {['Commission tracking systems','Financial reporting automation','Regulatory compliance'].map(item => (
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
              <IconRocket className="h-5 w-5 text-lime-400" aria-hidden />
            </div>
            <h3 className="text-xl font-bold text-[#0a2440]">Growth Strategies</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#0a2440]/80">
              Scale your brokerage with strategic insights on market expansion, team development, and technology
              integration.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-[#0a2440]/85">
              {['Market penetration tactics','Team performance metrics','Technology adoption roadmaps'].map(item => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-lime-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>

        {/* Featured Articles 
        <div className="mt-14 text-center">
          <h3 className="text-3xl font-extrabold text-amber-300 sm:text-4xl">Featured Articles</h3>
          <ul className="mx-auto mt-6 max-w-5xl list-disc space-y-3 pl-6 text-left text-[#0a2440]/90">
            <li>
              <em>&quot;5 Ways Brokers Can Close Deals Faster&quot;</em> - Proven techniques to reduce deal cycle times
            </li>
            <li>
              <em>&quot;The Hidden Cost of Manual Finance Reporting&quot;</em> - Why automation pays for itself
            </li>
            <li>
              <em>&quot;ERP Buyer&#39;s Guide for Brokers&quot;</em> - Essential features and implementation considerations
            </li>
          </ul>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-lg bg-[#8167FF] px-5 py-3 text-sm font-semibold text-[#0a2440] shadow-[0_20px_45px_-25px_rgba(129,103,255,0.85)] transition hover:-translate-y-0.5 hover:bg-[#6d54f0] sm:text-base"
            >
              Subscribe to Insights
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-white/10 px-5 py-3 text-sm font-semibold text-[#0a2440] ring-1 ring-white/15 transition hover:bg-white/15 sm:text-base"
            >
              Book a Demo
            </Link>
          </div>
        </div>
        */}
      </div>
    </section>
  );
}
