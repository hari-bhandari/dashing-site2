import type { Metadata } from "next";
import Navbar from "../components/Navigation/Navbar";
import Footer from "../components/Navigation/Footer";
import AllInOneERP from "@/app/components/Product/AllInOneERP";
import FlowSimplified from "@/app/components/Product/FlowSimplified";
import SeamlessSetup from "@/app/components/Product/SeamlessSetup";
import CompliancePeace from "@/app/components/Product/CompliancePeace";
import SeeInAction from "@/app/components/Product/SeeInAction";
import JsonLd from "@/app/components/JsonLd";

export const metadata: Metadata = {
  title: "Our Product | Dashing Distribution Software",
  description: "Explore Dashing Distribution Software's all-in-one ERP platform, built for the electronic component distribution industry with seamless setup and compliance built in.",
};

const softwareApplicationJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Dashing Distribution Software",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web-based",
  url: "https://www.dashingdisty.com/our-product",
  description:
    "All-in-one ERP for electronic component brokers, covering real-time quoting, finance dashboards, inventory and compliance tracking, and team collaboration.",
  publisher: {
    "@type": "Organization",
    name: "Dashing Distribution Software",
  },
};

export default function OurProduct() {
    return (
        <div className="flex flex-col min-h-screen text-white">
            <JsonLd data={softwareApplicationJsonLd} />
            <Navbar />
            <AllInOneERP />
            <FlowSimplified />
            <SeamlessSetup />
            <CompliancePeace />
            <SeeInAction />
            <Footer />
        </div>
    )
}