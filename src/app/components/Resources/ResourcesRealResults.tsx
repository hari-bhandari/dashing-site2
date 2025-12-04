import Link from "next/link";
import { IconAlertCircle, IconTools, IconChartBar, IconQuote } from "@tabler/icons-react";

const items = [
  {
    title: "Problem Identification",
    body:
      "We analyse the specific operational challenges facing each brokerage, from manual processes to disconnected systems that hinder growth and efficiency.",
    Icon: IconAlertCircle,
  },
  {
    title: "Tailored Solution",
    body:
      "Customised approaches that address unique business requirements whilst integrating seamlessly with existing workflows and systems.",
    Icon: IconTools,
  },
  {
    title: "Measurable Results",
    body:
      "Track concrete improvements in deal velocity, operational efficiency, and revenue growth through performance metrics and KPI monitoring.",
    Icon: IconChartBar,
  },
  {
    title: "Client Testimonials",
    body:
      "Hear directly from brokerage leaders about their transformation journey and the impact on outcomes and team productivity.",
    Icon: IconQuote,
  },
];

export default function ResourcesRealResults() {
  return (
    <section className="relative isolate overflow-hidden bg-[#0a2440] py-16 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-lime-400">Results</p>
        <h2 className="mt-2 text-4xl font-extrabold text-white sm:text-5xl">Real Brokers. Real Results.</h2>
        <p className="mt-4 max-w-4xl text-base leading-relaxed text-white/80 sm:text-lg">
          Discover how leading commercial real estate brokerages have transformed their operations with innovative
          solutions. Case studies showcase tangible outcomes and measurable improvements demonstrating the power of strategic technology adoption.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {items.map(({ title, body, Icon }) => (
            <article
              key={title}
              className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_25px_60px_-35px_rgba(0,0,0,0.55)] ring-1 ring-white/10 backdrop-blur-sm transition-transform duration-200 hover:-translate-y-0.5"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15">
                <Icon className="h-5 w-5 text-lime-400" aria-hidden />
              </div>
              <h3 className="text-lg font-semibold text-white sm:text-xl">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/75 sm:text-base">{body}</p>
            </article>
          ))}
        </div>

        {/* Testimonial */}
        <div className="mt-12">
          <blockquote className="relative rounded-2xl border border-white/10 bg-white/[0.06] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_25px_60px_-35px_rgba(0,0,0,0.55)] ring-1 ring-white/10 backdrop-blur-sm sm:p-8">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15">
              <IconQuote className="h-5 w-5 text-lime-400" aria-hidden />
            </div>
            <p className="text-white/90">
              The Dashing support team and programmers have been awesome to work with. They listened to our suggestions and continuously delivered improvements. I finally have an ERP I can rely on, with the support and flexibility this industry needs.
            </p>
            <p className="mt-4 font-semibold text-white">-Sonicare Solutions Inc.</p>
          </blockquote>
        </div>

        <p className="mt-8 max-w-5xl text-sm leading-relaxed text-white/75 sm:text-base">
          Comprehensive case studies feature detailed implementation strategies, ROI calculations, long-term business impact and before/after comparisons across workflows and metrics.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/our-product"
            className="inline-flex items-center justify-center rounded-lg bg-lime-400 px-6 py-3 text-base font-semibold text-[#0a2440] shadow-[0_20px_45px_-25px_rgba(163,230,53,0.85)] transition hover:-translate-y-0.5 hover:bg-lime-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          >
            See What Dashing Could Do for You
          </Link>
          <a
            href="https://dashing-distribution-software-144785672.hubspotpagebuilder.eu/book-a-dashing-demo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-white/10 px-6 py-3 text-base font-semibold text-white ring-1 ring-white/15 transition hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          >
            Book a Demo
          </a>
        </div>
      </div>
    </section>
  );
}
