import Navbar from "@/app/components/Navigation/Navbar";
import Footer from "@/app/components/Navigation/Footer";
import CEOsHero from "@/app/components/RolePages/CEOsHero";

export default function ForCeosPage() {
    return (
        <div className="flex min-h-screen flex-col text-white">
            <Navbar />
            <main className="mx-auto w-full max-w-7xl pt-28 sm:pt-32">
                <CEOsHero />
            </main>
            <Footer />
        </div>
    );
}