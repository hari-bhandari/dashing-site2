import Link from "next/link";
import { IconBolt, IconEye, IconSearch, IconDatabase } from "@tabler/icons-react";

type HelpItem = {
  icon: React.ElementType;
  title: string;
  description: string;
};

const items: HelpItem[] = [
  {
    icon: IconBolt,
    title: "Instant quoting → respond to opportunities before competitors",
    description:
      "Generate accurate quotes in minutes, not hours, giving you the competitive edge.",
  },
  {
    icon: IconEye,
    title: "Real-time inventory visibility → build customer confidence",
    description:
      "Show customers exactly what\u0027s available when they need it, building trust and closing deals faster.",
  },
  {
    icon: IconSearch,
    title: "Broker-specific workflows → less admin, more selling",
    description:
      "Streamlined processes designed specifically for brokers eliminate time-wasting tasks.",
  },
  {
    icon: IconDatabase,
    title: "Centralised data → no more fragmented systems",
    description:
      "All your information in one place means faster decisions and smoother operations.",
  },
];

export default function SalesLeadersHowHelps() {
  return (
    <section className="relative isolate overflow-hidden py-16 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
          How Dashing helps sales teams win more deals
        </h2>

        <div className="mt-10 grid gap-x-12 gap-y-12 sm:grid-cols-2">
          {items.map(({ icon: Icon, title, description }) => (
            <div key={title}>
              <Icon className="h-5 w-5 text-lime-400" aria-hidden />
              <hr className="my-3 border-white/15" />
              <h3 className="text-lg font-semibold leading-snug text-white sm:text-xl">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/80 sm:text-base">{description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="https://dashing-distribution-software-144785672.hubspotpagebuilder.eu/book-a-dashing-demo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-lime-400 px-6 py-3 text-base font-semibold text-[#0a2440] shadow-[0_20px_45px_-25px_rgba(129,103,255,0.85)] transition hover:-translate-y-0.5 hover:bg-[#6d54f0]"
          >
            <span aria-hidden>👉</span>
            Get a Demo and See Faster Quoting in Action
          </Link>
        </div>
      </div>
    </section>
  );
}
