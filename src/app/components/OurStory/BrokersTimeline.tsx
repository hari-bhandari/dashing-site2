export default function BrokersTimeline() {
  return (
    <section className="relative w-full px-6 py-16 sm:py-32">
      <div className="mx-auto w-full max-w-7xl">
        <h2 className="text-center text-4xl font-extrabold tracking-tight text-white sm:text-4xl">
          Built by Brokers, for Brokers
        </h2>

        {/* Center vertical line on md+ */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-28 hidden h-[calc(100%-7rem)] w-px -translate-x-1/2 bg-gradient-to-b from-violet-500/10 via-violet-500/40 to-violet-500/10 md:block"
        />

        <div className="mt-12 grid grid-cols-1 gap-y-12 md:mt-16 md:grid-cols-[1fr_auto_1fr] md:gap-x-12">
          {/* Step 1 */}
          <div className="md:col-start-1">
            <div className="mb-4 flex items-center gap-3 md:hidden">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-600 text-sm font-semibold text-white shadow ring-1 ring-white/10">
                1
              </span>
              <span className="h-px flex-1 bg-violet-500/30" />
            </div>
            <h3 className="text-xl font-semibold text-white sm:text-2xl">
              Industry Challenge Recognised
            </h3>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-gray-300">
              Our founders, seasoned brokers with decades of experience, identified critical gaps in existing ERP solutions that were hindering operational efficiency across the industry.
            </p>
          </div>
          <div className="hidden md:col-start-2 md:flex md:items-start md:justify-center">
            <div className="relative">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600 text-base font-semibold text-white shadow-lg ring-1 ring-white/10">
                1
              </span>
            </div>
          </div>
          <div className="hidden md:col-start-3 md:block" />

          {/* Step 2 */}
          <div className="md:col-start-1 hidden md:block" />
          <div className="hidden md:col-start-2 md:flex md:items-start md:justify-center">
            <div className="relative">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600 text-base font-semibold text-white shadow-lg ring-1 ring-white/10">
                2
              </span>
            </div>
          </div>
          <div className="md:col-start-3">
            <div className="mb-4 flex items-center gap-3 md:hidden">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-600 text-sm font-semibold text-white shadow ring-1 ring-white/10">
                2
              </span>
              <span className="h-px flex-1 bg-violet-500/30" />
            </div>
            <h3 className="text-xl font-semibold text-white sm:text-2xl">Vision Takes Shape</h3>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-gray-300">
              Drawing from real-world broker challenges, we began developing a comprehensive platform designed specifically for the unique workflows and regulatory requirements of insurance intermediaries.
            </p>
          </div>

          {/* Step 3 */}
          <div className="md:col-start-1">
            <div className="mb-4 flex items-center gap-3 md:hidden">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-600 text-sm font-semibold text-white shadow ring-1 ring-white/10">
                3
              </span>
              <span className="h-px flex-1 bg-violet-500/30" />
            </div>
            <h3 className="text-xl font-semibold text-white sm:text-2xl">Dashing is Born</h3>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-gray-300">
              Our ERP solution launched with innovative features tailored to broker operations, streamlining everything from client management to compliance reporting with industry-specific expertise.
            </p>
          </div>
          <div className="hidden md:col-start-2 md:flex md:items-start md:justify-center">
            <div className="relative">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600 text-base font-semibold text-white shadow-lg ring-1 ring-white/10">
                3
              </span>
            </div>
          </div>
          <div className="hidden md:col-start-3 md:block" />

          {/* Step 4 */}
          <div className="md:col-start-1 hidden md:block" />
          <div className="hidden md:col-start-2 md:flex md:items-start md:justify-center">
            <div className="relative">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600 text-base font-semibold text-white shadow-lg ring-1 ring-white/10">
                4
              </span>
            </div>
          </div>
          <div className="md:col-start-3">
            <div className="mb-4 flex items-center gap-3 md:hidden">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-600 text-sm font-semibold text-white shadow ring-1 ring-white/10">
                4
              </span>
              <span className="h-px flex-1 bg-violet-500/30" />
            </div>
            <h3 className="text-xl font-semibold text-white sm:text-2xl">Growing Success</h3>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-gray-300">
              Today, Dashing empowers brokers across the UK to operate more efficiently, serve clients better, and focus on what they do best — building relationships and growing their business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
