import type { Metadata } from "next";
import Navbar from "@/app/components/Navigation/Navbar";
import Footer from "@/app/components/Navigation/Footer";
import ResourcesIntro from "@/app/components/Resources/ResourcesIntro";
import ResourcesInsights from "@/app/components/Resources/ResourcesInsights";
import ResourcesRealResults from "@/app/components/Resources/ResourcesRealResults";
import ResourcesBlog from "@/app/components/Resources/ResourcesBlog";

export const metadata: Metadata = {
  title: "Resources & Insights | Dashing Distribution Software",
  description: "Explore guides, insights, and real results from Dashing Distribution Software, the ERP built for electronic component distributors.",
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