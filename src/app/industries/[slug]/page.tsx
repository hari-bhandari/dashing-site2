import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LandingPage from "@/app/components/LandingPages/LandingPage";
import { industryPages } from "@/app/lib/landingPages";

export const dynamicParams = false;

export function generateStaticParams() {
  return industryPages.map(({ slug }) => ({ slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = industryPages.find((p) => p.slug === slug);
  if (!page) return {};
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: page.path },
  };
}

export default async function IndustryPage({ params }: Props) {
  const { slug } = await params;
  const page = industryPages.find((p) => p.slug === slug);
  if (!page) notFound();
  return <LandingPage page={page} />;
}
