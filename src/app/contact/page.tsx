import Navbar from "@/app/components/Navigation/Navbar";
import Footer from "@/app/components/Navigation/Footer";
import ContactDemoSection from "@/app/components/Contact/ContactDemoSection";
import ContactInfoSection from "@/app/components/Contact/ContactInfoSection";

export default function contact() {
    return (
        <div className="flex min-h-screen flex-col text-white">
            <Navbar />
            <main className="mx-auto w-full max-w-7xl pt-28 sm:pt-32">
                <ContactDemoSection />
                <div className="mx-auto my-8 h-px w-full max-w-7xl bg-gradient-to-r from-transparent via-white/10 to-transparent" aria-hidden />
                <ContactInfoSection />
            </main>
            <Footer />
        </div>
    );
}