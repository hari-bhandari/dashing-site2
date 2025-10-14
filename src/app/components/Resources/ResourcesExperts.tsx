import Link from "next/link";

export default function ResourcesExperts() {
  return (
    <section className="relative isolate overflow-hidden py-16 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-amber-300 sm:text-5xl">Learn From the Experts</h2>
        <p className="mt-4 max-w-4xl text-base leading-relaxed text-white/80 sm:text-lg">
          Join industry leaders and technology experts in our exclusive webinar series designed to help commercial real
          estate professionals navigate today&#39;s evolving marketplace. Access both live sessions and comprehensive
          on-demand recordings.
        </p>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.25fr_1fr] lg:gap-12">
          {/* Left: Webinars content */}
          <div>
            <h3 className="text-2xl font-extrabold text-amber-300">Upcoming Live Webinars</h3>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base">
              Participate in interactive sessions covering emerging trends, best practices, and innovative solutions.
              Our expert-led webinars provide actionable insights and direct access to industry thought leaders for
              Q&amp;A sessions.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-white/90">
              <li>Strategic technology adoption for growth</li>
              <li>Market analysis and trend forecasting</li>
              <li>Operational efficiency optimisation</li>
              <li>Client relationship management strategies</li>
            </ul>

            <h3 className="mt-8 text-2xl font-extrabold text-amber-300">On-Demand Library</h3>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base">
              Access our comprehensive collection of recorded sessions, including the popular
              {" "}
              <em>&quot;How Brokers Can Drive Growth With Real-Time ERP&quot;</em>{" "}
              presentation that has helped hundreds of professionals streamline their operations.
            </p>

            <div className="mt-6">
              <Link
                href="#"
                className="inline-flex items-center justify-center rounded-lg bg-[#8167FF] px-6 py-3 text-base font-semibold text-white shadow-[0_20px_45px_-25px_rgba(129,103,255,0.85)] transition hover:-translate-y-0.5 hover:bg-[#6d54f0]"
              >
                Register for Next Webinar
              </Link>
            </div>
          </div>

          {/* Right: Industry Events card */}
          <aside className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 ring-1 ring-white/10 sm:p-7">
            <div className="flex items-start gap-3">
              <span className="mt-1 inline-block h-5 w-5 rounded-md ring-1 ring-white/25" aria-hidden />
              <div>
                <h3 className="text-xl font-bold text-white">Industry Events</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/80">
                  Meet our team at leading commercial real estate conferences and trade shows throughout the year. We
                  regularly sponsor and present at major industry events.
                </p>
                <p className="mt-4 text-sm font-semibold text-white/90">Upcoming Appearances:</p>
                <ul className="mt-2 list-disc space-y-2 pl-6 text-white/90">
                  <li>ICSC Convention &amp; Deal Making</li>
                  <li>NAIOP Commercial Real Estate Development Association</li>
                  <li>CoreNet Global Summit</li>
                </ul>
              </div>
            </div>
          </aside>
        </div>

        {/* Internal divider */}
        <div className="mt-10 h-px w-full bg-white/20" aria-hidden />

        <p className="mt-6 max-w-5xl text-sm leading-relaxed text-white/80 sm:text-base">
          Whether you&#39;re looking to optimise existing processes, implement new technology solutions, or scale your
          brokerage operations, our resource library provides the insights and expertise you need to succeed in today&#39;s
          competitive commercial real estate market.
        </p>
      </div>
    </section>
  );
}
