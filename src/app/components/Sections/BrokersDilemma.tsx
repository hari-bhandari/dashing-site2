import { IconBolt, IconEyeOff, IconGauge } from "@tabler/icons-react";

export default function BrokersDilemma() {
  const challenges = [
    {
      title: "Lack of Speed",
      description:
        "Manual processes and outdated systems create bottlenecks that cost you deals in today's fast-moving market.",
      Icon: IconBolt,
    },
    {
      title: "Lack of Visibility",
      description:
        "Without real-time insights, you're flying blind on inventory, deals, and performance metrics that matter most.",
      Icon: IconEyeOff,
    },
    {
      title: "Inefficiency",
      description:
        "Disconnected tools and workflows waste time, increase errors, and prevent your team from reaching full potential.",
      Icon: IconGauge,
    },
  ];

  return (
    <section className="relative isolate overflow-hidden bg-white py-20 sm:py-24 text-[#0a2440]">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 text-center sm:px-6 lg:px-8">
        <div className="space-y-5">
          <p className="text-xs font-semibold uppercase tracking-widest text-lime-400">Dilemma</p>
          <h2 className="text-4xl font-extrabold text-[#0a2440] sm:text-5xl">The Broker&apos;s Dilemma</h2>
          <p className="text-lg text-[#0a2440]/70 sm:text-xl">
            Brokers across North America &amp; Europe face the same critical challenges that slow growth and limit profitability.
          </p>
        </div>
        <div className="grid gap-6 text-left sm:grid-cols-2 lg:grid-cols-3">
          {challenges.map(({ title, description, Icon }) => (
            <article
              key={title}
              className="group rounded-2xl border border-[#0a2440]/10 bg-white p-7 shadow-[0_25px_60px_-35px_rgba(12,10,43,0.15)] transition-transform duration-200 hover:-translate-y-1"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#0a2440]/5">
                <Icon className="h-5 w-5 text-lime-400" aria-hidden />
              </div>
              <h3 className="text-base font-semibold text-[#0a2440] sm:text-lg">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#0a2440]/75 sm:text-base">{description}</p>
            </article>
          ))}
        </div>
        <p className="text-base font-medium text-[#0a2440]/80">
          The need is clear: a modern system purpose-built for how brokers work.
        </p>
      </div>
    </section>
  );
}
