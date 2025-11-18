export default function SeamlessSetup() {
  return (
    <section className="relative isolate overflow-hidden py-16 sm:py-32 bg-[#0a2440]">
      {/* decorative radial gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]" aria-hidden />
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-lime-400">Onboarding</p>
          <h2 className="mt-3 text-4xl font-extrabold text-white sm:text-5xl">Seamless Setup, Full Support</h2>
          <p className="mx-auto mt-5 max-w-4xl text-base leading-relaxed text-white/80 sm:text-lg">
            Transitioning to a new ERP doesn&apos;t have to be stressful. Our comprehensive migration and onboarding process
            ensures you&apos;re up and running quickly with complete peace of mind.
          </p>
        </div>

        {/* Top two blurbs as cards */}
        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
          {[{
            title: 'Data Migration Made Easy',
            copy: 'Our expert team handles the complete transfer of your existing data, ensuring nothing is lost and everything is properly configured in your new system.'
          }, {
            title: 'Ongoing Support & Satisfaction Guarantee',
            copy: 'Dedicated customer success managers provide continuous support. Our satisfaction guarantee means we\'re committed to your long-term success.'
          }].map(card => (
            <div key={card.title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm shadow-[0_20px_45px_-30px_rgba(0,0,0,0.45)] transition">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-white/10 to-transparent" aria-hidden />
              <h3 className="text-xl font-bold text-white sm:text-2xl">{card.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/75 sm:text-base">{card.copy}</p>
            </div>
          ))}
        </div>

        {/* Timeline with markers */}
        <div className="relative mt-14">
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/10 sm:hidden" aria-hidden />
          <div className="grid gap-8 sm:grid-cols-3">
            {[
              { step: 1, label: 'Plan & Assess', copy: 'We review your current workflows, data structure and objectives.' },
              { step: 2, label: 'Migrate & Configure', copy: 'Data is transferred securely and the environment tailored to your needs.' },
              { step: 3, label: 'Train & Launch', copy: 'Your team receives role‑specific training before go‑live.' }
            ].map(item => (
              <div key={item.step} className="flex flex-col items-center text-center sm:text-left">
                <div className="relative mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-lime-400 bg-white/10 text-lime-400 shadow-[0_0_0_4px_rgba(255,255,255,0.05)]">
                  <span className="text-lg font-extrabold">{item.step}</span>
                </div>
                <h4 className="text-sm font-semibold uppercase tracking-wide text-white/90">{item.label}</h4>
                <p className="mt-2 text-xs leading-relaxed text-white/70 sm:text-sm">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Training block */}
        <div className="mt-16 text-center">
            <div className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm shadow-[0_15px_35px_-20px_rgba(0,0,0,0.5)]">
              <h3 className="text-2xl font-extrabold text-white">Full Training &amp; Onboarding</h3>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base">
                Comprehensive training programmes for your entire team, from basic navigation to advanced features. We ensure
                everyone is confident using the system.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {['Role-Based Sessions', 'Knowledge Base Access', 'Post-Launch Support'].map(b => (
                  <div key={b} className="rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-xs font-medium text-white/80">
                    {b}
                  </div>
                ))}
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}
