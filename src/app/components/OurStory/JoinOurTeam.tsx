import Link from "next/link";

export default function JoinOurTeam() {
  const roles = [
    "Senior Software Engineer (Full-Stack)",
    "Product Marketing Manager",
    "Customer Success Specialist",
    "Business Development Executive",
  ];

  return (
    <section className="w-full px-6 py-16 sm:py-24">
      <div className="mx-auto w-full max-w-7xl">
        <p className="text-2xl font-semibold uppercase tracking-wider text-lime-400">
          Join Our Team
        </p>
        <h2 className="mt-2 text-4xl font-extrabold leading-tight text-white sm:text-5xl">
          Building the Future of Broker ERP
        </h2>
        <p className="mt-4 max-w-4xl text-base leading-relaxed text-gray-300">
          We&apos;re seeking passionate professionals who understand the electronic components landscape and want to revolutionise how brokers operate. Join a team that values innovation, collaboration, and deep industry expertise.
        </p>

        {/* Culture + Growth cards */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-xl ring-1 ring-white/10 backdrop-blur-sm">
            <h3 className="text-lg font-extrabold text-white">Our Culture</h3>
            <p className="mt-3 text-sm leading-relaxed text-gray-300">
              We foster an environment where broker expertise meets technological innovation. Every team member contributes to solutions that make a real difference in the industry.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-xl ring-1 ring-white/10 backdrop-blur-sm">
            <h3 className="text-lg font-extrabold text-white">Growth Opportunities</h3>
            <p className="mt-3 text-sm leading-relaxed text-gray-300">
              Work alongside industry veterans whilst developing cutting-edge technology. We invest in professional development and career progression across all roles.
            </p>
          </div>
        </div>

        {/* Roles list */}
        <h3 className="mt-10 text-2xl font-extrabold text-white">Current Opportunities</h3>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-sm text-gray-200">
          {roles.map((role) => (
            <li key={role}>{role}</li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="#"
            className="inline-flex items-center justify-center rounded-lg bg-lime-400 px-4 py-2 text-sm font-semibold text-[#0a2440] shadow-lg ring-1 ring-white/10 transition hover:bg-violet-500"
          >
            View Open Roles
          </Link>
          <Link
            href="#"
            className="inline-flex items-center justify-center rounded-lg bg-white/5 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/10 transition hover:bg-white/10"
          >
            Register Your Interest
          </Link>
        </div>

        {/* Inner divider */}
        <div className="my-10 h-px w-full bg-white/20" />

        {/* Connect CTA row */}
        <div className="text-center">
          <h3 className="text-2xl font-extrabold text-white">Connect With Our Team</h3>
          <p className="mx-auto mt-3 max-w-3xl text-sm leading-relaxed text-gray-300">
            Ready to discuss how Dashing can transform your brokerage operations? Our team of former brokers and technology experts are here to help.
          </p>
          <div className="mx-auto mt-6 flex max-w-3xl flex-wrap items-center justify-center gap-3">
            <Link
              href="https://dashing-distribution-software-144785672.hubspotpagebuilder.eu/book-a-dashing-demo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-lime-400 px-4 py-2 text-sm font-semibold text-[#0a2440] shadow-lg ring-1 ring-white/10 transition hover:bg-violet-500"
            >
              Schedule a Demo
            </Link>
            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-lg bg-white/5 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/10 transition hover:bg-white/10"
            >
              Connect on LinkedIn
            </Link>
            <Link
              href="https://dashing-distribution-software-144785672.hubspotpagebuilder.eu/book-a-dashing-demo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-white/5 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/10 transition hover:bg-white/10"
            >
              Talk to Our Team
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
