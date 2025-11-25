import { IconClipboardList, IconFileDollar, IconGauge, IconChartBar } from "@tabler/icons-react";
import Link from "next/link";
import Image from "next/image";

const journey = [
  {
    title: "Capture",
    description:
      "Enquiries flow straight into your system, ensuring no lead is missed and every opportunity is tracked from the outset.",
    icon: IconClipboardList,
  },
  {
    title: "Quote",
    description:
      "Generate accurate and competitive quotes instantly, empowering your team to respond faster and secure more deals.",
    icon: IconFileDollar,
  },
  {
    title: "Control",
    description:
      "Gain real-time visibility into sales performance, financial health, and inventory levels for complete command of operations.",
    icon: IconGauge,
  },
  {
    title: "Grow",
    description:
      "Scale profitably with data-driven clarity, optimising every aspect for sustained success and expansion.",
    icon: IconChartBar,
  },
];

export default function DashingJourney() {
  return (
    <section className="relative isolate overflow-hidden bg-[#0a2440] py-20 text-white sm:py-24">
      <div
        className="absolute inset-0 -z-10"
        aria-hidden
      />
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center lg:gap-16 lg:px-8">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-white sm:text-5xl">
              From enquiry to growth, simplified
            </h2>
            <p className="text-lg text-white/70 sm:text-xl">
              Dashing streamlines your entire brokerage operation, transforming complex processes into a clear, four-step journey designed for efficiency and profitability.
            </p>
          </div>
          <ol className="space-y-5">
            {journey.map(({ title, description, icon: Icon }) => (
              <li
                key={title}
                className="flex items-start gap-4 rounded-3xl bg-white/5 p-5 shadow-[0_35px_70px_-60px_rgba(12,10,43,0.8)]"
              >
                <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-white/10 text-lime-400">
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-white">{title}</h3>
                  <p className="text-sm leading-relaxed text-white/75">{description}</p>
                </div>
              </li>
            ))}
          </ol>
          <Link
            href="/contact"
            className="inline-flex w-fit items-center justify-center rounded-full bg-lime-400 px-6 py-3 text-base font-semibold text-[#0a2440] shadow-[0_25px_50px_-20px_rgba(124,92,255,0.9)] transition hover:-translate-y-0.5 hover:bg-[#6846f0]"
          >
            Book a Demo — See It in Action
          </Link>
        </div>
        <div className="flex h-full w-full items-center justify-center">
          <div className="relative h-[420px] sm:h-[440px] lg:h-[480px] w-full max-w-lg overflow-hidden">
            <Image
              src="/fromEnquiryToGrowth.png"
              alt="Illustration of brokerage workflow growth progression"
              fill
              sizes="(min-width:1280px) 640px, (min-width:1024px) 560px, (min-width:640px) 420px, 90vw"
              className="object-cover select-none"
              priority={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
