import type { Metadata } from "next";
import Navbar from "@/app/components/Navigation/Navbar";
import Footer from "@/app/components/Navigation/Footer";
import ContactInfoSection from "@/app/components/Contact/ContactInfoSection";

export const metadata: Metadata = {
  title: "Contact Us | Dashing Distribution Software",
  description: "Get in touch with the Dashing Distribution Software team for sales, support, or general enquiries about our electronic component distribution ERP.",
};

export default function contact() {
    return (
        <div className="flex min-h-screen flex-col text-white">
            <Navbar />
                <ContactInfoSection />
            <Footer />
        </div>
    );
}