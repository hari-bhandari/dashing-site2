import Link from "next/link";

export default function CompliancePeace() {
  return (
    <section className="relative isolate overflow-hidden py-16 sm:py-24 bg-white">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-[#0a2440] sm:text-5xl">Peace of Mind with Compliance Built-In</h2>
          <p className="mx-auto mt-4 max-w-4xl text-base leading-relaxed text-[#0a2440] sm:text-lg">
            Security and regulatory compliance are at the heart of everything we do. Our robust infrastructure and
            processes give you confidence whilst protecting your clients&#39; sensitive data.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {/* Secure Cloud Hosting */}
          <div className="rounded-2xl border border-[#0a2440]/15 bg-white p-6 shadow-[0_25px_60px_-35px_rgba(12,10,43,0.12)]">
            <h3 className="text-xl font-bold text-[#0a2440]">Secure Cloud Hosting</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#0a2440]/80 sm:text-base">
              Enterprise-grade security with 99.9% uptime guarantee. Your data is protected with military-level
              encryption and regular security audits.
            </p>
          </div>

          {/* ISO-Aligned Processes */}
          <div className="rounded-2xl border border-[#0a2440]/15 bg-white p-6 shadow-[0_25px_60px_-35px_rgba(12,10,43,0.12)]">
            <h3 className="text-xl font-bold text-[#0a2440]">ISO-Aligned Processes</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#0a2440]/80 sm:text-base">
              Built on industry best practices and ISO standards, ensuring your operations meet the highest quality and
              security benchmarks.
            </p>
          </div>

          {/* Comprehensive Audit Trails */}
          <div className="rounded-2xl border border-[#0a2440]/15 bg-white p-6 shadow-[0_25px_60px_-35px_rgba(12,10,43,0.12)]">
            <h3 className="text-xl font-bold text-[#0a2440]">Comprehensive Audit Trails</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#0a2440]/80 sm:text-base">
              Every action is logged and traceable. Generate detailed compliance reports instantly to satisfy regulatory
              requirements and internal audits.
            </p>
          </div>

          {/* Role-Based Access Control */}
          <div className="rounded-2xl border border-[#0a2440]/15 bg-white p-6 shadow-[0_25px_60px_-35px_rgba(12,10,43,0.12)]">
            <h3 className="text-xl font-bold text-[#0a2440]">Role-Based Access Control</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#0a2440]/80 sm:text-base">
              Granular permissions ensure team members only access what they need. Protect sensitive information whilst
              maintaining workflow efficiency.
            </p>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
        <Link
          href="https://dashing-distribution-software-144785672.hubspotpagebuilder.eu/book-a-dashing-demo"
          className="inline-flex items-center justify-center rounded-lg bg-lime-400 px-6 py-3 text-base font-semibold text-[#0a2440] shadow-[0_20px_45px_-25px_rgba(129,103,255,0.85)] transition hover:-translate-y-0.5 hover:bg-[#6d54f0]"
        >
          Book a Demo – See How Simple Migration Can Be
        </Link>
      </div>
      </div>
    </section>
  );
}
