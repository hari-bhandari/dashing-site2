import Navbar from "@/app/components/Navigation/Navbar";
import Footer from "@/app/components/Navigation/Footer";
import SalesLeadersHero from "@/app/components/RolePages/SalesLeadersHero";
import SalesLeadersPainPoints from "@/app/components/RolePages/SalesLeadersPainPoints";
import SalesLeadersHowHelps from "@/app/components/RolePages/SalesLeadersHowHelps";
import SalesLeadersBeforeAfter from "@/app/components/RolePages/SalesLeadersBeforeAfter";
import SalesLeadersTrust from "@/app/components/RolePages/SalesLeadersTrust";
import SalesLeadersStreamlined from "@/app/components/RolePages/SalesLeadersStreamlined";
import SalesLeadersFinalCTA from "@/app/components/RolePages/SalesLeadersFinalCTA";

export default function ForSalesLeaders() {
    return (
        <div className="flex min-h-screen flex-col text-white">
            <Navbar />
            <main className="mx-auto w-full max-w-7xl pt-28 sm:pt-32">
                <SalesLeadersHero />
                <div className="mx-auto my-8 h-px w-full max-w-7xl bg-gradient-to-r from-transparent via-white/10 to-transparent" aria-hidden />
                <SalesLeadersPainPoints />
                <div className="mx-auto my-8 h-px w-full max-w-7xl bg-gradient-to-r from-transparent via-white/10 to-transparent" aria-hidden />
                <SalesLeadersHowHelps />
                <div className="mx-auto my-8 h-px w-full max-w-7xl bg-gradient-to-r from-transparent via-white/10 to-transparent" aria-hidden />
                <SalesLeadersBeforeAfter />
                <div className="mx-auto my-8 h-px w-full max-w-7xl bg-gradient-to-r from-transparent via-white/10 to-transparent" aria-hidden />
                <SalesLeadersTrust />
                <div className="mx-auto my-8 h-px w-full max-w-7xl bg-gradient-to-r from-transparent via-white/10 to-transparent" aria-hidden />
                <SalesLeadersStreamlined />
                <div className="mx-auto my-8 h-px w-full max-w-7xl bg-gradient-to-r from-transparent via-white/10 to-transparent" aria-hidden />
                <SalesLeadersFinalCTA />
            </main>
            <Footer />
        </div>
    );
}