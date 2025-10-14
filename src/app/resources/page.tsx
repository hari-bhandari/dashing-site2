import Navbar from "@/app/components/Navigation/Navbar";
import Footer from "@/app/components/Navigation/Footer";
import ResourcesIntro from "@/app/components/Resources/ResourcesIntro";
import ResourcesInsights from "@/app/components/Resources/ResourcesInsights";
import ResourcesRealResults from "@/app/components/Resources/ResourcesRealResults";
import ResourcesExperts from "@/app/components/Resources/ResourcesExperts";

export default function Resources() {
    return (
        <div className="flex min-h-screen flex-col text-white">
            <Navbar />
            <main className="mx-auto w-full max-w-7xl pt-28 sm:pt-32">
                <ResourcesIntro />
                <div className="mx-auto my-8 h-px w-full max-w-7xl bg-gradient-to-r from-transparent via-white/10 to-transparent" aria-hidden />
                <ResourcesInsights />
                <div className="mx-auto my-8 h-px w-full max-w-7xl bg-gradient-to-r from-transparent via-white/10 to-transparent" aria-hidden />
                <ResourcesRealResults />
                <div className="mx-auto my-8 h-px w-full max-w-7xl bg-gradient-to-r from-transparent via-white/10 to-transparent" aria-hidden />
                <ResourcesExperts />
            </main>
            <Footer />
        </div>
    );
}