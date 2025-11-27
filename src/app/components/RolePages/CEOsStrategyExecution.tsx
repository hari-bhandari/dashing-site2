import Image from "next/image";

export default function CEOsStrategyExecution() {
  const items = [
    "Streamline operations across sales, finance, and ops",
    "Gain real-time visibility for smarter decisions",
    "Scale without friction or unnecessary overhead",
    "Deliver sustainable, profitable growth",
  ];

  return (
    <section className="relative isolate overflow-hidden py-16 sm:py-24 bg-white">
      <div className="mx-auto grid w-full max-w-7xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
        {/* Left: heading + numbered items */}
        <div>
          <h2 className="text-4xl font-extrabold text-[#0a2440] sm:text-5xl">
            From strategy to execution, simplified in one system
          </h2>

          <ol className="mt-8 space-y-8">
            {items.map((text, idx) => (
              <li key={text} className="border-l-4 border-lime-400 pl-6">
                <div className="text-sm font-semibold tracking-widest text-[#0a2440]/60">{String(idx + 1).padStart(2, "0")}</div>
                <h3 className="mt-2 text-xl font-bold text-[#0a2440] sm:text-2xl">{text}</h3>
                <div className="mt-3 h-px w-full bg-white/25" aria-hidden />
              </li>
            ))}
          </ol>
        </div>

        {/* Right: illustration image */}
        <div className="relative flex items-center justify-center">
          <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl border border-white/30 bg-white">
            <Image
              src="/untitled-37.png"
              alt="Illustration of connected systems turning CEO strategy into execution"
              fill
              sizes="(min-width:1024px) 420px, (min-width:640px) 360px, 90vw"
              className="object-contain select-none"
              priority={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
