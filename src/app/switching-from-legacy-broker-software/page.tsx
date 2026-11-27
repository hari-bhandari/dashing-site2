import type { Metadata } from "next";
import LandingPage from "@/app/components/LandingPages/LandingPage";
import { switchingPage } from "@/app/lib/landingPages";

export const metadata: Metadata = {
  title: switchingPage.title,
  description: switchingPage.description,
  alternates: { canonical: switchingPage.path },
};

export default function SwitchingPage() {
  return <LandingPage page={switchingPage} />;
}
