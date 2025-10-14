import Link from "next/link";

export default function ResourcesInsights() {
  return (
    <section className="relative isolate overflow-hidden py-16 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-amber-300 sm:text-5xl">Expert Insights & Industry Knowledge</h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-white/80 sm:text-lg">
            Stay informed with our curated collection of articles covering the most pressing challenges facing commercial
            real estate brokers today. Our SEO-driven content delivers actionable strategies to help you work smarter,
            not harder.
          </p>
        </div>

        {/* Category cards */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Sales Efficiency */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_25px_60px_-35px_rgba(12,10,43,0.65)]">
            <h3 className="text-xl font-bold text-white">Sales Efficiency</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/80">
              Streamline your deal flow with proven methodologies and cutting-edge technology solutions that reduce
              friction and accelerate closings.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-white/85">
              <li>Lead qualification frameworks</li>
              <li>Deal pipeline optimisation</li>
              <li>Client relationship management</li>
            </ul>
          </div>

          {/* Finance & Control */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_25px_60px_-35px_rgba(12,10,43,0.65)]">
            <h3 className="text-xl font-bold text-white">Finance &amp; Control</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/80">
              Master the financial aspects of brokerage operations with comprehensive guides on reporting, compliance,
              and cost management.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-white/85">
              <li>Commission tracking systems</li>
              <li>Financial reporting automation</li>
              <li>Regulatory compliance</li>
            </ul>
          </div>

          {/* Growth Strategies */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_25px_60px_-35px_rgba(12,10,43,0.65)]">
            <h3 className="text-xl font-bold text-white">Growth Strategies</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/80">
              Scale your brokerage with strategic insights on market expansion, team development, and technology
              integration.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-white/85">
              <li>Market penetration tactics</li>
              <li>Team performance metrics</li>
              <li>Technology adoption roadmaps</li>
            </ul>
          </div>
        </div>

        {/* Featured Articles */}
        <div className="mt-14 text-center">
          <h3 className="text-3xl font-extrabold text-amber-300 sm:text-4xl">Featured Articles</h3>
          <ul className="mx-auto mt-6 max-w-5xl list-disc space-y-3 pl-6 text-left text-white/90">
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
              className="inline-flex items-center justify-center rounded-lg bg-[#8167FF] px-5 py-3 text-sm font-semibold text-white shadow-[0_20px_45px_-25px_rgba(129,103,255,0.85)] transition hover:-translate-y-0.5 hover:bg-[#6d54f0] sm:text-base"
            >
              Subscribe to Insights
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/15 transition hover:bg-white/15 sm:text-base"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
