import { IconCheck } from "@tabler/icons-react";
import Image from "next/image";

export default function SalesLeadersTrust() {
  return (
    <section className="relative isolate overflow-hidden py-16 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[auto_minmax(0,1fr)] items-start pb-8 sm:pb-10">
          {/* Image column */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative aspect-square w-56 mt-12 sm:w-64 overflow-hidden">
              <Image
                src="/handshake.png"
                alt="Handshake representing trusted broker partnership"
                fill
                sizes="(min-width:1024px) 256px, (min-width:640px) 224px, 200px"
                className="object-cover object-center"
                quality={100}
                priority={false}
              />
              <div className="absolute inset-0 bg-[#0a2440]/30" aria-hidden />
              <span className="sr-only">Trusted brokers background image</span>
            </div>
          </div>
          {/* Textual content column */}
          <div className="flex flex-col gap-6">
            <h2 className="text-4xl font-extrabold text-white sm:text-5xl">Trusted by brokers like you</h2>
            <div className="flex items-start gap-4">
              <div className="h-full w-1 rounded-full bg-amber-300/70" aria-hidden />
              <p className="text-2xl font-bold leading-snug text-white sm:text-3xl md:text-4xl">
                &ldquo;I highly recommend Dashing if you want to get ahead of the competition. Their professionalism,
                expertise, and exceptional distribution solutions have greatly benefited my business. Their team is
                responsive and dedicated, providing outstanding customer service. They are lightyears ahead of any
                other software!!&rdquo;
              </p>
            </div>
            {/* Logo strip placeholder */}
            <div className="flex items-center gap-4 opacity-80">
              {Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className="flex h-8 w-28 items-center justify-center rounded-md border border-dashed border-white/25 bg-white/5 text-[10px] font-semibold uppercase tracking-wider text-white/60"
                >
                  Logo
                </div>
              ))}
            </div>
            {/* Commitment bar */}
            <div className="w-full rounded-lg bg-emerald-700/90 px-5 py-4 text-white shadow-[0_20px_45px_-30px_rgba(0,0,0,0.6)] ring-1 ring-emerald-400/30">
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md bg-emerald-600/80">
                  <IconCheck className="h-4 w-4" aria-hidden />
                </span>
                <p className="text-sm sm:text-base">
                  <span className="font-semibold">Commitment:</span> full onboarding, training, and satisfaction guarantee.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
