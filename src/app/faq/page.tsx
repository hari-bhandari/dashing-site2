import type { Metadata } from "next";
import Navbar from "@/app/components/Navigation/Navbar";
import Footer from "@/app/components/Navigation/Footer";
import JsonLd from "@/app/components/JsonLd";
import {
  Breadcrumbs,
  Eyebrow,
  FaqItems,
  NextStep,
  PrimaryButton,
  SecondaryButton,
  faqJsonLd,
} from "@/app/components/LandingPages/shared";
import { routes, type Faq, type LinkItem } from "@/app/lib/landingPages";

export const metadata: Metadata = {
  title: "Dashing Distribution FAQ: Broker ERP, Migration and Security",
  description:
    "Answers to common questions about Dashing, the ERP for electronic component brokers: quoting, inventory, finance, migration, security and pricing.",
  alternates: { canonical: routes.faq },
};

const DEMO = { label: "Book a demo", href: "/book-a-demo" };
const MIGRATION_GUIDE = {
  label: "Read the migration guide",
  href: "/blog/what-a-dashing-migration-actually-involves-week-by-week",
};

type Group = {
  id: string;
  title: string;
  faqs: Faq[];
  cta?: { heading: string; body: string; links: LinkItem[] };
};

const askInDemo = {
  heading: "Cannot find your question?",
  body: "Ask it in a demo. We will answer it with your own workflow on screen.",
};

const groups: Group[] = [
  {
    id: "about-dashing",
    title: "About Dashing",
    faqs: [
      {
        q: "What is Dashing Distribution?",
        a: "Dashing is an ERP built for independent electronic component brokers and distributors. Quoting, inventory, finance dashboards, compliance and team workflows sit in one cloud-based system.",
      },
      {
        q: "Who is Dashing for?",
        a: "Independent electronic component brokers and distributors, and the people who run them: sales leaders, finance directors and owners or MDs.",
      },
      {
        q: "Who built Dashing?",
        a: "Dashing was founded by brokers with decades of experience. They searched for electronic component distribution software that fitted how brokers work, could not find it, and built it.",
      },
      {
        q: "How is Dashing different from a general ERP?",
        a: "It is built around a broker's workflow: capture the enquiry, quote it, keep control of stock and finance, and grow. A general ERP has to be configured to do that; Dashing starts there.",
      },
      {
        q: "Will we still need spreadsheets?",
        a: "The aim is to retire them. Dashing puts your critical data in one place, so quotes, stock and numbers no longer live in separate files.",
      },
    ],
  },
  {
    id: "quoting-and-sales",
    title: "Quoting and sales",
    faqs: [
      {
        q: "How quickly can we quote?",
        a: "In minutes rather than hours. Quotes draw on live pricing and stock availability, with automated pricing calculations.",
      },
      {
        q: "Can we capture RFQs from different channels?",
        a: "Yes. Enquiries from multiple channels arrive in one system, so every opportunity is logged and tracked.",
      },
      {
        q: "Does quoting show live stock?",
        a: "Yes. Real-time inventory sits alongside quoting, so sales quote what you can supply.",
      },
      {
        q: "Can sales leaders see the pipeline?",
        a: "Yes. Every deal's progress is visible across the team in real time.",
      },
      {
        q: "Are purchase orders linked to sales orders?",
        a: "Yes. Purchase orders link directly to the sales order they relate to.",
      },
    ],
    cta: { ...askInDemo, links: [DEMO] },
  },
  {
    id: "inventory-and-finance",
    title: "Inventory and finance",
    faqs: [
      {
        q: "Does Dashing show stock in real time?",
        a: "Yes. Stock levels and movements are tracked live and shared across sales, operations and finance.",
      },
      { q: "Can Dashing value our inventory?", a: "Yes. Inventory valuation feeds the finance dashboard." },
      {
        q: "What does the finance dashboard show?",
        a: "Revenue, commissions, profitability, cash flow and key performance indicators in real time, with margin analysis.",
      },
      {
        q: "How long does reporting take?",
        a: "Standard reports generate in seconds from live data, replacing manual reconciliation.",
      },
    ],
  },
  {
    id: "migration-and-onboarding",
    title: "Migration and onboarding",
    faqs: [
      {
        q: "How long does a migration take?",
        a: "A Dashing migration follows a four-week plan: plan and assess, migrate and configure, train, then go live. Read the",
        link: { label: "week-by-week migration guide", href: MIGRATION_GUIDE.href },
      },
      { q: "Who moves our data?", a: "The Dashing team, working with you. You do not move it yourself." },
      {
        q: "What data comes across?",
        a: "Customer records, supplier data, pricing history and transaction data.",
      },
      {
        q: "Do we have to stop trading during migration?",
        a: "No. The first week is an assessment and changes nothing in your live operation, and go-live is planned around your business.",
      },
      {
        q: "How is training delivered?",
        a: "By role, because sales, finance and management use the system differently. Training is backed by a knowledge base, interactive guides, manuals and AI-powered support tools.",
      },
      {
        q: "What support do we get after go-live?",
        a: "A dedicated customer success manager and post-launch support. Dashing's team is available when you need it, regardless of time zone.",
      },
      {
        q: "Can Dashing migrate us from our current system?",
        a: "The first week maps your existing data to Dashing's structure, whatever system it sits in today.",
      },
      {
        q: "Is there a guarantee?",
        a: "Yes. Dashing backs its implementation with a satisfaction guarantee.",
      },
    ],
    cta: { ...askInDemo, links: [DEMO, MIGRATION_GUIDE] },
  },
  {
    id: "security-and-compliance",
    title: "Security and compliance",
    faqs: [
      { q: "Where is our data hosted?", a: "In secure cloud hosting with a 99.9% uptime guarantee." },
      {
        q: "How is our data protected?",
        a: "Enterprise-grade security with regular security audits, plus role-based access so people only see what they need.",
      },
      {
        q: "Does Dashing keep an audit trail?",
        a: "Yes. Every action is logged and traceable, and compliance reports can be generated on demand.",
      },
      { q: "Is Dashing ISO certified?", a: "Dashing's processes are aligned to ISO standards." },
    ],
  },
  {
    id: "pricing-and-buying",
    title: "Pricing and buying",
    faqs: [
      {
        q: "What happens in a demo?",
        a: "A personalised walkthrough tailored to your business. Bring a recent RFQ and we will show it going from enquiry to quote.",
      },
    ],
    cta: { ...askInDemo, links: [DEMO] },
  },
  {
    id: "comparing-options",
    title: "Comparing options",
    faqs: [
      {
        q: "How does Dashing compare with Pentagon 2000?",
        a: "Pentagon 2000 serves several industries, including aerospace and MRO. Dashing is built only for electronic component brokering.",
      },
      {
        q: "How does Dashing compare with AxiomHQ?",
        a: "Both are specialist systems for the components market. AxiomHQ emphasises multi-site distribution, while Dashing is built around the independent broker.",
      },
      {
        q: "We are on an older system. Where do we start?",
        a: "With a conversation about your current setup. See",
        link: { label: "switching from legacy broker software", href: routes.switching },
      },
    ],
    cta: {
      heading: "Still deciding?",
      body: "Read the buying guide, or see Dashing with your own data.",
      links: [DEMO, { label: "Read the buying guide", href: "/blog" }],
    },
  },
];

