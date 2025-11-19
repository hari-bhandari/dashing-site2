import { IconInbox, IconCalculator, IconChartBar, IconHandClick } from "@tabler/icons-react";

type Step = {
  icon: React.ElementType;
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    icon: IconInbox,
    title: "1. Capture enquiries instantly",
    description: "Every opportunity is logged and tracked from the moment it arrives.",
  },
  {
    icon: IconCalculator,
    title: "2. Generate quotes in real-time",
    description: "Create accurate, professional quotes with live pricing and availability.",
  },
  {
    icon: IconChartBar,
    title: "3. Track deal progress with full transparency",
    description: "Monitor every stage of the sales process with complete visibility.",
  },
  {
    icon: IconHandClick,
    title: "4. Close faster and grow revenue",
    description: "Streamlined processes mean more deals closed in less time.",
  },
];

export default function SalesLeadersStreamlined() {
  return (
    <section className="relative isolate overflow-hidden py-16 sm:py-24 bg-white">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-lime-400">Sales Flow</p>
          <h2 className="mt-3 text-4xl font-extrabold text-[#0a2440] sm:text-5xl">
            From first quote to closed deal, streamlined in one platform
          </h2>
        </div>

        <ol className="mt-10 mx-auto max-w-4xl space-y-8">
          {steps.map(({ icon: Icon, title, description }, idx) => (
            <li key={idx} className="grid grid-cols-[64px_auto] items-start gap-5">
              {/* Icon tile */}
              <div className="relative flex h-16 w-16 items-center justify-center rounded-xl bg-[#0a2440]/5 ring-1 ring-[#0a2440]/10 shadow-sm">
                <Icon className="h-7 w-7 text-lime-400" aria-hidden />
                {/* simple notch accent */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 h-3 w-1 rounded-r bg-lime-400" aria-hidden />
                {/* vertical connector */}
                {idx < steps.length - 1 && (
                  <div className="absolute left-1/2 top-full h-8 w-px -translate-x-1/2 bg-[#0a2440]/10" aria-hidden />
                )}
              </div>
              {/* Copy */}
              <div className="rounded-xl border border-[#0a2440]/10 bg-white p-4 sm:p-5 shadow-[0_10px_30px_-20px_rgba(10,36,64,0.25)] transition-shadow hover:shadow-[0_20px_45px_-25px_rgba(10,36,64,0.3)]">
                <span className="mb-1 inline-block text-xs font-semibold uppercase tracking-wide text-lime-400">Step {idx + 1}</span>
                <h3 className="text-lg font-semibold text-[#0a2440] sm:text-xl">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#0a2440]/80 sm:text-base">{description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
