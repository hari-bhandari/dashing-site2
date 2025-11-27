import Link from "next/link";

export default function DashingCTA() {
  return (
    <section className="relative isolate overflow-hidden bg-[#0a2440] py-20 text-white sm:py-24">
      <div
        className="absolute inset-0 -z-10"
        aria-hidden
      />
      <div className="mx-auto flex max-w-4xl flex-col gap-8 px-4 text-left sm:px-6 lg:px-8">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-white sm:text-5xl">Book a Demo Today</h2>
          <p className="text-lg font-semibold text-emerald-300">
            Experience the ERP built for brokers. Delivering speed, visibility, and clarity from day one.
          </p>
          <p className="text-base text-white/80">
            Built by brokers, for brokers. Our story begins with understanding your challenges because we&apos;ve lived them. Our leadership team and dedicated professionals are committed to your success.
          </p>
          <p className="text-base font-semibold text-white">
            Ready to win more deals and grow profitably?
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
        href="https://dashing-distribution-software-144785672.hubspotpagebuilder.eu/book-a-dashing-demo"
        className="inline-flex items-center justify-center rounded-full bg-lime-400 px-6 py-3 text-base font-semibold text-[#0a2440] shadow-[0_25px_50px_-20px_rgba(129,103,255,0.9)] transition hover:-translate-y-0.5 hover:bg-[#6c53f1]"
      >
            Book Your Demo Now
          </Link>
          <Link
            href="/your-data"
            className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:border-white/50"
          >
            General Contact
          </Link>
        </div>
      </div>
    </section>
  );
}
