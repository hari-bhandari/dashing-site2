import { IconGitBranch, IconUsersGroup, IconEyeOff, IconRocket } from "@tabler/icons-react";

export default function CEOsGrowthStalls() {
  const bullets = [
    "Fragmented systems create inefficiencies",
    "Growth adds headcount without adding profit",
    "Lack of transparency increases operational risk",
    "Competitors with modern systems win deals faster",
  ];
  const icons = [IconGitBranch, IconUsersGroup, IconEyeOff, IconRocket];

  return (
    <section className="relative isolate overflow-hidden py-16 sm:py-32">
      <div className="mx-auto grid w-full max-w-7xl items-stretch gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
        {/* Left: placeholder image */}
        <div className="order-2 min-h-[320px] lg:order-1">
          <div className="flex h-full w-full items-center justify-center rounded-2xl border border-white/15 bg-[url('/Pattern.svg')] bg-cover bg-center p-6 text-white/70 ring-1 ring-white/10">
            <div className="flex h-[360px] w-full max-w-md items-center justify-center rounded-xl bg-white/10 text-center text-sm font-semibold uppercase tracking-[0.25em]">
              Image Placeholder
            </div>
          </div>
        </div>

        {/* Right: copy */}
        <div className="order-1 lg:order-2">
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl">Why growth stalls for many brokers</h2>
          <ul className="mt-8 space-y-5 text-white/90">
            {bullets.map((text, idx) => {
              const Icon = icons[idx % icons.length];
              return (
                <li key={text} className="grid grid-cols-[40px_auto] items-start gap-4">
                  <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-b from-white/10 to-white/5 ring-1 ring-white/15">
                    <Icon className="h-4 w-4 text-lime-400" aria-hidden />
                  </span>
                  <span className="text-lg font-semibold leading-snug">{text}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
