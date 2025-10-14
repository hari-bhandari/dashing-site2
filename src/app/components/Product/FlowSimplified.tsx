import Link from "next/link";
import { IconPhone, IconCalculator, IconChartBar, IconTrendingUp } from "@tabler/icons-react";

type Step = {
  icon: React.ElementType;
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    icon: IconPhone,
    title: "Capture Enquiries",
    description:
      "Centralise all client enquiries from multiple channels into one unified system for immediate action.",
  },
  {
    icon: IconCalculator,
    title: "Quote Instantly",
    description:
      "Generate competitive quotes in minutes using real-time pricing data and automated calculations.",
  },
  {
    icon: IconChartBar,
    title: "Track Sales & Finance",
    description:
      "Monitor every deal\u0027s progress whilst maintaining complete financial oversight and reporting.",
  },
  {
    icon: IconTrendingUp,
    title: "Grow Profitably",
    description:
      "Scale your operations with data-driven insights and automated processes that increase efficiency.",
  },
];

export default function FlowSimplified() {
  return (
    <section className="relative isolate overflow-hidden py-16 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-amber-300 sm:text-5xl">From Enquiry to Growth, Simplified</h2>
          <p className="mx-auto mt-4 max-w-4xl text-base leading-relaxed text-white/80 sm:text-lg">
            Our streamlined workflow transforms complex brokerage operations into a seamless, efficient process that
            drives results at every stage.
          </p>
        </div>

        <ol className="mx-auto mt-10 max-w-5xl space-y-8">
          {steps.map(({ icon: Icon, title, description }, idx) => (
            <li key={idx} className="grid grid-cols-[72px_auto] items-start gap-5">
              {/* Icon column */}
              <div className="relative flex h-20 w-16 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10">
                <Icon className="h-6 w-6 text-white/85" aria-hidden />
                {/* decorative chevron notch */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 h-4 w-1 rounded-r bg-amber-300" aria-hidden />
              </div>
              {/* Copy */}
              <div>
                <h3 className="text-xl font-bold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/80 sm:text-base">{description}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-10 flex justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-[#8167FF] px-6 py-3 text-base font-semibold text-white shadow-[0_20px_45px_-25px_rgba(129,103,255,0.85)] transition hover:-translate-y-0.5 hover:bg-[#6d54f0]"
          >
            Book a Demo – See the Flow in Action
          </Link>
        </div>
      </div>
    </section>
  );
}
