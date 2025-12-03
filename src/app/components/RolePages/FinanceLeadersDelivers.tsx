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
    <section className="w-full bg-gradient-to-b from-[#06162b] via-[#0a2440] to-[#0d2d4f] px-6 py-20 sm:py-32">
      <div className="mx-auto max-w-6xl rounded-[32px] border border-white/10 bg-white/5 p-10 shadow-[0_35px_120px_-45px_rgba(6,12,30,0.8)] ring-1 ring-white/10 backdrop-blur-xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">Finance leaders</p>
          <h2 className="mt-4 text-3xl font-black leading-tight text-white sm:text-4xl">Dashing delivers the clarity your team needs</h2>
          <p className="mt-4 text-base text-white/80 sm:text-lg">Surface cash positions, automate reporting, and stay audit-ready without chasing spreadsheets. Every metric stays trustworthy and actionable.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-white/10 bg-white/[0.06] p-6 shadow-xl ring-1 ring-white/10 transition duration-200 hover:-translate-y-1 hover:border-lime-300/60 hover:bg-white/[0.08]"
            >
              <div className="flex items-start">
                <BadgeIcon>{f.icon}</BadgeIcon>
                <div>
                  <h3 className="text-lg font-extrabold text-white">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/80">{f.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="https://dashing-distribution-software-144785672.hubspotpagebuilder.eu/book-a-dashing-demo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-lime-300 px-6 py-3 text-sm font-semibold text-[#06162b] shadow-[0_25px_45px_-25px_rgba(172,255,156,0.8)] transition hover:-translate-y-0.5 hover:bg-white"
          >
            <span aria-hidden>✨</span>
            Get a Demo and See Finance Clarity in Action
          </a>
        </div>
      </div>
    </section>
  );
}
