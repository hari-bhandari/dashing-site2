'use client';

import { IconCheck } from "@tabler/icons-react";

export default function ContactDemoSection() {
  return (
    <section className="relative isolate overflow-hidden py-16 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">See Dashing in Action</h1>
          <p className="mt-4 text-base leading-relaxed text-white/80 sm:text-lg">
            Experience firsthand how our platform transforms brokerage operations. Book a personalised demonstration to
            discover how Dashing can streamline your workflow, enhance client relationships, and drive measurable
            results for your firm.
          </p>
        </div>

        {/* Demo request form */}
        <form className="mt-8 space-y-8 sm:mt-10" onSubmit={(e) => { e.preventDefault(); /* integrate submission later */ }}>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="flex flex-col space-y-2">
              <label htmlFor="name" className="text-sm font-semibold text-lime-400">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Jane Doe"
                className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] focus:outline-none focus:ring-2 focus:ring-lime-400/40"
              />
              <p className="text-xs text-white/60">Your full name for personalised demo preparation.</p>
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="email" className="text-sm font-semibold text-lime-400">Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@company.com"
                className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] focus:outline-none focus:ring-2 focus:ring-lime-400/40"
              />
              <p className="text-xs text-white/60">Professional email for scheduling and follow-up materials.</p>
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="company" className="text-sm font-semibold text-lime-400">Company</label>
              <input
                id="company"
                name="company"
                type="text"
                required
                placeholder="Acme Brokerage"
                className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] focus:outline-none focus:ring-2 focus:ring-lime-400/40"
              />
              <p className="text-xs text-white/60">Your brokerage firm name to customise the demo.</p>
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="role" className="text-sm font-semibold text-lime-400">Role</label>
              <input
                id="role"
                name="role"
                type="text"
                required
                placeholder="Managing Director"
                className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] focus:outline-none focus:ring-2 focus:ring-lime-400/40"
              />
              <p className="text-xs text-white/60">Your position to tailor the demo to your needs.</p>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-lg bg-lime-400 px-6 py-3 text-center text-sm font-semibold text-[#0a2440] shadow-[0_20px_45px_-25px_rgba(163,230,53,0.65)] transition hover:-translate-y-0.5 hover:bg-lime-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 sm:w-auto sm:text-base"
            >
              Book Your Demo Today
            </button>
          </div>
        </form>

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
