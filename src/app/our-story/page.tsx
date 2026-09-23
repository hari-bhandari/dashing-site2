import type { Metadata } from "next"
import Navbar from "../components/Navigation/Navbar"
import Footer from "../components/Navigation/Footer"
import BrokersTimeline from "../components/OurStory/BrokersTimeline"
import LeadershipTeam from "../components/OurStory/AboutUs"
import JoinOurTeam from "../components/OurStory/JoinOurTeam"

export const metadata: Metadata = {
  title: "Built by Brokers, for Brokers | Dashing Distribution",
  description: "Dashing was built by people who lived the challenges of electronic component brokerage. Find out why that makes the difference for our customers.",
  alternates: {
    canonical: "/our-story",
  },
}

export default function OurStoryPage() {
return (
     <div className="flex min-h-screen flex-col">
        <Navbar />
            <BrokersTimeline />
            <LeadershipTeam />
            <JoinOurTeam />
         <Footer />
     </div>
    )
}