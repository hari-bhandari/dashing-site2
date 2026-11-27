import Link from "next/link";
import { IconArrowRight, IconChevronDown } from "@tabler/icons-react";
import JsonLd from "@/app/components/JsonLd";
import type { Faq, LinkItem } from "@/app/lib/landingPages";

const BASE_URL = "https://www.dashingdisty.com";

export function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`text-sm font-semibold uppercase tracking-[0.2em] ${light ? "text-lime-300" : "text-lime-700"}`}
    >
      {children}
    </p>
  );
}

export function PrimaryButton({ link }: { link: LinkItem }) {
  return (
    <Link
      href={link.href}
      className="inline-flex items-center justify-center gap-2 rounded-lg bg-lime-400 px-6 py-3 text-base font-semibold text-[#0a2440] shadow-[0_20px_45px_-25px_rgba(129,103,255,0.85)] transition hover:-translate-y-0.5 hover:bg-lime-300"
    >
      {link.label}
    </Link>
  );
}

export function SecondaryButton({ link, light = true }: { link: LinkItem; light?: boolean }) {
  return (
    <Link
      href={link.href}
      className={`inline-flex items-center justify-center gap-2 rounded-lg border px-6 py-3 text-base font-semibold transition hover:-translate-y-0.5 ${
        light
          ? "border-white/30 text-white hover:bg-white/10"
          : "border-[#0a2440]/20 text-[#0a2440] hover:bg-[#0a2440]/5"
      }`}
    >
      {link.label}
    </Link>
  );
}

export function InlineLink({ link, light = false }: { link: LinkItem; light?: boolean }) {
  return (
    <Link
      href={link.href}
      className={`inline-flex items-center gap-1 font-semibold underline underline-offset-4 hover:no-underline ${
        light ? "text-lime-300" : "text-lime-700"
      }`}
    >
      {link.label}
      <IconArrowRight className="h-4 w-4" aria-hidden />
    </Link>
  );
}

export function RelatedReading({ link, light = false }: { link: LinkItem; light?: boolean }) {
  return (
    <p className={`text-base ${light ? "text-white/70" : "text-[#0a2440]/70"}`}>
      Related reading: <InlineLink link={link} light={light} />
    </p>
  );
}

export function Breadcrumbs({ items }: { items: LinkItem[] }) {
  return (
    <>
      <nav aria-label="Breadcrumb" className="text-sm text-white/60">
        <ol className="flex flex-wrap items-center gap-2">
          {items.map((item, i) => (
            <li key={item.href + i} className="flex items-center gap-2">
              {i < items.length - 1 ? (
                <>
                  <Link href={item.href} className="hover:text-white">
                    {item.label}
                  </Link>
                  <span aria-hidden>/</span>
                </>
              ) : (
                <span aria-current="page" className="text-white/90">
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: items.map((item, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: item.label,
            item: `${BASE_URL}${item.href === "/" ? "" : item.href}`,
          })),
        }}
      />
    </>
  );
}

export function FaqItems({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="divide-y divide-[#0a2440]/10 rounded-3xl border border-[#0a2440]/10 bg-white">
      {faqs.map((faq) => (
        <details key={faq.q} className="group px-6 py-5 sm:px-8">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left text-lg font-semibold text-[#0a2440] [&::-webkit-details-marker]:hidden">
            <h3>{faq.q}</h3>
            <IconChevronDown
              className="mt-1 h-5 w-5 flex-shrink-0 text-[#0a2440]/50 transition group-open:rotate-180"
              aria-hidden
            />
          </summary>
          <p className="mt-3 text-base leading-relaxed text-[#0a2440]/75">
            {faq.a}
            {faq.link && (
              <>
                {" "}
                <Link href={faq.link.href} className="font-semibold text-lime-700 underline underline-offset-4">
                  {faq.link.label}
                </Link>
                .
              </>
            )}
          </p>
        </details>
      ))}
    </div>
  );
}

export function faqJsonLd(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.link ? `${faq.a} ${faq.link.label}.` : faq.a },
    })),
  };
}

export function NextStep({
  heading,
  body,
  primary,
  secondary,
}: {
  heading: string;
  body: string;
  primary: LinkItem;
  secondary?: LinkItem;
}) {
  return (
    <section className="bg-[#0a2440] py-20 text-white sm:py-24">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 text-center sm:px-6 lg:px-8">
        <Eyebrow light>Next step</Eyebrow>
        <h2 className="text-4xl font-bold sm:text-5xl">{heading}</h2>
        <p className="max-w-2xl text-xl text-white/80">{body}</p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <PrimaryButton link={primary} />
          {secondary && <SecondaryButton link={secondary} />}
        </div>
      </div>
    </section>
  );
}

export function ExploreFurther({ links }: { links: LinkItem[] }) {
  if (!links.length) return null;
  return (
    <section className="bg-slate-50 py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0a2440]/60">Explore further</h2>
        <ul className="mt-4 flex flex-wrap gap-3">
          {links.map((link) => (
            <li key={link.href + link.label}>
              <Link
                href={link.href}
                className="inline-flex items-center rounded-full border border-[#0a2440]/15 bg-white px-4 py-2 text-sm font-semibold text-[#0a2440] transition hover:border-lime-500 hover:bg-lime-50"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
