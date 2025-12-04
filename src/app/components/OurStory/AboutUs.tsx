"use client";

import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const storySections = [
  {
    title: "Growth with purpose",
    paragraphs: [
      "Our growth has been intentional. One customer at a time, each receiving our complete attention and shaping how we develop the platform further.",
      "We've reimagined implementation. Instead of rushed rollouts, we align education with execution so your team masters the software and the workflow embedded inside it."
    ]
  },
  {
    title: "Built around your success",
    paragraphs: [
      "Your success drives everything we do. We're available when you need us, regardless of time zone.",
      "We've built comprehensive training materials—AI-powered support tools, interactive guides, and traditional manuals—because empowering users matters more than creating dependency."
    ]
  },
  {
    title: "More than software",
    paragraphs: [
      "This is a partnership rooted in understanding the challenges of electronic component distribution and an unwavering commitment to solving them together."
    ]
  }
];

export default function AboutUs() {
  return (
    <motion.section
      className="relative isolate overflow-hidden bg-white py-20 text-[#0a2440] sm:py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      variants={sectionVariants}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="absolute inset-0 -z-10" aria-hidden>
        <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-lime-50/20" />
        <div className="absolute -top-10 right-10 h-64 w-64 rounded-full bg-lime-200/40 blur-[120px]" />
        <div className="absolute -bottom-10 left-5 h-72 w-72 rounded-full bg-teal-100/40 blur-[120px]" />
      </div>
      <div className="mx-auto flex max-w-5xl flex-col gap-12 px-4 sm:px-6 lg:px-8">
        <div className="space-y-6 rounded-3xl border border-white/70 bg-white/80 p-8 shadow-[0_30px_80px_-45px_rgba(5,16,38,0.5)] backdrop-blur">
          <div className="inline-flex items-center gap-2 rounded-full bg-lime-100/60 px-4 py-1 text-sm font-semibold uppercase tracking-[0.2em] text-[#0a2440]">
            About Dashing
          </div>
          <h2 className="text-4xl font-bold sm:text-5xl">We searched. It didn&apos;t exist—so we built it.</h2>
          <div className="space-y-4 text-lg text-[#0a2440]/80 sm:text-xl">
            <p>
              We searched for the perfect electronic component distribution software. It didn&apos;t exist...so we built it.
            </p>
            <p>
              For three years, we&apos;ve developed a solution that delivers what the industry actually needs: efficient, beautiful, and fast. We didn&apos;t cut corners or settle for good enough—we built something we&apos;re genuinely proud of.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {storySections.map(({ title, paragraphs }, idx) => (
            <motion.article
              key={title}
              className={`group flex h-full flex-col rounded-3xl border border-gray-200/70 bg-white/85 p-7 shadow-[0_25px_70px_-50px_rgba(6,20,48,0.65)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 ${idx === storySections.length - 1 ? "md:col-span-2" : ""}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              <h3 className="text-2xl font-semibold text-[#0a2440]">{title}</h3>
              <div className="mt-4 space-y-4 text-base leading-relaxed text-[#0a2440]/80">
                {paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
