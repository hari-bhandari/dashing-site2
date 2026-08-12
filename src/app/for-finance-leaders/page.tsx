import type { Metadata } from "next"
import Navbar from "../components/Navigation/Navbar"
import Footer from "../components/Navigation/Footer"
import FinanceLeadersHero from "../components/RolePages/FinanceLeadersHero"
import FinanceLeadersHiddenRisks from "../components/RolePages/FinanceLeadersHiddenRisks"
import FinanceLeadersDelivers from "../components/RolePages/FinanceLeadersDelivers"
import FinanceLeadersBeforeAfter from "../components/RolePages/FinanceLeadersBeforeAfter"
import FinanceLeadersTrust from "../components/RolePages/FinanceLeadersTrust"
import FinanceLeadersNumbersToDecisions from "../components/RolePages/FinanceLeadersNumbersToDecisions"

export const metadata: Metadata = {
  title: "For Finance Leaders | Dashing Distribution Software",
  description: "See how Dashing Distribution Software gives finance leaders in electronic component distribution clearer numbers, lower risk, and faster decisions.",
}

export default function ForFinanceLeaders() {
    return(
        <div className="flex min-h-screen flex-col">
                    <Navbar />
                        <FinanceLeadersHero />
                        <FinanceLeadersHiddenRisks /> 
                        <FinanceLeadersDelivers /> 
                        <FinanceLeadersBeforeAfter /> 
                        <FinanceLeadersTrust /> 
                        <FinanceLeadersNumbersToDecisions /> 
                    <Footer />
        </div>
    )
}