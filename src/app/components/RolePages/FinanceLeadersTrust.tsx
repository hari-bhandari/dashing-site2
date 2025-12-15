import Image from "next/image";
import { IconQuote } from "@tabler/icons-react";

export default function FinanceLeadersTrust() {
  return (
    <section className="w-full py-16 sm:py-24">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-lime-400">Trust</p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            Finance Directors trust Dashing to protect growth
          </h2>
        </div>

        {/* Testimonial card */}
        <div className="mt-10">
          <div className="mx-auto flex max-w-4xl flex-col gap-8 rounded-3xl border border-white/10 bg-white/[0.06] p-8 shadow-[0_25px_60px_-35px_rgba(12,10,43,0.35)] sm:flex-row sm:items-center">
            <div className="flex flex-col items-center gap-4 sm:w-1/3">
              <div className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-4 py-2">
                <Image src="/testimonials/Sonar.png" alt="Sonar Electronics" width={110} height={48} className="h-auto w-auto" />
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0a2440]/10">
                <IconQuote className="h-6 w-6 text-lime-400" aria-hidden />
              </div>
            </div>
            <div className="sm:w-2/3">
              <p className="text-2xl font-semibold leading-snug text-white sm:text-3xl">
                &ldquo;Our new Dashing software has been instrumental in streamlining our operations and the customer service and technical support is on point.&rdquo;
              </p>
              <p className="mt-5 text-sm font-semibold uppercase tracking-wide text-white/70">Sonar Electronics</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
