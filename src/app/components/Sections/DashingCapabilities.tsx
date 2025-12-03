import Image from "next/image";
import { motion } from "framer-motion";

const capabilities = [
  {
    title: "Realtime Quoting",
    description:
      "Generate accurate quotes instantly with integrated product data and dynamic pricing, reducing manual effort and accelerating deal closures.",
    imgSrc: "/capabilities/cap-erp.png",
    alt: "ERP-powered quoting connecting systems",
  },
  {
    title: "Finance Dashboard",
    description:
      "Track profitability, cash flow, and key performance indicators in real-time with comprehensive dashboards and reporting tools.",
    imgSrc: "/capabilities/cap-finance.png",
    alt: "Financial analytics and dashboards",
  },
  {
    title: "Inventory Control",
    description:
      "Manage stock levels, track movements, and optimise your inventory with precision, ensuring product availability and minimising holding costs.",
    imgSrc: "/capabilities/cap-inventory.png",
    alt: "Inventory with location tracking",
  },
  {
    title: "Compliance Tools",
    description:
      "Maintain audit trails and regulatory compliance with automated reporting features tailored for broker operations.",
    imgSrc: "/capabilities/cap-compliance.png",
    alt: "Secure cloud compliance tools",
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const cardsContainer = {
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 26, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1 }
};

export default function DashingCapabilities() {
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
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 text-center sm:px-6 lg:px-8">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold text-white sm:text-5xl">Everything You Need in One System</h2>
          <p className="text-lg text-white/70 sm:text-xl">
            Dashing Distribution unifies all critical brokerage functions into a single, intuitive platform, streamlining operations and empowering your team.
          </p>
        </div>
        <motion.div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4" variants={cardsContainer}>
          {capabilities.map((capability) => (
            <motion.article
              key={capability.title}
              className="flex h-full flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 text-left shadow-[0_40px_80px_-60px_rgba(12,10,43,0.7)] backdrop-blur"
              variants={cardVariants}
            >
              <div className="relative aspect-[4/3] min-h-[175px] w-full overflow-hidden rounded-[28px] border border-white/15 bg-white/10">
                <Image
                  src={capability.imgSrc}
                  alt={capability.alt}
                  fill
                  sizes="(min-width: 1400px) 360px, (min-width: 1024px) 320px, (min-width: 640px) 280px, 90vw"
                  className="object-cover p-6 select-none"
                  priority={false}
                />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-lime-400">{capability.title}</h3>
                <p className="text-sm leading-relaxed text-white">{capability.description}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
