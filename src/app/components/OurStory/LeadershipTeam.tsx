export default function LeadershipTeam() {
  const leaders = [
    {
      name: "XXX",
      title: "Chief Executive Officer",
      blurb: "insert copy",
    },
    {
      name: "XXX",
      title: "Chief Technology Officer",
      blurb: "insert copy",
    },
    {
      name: "XXX",
      title: "Head of Product",
      blurb: "insert copy",
    },
  ];

  return (
    <section className="w-full px-6 py-16 sm:py-24">
      <div className="mx-auto w-full max-w-7xl">
        <h2 className="text-left text-3xl font-extrabold tracking-tight text-amber-400 sm:text-4xl">
          Leadership Team
        </h2>
        <p className="mt-4 max-w-4xl text-base leading-relaxed text-gray-300">
          Our leadership combines deep industry expertise with cutting-edge technology vision. Each team member brings decades of experience from leading brokerage firms and technology companies, ensuring Dashing addresses real broker challenges with practical, innovative solutions.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {leaders.map((leader, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-xl ring-1 ring-white/10 backdrop-blur-sm transition hover:border-violet-400/30 hover:ring-violet-400/30"
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/50 to-transparent" />
              <p className="text-lg font-extrabold text-white">{leader.name}</p>
              <p className="mt-2 text-sm font-semibold text-white">{leader.title}</p>
              <p className="mt-4 text-sm leading-relaxed text-gray-300">{leader.blurb}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
