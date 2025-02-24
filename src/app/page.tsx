"use client";

import { useTheme } from 'next-themes';
import InfoBox from '@/app/components/Featureddiv';
import Footer from "@/app/components/Footer";
import InfoDiv from './components/InfoDiv';
import InfoDivMobile from "@/app/components/InfoDivMobile";
import Process from "@/app/components/Process";
import BecomePartner from "@/app/components/BecomePartner";
import Integrationsdiv from "@/app/components/Integrationsdiv";
import MacbookScroll from '@/app/components/Hero';
import Navbar from '@/app/components/Navbar';
import Testimonials from '@/app/components/Testimonials';

export default function Home() {
  const { theme } = useTheme();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen dark:bg-slate-950">
      <Navbar />
      <MacbookScroll 
        src={theme === 'dark' 
          ? "/DarkDashingScreenshot.png" 
          : "/DashingScreenshot.png"
        }
      />
      <div className="flex flex-col gap-20 w-full mt-0 sm:mt-0 md:mt-64"> 
        <div className="flex flex-col gap-4 md:gap-8"> 
          <h1 className="text-3xl font-bold text-center dark:text-white lg:text-4xl">Unlock Unparralled Efficiency</h1>
          <h2 className="text-lg text-gray-400 text-center dark:text-white lg:text-xl">Streamline Processes, optimise Inventory, and Supercharge Your Sales Team with Our Cutting-Edge Solution</h2>
          <InfoBox/>
        </div>
        <div className="block md:hidden">
          <InfoDivMobile />
        </div>
        <div className="hidden md:block">
          <InfoDiv />
        </div>
        <Integrationsdiv/>
        <Testimonials />
        <Process />
        <BecomePartner />
        <Footer /> 
      </div>
    </div>
  );
}
