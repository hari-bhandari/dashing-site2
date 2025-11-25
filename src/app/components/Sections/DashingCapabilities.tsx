import Image from "next/image";

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

export default function DashingCapabilities() {
  return (
    <section className="relative isolate overflow-hidden bg-[#0a2440] py-20 text-white sm:py-24">
      <div
        className="absolute inset-0 -z-10"
        aria-hidden
      />
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 text-center sm:px-6 lg:px-8">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold text-white sm:text-5xl">Everything You Need in One System</h2>
          <p className="text-lg text-white/70 sm:text-xl">
            Dashing Distribution unifies all critical brokerage functions into a single, intuitive platform, streamlining operations and empowering your team.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((capability) => (
            <article
              key={capability.title}
              className="flex h-full flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 text-left shadow-[0_40px_80px_-60px_rgba(12,10,43,0.7)] backdrop-blur"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/15 bg-white/10">
                <Image
                  src={capability.imgSrc}
                  alt={capability.alt}
                  fill
                  sizes="(min-width: 1024px) 240px, (min-width: 640px) 360px, 90vw"
                  className="object-contain p-4 select-none"
                  priority={false}
                />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-lime-400">{capability.title}</h3>
                <p className="text-sm leading-relaxed text-white/75">{capability.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
