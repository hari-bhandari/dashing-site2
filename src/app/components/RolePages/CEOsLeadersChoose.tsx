import { IconQuote, IconUsersGroup, IconLifebuoy } from "@tabler/icons-react";

export default function CEOsLeadersChoose() {
  return (
    <section className="relative isolate overflow-hidden py-16 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-2xl font-semibold uppercase tracking-widest text-lime-400">Why Dashing</p>
        <h2 className="mt-2 text-4xl font-extrabold text-white sm:text-5xl">
          Leaders choose Dashing to scale with confidence
        </h2>

        {/* Quote + logo */}
        <div className="mt-8 rounded-2xl border border-[#0a2440]/10 bg-white p-6 pb-12 shadow-[0_25px_60px_-35px_rgba(12,10,43,0.15)]">
          <div className="flex items-start gap-5">
            <div className="hidden h-full w-[2px] rounded bg-[#0a2440]/20 sm:block" aria-hidden />
            <div className="space-y-5">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#0a2440]/5">
                <IconQuote className="h-8 w-8 text-[#0a2440]" aria-hidden />
              </div>
              <p className="text-2xl font-bold leading-snug text-[#0a2440] sm:text-3xl md:text-4xl">
                &ldquo;I finally have an ERP software that I can rely on and where I know I will get the support and
                flexibility that is needed in this industry.&rdquo;
              </p>
              {/* Logo placeholder */}
              
            </div>
          </div>
        </div>

        {/* Bottom blurbs */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <article className="rounded-2xl border border-[#0a2440]/10 bg-white p-6 shadow-[0_25px_60px_-35px_rgba(12,10,43,0.15)]">
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#0a2440]/5">
              <IconUsersGroup className="h-8 w-8 text-[#0a2440]" aria-hidden />
            </div>
            <h3 className="text-xl font-extrabold text-[#0a2440] sm:text-2xl">Built by brokers, for brokers.</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#0a2440]/80 sm:text-base">
              Designed with real brokering workflows in mind so your team can work faster, align better, and scale confidently.
            </p>
          </article>
          <article className="rounded-2xl border border-[#0a2440]/10 bg-white p-6 shadow-[0_25px_60px_-35px_rgba(12,10,43,0.15)]">
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#0a2440]/5">
              <IconLifebuoy className="h-8 w-8 text-[#0a2440]" aria-hidden />
            </div>
            <h3 className="text-xl font-extrabold text-[#0a2440] sm:text-2xl">Full support included</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#0a2440]/80 sm:text-base">
              Onboarding, training, and responsive assistance so you always have an expert by your side.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
