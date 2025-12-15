import { IconClipboardList, IconFileDollar, IconGauge, IconChartBar } from "@tabler/icons-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const journey = [
  {
    title: "Capture",
    description:
      "Enquiries flow straight into your system, ensuring no lead is missed and every opportunity is tracked from the outset.",
    icon: IconClipboardList,
  },
  {
    title: "Quote",
    description:
      "Generate accurate and competitive quotes instantly, empowering your team to respond faster and secure more deals.",
    icon: IconFileDollar,
  },
  {
    title: "Control",
    description:
      "Gain real-time visibility into sales performance, financial health, and inventory levels for complete command of operations.",
    icon: IconGauge,
  },
  {
    title: "Grow",
    description:
      "Scale profitably with data-driven clarity, optimising every aspect for sustained success and expansion.",
    icon: IconChartBar,
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 }
};

const listVariants = {
  visible: { transition: { staggerChildren: 0.18, delayChildren: 0.2 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 }
};

const ctaVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 }
};

const imageVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0 }
};

export default function DashingJourney() {
  return (
    <motion.section
      className="relative isolate overflow-hidden bg-[#0a2440] py-20 text-white sm:py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      variants={sectionVariants}
      transition={{ duration: 0.65, ease: "easeOut" }}
    >
      <div className="absolute inset-0 -z-10" aria-hidden />
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.5fr_1fr] lg:items-center lg:gap-16 lg:px-8">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="font-bold text-white text-5xl">
              From enquiry to growth, simplified
            </h2>
            <p className="text-2xl text-white/70 ">
              Dashing streamlines your entire brokerage operation, transforming complex processes into a clear, four-step journey designed for efficiency and profitability.
            </p>
          </div>
          <motion.ol className="space-y-5" variants={listVariants}>
            {journey.map(({ title, description, icon: Icon }) => (
              <motion.li
                key={title}
                className="flex items-start gap-4 rounded-3xl bg-white/5 p-5 shadow-[0_35px_70px_-60px_rgba(12,10,43,0.8)]"
                variants={itemVariants}
              >
                <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-white/10 text-lime-400">
                  <Icon className="h-8 w-8" aria-hidden />
                </span>
                <div className="space-y-2">
                  <h3 className="text-2xl font-semibold text-white">{title}</h3>
                  <p className="text-base leading-relaxed text-white/75">{description}</p>
                </div>
              </motion.li>
            ))}
          </motion.ol>
          <motion.div className="flex justify-center" variants={ctaVariants} transition={{ duration: 0.45, ease: "easeOut", delay: 0.25 }}>
            <Link
              href="https://dashing-distribution-software-144785672.hubspotpagebuilder.eu/book-a-dashing-demo"
              className="inline-flex w-fit items-center justify-center rounded-full bg-lime-400 px-6 py-3 text-base font-semibold text-[#0a2440] shadow-[0_25px_50px_-20px_rgba(124,92,255,0.9)] transition hover:-translate-y-0.5 hover:bg-[#6846f0]"
            >
              Book a Demo — See It in Action
            </Link>
          </motion.div>
        </div>
        <motion.div className="flex h-full w-full items-center justify-center" variants={imageVariants} transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}>
          <div className="relative h-[500px] w-full overflow-hidden">
            <Image
              src="/graph.png"
              alt="Illustration of brokerage workflow growth progression"
              fill
              sizes="(min-width:1280px) 640px, (min-width:1024px) 560px, (min-width:640px) 420px, 90vw"
              className="object-cover select-none"
              priority={false}
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
