import Link from "next/link";
import Image from "next/image";

export default function SalesLeadersFinalCTA() {
  return (
    <section className="relative isolate overflow-hidden py-16 sm:py-24">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
        {/* Left: rocket laptop image */}
        <div className="order-2 lg:order-1">
          <div className="relative w-full h-[320px] sm:h-[360px] lg:h-[400px] overflow-hidden rounded-2xl">
            <Image
              src="/laptoprocket.png"
              alt="Laptop launching upward with rocket symbolizing accelerated broker growth"
              fill
              sizes="(min-width:1280px) 560px, (min-width:1024px) 480px, (min-width:640px) 90vw, 100vw"
              className="object-contain object-center select-none"
              priority
            />
          </div>
        </div>

        {/* Right: copy + CTA */}
        <div className="order-1 space-y-6 lg:order-2">
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl">Ready to win more deals?</h2>
          <p className="max-w-xl text-2xl font-semibold leading-snug text-white/90">
            See how <span className="text-white">Dashing</span> empowers broker sales teams with speed, clarity, and confidence.
          </p>
          <div>
            <Link
          href="https://dashing-distribution-software-144785672.hubspotpagebuilder.eu/book-a-dashing-demo"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-lime-400 px-6 py-3 text-[#0a2440] font-semibold shadow-[0_20px_45px_-25px_rgba(129,103,255,0.85)] transition hover:-translate-y-0.5 hover:bg-[#6d54f0]"
        >
              <span aria-hidden>👉</span>
              Book a Demo Today
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
