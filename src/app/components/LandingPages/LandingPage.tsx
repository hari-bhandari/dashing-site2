import Image from "next/image";
import { IconCheck, IconX, IconQuote } from "@tabler/icons-react";
import Navbar from "@/app/components/Navigation/Navbar";
import Footer from "@/app/components/Navigation/Footer";
import JsonLd from "@/app/components/JsonLd";
import type { LandingPageData, Section, SectionImage } from "@/app/lib/landingPages";
import {
  Breadcrumbs,
  Eyebrow,
  ExploreFurther,
  FaqItems,
  InlineLink,
  NextStep,
  PrimaryButton,
  RelatedReading,
  SecondaryButton,
  faqJsonLd,
} from "./shared";

const container = "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8";

function Hero({ page }: { page: LandingPageData }) {
  const { hero } = page;
  return (
    <section className="relative isolate overflow-hidden bg-[#0a2440] pt-28 pb-16 text-white sm:pt-32 lg:pb-24">
      <div className={`${container} space-y-10`}>
        <Breadcrumbs items={page.breadcrumb} />
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <Eyebrow light>{hero.eyebrow}</Eyebrow>
            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">{hero.heading}</h1>
            <p className="max-w-xl text-xl leading-relaxed text-white/80">{hero.intro}</p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <PrimaryButton link={hero.primary} />
              {hero.secondary && <SecondaryButton link={hero.secondary} />}
            </div>
          </div>
          <div
            className={`relative mx-auto aspect-[4/3] w-full max-w-lg overflow-hidden rounded-3xl ${
              hero.image.dark ? "" : "bg-white"
            }`}
          >
            <Image
              src={hero.image.src}
              alt={hero.image.alt}
              fill
              priority
              sizes="(min-width:1024px) 512px, 90vw"
              className={`object-contain select-none ${hero.image.dark ? "" : "p-8"}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({ eyebrow, heading, intro }: { eyebrow?: string; heading: string; intro?: string }) {
  return (
    <div className="max-w-3xl space-y-4">
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="text-3xl font-extrabold text-[#0a2440] sm:text-4xl">{heading}</h2>
      {intro && <p className="text-lg text-[#0a2440]/75">{intro}</p>}
    </div>
  );
}

function SectionFigure({ image }: { image: SectionImage }) {
  if (image.kind === "illustration") {
    return (
      <figure className="flex justify-center">
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          sizes="(min-width:640px) 340px, 70vw"
          className="h-auto w-full max-w-[340px] select-none"
        />
        {image.caption && <figcaption className="sr-only">{image.caption}</figcaption>}
      </figure>
    );
  }
  return (
    <figure className="space-y-4">
      <div className="overflow-hidden rounded-2xl border border-[#0a2440]/10 bg-white shadow-[0_40px_90px_-50px_rgba(12,10,43,0.6)]">
        <div className="flex items-center gap-1.5 border-b border-[#0a2440]/10 bg-slate-100 px-4 py-3" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-[#0a2440]/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#0a2440]/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#0a2440]/20" />
        </div>
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          sizes="(min-width:1152px) 1104px, 94vw"
          className="h-auto w-full select-none"
        />
      </div>
      {image.caption && <figcaption className="text-center text-base text-[#0a2440]/60">{image.caption}</figcaption>}
    </figure>
  );
}

function renderSection(section: Section, index: number) {
  const bg = index % 2 === 0 ? "bg-white" : "bg-slate-50";
  // A text section without tags shows its image in the empty right-hand column instead of below.
  const imageInColumn = section.type === "text" && !section.tags;
  const wrap = (children: React.ReactNode) => (
    <section key={index} className={`${bg} py-16 sm:py-20`}>
      <div className={`${container} space-y-10`}>
        {children}
        {section.image && !imageInColumn && <SectionFigure image={section.image} />}
      </div>
    </section>
  );

  switch (section.type) {
    case "cards":
      return wrap(
        <>
          <SectionHeading eyebrow={section.eyebrow} heading={section.heading} intro={section.intro} />
          <div className="grid gap-6 sm:grid-cols-2">
            {section.cards.map((card) => (
              <article
                key={card.title}
                className="rounded-3xl border border-[#0a2440]/10 bg-white p-8 shadow-[0_35px_80px_-60px_rgba(12,10,43,0.55)]"
              >
                <h3 className="text-xl font-bold text-[#0a2440]">{card.title}</h3>
                <p className="mt-3 text-lg leading-relaxed text-[#0a2440]/75">{card.body}</p>
              </article>
            ))}
          </div>
          {section.related && <RelatedReading link={section.related} />}
        </>
      );

    case "problem":
      return wrap(
        <div className="max-w-3xl space-y-5">
          <Eyebrow>The problem</Eyebrow>
          <h2 className="text-3xl font-extrabold text-[#0a2440] sm:text-4xl">{section.heading}</h2>
          <p className="text-xl leading-relaxed text-[#0a2440]/80">{section.body}</p>
          {section.related && <RelatedReading link={section.related} />}
        </div>
      );

    case "list":
      return wrap(
        <>
          <SectionHeading eyebrow={section.eyebrow} heading={section.heading} />
          <ul className="grid gap-4 sm:grid-cols-2">
            {section.items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-rose-100 bg-white p-5 text-lg text-[#0a2440]"
              >
                <span className="mt-1 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md bg-rose-500/15 text-rose-500 ring-1 ring-rose-500/20">
                  <IconX className="h-3.5 w-3.5" aria-hidden />
                </span>
                {item}
              </li>
            ))}
          </ul>
          {section.related && <RelatedReading link={section.related} />}
        </>
      );

    case "steps":
      return wrap(
        <>
          <SectionHeading eyebrow={section.eyebrow} heading={section.heading} intro={section.intro} />
          <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {section.steps.map((step, i) => (
              <li
                key={step.title}
                className="flex flex-col gap-3 rounded-3xl border border-[#0a2440]/10 bg-white p-7 shadow-[0_35px_80px_-60px_rgba(12,10,43,0.55)]"
              >
                <span className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-lime-400 text-base font-bold text-[#0a2440]">
                    {i + 1}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0a2440]/60">
                    {section.labels?.[i] ?? `Step ${i + 1}`}
                  </span>
                </span>
                <h3 className="text-xl font-bold text-[#0a2440]">{step.title}</h3>
                <p className="text-base leading-relaxed text-[#0a2440]/75">{step.body}</p>
              </li>
            ))}
          </ol>
          {section.link && <InlineLink link={section.link} />}
        </>
      );

    case "table":
      return wrap(
        <>
          <SectionHeading eyebrow={section.eyebrow} heading={section.heading} />
          <div className="overflow-x-auto rounded-3xl border border-[#0a2440]/10 bg-white">
            <table className="w-full min-w-[560px] text-left text-base text-[#0a2440]">
              <thead className="bg-[#0a2440] text-white">
                <tr>
                  <th scope="col" className="px-6 py-4 font-semibold">Role</th>
                  <th scope="col" className="px-6 py-4 font-semibold">Before</th>
                  <th scope="col" className="px-6 py-4 font-semibold">With Dashing</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#0a2440]/10">
                {section.rows.map((row) => (
                  <tr key={row.role}>
                    <th scope="row" className="px-6 py-4 font-semibold">{row.role}</th>
                    <td className="px-6 py-4 text-[#0a2440]/70">{row.before}</td>
                    <td className="px-6 py-4 font-medium">
                      <span className="flex items-start gap-2">
                        <IconCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-500" aria-hidden />
                        {row.after}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      );

    case "beforeAfter":
      return wrap(
        <>
          <SectionHeading eyebrow={section.eyebrow} heading={section.heading} />
          <div className="grid gap-8 sm:grid-cols-2">
            {(["Today", "With Dashing"] as const).map((label, col) => (
              <article
                key={label}
                className={`rounded-3xl border bg-white p-8 ${col === 0 ? "border-rose-100" : "border-emerald-100"}`}
              >
                <p
                  className={`inline-flex rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] ${
                    col === 0 ? "bg-rose-50 text-rose-500" : "bg-emerald-50 text-emerald-600"
                  }`}
                >
                  {label}
                </p>
                <ul className="mt-6 space-y-4 text-[#0a2440]">
                  {section.pairs.map((pair) => (
                    <li key={pair[col]} className="flex items-start gap-3 text-lg font-medium">
                      {col === 0 ? (
                        <IconX className="mt-1 h-5 w-5 flex-shrink-0 text-rose-500" aria-hidden />
                      ) : (
                        <IconCheck className="mt-1 h-5 w-5 flex-shrink-0 text-emerald-500" aria-hidden />
                      )}
                      {pair[col]}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </>
      );

    case "text":
      return wrap(
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="space-y-5">
            <Eyebrow>{section.eyebrow}</Eyebrow>
            <h2 className="text-3xl font-extrabold text-[#0a2440] sm:text-4xl">{section.heading}</h2>
            <p className="text-xl leading-relaxed text-[#0a2440]/80">{section.body}</p>
            {section.link && <InlineLink link={section.link} />}
          </div>
          {section.tags && (
            <ul className="grid grid-cols-2 gap-4">
              {section.tags.map((tag) => (
                <li
                  key={tag}
                  className="flex items-center gap-3 rounded-2xl border border-emerald-100 bg-white p-5 text-lg font-semibold text-[#0a2440]"
                >
                  <IconCheck className="h-5 w-5 flex-shrink-0 text-emerald-500" aria-hidden />
                  {tag}
                </li>
              ))}
            </ul>
          )}
          {imageInColumn && section.image && <SectionFigure image={section.image} />}
        </div>
      );

    case "testimonials":
      return wrap(
        <>
          <SectionHeading eyebrow="Proof" heading={section.heading} />
          <div className={`grid gap-6 ${section.items.length > 1 ? "md:grid-cols-3" : ""}`}>
            {section.items.map((t) => (
              <figure
                key={t.quote}
                className="flex flex-col justify-between gap-6 rounded-3xl border border-[#0a2440]/10 bg-white p-8 shadow-[0_35px_80px_-60px_rgba(12,10,43,0.55)]"
              >
                <IconQuote className="h-8 w-8 text-lime-500" aria-hidden />
                <blockquote className="text-xl leading-relaxed text-[#0a2440]">&ldquo;{t.quote}&rdquo;</blockquote>
                <figcaption className="text-base font-semibold text-[#0a2440]/70">{t.name}</figcaption>
              </figure>
            ))}
          </div>
        </>
      );
  }
}

export default function LandingPage({ page }: { page: LandingPageData }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero page={page} />
        {page.sections.map(renderSection)}
        {page.faqs.length > 0 && (
          <section className="bg-white py-16 sm:py-20">
            <div className="mx-auto max-w-4xl space-y-10 px-4 sm:px-6 lg:px-8">
              <SectionHeading eyebrow="FAQ" heading="Questions buyers ask" />
              <FaqItems faqs={page.faqs} />
            </div>
            <JsonLd data={faqJsonLd(page.faqs)} />
          </section>
        )}
        <ExploreFurther links={page.explore} />
        <NextStep {...page.nextStep} />
      </main>
      <Footer />
    </div>
  );
}
