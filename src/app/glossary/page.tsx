import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/app/components/Navigation/Navbar";
import Footer from "@/app/components/Navigation/Footer";
import JsonLd from "@/app/components/JsonLd";
import { Breadcrumbs, Eyebrow, NextStep } from "@/app/components/LandingPages/shared";
import { routes, type LinkItem } from "@/app/lib/landingPages";

export const metadata: Metadata = {
  title: "Electronic Component Broker Glossary: RFQ, BOM, MOQ and More | Dashing",
  description:
    "Plain-English definitions of the terms electronic component brokers use every day, from RFQ and BOM to date codes, AS6081 and last time buys.",
  alternates: { canonical: routes.glossary },
};

type Term = { term: string; definition: string; link?: LinkItem };

const quoting = { label: "Real-time quoting", href: routes.quoting };
const inventory = { label: "Inventory", href: routes.inventory };

const terms: Term[] = [
  {
    term: "Allocation",
    definition:
      "When demand outstrips supply and manufacturers or franchised distributors ration parts between customers. Brokers often fill the gap.",
  },
  {
    term: "AS6081",
    definition:
      "The SAE standard for distributors on avoiding, detecting and handling counterfeit electronic parts.",
  },
  {
    term: "AS9120",
    definition:
      "A quality management standard for distributors serving aviation, space and defence, built on ISO 9001.",
  },
  {
    term: "AVL (approved vendor list)",
    definition:
      "The list of suppliers a buyer has approved to purchase from. Getting onto a customer's AVL is often a condition of winning business.",
  },
  {
    term: "BOM (bill of materials)",
    definition:
      "The full list of parts and quantities needed to build a product. Buyers often send a BOM to brokers as a multi-line RFQ.",
    link: quoting,
  },
  {
    term: "Broker (independent distributor)",
    definition:
      "A business that buys and sells components on the open market without a franchise agreement with the manufacturer.",
  },
  {
    term: "CoC (certificate of conformance)",
    definition: "A supplier's document stating that parts meet the specified requirements.",
  },
  {
    term: "Counterfeit avoidance",
    definition:
      "The inspection, testing and sourcing controls that stop fake or substandard parts entering the supply chain.",
  },
  {
    term: "Date code",
    definition:
      "A code marked on a component showing when it was made, usually as year and week. Many customers set date code limits on orders.",
  },
  {
    term: "EMS (electronics manufacturing services)",
    definition:
      "A company that builds electronic products for OEMs. EMS providers are among brokers' largest customers. Also called a CEM.",
  },
  { term: "EOL (end of life)", definition: "A manufacturer's notice that a part will be discontinued." },
  {
    term: "Excess inventory",
    definition: "Stock a company holds beyond its needs. OEMs and EMS providers often sell excess to brokers.",
    link: inventory,
  },
  {
    term: "Franchised distributor",
    definition:
      "A distributor authorised by the manufacturer to sell its parts, with traceability back to the factory. Also called an authorised distributor.",
  },
  {
    term: "Last time buy (LTB)",
    definition: "The final chance to order a part before the manufacturer stops making it.",
  },
  { term: "Lead time", definition: "The time between placing an order and receiving the parts." },
  {
    term: "Lot code",
    definition:
      "A code identifying the production batch a part came from. Used with the date code for traceability.",
  },
  { term: "MOQ (minimum order quantity)", definition: "The smallest quantity a supplier will sell in one order." },
  {
    term: "MSL (moisture sensitivity level)",
    definition:
      "A rating of how long a part can be exposed to air before it must be dried, which affects storage and handling.",
  },
  {
    term: "Obsolete part",
    definition: "A part the manufacturer no longer makes. Brokers are often the only source.",
    link: inventory,
  },
  { term: "OCM (original component manufacturer)", definition: "The company that makes the component itself." },
  {
    term: "OEM (original equipment manufacturer)",
    definition: "The company that designs and sells the finished product the components go into.",
  },
  {
    term: "Open market",
    definition: "Component trading outside the franchised channel, between brokers and independent distributors.",
  },
  {
    term: "Quote turnaround",
    definition:
      "The time from receiving an RFQ to sending the quote. In the open market, the fastest accurate quote often wins.",
    link: quoting,
  },
  {
    term: "REACH",
    definition:
      "The EU regulation on chemicals, which requires suppliers to declare substances of very high concern in their products.",
  },
  {
    term: "RFQ (request for quote)",
    definition:
      "A buyer's request for price and availability on one or more parts. The starting point of most broker deals.",
    link: quoting,
  },
  {
    term: "RoHS",
    definition:
      "The EU directive restricting hazardous substances, such as lead and mercury, in electrical and electronic equipment.",
  },
  {
    term: "SPQ (standard pack quantity)",
    definition: "The number of parts in a manufacturer's standard package, such as a full reel.",
  },
  {
    term: "Tape and reel",
    definition:
      "Packaging that holds surface-mount parts on a tape wound onto a reel, ready for pick-and-place machines.",
  },
  {
    term: "Traceability",
    definition:
      "The ability to trace a part back through every owner to the manufacturer, usually with documents such as a CoC.",
  },
];