export default function FaqPage() {
  const allFaqs = groups.flatMap((g) => g.faqs);
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="bg-[#0a2440] pt-28 pb-16 text-white sm:pt-32">
          <div className="mx-auto max-w-6xl space-y-8 px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "FAQ", href: routes.faq }]} />
            <div className="max-w-3xl space-y-6">
              <Eyebrow light>FAQ</Eyebrow>
              <h1 className="text-4xl font-extrabold sm:text-5xl">Questions brokers ask about Dashing</h1>
              <p className="text-xl leading-relaxed text-white/80">
                Straight answers on how Dashing works, what moving across involves and how your data is protected.
                Cannot find yours? Ask it in a demo.
              </p>
            </div>
            <nav aria-label="FAQ topics">
              <ul className="flex flex-wrap gap-3">
                {groups.map((g) => (
                  <li key={g.id}>
                    <a
                      href={`#${g.id}`}
                      className="inline-flex rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:border-lime-400 hover:text-lime-300"
                    >
                      {g.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </section>

        <div className="bg-slate-50 py-16 sm:py-20">
          <div className="mx-auto max-w-4xl space-y-16 px-4 sm:px-6 lg:px-8">
            {groups.map((g) => (
              <section key={g.id} id={g.id} className="scroll-mt-28 space-y-6">
                <h2 className="text-3xl font-extrabold text-[#0a2440]">{g.title}</h2>
                <FaqItems faqs={g.faqs} />
                {g.cta && (
                  <div className="flex flex-col gap-4 rounded-3xl bg-[#0a2440] p-8 text-white sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-xl font-bold">{g.cta.heading}</p>
                      <p className="mt-1 text-white/75">{g.cta.body}</p>
                    </div>
                    <div className="flex flex-col gap-3 sm:flex-row">
                      {g.cta.links.map((link, i) =>
                        i === 0 ? (
                          <PrimaryButton key={link.href} link={link} />
                        ) : (
                          <SecondaryButton key={link.href} link={link} />
                        )
                      )}
                    </div>
                  </div>
                )}
              </section>
            ))}
          </div>
        </div>

        <NextStep
          heading="See the answers in action"
          body="Book a personalised demo and bring the questions this page did not answer."
          primary={DEMO}
          secondary={MIGRATION_GUIDE}
        />
        <JsonLd data={faqJsonLd(allFaqs)} />
      </main>
      <Footer />
    </div>
  );
}
