import type { Metadata } from "next";
import Navbar from "@/app/components/Navigation/Navbar";
import Footer from "@/app/components/Navigation/Footer";
import ResourcesIntro from "@/app/components/Resources/ResourcesIntro";
import ResourcesInsights from "@/app/components/Resources/ResourcesInsights";
import ResourcesRealResults from "@/app/components/Resources/ResourcesRealResults";
import ResourcesBlog from "@/app/components/Resources/ResourcesBlog";

export const metadata: Metadata = {
  title: "Resources for Component Brokers | Dashing Distribution",
  description: "Guides, articles, and case studies for independent electronic component brokers on quoting, inventory, legacy migration, and profitable operations.",
  alternates: {
    canonical: "/resources",
  },
};

export default function Resources() {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
                <ResourcesIntro />
                <ResourcesInsights />
                <ResourcesRealResults />
                <ResourcesBlog hubspotBlogId="https://blog.dashingdisty.com/blog/rss.xml" />
            <Footer />
        </div>
    );
}