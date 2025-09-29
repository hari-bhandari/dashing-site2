"use client";

import InfoBox from '@/app/components/Features/Featureddiv';
import Footer from "@/app/components/Navigation/Footer";
import InfoDiv from '@/app/components/Info/InfoDiv';
import InfoDivMobile from "@/app/components/Info/InfoDivMobile";
import BlogPreview from "@/app/components/Blog/BlogPreview";
import IntegrationsDiv from "@/app/components/Integrations/Integrationsdiv";
import Hero from "@/app/components/Hero";
import Navbar from '@/app/components/Navigation/Navbar';
import Testimonials from '@/app/components/Testimonials/Testimonials';
import Timeline from './components/Timeline/Timeline';
import BrokersDilemma from "@/app/components/Sections/BrokersDilemma";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen dark:bg-slate-950">
      <Navbar />
      <Hero />
      <BrokersDilemma />  
      <Testimonials />

        <InfoBox/> 
        <InfoDivMobile />

        <InfoDiv />

        <IntegrationsDiv />
        <Timeline />
        <BlogPreview />
        <Footer /> 
 
    </div>
  );
}
