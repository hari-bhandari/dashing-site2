import Navbar from "../components/Navigation/Navbar";
import Footer from "../components/Navigation/Footer";
import AllInOneERP from "@/app/components/Product/AllInOneERP";
import FlowSimplified from "@/app/components/Product/FlowSimplified";
import SeamlessSetup from "@/app/components/Product/SeamlessSetup";
import CompliancePeace from "@/app/components/Product/CompliancePeace";
import SeeInAction from "@/app/components/Product/SeeInAction";

export default function OurProduct() {
    return (
        <div className="flex min-h-screen flex-col text-white">
            <Navbar />
            <main className="mx-auto w-full max-w-7xl pt-28 sm:pt-32">
                <AllInOneERP />
                <div className="mx-auto my-8 h-px w-full max-w-7xl bg-gradient-to-r from-transparent via-white/10 to-transparent" aria-hidden />
                <FlowSimplified />
                <div className="mx-auto my-8 h-px w-full max-w-7xl bg-gradient-to-r from-transparent via-white/10 to-transparent" aria-hidden />
                <SeamlessSetup />
                <div className="mx-auto my-8 h-px w-full max-w-7xl bg-gradient-to-r from-transparent via-white/10 to-transparent" aria-hidden />
                <CompliancePeace />
                <div className="mx-auto my-8 h-px w-full max-w-7xl bg-gradient-to-r from-transparent via-white/10 to-transparent" aria-hidden />
                <SeeInAction />
            </main>
            <Footer />
        </div>
    )
}