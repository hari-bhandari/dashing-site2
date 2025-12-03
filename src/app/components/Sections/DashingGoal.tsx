import Link from "next/link";
import { motion } from "framer-motion";

const outcomes = [
  {
    number: "01",
    title: "Win More Deals",
    description:
      "Accelerate your quoting process and respond to opportunities faster than competitors. Close deals that would otherwise slip away.",
  },
  {
    number: "02",
    title: "Gain Real-Time Control",
    description:
      "Complete visibility across inventory, deals, and performance metrics. Make informed decisions with live data at your fingertips.",
  },
  {
    number: "03",
    title: "Achieve Profitable Growth",
    description:
      "Optimise margins, reduce operational costs, and scale efficiently with systems designed for sustainable broker success.",
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 }
};

const cardsContainer = {
  visible: {
    transition: { staggerChildren: 0.18, delayChildren: 0.15 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const ctaVariants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1 }
};

export default function DashingGoal() {
  return (
    <motion.section
      className="relative isolate overflow-hidden bg-[#0a2440] py-20 text-white sm:py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      variants={sectionVariants}
      transition={{ duration: 0.65, ease: "easeOut" }}
    >
      <div className="absolute inset-0 -z-10 " aria-hidden />
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 text-center sm:px-6 lg:px-8">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-lime-400">The Dashing goal</p>
          <h2 className="text-4xl font-bold text-white sm:text-5xl">
            Get our clients to profitable growth with faster deals and better visibility.
          </h2>
          <p className="text-lg text-white/70 sm:text-xl">
            Dashing Distribution delivers three critical outcomes that separate winning brokers from the competition.
          </p>
        </div>
        <motion.div className="grid gap-6 text-left sm:grid-cols-2 lg:grid-cols-3" variants={cardsContainer}>
          {outcomes.map((outcome) => (
            <motion.article
              key={outcome.number}
              className="flex h-full flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur"
              variants={cardVariants}
            >
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">
                {outcome.number}
              </span>
              <h3 className="text-xl font-semibold text-white">{outcome.title}</h3>
              <p className="text-sm leading-relaxed text-white/70 sm:text-base">{outcome.description}</p>
            </motion.article>
          ))}
        </motion.div>
        <motion.div className="flex justify-center" variants={ctaVariants} transition={{ duration: 0.45, ease: "easeOut", delay: 0.25 }}>
          <Link
            href="https://dashing-distribution-software-144785672.hubspotpagebuilder.eu/book-a-dashing-demo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-lime-400 px-5 py-2 text-sm font-semibold text-[#0a2440] shadow-[0_20px_45px_-25px_rgba(112,97,245,0.9)] transition hover:-translate-y-0.5 hover:bg-[#5b4ee6]"
          >
            See Dashing in Action
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
