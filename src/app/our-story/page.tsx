import Navbar from "../components/Navigation/Navbar"
import Footer from "../components/Navigation/Footer"
import BrokersTimeline from "../components/OurStory/BrokersTimeline"
import LeadershipTeam from "../components/OurStory/LeadershipTeam"
import JoinOurTeam from "../components/OurStory/JoinOurTeam"

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