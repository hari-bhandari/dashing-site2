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
        <div className="flex min-h-screen flex-col text-white">
            <Navbar />
            <main className="mx-auto w-full max-w-7xl pt-28 sm:pt-32">
                <CEOsHero />
                <div className="mx-auto my-8 h-px w-full max-w-7xl bg-gradient-to-r from-transparent via-white/10 to-transparent" aria-hidden />
                <CEOsGrowthStalls />
                <div className="mx-auto my-8 h-px w-full max-w-7xl bg-gradient-to-r from-transparent via-white/10 to-transparent" aria-hidden />
                <CEOsEmpowers />
                <div className="mx-auto my-8 h-px w-full max-w-7xl bg-gradient-to-r from-transparent via-white/10 to-transparent" aria-hidden />
                <CEOsBlindSpots />
                <div className="mx-auto my-8 h-px w-full max-w-7xl bg-gradient-to-r from-transparent via-white/10 to-transparent" aria-hidden />
                <CEOsLeadersChoose />
                <div className="mx-auto my-8 h-px w-full max-w-7xl bg-gradient-to-r from-transparent via-white/10 to-transparent" aria-hidden />
                <CEOsStrategyExecution />
            </main>
            <Footer />
        </div>
    );
}