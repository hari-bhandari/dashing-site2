import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const outcomes = [
  {
    title: "Win More Deals",
    description:
      "Accelerate your quoting process and respond to opportunities faster than competitors. Close deals that would otherwise slip away.",
    imageSrc: "/sales.png",
    imageAlt: "Sales leader presenting accelerated deal flow",
  },
  {
    title: "Gain Real-Time Control",
    description:
      "Complete visibility across inventory, deals, and performance metrics. Make informed decisions with live data at your fingertips.",
    imageSrc: "/control.png",
    imageAlt: "Dashboard illustrating operational visibility",
  },
  {
    title: "Achieve Profitable Growth",
    description:
      "Optimise margins, reduce operational costs, and scale efficiently with systems designed for sustainable broker success.",
    imageSrc: "/profitablegrowth.png",
    imageAlt: "Upward trending profitability chart",
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
      <div className="absolute inset-0 -z-10" aria-hidden>
        <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-[#142f54] via-transparent" />
        <div className="absolute left-1/2 top-8 h-64 w-64 -translate-x-1/2 rounded-full bg-lime-400/10 blur-[120px]" />
      </div>
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 text-center sm:px-6 lg:px-8">
        <div className="space-y-4">
          <p className="text-2xl font-semibold uppercase tracking-[0.35em] text-lime-400">The Dashing goal</p>
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
              key={outcome.title}
              className="flex h-full flex-col gap-5 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur transition duration-200 hover:border-lime-300/60 hover:bg-white/10"
              variants={cardVariants}
            >
              <div className="flex items-center gap-4">
                <div className="relative inline-flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl border border-white/20 bg-white/10 p-2 text-white shadow-inner shadow-white/10">
                  <Image
                    src={outcome.imageSrc}
                    alt={outcome.imageAlt}
                    width={64}
                    height={64}
                    className="h-full w-full object-contain"
                  />
                </div>
    
              </div>
              <h3 className="text-2xl font-semibold text-white">{outcome.title}</h3>
              <p className="text-lg leading-relaxed text-white/70">{outcome.description}</p>
            </motion.article>
          ))}
        </motion.div>
        <motion.div className="flex justify-center" variants={ctaVariants} transition={{ duration: 0.45, ease: "easeOut", delay: 0.25 }}>
          <Link
            href="https://dashing-distribution-software-144785672.hubspotpagebuilder.eu/book-a-dashing-demo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-lime-300 to-lime-500 px-6 py-2.5 text-base font-semibold text-[#0a2440] shadow-[0_25px_45px_-25px_rgba(132,225,188,0.8)] transition hover:-translate-y-0.5 hover:brightness-110"
          >
            See Dashing in Action
            <svg className="h-3.5 w-3.5" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M2 6h7m0 0L6.75 3.75M9 6 6.75 8.25" stroke="#0a2440" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
