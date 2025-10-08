import { IconCheck } from "@tabler/icons-react";
import Link from "next/link";

export default function ContactDemoSection() {
  return (
    <section className="relative isolate overflow-hidden py-16 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-extrabold text-amber-300 sm:text-5xl">See Dashing in Action</h1>
          <p className="mt-4 text-base leading-relaxed text-white/80 sm:text-lg">
            Experience firsthand how our platform transforms brokerage operations. Book a personalised demonstration to
            discover how Dashing can streamline your workflow, enhance client relationships, and drive measurable
            results for your firm.
          </p>
        </div>

        {/* Field cards */}
        <div className="mt-8 grid gap-6 sm:mt-10 sm:grid-cols-2">
          {[
            { title: "Name", desc: "Your full name for personalised demo preparation" },
            { title: "Email Address", desc: "Professional email for demo scheduling and follow-up materials" },
            { title: "Company", desc: "Your brokerage firm name to customise the demonstration" },
            { title: "Role", desc: "Your position to tailor the demo to your specific needs" },
          ].map(({ title, desc }) => (
            <div
              key={title}
              className="rounded-2xl border border-white/15 bg-white/5 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_25px_60px_-35px_rgba(12,10,43,0.65)]"
            >
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <Link
            href="#"
            className="inline-flex items-center justify-center rounded-lg bg-[#8167FF] px-6 py-3 text-base font-semibold text-white shadow-[0_20px_45px_-25px_rgba(129,103,255,0.85)] transition hover:-translate-y-0.5 hover:bg-[#6d54f0]"
          >
            Book Your Demo Today
          </Link>
        </div>

        {/* Trust and benefits */}
        <div className="mt-10 grid gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 sm:p-7">
            <div className="flex items-start gap-4">
              <span className="mt-1 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md bg-white/10 ring-1 ring-white/20">
                <IconCheck className="h-4 w-4 text-white/85" aria-hidden />
              </span>
              <div>
                <h3 className="text-lg font-semibold text-white sm:text-xl">Trusted by Leading Brokerages</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/80 sm:text-base">
                  Join hundreds of successful brokerage firms across North America and Europe who rely on Dashing to
                  optimise their operations and exceed client expectations.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-6">
              <h4 className="text-lg font-semibold text-white">Migration Support</h4>
              <p className="mt-2 text-sm leading-relaxed text-white/80">
                Seamless transition from your current systems with dedicated technical assistance.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-6">
              <h4 className="text-lg font-semibold text-white">Full Onboarding</h4>
              <p className="mt-2 text-sm leading-relaxed text-white/80">
                Comprehensive training and setup to ensure immediate productivity gains.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
