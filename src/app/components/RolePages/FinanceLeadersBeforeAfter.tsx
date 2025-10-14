import Image from "next/image";
export default function FinanceLeadersBeforeAfter() {
  return (
    <section className="w-full px-6 py-16 sm:py-24">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 md:grid-cols-2">
        {/* Left copy */}
        <div>
          <h2 className="text-3xl font-extrabold leading-tight text-amber-400 sm:text-5xl">
            From blind spots to real-time control
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div>
              <h3 className="text-xl font-extrabold text-amber-300">Before Dashing:</h3>
              <ul className="mt-4 list-disc space-y-3 pl-5 text-gray-200">
                <li>Manual reporting takes days</li>
                <li>No single source of truth for cashflow or stock</li>
                <li>Compliance risk keeps you awake at night</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-amber-300">After Dashing:</h3>
              <ul className="mt-4 list-disc space-y-3 pl-5 text-gray-200">
                <li>Live dashboards for cashflow &amp; inventory</li>
                <li>Automated reporting you can trust</li>
                <li>Compliance built into daily workflow</li>
              </ul>
            </div>
          </div>

          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-gray-300">
            Dashing eliminates the hidden risks of manual processes, giving you the clarity and confidence to make informed financial decisions instantly.
          </p>
        </div>

        {/* Right image */}
        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-xl ring-1 ring-white/10 md:aspect-auto md:h-full">
          <Image
            src="/office.webp"
            alt="Finance leader viewing performance dashboards"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 50vw, 100vw"
            priority={false}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}
