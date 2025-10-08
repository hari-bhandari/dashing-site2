import Link from "next/link";
import { IconBriefcase, IconPuzzle, IconHeadset } from "@tabler/icons-react";

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
    <section className="relative isolate overflow-hidden py-16 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          {/* Left: Intro + Enquiries */}
          <div>
            <h2 className="text-4xl font-extrabold text-amber-300 sm:text-5xl">Get in Touch</h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
              Whether you have questions about our solutions, are interested in partnership opportunities, or need
              technical support, we&#39;re here to help. Connect with our team through your preferred channel.
            </p>

            <div className="mt-8 space-y-6 sm:mt-10">
              {enquiries.map(({ icon: Icon, title, description }) => (
                <div key={title}>
                  {/* Icon */}
                  <Icon className="h-5 w-5 text-white/60" aria-hidden />
                  <div className="mt-3 border-t border-white/15" aria-hidden />
                  <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/80 sm:text-base">{description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Contact Cards */}
          <div>
            <h3 className="text-2xl font-extrabold text-amber-300 sm:text-3xl">Contact Information</h3>

            <div className="mt-6 space-y-6">
              <div className="rounded-2xl border border-white/20 bg-white/5 p-6 ring-1 ring-white/10">
                <h4 className="text-lg font-semibold text-white">Email</h4>
                <p className="mt-2 font-semibold text-white">hello@dashing.com</p>
                <p className="mt-1 text-sm text-white/80">Response within 24 hours during business days</p>
              </div>

              <div className="rounded-2xl border border-white/20 bg-white/5 p-6 ring-1 ring-white/10">
                <h4 className="text-lg font-semibold text-white">Phone</h4>
                <p className="mt-2 font-semibold text-white">+1 (555) 123-4567</p>
                <p className="mt-1 text-sm text-white/80">Available Monday–Friday, 9:00 AM – 6:00 PM GMT</p>
              </div>

              <div className="rounded-2xl border border-white/20 bg-white/5 p-6 ring-1 ring-white/10">
                <h4 className="text-lg font-semibold text-white">Office</h4>
                <p className="mt-2 font-semibold leading-relaxed text-white">
                  123 Financial District
                  <br />
                  London, EC2V 8RF
                  <br />
                  United Kingdom
                </p>
              </div>

              <p className="text-sm text-white/80">
                Connect with us on{" "}
                <Link href="https://www.linkedin.com" className="underline decoration-amber-300/50 underline-offset-4 hover:text-amber-200">
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
