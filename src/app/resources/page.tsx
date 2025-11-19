import Navbar from "@/app/components/Navigation/Navbar";
import Footer from "@/app/components/Navigation/Footer";
import ResourcesIntro from "@/app/components/Resources/ResourcesIntro";
import ResourcesInsights from "@/app/components/Resources/ResourcesInsights";
import ResourcesRealResults from "@/app/components/Resources/ResourcesRealResults";
import ResourcesExperts from "@/app/components/Resources/ResourcesExperts";

export default function Resources() {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
                <ResourcesIntro />
                <ResourcesInsights />
                <ResourcesRealResults />
                <ResourcesExperts />
            <Footer />
        </div>
    );
}