import Link from "next/link";
import Image from "next/image";

export default function SalesLeadersHero() {
  return (
    <section className="relative isolate overflow-hidden">
  <div className="mx-auto grid max-w-7xl items-stretch gap-0 overflow-hidden rounded-3xl px-4 sm:px-6 lg:grid-cols-2 lg:px-8 py-32">
        {/* Left panel */}
  <div className="relative flex flex-col justify-center overflow-hidden px-6 py-16 sm:px-10">
          <div
            className="pointer-events-none absolute inset-0 -z-10"
            aria-hidden
          />

          <div className="space-y-5">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
              Close More Deals, Faster
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
              Finally, a broker-specific ERP that gives sales leaders real-time quoting, transparency,
              and workflows built to win deals.
            </p>
            <div>
          <Link
            href="https://dashing-distribution-software-144785672.hubspotpagebuilder.eu/book-a-dashing-demo"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-lime-400 px-5 py-3 text-sm font-semibold text-[#0a2440] shadow-[0_20px_45px_-25px_rgba(129,103,255,0.85)] transition hover:-translate-y-0.5 hover:bg-[#6d54f0]"
          >
            <span aria-hidden>👉</span>
            Book a Demo — See It in Action
          </Link>
        </div>
          </div>
        </div>

        {/* Right panel hero image */}
        <div className="flex w-full items-center justify-center">
          <div className="relative h-[400px] w-full max-w-lg overflow-hidden ">
            <Image
              src="/LaptopUpArrow.png"
              alt="Sales leaders dashboard and business growth illustration"
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
