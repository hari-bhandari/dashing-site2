import type { Metadata } from "next";
import Navbar from "../components/Navigation/Navbar";
import Footer from "../components/Navigation/Footer";
import AllInOneERP from "@/app/components/Product/AllInOneERP";
import FlowSimplified from "@/app/components/Product/FlowSimplified";
import SeamlessSetup from "@/app/components/Product/SeamlessSetup";
import CompliancePeace from "@/app/components/Product/CompliancePeace";
import SeeInAction from "@/app/components/Product/SeeInAction";

export const metadata: Metadata = {
  title: "Our Product | Dashing Distribution Software",
  description: "Explore Dashing Distribution Software's all-in-one ERP platform, built for the electronic component distribution industry with seamless setup and compliance built in.",
};

export default function OurProduct() {
    return (
        <div className="flex flex-col min-h-screen text-white">
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