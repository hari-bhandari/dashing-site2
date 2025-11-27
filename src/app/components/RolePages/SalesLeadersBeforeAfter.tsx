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
    <section className="relative isolate overflow-hidden sm:py-32 bg-white ">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-[#0a2440] sm:text-5xl">
          From missed deals to faster wins
        </h2>

        <div className="mt-10 grid gap-12 lg:grid-cols-2">
          {/* Before */}
          <div>
            <h3 className="text-lg font-semibold text-rose-400">Before (The Pain)</h3>
            <ul className="mt-4 space-y-3 text-[#0a2440]/90">
              {beforeItems.map((text) => (
                <li key={text} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-sm bg-rose-600/20 text-rose-400 ring-1 ring-rose-500/40">
                    <IconX className="h-3.5 w-3.5" aria-hidden />
                  </span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* After */}
          <div>
            <h3 className="text-lg font-semibold text-emerald-300">After (With Dashing)</h3>
            <ul className="mt-4 space-y-3 text-[#0a2440]/90">
              {afterItems.map((text) => (
                <li key={text} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-sm bg-emerald-500/20 text-emerald-300 ring-1 ring-emerald-400/40">
                    <IconCheck className="h-3.5 w-3.5" aria-hidden />
                  </span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-8 text-[#0a2440]">
          <span role="img" aria-hidden>
            👉
          </span>{" "}
          See how your sales team can move from “Before” to “After” in weeks.
        </p>

        <div className="mt-4">
        <Link
          href="https://dashing-distribution-software-144785672.hubspotpagebuilder.eu/book-a-dashing-demo"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#8167FF] px-6 py-3 text-base font-semibold text-white shadow-[0_20px_45px_-25px_rgba(129,103,255,0.85)] transition hover:-translate-y-0.5 hover:bg-[#6d54f0]"
        >
          <span aria-hidden>👉</span>
          Book a Demo — Experience the After
        </Link>
      </div>
      </div>
    </section>
  );
}
