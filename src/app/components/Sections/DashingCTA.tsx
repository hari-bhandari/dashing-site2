import Link from "next/link";
import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 }
};

const buttonsVariants = {
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.15 } }
};

const buttonVariant = {
  hidden: { opacity: 0, y: 16, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1 }
};

export default function DashingCTA() {
  return (
    <motion.section
      className="relative isolate overflow-hidden bg-[#0a2440] py-20 text-white sm:py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={sectionVariants}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="absolute inset-0 -z-10" aria-hidden />
      <div className="mx-auto flex max-w-4xl flex-col gap-8 px-4 text-center sm:px-6 lg:px-8">
        <div className="space-y-6">
          <h2 className="text-5xl font-bold text-white">Book a Demo Today</h2>
          <p className="text-2xl font-semibold text-lime-300">
            Experience the ERP built for brokers. Delivering speed, visibility, and clarity from day one.
          </p>
          <p className="text-lg text-white/80">
            Built by brokers, for brokers. Our story begins with understanding your challenges because we&apos;ve lived them. Our leadership team and dedicated professionals are committed to your success.
          </p>
          <p className="text-2xl font-semibold text-white">
            Ready to win more deals and grow profitably?
          </p>
        </div>
        <motion.div className="flex flex-col gap-4 sm:flex-row sm:justify-center" variants={buttonsVariants}>
          <motion.div variants={buttonVariant}>
            <Link
              href="https://dashing-distribution-software-144785672.hubspotpagebuilder.eu/book-a-dashing-demo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-lime-400 px-6 py-3 text-base font-semibold text-[#0a2440] shadow-[0_25px_50px_-20px_rgba(129,103,255,0.9)] transition hover:-translate-y-0.5 hover:bg-[#6c53f1]"
            >
              Book Your Demo Now
            </Link>
          </motion.div>
          <motion.div variants={buttonVariant}>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
