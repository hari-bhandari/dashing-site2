import Navbar from "@/app/components/Navigation/Navbar";
import Footer from "@/app/components/Navigation/Footer";
import CEOsHero from "@/app/components/RolePages/CEOsHero";
import CEOsGrowthStalls from "@/app/components/RolePages/CEOsGrowthStalls";
import CEOsEmpowers from "@/app/components/RolePages/CEOsEmpowers";
import CEOsBlindSpots from "@/app/components/RolePages/CEOsBlindSpots";
import CEOsLeadersChoose from "@/app/components/RolePages/CEOsLeadersChoose";
import CEOsStrategyExecution from "@/app/components/RolePages/CEOsStrategyExecution";

export default function ForCeosPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
                <CEOsHero />
                <CEOsGrowthStalls />
                <CEOsEmpowers />
                <CEOsBlindSpots />
                <CEOsLeadersChoose />
                <CEOsStrategyExecution />
            <Footer />
        </div>
    );
}