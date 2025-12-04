import { IconBriefcase, IconCalculator, IconCrown } from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";

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

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 }
};

const gridVariants = {
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.15 } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const ctaVariants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1 }
};

export default function RoleSolutions() {
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
      <div className="mx-auto flex max-w-5xl flex-col gap-12 px-4 text-center sm:px-6 lg:px-8">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold text-[#0a2440] sm:text-5xl">Solutions Tailored to Your Role</h2>
          <p className="text-2xl text-[#0a2440]/70">
            Whether you&apos;re a Sales Leader, Finance Director, or CEO/MD, Dashing Distribution addresses your specific challenges and objectives.
          </p>
        </div>
        <motion.div className="grid gap-6 text-left sm:grid-cols-2 lg:grid-cols-3 text-[#0a2440]" variants={gridVariants}>
          {personas.map(({ title, description, icon: Icon }) => (
            <motion.article
              key={title}
              className="group flex h-full flex-col gap-4 rounded-2xl border border-[#0a2440]/10 bg-white p-7 shadow-[0_25px_60px_-35px_rgba(12,10,43,0.15)] transition-transform duration-200 hover:-translate-y-1"
              variants={cardVariants}
            >
              <div className="space-y-2">
                <div className="flex  gap-4 mb-4">
                  <Icon className="h-8 w-8" aria-hidden />
                  <div>
                    <h3 className="text-xl font-semibold text-[#0a2440]">{title}</h3>
                    <span className="mt-1 block h-0.5 w-12 rounded-full bg-[#0a2440]/10" />
                  </div>
                </div>
                <p className="sm:text-lg text-sm leading-relaxed text-[#0a2440]/75">{description}</p>
              </div>
              <Link href="/contact" className="mt-auto text-sm font-semibold text-[#0a2440] underline-offset-4 hover:underline">
                Learn more
              </Link>
            </motion.article>
          ))}
        </motion.div>
        <motion.div className="mx-auto" variants={ctaVariants} transition={{ duration: 0.45, ease: "easeOut", delay: 0.25 }}>
          <Link
            href="https://dashing-distribution-software-144785672.hubspotpagebuilder.eu/book-a-dashing-demo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-lime-400 px-6 py-3 text-base font-semibold text-[#0a2440] shadow-[0_25px_50px_-20px_rgba(129,103,255,0.9)] transition hover:-translate-y-0.5 hover:bg-[#6d54f0]"
          >
            Book Demo
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
