import Link from "next/link";
import { IconBroadcast, IconPlayerPlay, IconCalendarEvent } from "@tabler/icons-react";

export default function ResourcesExperts() {
  return (
    <section className="relative isolate overflow-hidden bg-white py-16 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-lime-400">Experts</p>
        <h2 className="mt-2 text-4xl font-extrabold text-[#0a2440] sm:text-5xl">Learn From the Experts</h2>
        <p className="mt-4 max-w-4xl text-base leading-relaxed text-[#0a2440]/80 sm:text-lg">
          Join industry leaders and technology experts in our exclusive webinar series designed to help commercial real estate professionals navigate today&#39;s evolving marketplace. Access both live sessions and comprehensive on-demand recordings.
        </p>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.25fr_1fr] lg:gap-12">
          {/* Left: Webinars content */}
          <div>
            <div className="flex items-center gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#0a2440]/5">
                <IconBroadcast className="h-5 w-5 text-lime-400" aria-hidden />
              </span>
              <h3 className="text-2xl font-extrabold text-[#0a2440]">Upcoming Live Webinars</h3>
            </div>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#0a2440]/80 sm:text-base">
              Participate in interactive sessions covering emerging trends, best practices, and innovative solutions. Our expert-led webinars provide actionable insights and direct access to industry thought leaders for Q&amp;A sessions.
            </p>
            <ul className="mt-4 space-y-2 text-[#0a2440]/90">
              {[
                "Strategic technology adoption for growth",
                "Market analysis and trend forecasting",
                "Operational efficiency optimisation",
                "Client relationship management strategies",
              ].map(item => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-lime-400" />
                  <span className="text-sm sm:text-base leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex items-center gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#0a2440]/5">
                <IconPlayerPlay className="h-5 w-5 text-lime-400" aria-hidden />
              </span>
              <h3 className="text-2xl font-extrabold text-[#0a2440]">On-Demand Library</h3>
            </div>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#0a2440]/80 sm:text-base">
              Access our comprehensive collection of recorded sessions, including the popular <em>&quot;How Brokers Can Drive Growth With Real-Time ERP&quot;</em> presentation that has helped hundreds of professionals streamline their operations.
            </p>

            <div className="mt-6">
              <Link
                href="#"
                className="inline-flex items-center justify-center rounded-lg bg-lime-400 px-6 py-3 text-base font-semibold text-[#0a2440] shadow-[0_20px_45px_-25px_rgba(163,230,53,0.65)] transition hover:-translate-y-0.5 hover:bg-lime-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0a2440]/20"
              >
                Register for Next Webinar
              </Link>
            </div>
          </div>

          {/* Right: Industry Events card */}
          <aside className="rounded-2xl border border-[#0a2440]/10 bg-white p-6 shadow-[0_25px_60px_-35px_rgba(12,10,43,0.15)] sm:p-7">
            <div className="flex items-start gap-4">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#0a2440]/5">
                <IconCalendarEvent className="h-5 w-5 text-lime-400" aria-hidden />
              </span>
              <div>
                <h3 className="text-xl font-bold text-[#0a2440]">Industry Events</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#0a2440]/80">
                  Meet our team at leading commercial real estate conferences and trade shows throughout the year. We regularly sponsor and present at major industry events.
                </p>
                <p className="mt-4 text-sm font-semibold text-[#0a2440]">Upcoming Appearances:</p>
                <ul className="mt-3 space-y-2 text-[#0a2440]/90">
                  {[
                    "ICSC Convention & Deal Making",
                    "NAIOP Commercial Real Estate Development Association",
                    "CoreNet Global Summit",
                  ].map(ev => (
                    <li key={ev} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-lime-400" />
                      <span className="text-sm leading-relaxed">{ev}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>

        {/* Internal divider */}
        <div className="mt-10 h-px w-full bg-[#0a2440]/10" aria-hidden />

        <p className="mt-6 max-w-5xl text-sm leading-relaxed text-[#0a2440]/80 sm:text-base">
          Whether you&#39;re looking to optimise existing processes, implement new technology solutions, or scale your
          brokerage operations, our resource library provides the insights and expertise you need to succeed in today&#39;s
          competitive commercial real estate market.
        </p>
      </div>
    </section>
  );
}
