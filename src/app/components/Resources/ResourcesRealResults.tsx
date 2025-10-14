import Link from "next/link";

function Item({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="border-t border-white/15" aria-hidden />
      <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-white/80 sm:text-base">{children}</p>
    </div>
  );
}

export default function ResourcesRealResults() {
  return (
    <section className="relative isolate overflow-hidden py-16 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-amber-300 sm:text-5xl">Real Brokers. Real Results.</h2>
        <p className="mt-4 max-w-4xl text-base leading-relaxed text-white/80 sm:text-lg">
          Discover how leading commercial real estate brokerages have transformed their operations with innovative
          solutions. Our case studies showcase tangible outcomes and measurable improvements that demonstrate the power
          of strategic technology adoption.
        </p>

        <div className="mt-10 grid gap-10 sm:gap-12 lg:grid-cols-2">
          <Item title="Problem Identification">
            We analyse the specific operational challenges facing each brokerage, from manual processes to disconnected
            systems that hinder growth and efficiency.
          </Item>
          <Item title="Tailored Solution">
            Our team develops customised approaches that address unique business requirements whilst integrating
            seamlessly with existing workflows and systems.
          </Item>
          <Item title="Measurable Results">
            Track concrete improvements in deal velocity, operational efficiency, and revenue growth through
            comprehensive performance metrics and KPI monitoring.
          </Item>
          <Item title="Client Testimonials">
            Hear directly from brokerage leaders about their transformation journey and the impact on their business
            outcomes and team productivity.
          </Item>
        </div>

        {/* Testimonial */}
        <div className="mt-10 rounded-2xl bg-white/0 p-0">
          <blockquote className="relative rounded-xl p-6 text-white/90 ring-1 ring-white/10 sm:p-7">
            <div className="absolute left-0 top-0 h-full w-1 rounded-l bg-white/20" aria-hidden />
            <p>
              &ldquo;I highly recommend Dashing if you looking to get ahead of the competition. Their professionalism,
              expertise, and exceptional distribution solutions have greatly benefited my business. Their team is
              responsive and dedicated, providing outstanding customer service. They are lightyears ahead of any other
              software!!&rdquo;
            </p>
            <p className="mt-4 font-semibold text-white">- Dustin Osbourne, Chipstock LLC</p>
          </blockquote>
        </div>

        <p className="mt-6 max-w-5xl text-sm leading-relaxed text-white/80 sm:text-base">
          Comprehensive case studies featuring detailed analysis of implementation strategies, ROI calculations, and
          long-term business impact. Each study includes before-and-after comparisons, implementation timelines, and
          lessons learnt from real-world deployments.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="#"
            className="inline-flex items-center justify-center rounded-lg bg-[#8167FF] px-6 py-3 text-base font-semibold text-white shadow-[0_20px_45px_-25px_rgba(129,103,255,0.85)] transition hover:-translate-y-0.5 hover:bg-[#6d54f0]"
          >
            See What Dashing Could Do for You
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-white/10 px-6 py-3 text-base font-semibold text-white ring-1 ring-white/15 transition hover:bg-white/15"
          >
            Book a Demo
          </Link>
        </div>
      </div>
    </section>
  );
}
