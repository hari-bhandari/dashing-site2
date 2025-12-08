import Link from "next/link";
import Image from "next/image";

export default function CEOsHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0a2440]">
      <div className="mx-auto grid min-h-[70vh] w-full max-w-7xl items-center gap-10 px-6 py-16 sm:py-24 lg:grid-cols-2 lg:gap-16">
        {/* Left: headline + copy */}
        <div className="space-y-6">
          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl">
            Achieve Profitable Growth with Broker-Specific ERP
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
            Scaling a brokerage shouldn&apos;t come with growing pains. Dashing gives CEOs clarity, efficiency, and confidence to grow sustainably.
          </p>
            <div>
              <Link
                href="https://dashing-distribution-software-144785672.hubspotpagebuilder.eu/book-a-dashing-demo"
                className="inline-flex items-center gap-2 rounded-lg bg-lime-400 px-5 py-3 text-base font-semibold text-[#0a2440] shadow-[0_20px_45px_-25px_rgba(129,103,255,0.85)] ring-1 ring-white/10 transition hover:-translate-y-0.5 hover:bg-[#6d54f0]"
              >
                <span aria-hidden>👉</span>
                Book a Demo - See How Dashing Can Help You Scale
              </Link>
            </div>
        </div>

        {/* Right: image (add src later) */}
        <div className="flex w-full items-center justify-center">
            <div className="relative h-[480px] sm:h-[540px] lg:h-[660px] w-full max-w-xl overflow-hidden">
            {/* TODO: update src when you have the final image path */}
            <Image
              src="/CEO hero.png"
              alt="CEO dashboard and business growth illustration"
              fill
                sizes="(min-width:1280px) 560px, (min-width:1024px) 480px, (min-width:640px) 400px, 90vw"
              className="object-contain select-none"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
