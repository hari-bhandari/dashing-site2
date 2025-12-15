import { IconHourglass, IconEye, IconChecklist, IconBolt } from "@tabler/icons-react";
type PainPoint = {
  title: string;
  description: string;
};

const painPoints: PainPoint[] = [
  {
    title: "Slow quoting leads to lost deals",
    description:
      "Time-consuming manual processes mean opportunities slip away to faster competitors.",
  },
  {
    title: "Lack of visibility makes customers hesitant to buy",
    description:
      "Without real-time information, customers lose confidence in your ability to deliver.",
  },
  {
    title: "Manual workflows eat into selling time",
    description:
      "Administrative tasks prevent your team from focusing on what matters most — selling.",
  },
  {
    title: "Competitors move faster and win",
    description:
      "While you're still preparing quotes, your competition has already closed the deal.",
  },
];

export default function SalesLeadersPainPoints() {
  const icons = [IconHourglass, IconEye, IconChecklist, IconBolt];
  return (
    <section className="relative isolate overflow-hidden py-16 sm:py-32 bg-white">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-extrabold text-[#0a2440]">
          What&#39;s holding your sales team back?
        </h2>

        <div className="mt-8 grid gap-6 sm:mt-10 sm:grid-cols-2">
          {painPoints.map(({ title, description }, idx) => {
            const Icon = icons[idx % icons.length];
            return (
            <article
              key={title}
              className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_25px_60px_-35px_rgba(12,10,43,0.65)] backdrop-blur-sm"
            >
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#0a2440]/5">
                <Icon className="h-5 w-5 text-[#0a2440]" aria-hidden />
              </div>
              <h3 className="text-2xl font-semibold text-[#0a2440]">{title}</h3>
              <p className="mt-2 text-lg leading-relaxed text-[#0a2440]/80">{description}</p>
            </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
