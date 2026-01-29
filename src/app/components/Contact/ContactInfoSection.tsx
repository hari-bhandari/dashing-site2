import Link from "next/link";
import { IconBriefcase, IconPuzzle, IconHeadset, IconMail, IconPhone, IconBuilding } from "@tabler/icons-react";

type Enquiry = {
  icon: React.ElementType;
  title: string;
  description: string;
};

const enquiries: Enquiry[] = [
  {
    icon: IconBriefcase,
    title: "Business Enquiries",
    description:
      "Questions about our platform capabilities, pricing, and implementation timelines",
  },
  {
    icon: IconPuzzle,
    title: "Partnership Opportunities",
    description:
      "Strategic partnerships, integrations, and collaboration discussions",
  },
  {
    icon: IconHeadset,
    title: "Technical Support",
    description:
      "Platform assistance, troubleshooting, and user guidance for existing clients",
  },
];

export default function ContactInfoSection() {
  return (
    <section className="relative isolate overflow-hidden bg-white py-16 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          {/* Left: Intro + Enquiries */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-lime-400">Contact</p>
            <h2 className="mt-2 text-4xl font-extrabold text-[#0a2440] sm:text-5xl">Get in Touch</h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-[#0a2440]/80 sm:text-lg">
              Whether you have questions about our solutions, are interested in partnership opportunities, or need
              technical support, we&#39;re here to help. Connect with our team through your preferred channel.
            </p>
            <div className="mt-8 grid gap-6 sm:mt-10">
              {enquiries.map(({ icon: Icon, title, description }) => (
                <article
                  key={title}
                  className="rounded-2xl border border-[#0a2440]/10 bg-white p-5 shadow-[0_25px_60px_-35px_rgba(12,10,43,0.15)] transition-transform duration-200 hover:-translate-y-0.5"
                >
                  <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/90 text-[#0a2440] shadow-inner shadow-white/60">
                    <Icon className="h-8 w-8" aria-hidden />
                  </div>
                  <h3 className="text-base font-semibold text-[#0a2440] sm:text-lg">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#0a2440]/80 sm:text-base">{description}</p>
                </article>
              ))}
            </div>
          </div>

          {/* Right: Contact Cards */}
          <div>
            <h3 className="text-2xl font-extrabold text-[#0a2440] sm:text-3xl">Contact Information</h3>
            <div className="mt-6 space-y-6">
              <article className="flex items-start gap-4 rounded-2xl border border-[#0a2440]/10 bg-white p-6 shadow-[0_25px_60px_-35px_rgba(12,10,43,0.15)]">
                <span className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-white/90 text-[#0a2440] shadow-inner shadow-white/60">
                  <IconMail className="h-8 w-8" aria-hidden />
                </span>
                <div>
                  <h4 className="text-lg font-semibold text-[#0a2440]">Email</h4>
                  <p className="mt-2 font-semibold text-[#0a2440]">support@dashingdisty.com</p>
                  <p className="mt-1 text-sm text-[#0a2440]/70">Response within 24 hours during business days</p>
                </div>
              </article>
              <article className="flex items-start gap-4 rounded-2xl border border-[#0a2440]/10 bg-white p-6 shadow-[0_25px_60px_-35px_rgba(12,10,43,0.15)]">
                <span className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-white/90 text-[#0a2440] shadow-inner shadow-white/60">
                  <IconPhone className="h-8 w-8" aria-hidden />
                </span>
                <div>
                  <h4 className="text-lg font-semibold text-[#0a2440]">Phone</h4>
                  <p className="mt-2 font-semibold text-[#0a2440]">+44 1904 935608</p>
                  <p className="mt-1 text-sm text-[#0a2440]/70">Mon–Fri, 9:00 AM – 6:00 PM GMT</p>
                </div>
              </article>
              <article className="flex items-start gap-4 rounded-2xl border border-[#0a2440]/10 bg-white p-6 shadow-[0_25px_60px_-35px_rgba(12,10,43,0.15)]">
                <span className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-white/90 text-[#0a2440] shadow-inner shadow-white/60">
                  <IconBuilding className="h-8 w-8" aria-hidden />
                </span>
                <div>
                  <h4 className="text-lg font-semibold text-[#0a2440]">Office</h4>
                  <p className="mt-2 font-semibold leading-relaxed text-[#0a2440]">
                    Dashing Distribution Software
                    <br />
                    Independence House, Millfield Lane, Nether Poppleton, York
                    <br />
                    United Kingdom
                    <br />
                    YO26 6PH
                  </p>
                </div>
              </article>
              <p className="text-sm text-[#0a2440]/80">
                Connect with us on{" "}
                <Link href="https://www.linkedin.com/company/dashing-distribution-software" className="underline decoration-lime-400/50 underline-offset-4 hover:text-lime-500">
                  LinkedIn
                </Link>{" "}
                for industry insights and company updates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
