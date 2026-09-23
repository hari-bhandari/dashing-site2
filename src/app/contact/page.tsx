import type { Metadata } from "next";
import Navbar from "@/app/components/Navigation/Navbar";
import Footer from "@/app/components/Navigation/Footer";
import ContactInfoSection from "@/app/components/Contact/ContactInfoSection";

export const metadata: Metadata = {
  title: "Contact Dashing Distribution | Book a Demo or Get in Touch",
  description: "Ready to see Dashing in action? Book a demo, ask a question, or speak to our team about migrating from your current system. We're here to help.",
  alternates: {
    canonical: "/contact",
  },
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