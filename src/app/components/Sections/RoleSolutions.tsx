import { IconBriefcase, IconCalculator, IconCrown } from "@tabler/icons-react";
import Link from "next/link";

const personas = [
  {
    title: "For Sales Leaders",
    description:
      "Accelerate deal velocity with faster quoting, better pipeline visibility, and tools that help your team close more business.",
    icon: IconBriefcase,
  },
  {
    title: "For Finance Directors",
    description:
      "Gain complete financial control with real-time dashboards, margin analysis, and automated compliance reporting.",
    icon: IconCalculator,
  },
  {
    title: "For CEOs/MDs",
    description:
      "Drive profitable growth with comprehensive business intelligence, operational efficiency, and strategic insights.",
    icon: IconCrown,
  },
];

export default function RoleSolutions() {
  return (
    <section className="relative isolate overflow-hidden bg-[#12072e] py-20 text-white sm:py-24">
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.35),transparent_70%)]"
        aria-hidden
      />
      <div className="mx-auto flex max-w-5xl flex-col gap-12 px-4 text-center sm:px-6 lg:px-8">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold text-amber-300 sm:text-5xl">Solutions Tailored to Your Role</h2>
          <p className="text-lg text-white/70 sm:text-xl">
            Whether you&apos;re a Sales Leader, Finance Director, or CEO/MD, Dashing Distribution addresses your specific challenges and objectives.
          </p>
        </div>
        <div className="grid gap-6 text-left sm:grid-cols-2 lg:grid-cols-3">
          {personas.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="flex h-full flex-col gap-4 rounded-3xl border border-white/15 bg-white/5 p-8 shadow-[0_40px_80px_-60px_rgba(12,10,43,0.7)] backdrop-blur"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-amber-200">
                <Icon className="h-6 w-6" aria-hidden />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <p className="text-sm leading-relaxed text-white/75">{description}</p>
              </div>
              <Link href="/contact" className="mt-auto text-sm font-semibold text-amber-200 underline-offset-4 hover:underline">
                Learn more
              </Link>
            </article>
          ))}
        </div>
        <div className="mx-auto">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-[#8167FF] px-6 py-3 text-base font-semibold text-white shadow-[0_25px_50px_-20px_rgba(129,103,255,0.9)] transition hover:-translate-y-0.5 hover:bg-[#6d54f0]"
          >
            Book Demo
          </Link>
        </div>
      </div>
    </section>
  );
}
