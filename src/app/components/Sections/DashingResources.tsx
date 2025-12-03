import Link from "next/link";
const resources = [
  {
    title: "Blog / Insights",
    description:
      "SEO-driven content covering topics like \"How brokers can improve quoting speed\" and industry best practices.",
    footnote:
      "Resources fuel SEO and credibility while supporting nurture campaigns for prospects at every stage of their journey.",
  },
  {
    title: "Case Studies",
    description:
      "Proof of success with early customer stories demonstrating measurable improvements and ROI.",
    footnote: "Provide tangible evidence that validates your value and shortens decision cycles.",
  },
  {
    title: "Webinars & Events",
    description:
      "Lead-generation events and thought-leadership recordings to support your professional development.",
    footnote: "Stay ahead with practical guidance and real-world examples you can implement immediately.",
  },
];

export default function DashingResources() {
  return (
    <section className="relative isolate overflow-hidden bg-white py-20 text-white sm:py-24">
      <div
        className="absolute inset-0 -z-10"
        aria-hidden
      />
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 text-center sm:px-6 lg:px-8">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold text-[#0a2440] sm:text-5xl">Resources &amp; Expertise</h2>
 
          <p className="text-lg text-[#0a2440]/70 sm:text-xl">
            Access valuable insights, proven success stories, and thought leadership content designed for brokers.
          </p>
        </div>
        <div className="grid gap-8 text-left sm:grid-cols-2 lg:grid-cols-3">
          {resources.map(({ title, description, footnote }) => (
            <Link
              key={title}
              href="/resources"
              className="flex h-full flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_35px_80px_-55px_rgba(12,10,43,0.8)] backdrop-blur transition hover:border-white/40 hover:bg-white/10"
            >
              <h3 className="text-lg font-bold text-lime-400">{title}</h3>
              <p className="text-m leading-relaxed font-semibold text-[#0a2440]">{description}</p>
              <p className="text-sm text-[#0a2440]/70">{footnote}</p>
              <span className="mt-auto text-xs font-semibold text-[#0a2440] underline underline-offset-4 transition hover:text-lime-400">
                Learn more
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
