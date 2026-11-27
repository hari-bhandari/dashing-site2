import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LandingPage from "@/app/components/LandingPages/LandingPage";
import { featurePages } from "@/app/lib/landingPages";

export const dynamicParams = false;

export function generateStaticParams() {
  return featurePages.map(({ slug }) => ({ slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = featurePages.find((p) => p.slug === slug);
  if (!page) return {};
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: page.path },
  };
}

export default async function FeaturePage({ params }: Props) {
  const { slug } = await params;
  const page = featurePages.find((p) => p.slug === slug);
  if (!page) notFound();
  return <LandingPage page={page} />;
}
