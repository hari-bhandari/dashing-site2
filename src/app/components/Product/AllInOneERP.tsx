import Link from "next/link";
import { IconBolt, IconGauge, IconChecklist, IconUsers } from "@tabler/icons-react";

type Feature = {
  icon: React.ElementType;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: IconBolt,
    title: "Real-Time Quoting",
    description:
      "Generate accurate quotes instantly with automated pricing engines and real-time market data integration. Eliminate delays and close deals faster.",
  },
  {
    icon: IconGauge,
    title: "Finance Dashboards",
    description:
      "Track revenue, commissions, and profitability with comprehensive financial reporting. Make informed decisions with clear visibility into your business performance.",
  },
  {
    icon: IconChecklist,
    title: "Inventory & Compliance",
    description:
      "Manage inventory and ensure regulatory compliance with automated tracking and audit trails. Never miss a renewal or compliance requirement again.",
  },
  {
    icon: IconUsers,
    title: "Team Collaboration",
    description:
      "Unite your team with shared workflows, client communication tools, and role-based permissions. Everyone stays aligned and productive.",
  },
];

export default function AllInOneERP() {
  return (
    <section className="relative isolate overflow-hidden py-16 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 pt-12 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">All-in-One ERP for Brokers</h1>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-white/80 sm:text-lg">
            Transform your brokerage operations with Dashing&#39;s comprehensive ERP solution. From real-time quoting to
            financial dashboards, we&#39;ve built everything brokers need to streamline operations and drive profitable
            growth.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="https://dashing-distribution-software-144785672.hubspotpagebuilder.eu/book-a-dashing-demo?hs_previe%E2%80%A6"
              className="inline-flex items-center justify-center rounded-lg bg-lime-400 px-5 py-3 text-sm font-semibold text-[#0a2440] shadow-[0_20px_45px_-25px_rgba(129,103,255,0.85)] transition hover:-translate-y-0.5 hover:bg-[#6d54f0] sm:text-base"
              target="_blank"
            >
              Explore Features in a Demo
            </Link>
        
          </div>
        </div>

        {/* Feature grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 ring-1 ring-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_25px_60px_-35px_rgba(12,10,43,0.65)]"
            >
              <div className="mb-4 inline-flex items-center justify-center rounded-full bg-white/5 p-3 ring-1 ring-white/10">
                <Icon className="h-5 w-5 text-lime-400" aria-hidden />
              </div>
              <h3 className="text-xl font-bold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/80 sm:text-base">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
