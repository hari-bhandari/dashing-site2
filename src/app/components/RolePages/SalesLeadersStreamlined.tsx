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
    <section className="relative isolate overflow-hidden py-16 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="max-w-4xl text-4xl font-extrabold text-amber-300 sm:text-5xl">
          From first quote to closed deal, streamlined in one platform
        </h2>

        <ol className="mt-10 space-y-8">
          {steps.map(({ icon: Icon, title, description }, idx) => (
            <li key={idx} className="grid grid-cols-[64px_auto] items-start gap-5">
              {/* Icon tile */}
              <div className="relative flex h-16 w-16 items-center justify-center rounded-xl border border-white/15 bg-white/10 shadow-[0_25px_60px_-35px_rgba(12,10,43,0.65)]">
                <Icon className="h-7 w-7 text-white/85" aria-hidden />
                {/* simple notch accent */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 h-3 w-1 rounded-r bg-amber-300" aria-hidden />
              </div>
              {/* Copy */}
              <div>
                <h3 className="text-lg font-semibold text-white sm:text-xl">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/80 sm:text-base">{description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
