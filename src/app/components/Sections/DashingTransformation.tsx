import Link from "next/link";
import { motion } from "framer-motion";

const pointsBefore = [
  "Spreadsheets everywhere, data silos",
  "Slow quoting, costing you missed deals",
  "No real-time view of cashflow or stock levels",
  "Growth adding complexity, not profit margins",
];

const pointsAfter = [
  "All your critical data in one place",
  "Generate quotes in minutes",
  "Real-time dashboards for finance & sales insights",
  "Sustainable growth without extra overhead",
];

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const cardContainer = {
  visible: { transition: { staggerChildren: 0.2, delayChildren: 0.15 } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 }
};

const ctaVariants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: { opacity: 1, scale: 1 }
};

export default function DashingTransformation() {
  return (
    <motion.section
      className="relative isolate overflow-hidden bg-white py-20 text-[#0a2440] sm:py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      variants={sectionVariants}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="absolute inset-0 -z-10" aria-hidden />
      <div className="mx-auto flex max-w-5xl flex-col gap-12 px-4 text-center sm:px-6 lg:px-8">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold text-[#0a2440] sm:text-5xl">
            From Chaos to Clarity — See the Difference
          </h2>
          <p className="text-lg text-[#0a2440] sm:text-xl">
            Are outdated processes holding your business back? Discover how Dashing transforms common broker challenges into streamlined, profitable operations.
          </p>
        </div>
        <motion.div className="grid gap-6 text-left sm:grid-cols-2" variants={cardContainer}>
          <motion.div
            className="group rounded-2xl border border-[#0a2440]/10 bg-white p-7 shadow-[0_25px_60px_-35px_rgba(12,10,43,0.15)]"
            variants={cardVariants}
          >
            <h3 className="text-base font-semibold text-red-500 sm:text-lg">Before: The Old Way</h3>
            <ul className="mt-4 space-y-3 text-sm text-[#0a2440]/80 sm:text-base">
              {pointsBefore.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-red-50 text-xs font-bold text-red-500">✘</span>
                  <span className="text-[#0a2440]">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            className="group rounded-2xl border border-[#0a2440]/10 bg-white p-7 shadow-[0_25px_60px_-35px_rgba(12,10,43,0.15)]"
            variants={cardVariants}
          >
            <h3 className="text-base font-semibold text-emerald-500 sm:text-lg">After: With Dashing</h3>
            <ul className="mt-4 space-y-3 text-sm text-[#0a2440]/80 sm:text-base">
              {pointsAfter.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-50 text-xs font-bold text-emerald-600">✔</span>
                  <span className="text-[#0a2440]">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
        <motion.div className="mx-auto flex w-full max-w-xl flex-col items-center gap-8" variants={ctaVariants} transition={{ duration: 0.45, ease: "easeOut", delay: 0.3 }}>
          <Link
            href="https://dashing-distribution-software-144785672.hubspotpagebuilder.eu/book-a-dashing-demo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-lime-400 px-6 py-3 text-[#0a2440] font-bold shadow-[0_25px_45px_-20px_rgba(109,75,255,0.9)] transition hover:-translate-y-0.5 hover:bg-[#5a3bdc]"
          >
            <span role="img" aria-hidden>
              👉
            </span>
            Book a Demo — Move to the After
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
