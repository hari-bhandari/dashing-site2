export default function SeamlessSetup() {
  return (
    <section className="relative isolate overflow-hidden py-16 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-amber-300 sm:text-5xl">Seamless Setup, Full Support</h2>
          <p className="mx-auto mt-4 max-w-4xl text-base leading-relaxed text-white/80 sm:text-lg">
            Transitioning to a new ERP doesn&#39;t have to be stressful. Our comprehensive migration and onboarding process
            ensures you&#39;re up and running quickly with complete peace of mind.
          </p>
        </div>

        {/* Top two blurbs */}
        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="text-center lg:text-left">
            <h3 className="text-xl font-bold text-white sm:text-2xl">Data Migration Made Easy</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/80 sm:text-base">
              Our expert team handles the complete transfer of your existing data, ensuring nothing is lost and everything
              is properly configured in your new system.
            </p>
          </div>
          <div className="text-center lg:text-left">
            <h3 className="text-xl font-bold text-white sm:text-2xl">Ongoing Support &amp; Satisfaction Guarantee</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/80 sm:text-base">
              Dedicated customer success managers provide continuous support. Our satisfaction guarantee means we&#39;re
              committed to your long-term success.
            </p>
          </div>
        </div>

        {/* Timeline with markers */}
        <div className="relative mt-10">
          {/* horizontal line */}
          <div className="pointer-events-none absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-white/20" aria-hidden />
          <div className="relative grid grid-cols-3">
            {[1, 2, 3].map((n) => (
              <div key={n} className="flex flex-col items-center">
                <div className="mb-2 h-8 w-px bg-white/30" aria-hidden />
                <div className="rounded-md bg-white/10 px-3 py-1 text-sm font-semibold text-white ring-1 ring-white/30 shadow-sm">
                  {n}
                </div>
                <div className="mt-2 h-8 w-px bg-white/30" aria-hidden />
              </div>
            ))}
          </div>
        </div>

        {/* Training block */}
        <div className="mt-8 text-center">
          <h3 className="text-2xl font-extrabold text-white">Full Training &amp; Onboarding</h3>
          <p className="mx-auto mt-2 max-w-3xl text-sm leading-relaxed text-white/80 sm:text-base">
            Comprehensive training programmes for your entire team, from basic navigation to advanced features. We ensure
            everyone is confident using the system.
          </p>
        </div>
      </div>
    </section>
  );
}
