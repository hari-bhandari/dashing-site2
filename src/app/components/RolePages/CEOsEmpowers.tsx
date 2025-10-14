import Link from "next/link";

export default function CEOsEmpowers() {
  const items = [
    { title: "Scalable platform", desc: "supports multi-location, multi-employee growth." },
    { title: "Operational efficiency", desc: "grow revenue per employee." },
    { title: "Risk reduction", desc: "compliance and control built in." },
    { title: "Faster deal cycles", desc: "drive top-line growth without chaos." },
  ];

  return (
    <section className="relative isolate overflow-hidden py-16 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-amber-300 sm:text-5xl">
          Dashing empowers leaders to grow with confidence
        </h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {items.map(({ title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/12 bg-white/[0.06] p-6 ring-1 ring-white/10">
              <h3 className="text-xl font-bold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/80 sm:text-base">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-[#8167FF] px-6 py-3 text-base font-semibold text-white shadow-[0_20px_45px_-25px_rgba(129,103,255,0.85)] transition hover:-translate-y-0.5 hover:bg-[#6d54f0]"
          >
            Get a Demo - Future-Proof Your Brokerage
          </Link>
        </div>
      </div>
    </section>
  );
}
