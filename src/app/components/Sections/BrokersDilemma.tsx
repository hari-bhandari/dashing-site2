import { IconBolt, IconEyeOff, IconGauge } from "@tabler/icons-react";
import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 }
};

const cardsContainer = {
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 }
};

export default function BrokersDilemma() {
  const challenges = [
    {
      title: "Lack of Speed",
      description:
        "Manual processes and outdated systems create bottlenecks that cost you deals in today's fast-moving market.",
      Icon: IconBolt,
    },
    {
      title: "Lack of Visibility",
      description:
        "Without real-time insights, you're flying blind on inventory, deals, and performance metrics that matter most.",
      Icon: IconEyeOff,
    },
    {
      title: "Inefficiency",
      description:
        "Disconnected tools and workflows waste time, increase errors, and prevent your team from reaching full potential.",
      Icon: IconGauge,
    },
  ];

  return (
    <motion.section
      className="relative isolate overflow-hidden bg-white py-20 sm:py-24 text-[#0a2440]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden>
        <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-lime-50/20" />
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-lime-200/40 blur-[110px]" />
        <div className="absolute bottom-0 right-[-40px] h-80 w-80 rounded-full bg-teal-200/30 blur-[120px]" />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/80 to-transparent" />
      </div>
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 text-center sm:px-6 lg:px-8">
        <div className="space-y-5">
          <p className="text-s font-semibold uppercase tracking-widest text-lime-400">The Problem</p>
          <h2 className="text-4xl font-extrabold text-[#0a2440] sm:text-5xl">The Broker&apos;s Dilemma</h2>
          <p className="text-lg text-[#0a2440]/70 sm:text-xl">
            Brokers across North America &amp; Europe face the same critical challenges that slow growth and limit profitability.
          </p>
        </div>
        <motion.div className="grid gap-6 text-left sm:grid-cols-2 lg:grid-cols-3" variants={cardsContainer}>
          {challenges.map(({ title, description, Icon }) => (
            <motion.article
              key={title}
              className="group rounded-3xl border border-white/40 bg-white/80 p-7 shadow-[0_30px_70px_-45px_rgba(8,24,48,0.55)] backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-lime-200/70 hover:shadow-[0_35px_90px_-40px_rgba(46,73,116,0.45)]"
              variants={cardVariants}
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-lime-400/20 via-lime-300/10 to-transparent text-lime-400">
                <Icon className="h-6 w-6" aria-hidden />
              </div>
              <h3 className="text-base font-semibold text-[#0a2440] sm:text-lg">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#0a2440]/75 sm:text-base">{description}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
