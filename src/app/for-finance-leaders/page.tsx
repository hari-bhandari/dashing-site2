import Navbar from "../components/Navigation/Navbar"
import Footer from "../components/Navigation/Footer"
import FinanceLeadersHero from "../components/RolePages/FinanceLeadersHero"
import FinanceLeadersHiddenRisks from "../components/RolePages/FinanceLeadersHiddenRisks"
import FinanceLeadersDelivers from "../components/RolePages/FinanceLeadersDelivers"
import FinanceLeadersBeforeAfter from "../components/RolePages/FinanceLeadersBeforeAfter"
import FinanceLeadersTrust from "../components/RolePages/FinanceLeadersTrust"
import FinanceLeadersNumbersToDecisions from "../components/RolePages/FinanceLeadersNumbersToDecisions"

export default function ForFinanceLeaders() {
    return(
        <div className="flex min-h-screen flex-col text-white">
                    <Navbar />
                    <main className="w-full pt-28 sm:pt-32">
                        <FinanceLeadersHero />
                        <div className="mx-auto my-12 h-px w-11/12 max-w-7xl bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />
                        <FinanceLeadersHiddenRisks />
                        <div className="mx-auto my-12 h-px w-11/12 max-w-7xl bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />
                        <FinanceLeadersDelivers />
                        <div className="mx-auto my-12 h-px w-11/12 max-w-7xl bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />
                        <FinanceLeadersBeforeAfter />
                        <div className="mx-auto my-12 h-px w-11/12 max-w-7xl bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />
                        <FinanceLeadersTrust />
                        <div className="mx-auto my-12 h-px w-11/12 max-w-7xl bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />
                        <FinanceLeadersNumbersToDecisions />
                        <div className="mx-auto my-12 h-px w-11/12 max-w-7xl bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />
                    </main>
                    <Footer />
        </div>
    )
}