import Link from "next/link";
import type { ReactNode } from "react";

function BadgeIcon({ children }: { children: ReactNode }) {
  return (
    <div className="mr-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-lime-400 text-[#0a2440] shadow-inner ring-1 ring-white/10">
      <span className="opacity-90">{children}</span>
    </div>
  );
}

export default function FinanceLeadersDelivers() {
  const features = [
    {
      title: "Real-time dashboards",
      desc: "→ instant view of cashflow, inventory, and performance.",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
    },
    {
      title: "Automated reporting",
      desc: "→ reduce errors and save time.",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <path d="M14 2v6h6" />
          <path d="M16 13H8" />
          <path d="M16 17H8" />
          <path d="M10 9H8" />
        </svg>
      ),
    },
    {
      title: "Integrated compliance tools",
      desc: "→ peace of mind for audits.",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <path d="M21 21l-4.3-4.3" />
        </svg>
      ),
    },
    {
      title: "Risk management",
      desc: "→ spot issues before they hit the bottom line.",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v20" />
          <path d="M2 12h20" />
          <path d="M5 19l14-14" />
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full px-6 py-16 sm:py-32 bg-white">
      <div className="mx-auto w-full max-w-7xl">
        <h2 className="text-3xl font-extrabold leading-tight text-[#0a2440] sm:text-4xl">Dashing delivers</h2>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-xl ring-1 ring-white/10 backdrop-blur-sm">
              <div className="flex items-start">
                <BadgeIcon>{f.icon}</BadgeIcon>
                <div>
                  <h3 className="text-lg font-extrabold text-[#0a2440]">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#0a2440]">{f.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <Link href="/contact" className="inline-flex items-center justify-center rounded-lg bg-lime-400 px-4 py-2 text-sm font-semibold text-white shadow-lg ring-1 ring-white/10 transition hover:bg-violet-500">
            Get a Demo - See Finance Clarity in Action
          </Link>
        </div>
      </div>
    </section>
  );
}
