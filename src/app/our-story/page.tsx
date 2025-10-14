import Navbar from "../components/Navigation/Navbar"
import Footer from "../components/Navigation/Footer"
import BrokersTimeline from "../components/OurStory/BrokersTimeline"
import LeadershipTeam from "../components/OurStory/LeadershipTeam"
import JoinOurTeam from "../components/OurStory/JoinOurTeam"

export default function OurStoryPage() {
return (
     <div className="flex min-h-screen flex-col text-white">
        <Navbar />
            <main className="w-full pt-28 sm:pt-32">
               <BrokersTimeline />
               <div className="mx-auto my-12 h-px w-11/12 max-w-7xl bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />
               <LeadershipTeam />
               <div className="mx-auto my-12 h-px w-11/12 max-w-7xl bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />
               <JoinOurTeam />
               <div className="mx-auto my-12 h-px w-11/12 max-w-7xl bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />
            </main>
            <Footer />
     </div>
    )
}