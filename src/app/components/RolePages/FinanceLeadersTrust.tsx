import Image from "next/image";
import { IconQuote, IconAward, IconShieldCheck } from "@tabler/icons-react";

export default function FinanceLeadersTrust() {
  return (
    <section className="w-full bg-white py-16 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-lime-400">Trust</p>
        <h2 className="mt-2 text-3xl font-extrabold leading-tight text-[#0a2440] sm:text-4xl">
          Finance Directors trust Dashing to protect growth
        </h2>

        {/* Testimonial card */}
        <div className="mt-8 rounded-2xl border border-[#0a2440]/10 bg-white p-6 shadow-[0_25px_60px_-35px_rgba(12,10,43,0.15)] sm:p-8">
          <div className="flex items-start gap-4">
            <div className="hidden h-full w-[2px] bg-[#0a2440]/15 sm:block" />
            <div className="w-full">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#0a2440]/5">
                <IconQuote className="h-5 w-5 text-lime-400" aria-hidden />
              </div>
              <p className="text-2xl font-extrabold leading-snug text-[#0a2440] sm:text-3xl">
                &ldquo;Our new Dashing software has been instrumental in streamlining our operations and the customer service and technical support is on point.&rdquo;
              </p>
              <div className="mt-6">
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
          <article className="rounded-2xl border border-[#0a2440]/10 bg-white p-6 shadow-[0_25px_60px_-35px_rgba(12,10,43,0.15)]">
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#0a2440]/5">
              <IconAward className="h-5 w-5 text-lime-400" aria-hidden />
            </div>
            <h3 className="text-xl font-extrabold text-[#0a2440]">Industry credibility</h3>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#0a2440]">
              Even small early adopters or peer quotes validate our approach to financial management solutions.
            </p>
          </article>
          <article className="rounded-2xl border border-[#0a2440]/10 bg-white p-6 shadow-[0_25px_60px_-35px_rgba(12,10,43,0.15)]">
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#0a2440]/5">
              <IconShieldCheck className="h-5 w-5 text-lime-400" aria-hidden />
            </div>
            <h3 className="text-xl font-extrabold text-[#0a2440]">Assurance messaging</h3>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#0a2440]">
              Full training, onboarding, and satisfaction guarantee included with every implementation.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
