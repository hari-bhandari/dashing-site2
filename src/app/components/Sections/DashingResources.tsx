import Link from "next/link";
import { motion } from "framer-motion";
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

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 }
};

const cardsContainer = {
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.15 } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 }
};

export default function DashingResources() {
  return (
    <motion.section
      className="relative isolate overflow-hidden bg-white py-20 text-white sm:py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      variants={sectionVariants}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="absolute inset-0 -z-10" aria-hidden />
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 text-center sm:px-6 lg:px-8">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold text-[#0a2440] sm:text-5xl">Resources &amp; Expertise</h2>

          <p className="text-2xl text-[#0a2440]/70">
            Access valuable insights, proven success stories, and thought leadership content designed for brokers.
          </p>
        </div>
        <motion.div className="grid gap-6 text-left sm:grid-cols-2 lg:grid-cols-3" variants={cardsContainer}>
          {resources.map(({ title, description, footnote }) => (
            <motion.div key={title} variants={cardVariants}>
              <Link
                href="/resources"
                className="group flex h-full flex-col gap-4 rounded-2xl border border-[#0a2440]/10 bg-white p-7 text-[#0a2440] shadow-[0_25px_60px_-35px_rgba(12,10,43,0.15)] transition-transform duration-200 hover:-translate-y-1"
              >
                <h2 className="text-xl font-semibold">{title}</h2>
                <p className="text-sm leading-relaxed font-semibold text-[#0a2440]/90 sm:text-base">{description}</p>
                <p className="text-sm text-[#0a2440]/70">{footnote}</p>
                <span className="mt-auto text-xs font-semibold text-[#0a2440] underline underline-offset-4 transition group-hover:text-lime-400">
                  Learn more
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
