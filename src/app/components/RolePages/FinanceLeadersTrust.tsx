import Image from "next/image";
import { IconQuote, IconAward, IconShieldCheck } from "@tabler/icons-react";

export default function FinanceLeadersTrust() {
  return (
    <section className="w-full py-16 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-lime-400">Trust</p>
        <h2 className="mt-2 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
          Finance Directors trust Dashing to protect growth
        </h2>

        {/* Testimonial card */}
        <div className="mt-8 rounded-2xl border border-[#0a2440]/10 p-6 shadow-[0_25px_60px_-35px_rgba(12,10,43,0.15)] sm:p-8">
          <div className="flex items-start gap-4">
            <div className="hidden h-full w-[2px] bg-[#0a2440]/15 sm:block" />
            <div className="w-full">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#0a2440]/5">
                <IconQuote className="h-5 w-5 text-lime-400" aria-hidden />
              </div>
              <p className="text-2xl font-extrabold leading-snug text-white sm:text-3xl">
                &ldquo;Our new Dashing software has been instrumental in streamlining our operations and the customer service and technical support is on point.&rdquo;
              </p>
              <div className="mt-6 inline-block overflow-hidden rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                <Image
                  src="/testimonials/Sonar.png"
                  alt="Sonar Electronics"
                  width={220}
                  height={60}
                  className="h-auto w-auto"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Credibility + Assurance */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_25px_60px_-35px_rgba(0,0,0,0.55)] ring-1 ring-white/10 backdrop-blur-sm transition-transform duration-200 hover:-translate-y-0.5 hover:border-white/20">
            <div className="mb-4 flex items-center gap-3">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15">
                <IconAward className="h-5 w-5 text-lime-400" aria-hidden />
              </div>
              <span className="h-px flex-1 bg-white/15" />
            </div>
            <h3 className="text-base font-semibold text-white sm:text-lg">Industry credibility</h3>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/75 sm:text-base">
              Even small early adopters or peer quotes validate our approach to financial management solutions.
            </p>
          </article>
          <article className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_25px_60px_-35px_rgba(0,0,0,0.55)] ring-1 ring-white/10 backdrop-blur-sm transition-transform duration-200 hover:-translate-y-0.5 hover:border-white/20">
            <div className="mb-4 flex items-center gap-3">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15">
                <IconShieldCheck className="h-5 w-5 text-lime-400" aria-hidden />
              </div>
              <span className="h-px flex-1 bg-white/15" />
            </div>
            <h3 className="text-base font-semibold text-white sm:text-lg">Assurance messaging</h3>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/75 sm:text-base">
              Full training, onboarding, and satisfaction guarantee included with every implementation.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
