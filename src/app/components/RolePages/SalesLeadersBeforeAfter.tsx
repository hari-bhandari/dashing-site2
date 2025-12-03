import Link from "next/link";
import { IconX, IconCheck } from "@tabler/icons-react";

const beforeItems = [
  "Quotes stuck in email chains",
  "Deals lost because competitors move faster",
  "No visibility across the sales pipeline",
  "Hours wasted chasing information",
];

const afterItems = [
  "Instant quoting from one system",
  "Faster response builds customer trust",
  "Real-time deal visibility across the team",
  "More time selling, less time chasing data",
];

export default function SalesLeadersBeforeAfter() {
  return (
    <section className="relative isolate overflow-hidden bg-white py-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-white to-lime-50/30" aria-hidden />
      <div className="mx-auto w-full max-w-6xl px-4 text-center sm:px-6 lg:px-8">
        <div className="space-y-4">
          <h2 className="text-4xl font-extrabold text-[#0a2440] sm:text-5xl">
            From missed deals to faster wins
          </h2>
          <p className="text-base text-[#0a2440]/75 sm:text-lg">
            Show the team how quickly everything changes when quoting, visibility, and execution live in one broker-specific system.
          </p>
        </div>

        <div className="mt-12 grid gap-8 text-left sm:grid-cols-2">
          <article className="rounded-3xl border border-rose-100 bg-white/90 p-8 shadow-[0_35px_80px_-55px_rgba(12,10,43,0.55)]">
            <p className="inline-flex items-center gap-2 rounded-full bg-rose-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-rose-500">
              Before
            </p>
            <ul className="mt-6 space-y-4 text-[#0a2440]">
              {beforeItems.map((text) => (
                <li key={text} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md bg-rose-500/15 text-rose-500 ring-1 ring-rose-500/20">
                    <IconX className="h-3.5 w-3.5" aria-hidden />
                  </span>
                  <p className="text-sm font-medium leading-relaxed sm:text-base">{text}</p>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-3xl border border-emerald-100 bg-white p-8 shadow-[0_35px_80px_-55px_rgba(5,150,105,0.4)]">
            <p className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-500">
              After with Dashing
            </p>
            <ul className="mt-6 space-y-4 text-[#0a2440]">
              {afterItems.map((text) => (
                <li key={text} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md bg-emerald-500/15 text-emerald-500 ring-1 ring-emerald-500/20">
                    <IconCheck className="h-3.5 w-3.5" aria-hidden />
                  </span>
                  <p className="text-sm font-medium leading-relaxed sm:text-base">{text}</p>
                </li>
              ))}
            </ul>
          </article>
        </div>


        <div className="mt-6 flex justify-center">
          <Link
            href="https://dashing-distribution-software-144785672.hubspotpagebuilder.eu/book-a-dashing-demo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#8167FF] px-6 py-3 text-base font-semibold text-white shadow-[0_25px_55px_-25px_rgba(129,103,255,0.8)] transition hover:-translate-y-0.5 hover:bg-[#6d54f0]"
          >
            <span aria-hidden>🚀</span>
            Book a Demo — Experience the After
          </Link>
        </div>
      </div>
    </section>
  );
}
