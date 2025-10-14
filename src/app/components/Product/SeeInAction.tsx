import Link from "next/link";

export default function SeeInAction() {
  return (
    <section className="relative isolate overflow-hidden py-16 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-4xl font-extrabold text-amber-300 sm:text-5xl">See Dashing in Action</h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/80 sm:text-lg">
            Experience firsthand how Dashing ERP can transform your broker operations. Book a personalised
            demonstration tailored to your specific needs and challenges.
          </p>

          <h3 className="mt-8 text-2xl font-extrabold text-amber-300 sm:text-3xl">
            Trusted by Brokers Across North America &amp; Europe
          </h3>
          <p className="mt-2 max-w-4xl text-sm leading-relaxed text-white/80 sm:text-base">
            Join the growing community of brokers that have streamlined their operations, improved their profitability,
            and accelerated their growth with Dashing ERP.
          </p>

          {/* Benefit cards */}
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            {[
              {
                title: "Complete Migration Support",
                copy:
                  "Our expert team ensures a smooth transition from your current system with zero data loss and minimal downtime.",
              },
              {
                title: "Comprehensive Onboarding",
                copy:
                  "Full training programmes and dedicated support ensure your team is confident and productive from day one.",
              },
              {
                title: "Satisfaction Guarantee",
                copy:
                  "We&#39;re so confident in Dashing ERP that we back it with our complete satisfaction guarantee.",
              },
            ].map(({ title, copy }) => (
              <div key={title} className="rounded-2xl border border-white/15 bg-white/[0.04] p-6 ring-1 ring-white/10">
                <h4 className="text-lg font-semibold text-white sm:text-xl">{title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-white/80 sm:text-base">{copy}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-[#8167FF] px-6 py-3 text-base font-semibold text-white shadow-[0_20px_45px_-25px_rgba(129,103,255,0.85)] transition hover:-translate-y-0.5 hover:bg-[#6d54f0]"
            >
              Book Your Demo Today
            </Link>
          </div>

          {/* Get Started list */}
          <div className="mt-10">
            <h4 className="text-xl font-extrabold text-amber-300 sm:text-2xl">Get Started</h4>
            <p className="mt-2 max-w-4xl text-sm leading-relaxed text-white/80 sm:text-base">
              Ready to transform your brokerage? Fill in your details below and we&#39;ll arrange a personalised
              demonstration at your convenience.
            </p>
            <div className="mt-4">
              <p className="font-semibold text-white">Demo Request Form:</p>
              <ul className="mt-2 list-disc space-y-1 pl-6 text-white/90">
                <li>Full Name</li>
                <li>Email Address</li>
                <li>Company Name</li>
                <li>Your Role</li>
                <li>Preferred Demo Date</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
