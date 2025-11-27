import Link from "next/link";
import Image from "next/image";

export default function FinanceLeadersHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#0a2440]">
      <div className="mx-auto grid min-h-[70vh] w-full max-w-7xl items-center gap-10 px-6 py-16 sm:py-24 lg:grid-cols-2 lg:gap-16">
        {/* Left: headline + copy */}
        <div className="space-y-6">
          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl">
            Gain Real-Time Control of Cashflow &amp; Inventory
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
            Stop relying on spreadsheets and disconnected systems. Dashing gives Finance Directors instant visibility and control across the business.
          </p>
          <div>
        <Link
          href="https://dashing-distribution-software-144785672.hubspotpagebuilder.eu/book-a-dashing-demo"
          className="inline-flex items-center gap-2 rounded-lg bg-lime-400 px-5 py-3 text-sm font-semibold text-[#0a2440] shadow-[0_20px_45px_-25px_rgba(129,103,255,0.85)] ring-1 ring-white/10 transition hover:-translate-y-0.5 hover:bg-[#6d54f0]"
        >
          <span aria-hidden>👉</span>
          Book a Demo - See Real-Time Control
        </Link>
      </div>
        </div>

        {/* Right: hero image (update src as needed) */}
        <div className="flex w-full items-center justify-center">
          <div className="relative h-[400px] w-full max-w-lg overflow-hidden">
            <Image
              src="/Picture1.png"
              alt="Finance leaders dashboard with real-time cashflow and inventory insights"
              fill
              sizes="(min-width:1280px) 480px, (min-width:1024px) 420px, (min-width:640px) 360px, 90vw"
              className="object-cover select-none"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
