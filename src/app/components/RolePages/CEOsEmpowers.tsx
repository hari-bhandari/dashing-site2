import { IconArrowsMaximize, IconGauge, IconShieldCheck, IconBolt } from "@tabler/icons-react";

export default function CEOsEmpowers() {
  const items = [
    { title: "Scalable platform", desc: "Supports multi-location, multi-employee growth.", Icon: IconArrowsMaximize },
    { title: "Operational efficiency", desc: "Grow revenue per employee.", Icon: IconGauge },
    { title: "Risk reduction", desc: "Compliance and control built in.", Icon: IconShieldCheck },
    { title: "Faster deal cycles", desc: "Drive top-line growth without chaos.", Icon: IconBolt },
  ];

  return (
    <section className="relative isolate overflow-hidden py-16 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-lime-400">Empowers</p>
        <h2 className="mt-2 text-4xl font-extrabold text-white sm:text-5xl">
          Dashing empowers leaders to grow with confidence
        </h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {items.map(({ title, desc, Icon }) => (
            <article
              key={title}
              className="rounded-2xl border border-[#0a2440]/10 p-6 shadow-[0_25px_60px_-35px_rgba(12,10,43,0.15)] transition-transform duration-200 hover:-translate-y-0.5 border-white/10 bg-white/[0.06] ring-1 ring-white/10"
            >
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#0a2440]/5">
                <Icon className="h-5 w-5 text-lime-400" aria-hidden />
              </div>
              <h3 className="text-xl font-bold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/80 sm:text-base">{desc}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 justify-center flex">
          <a
            href="https://dashing-distribution-software-144785672.hubspotpagebuilder.eu/book-a-dashing-demo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-lime-400 px-6 py-3 font-semibold text-[#0a2440] shadow-[0_20px_45px_-25px_rgba(163,230,53,0.85)] transition hover:-translate-y-0.5 hover:bg-lime-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0a2440]/20"
          >
            Get a Demo and Future-Proof Your Brokerage
          </a>
        </div>
      </div>
    </section>
  );
}
