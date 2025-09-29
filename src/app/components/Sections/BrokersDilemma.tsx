export default function BrokersDilemma() {
  const challenges = [
    {
      title: "Lack of Speed",
      description:
        "Manual processes and outdated systems create bottlenecks that cost you deals in today\'s fast-moving market.",
    },
    {
      title: "Lack of Visibility",
      description:
        "Without real-time insights, you\'re flying blind on inventory, deals, and performance metrics that matter most.",
    },
    {
      title: "Inefficiency",
      description:
        "Disconnected tools and workflows waste time, increase errors, and prevent your team from reaching full potential.",
    },
  ];

  return (
    <section className="relative isolate overflow-hidden bg-[#140930] py-20 text-white sm:py-24">
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(244,223,83,0.25),transparent_65%)] opacity-80"
        aria-hidden
      />
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 text-center sm:px-6 lg:px-8">
        <div className="space-y-5">
          <h2 className="text-4xl font-bold text-amber-300 sm:text-5xl">The Broker&apos;s Dilemma</h2>
          <p className="text-lg text-white/70 sm:text-xl">
            Brokers across North America &amp; Europe face the same critical challenges that slow growth and
            limit profitability.
          </p>
        </div>
        <div className="grid gap-6 text-left sm:grid-cols-2 lg:grid-cols-3">
          {challenges.map((challenge) => (
            <article
              key={challenge.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-8 shadow-[0_40px_90px_-60px_rgba(12,10,43,0.8)] backdrop-blur"
            >
              <h3 className="text-xl font-semibold text-white">{challenge.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70 sm:text-base">
                {challenge.description}
              </p>
            </article>
          ))}
        </div>
        <p className="text-base font-medium text-white/80">
          The need is clear: the right system built specifically for how brokers work.
        </p>
      </div>
    </section>
  );
}
