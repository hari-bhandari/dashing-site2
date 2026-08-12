import type { Metadata } from "next";
import Navbar from "@/app/components/Navigation/Navbar";
import Footer from "@/app/components/Navigation/Footer";
import SalesLeadersHero from "@/app/components/RolePages/SalesLeadersHero";
import SalesLeadersPainPoints from "@/app/components/RolePages/SalesLeadersPainPoints";
import SalesLeadersHowHelps from "@/app/components/RolePages/SalesLeadersHowHelps";
import SalesLeadersBeforeAfter from "@/app/components/RolePages/SalesLeadersBeforeAfter";
import SalesLeadersTrust from "@/app/components/RolePages/SalesLeadersTrust";
import SalesLeadersStreamlined from "@/app/components/RolePages/SalesLeadersStreamlined";
import SalesLeadersFinalCTA from "@/app/components/RolePages/SalesLeadersFinalCTA";

export const metadata: Metadata = {
  title: "For Sales Leaders | Dashing Distribution Software",
  description: "Discover how Dashing Distribution Software helps sales leaders in electronic component distribution streamline workflows and close more deals.",
};

export default function ForSalesLeaders() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
                <SalesLeadersHero />
                <SalesLeadersPainPoints />
                <SalesLeadersHowHelps />
                <SalesLeadersBeforeAfter />
                <SalesLeadersTrust />
                <SalesLeadersStreamlined />
                <SalesLeadersFinalCTA />
            <Footer />
        </div>
    );
}