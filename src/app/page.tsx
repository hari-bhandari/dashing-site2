"use client";

import InfoBox from '@/app/components/Featureddiv';
import Footer from "@/app/components/Footer";
import WobbleCard from "@/app/components/WobbleCard";
import Process from "@/app/components/Process";
import BecomePartner from "@/app/components/BecomePartner";
import Integrationsdiv from "@/app/components/Integrationsdiv";
import MacbookScroll from '@/app/components/Hero';
import Navbar from '@/app/components/Navbar';
import Testimonials from '@/app/components/Testimonials';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen dark:bg-slate-950">
      <Navbar />
      <MacbookScroll src="/DashingScreenshot.png"/>
      <div className="flex flex-col gap-20 w-full -mt-[405px]"> 
        <div className="flex flex-col gap-8"> 
          <h1 className="text-4xl font-bold text-center dark:text-white">Unlock Unparralled Efficiency</h1>
          <h2 className="text-xl text-gray-400 text-center dark:text-white">Streamline Processes, optimise Inventory, and Supercharge Your Sales Team with Our Cutting-Edge Solution</h2>
          <InfoBox/>
        </div>
        <WobbleCard />
        <Integrationsdiv/>
        <Testimonials />
        <Process />
        <BecomePartner />
        <Footer /> 
      </div>
    </div>
  );
}
