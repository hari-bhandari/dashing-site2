import Navbar from "../components/Navigation/Navbar";
import Footer from "../components/Navigation/Footer";
import AllInOneERP from "@/app/components/Product/AllInOneERP";
import FlowSimplified from "@/app/components/Product/FlowSimplified";
import SeamlessSetup from "@/app/components/Product/SeamlessSetup";
import CompliancePeace from "@/app/components/Product/CompliancePeace";
import SeeInAction from "@/app/components/Product/SeeInAction";

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