// Anchor ids: "RFQ (request for quote)" -> "rfq", "Last time buy (LTB)" -> "last-time-buy".
const termId = (term: string) =>
  term
    .replace(/\s*\(.*\)\s*/, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function GlossaryPage() {
  const byLetter = new Map<string, Term[]>();
  for (const t of terms) {
    const letter = t.term[0].toUpperCase();
    byLetter.set(letter, [...(byLetter.get(letter) ?? []), t]);
  }

  const definedTermSet = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name: "The electronic component broker glossary",
    url: `https://www.dashingdisty.com${routes.glossary}`,
    hasDefinedTerm: terms.map((t) => ({
      "@type": "DefinedTerm",
      name: t.term,
      description: t.definition,
      url: `https://www.dashingdisty.com${routes.glossary}#${termId(t.term)}`,
    })),
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="bg-[#0a2440] pt-28 pb-16 text-white sm:pt-32">
          <div className="mx-auto max-w-6xl space-y-8 px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Glossary", href: routes.glossary }]} />
            <div className="max-w-3xl space-y-6">
              <Eyebrow light>Glossary</Eyebrow>
              <h1 className="text-4xl font-extrabold sm:text-5xl">The electronic component broker glossary</h1>
              <p className="text-xl leading-relaxed text-white/80">
                The terms brokers, buyers and suppliers use every day, explained in plain English.
              </p>
            </div>
            <nav aria-label="A to Z">
              <ul className="flex flex-wrap gap-2">
                {ALPHABET.map((letter) => (
                  <li key={letter}>
                    {byLetter.has(letter) ? (
                      <a
                        href={`#letter-${letter}`}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 font-semibold text-white transition hover:border-lime-400 hover:text-lime-300"
                      >
                        {letter}
                      </a>
                    ) : (
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-white/30">
                        {letter}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </section>

        <div className="bg-slate-50 py-16 sm:py-20">
          <div className="mx-auto max-w-4xl space-y-12 px-4 sm:px-6 lg:px-8">
            {[...byLetter.entries()].map(([letter, list]) => (
              <section key={letter} id={`letter-${letter}`} className="scroll-mt-28">
                <h2 className="mb-6 text-4xl font-extrabold text-lime-600">{letter}</h2>
                <dl className="divide-y divide-[#0a2440]/10 rounded-3xl border border-[#0a2440]/10 bg-white">
                  {list.map((t) => (
                    <div key={t.term} id={termId(t.term)} className="scroll-mt-28 px-6 py-5 sm:px-8">
                      <dt>
                        <h3 className="text-xl font-bold text-[#0a2440]">{t.term}</h3>
                      </dt>
                      <dd className="mt-2 text-base leading-relaxed text-[#0a2440]/75">
                        {t.definition}
                        {t.link && (
                          <>
                            {" "}
                            <Link
                              href={t.link.href}
                              className="font-semibold text-lime-700 underline underline-offset-4 hover:no-underline"
                            >
                              {t.link.label}
                            </Link>
                          </>
                        )}
                      </dd>
                    </div>
                  ))}
                </dl>
              </section>
            ))}
          </div>
        </div>

        <NextStep
          heading="Put the jargon to work"
          body="See how Dashing handles RFQs, BOMs and stock in a personalised demo."
          primary={{ label: "Book a demo", href: "/book-a-demo" }}
          secondary={{ label: "Read the buying guide", href: "/blog" }}
        />
        <JsonLd data={definedTermSet} />
      </main>
      <Footer />
    </div>
  );
}
