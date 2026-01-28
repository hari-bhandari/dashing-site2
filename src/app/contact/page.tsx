import Navbar from "@/app/components/Navigation/Navbar";
import Footer from "@/app/components/Navigation/Footer";
import ContactInfoSection from "@/app/components/Contact/ContactInfoSection";

export default function contact() {
    return (
        <div className="flex min-h-screen flex-col text-white">
            <Navbar />
                <ContactInfoSection />
            <Footer />
        </div>
    );
}