"use client";

import { useTheme } from 'next-themes';
import InfoBox from '@/app/components/Featureddiv';
import Footer from "@/app/components/Footer";
import InfoDiv from './components/InfoDiv';
import InfoDivMobile from "@/app/components/InfoDivMobile";
import BlogPreview from "@/app/components/Blog/BlogPreview";
import IntegrationsDiv from "@/app/components/Integrationsdiv";
import MacbookScroll from '@/app/components/Hero/Hero';
import Navbar from '@/app/components/Navbar';
import Testimonials from '@/app/components/Testimonials';
import Timeline from './components/Timeline';

export default function Home() {
  const { theme } = useTheme();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen dark:bg-slate-950">
      <Navbar />
      <MacbookScroll 
        src={theme === 'dark' 
          ? "/DarkDashingScreenshot.svg" 
          : "/DashingScreenshot.svg"
        }
      />
      <div className="flex flex-col gap-20 w-full mt-0 sm:mt-0 md:mt-64"> 
        <div className="flex flex-col gap-4 md:gap-8"> 
          <h1 className="text-3xl font-bold text-center dark:text-white lg:text-4xl">Scale at Speed & Drive Higher Sales</h1>
          <h2 className="text-lg text-gray-400 text-center dark:text-white lg:text-xl">Streamline Processes, optimise Inventory, and Supercharge Your Sales Team with Our Cutting-Edge Solution</h2>
          <InfoBox/>
        </div>
        <div className="block md:hidden">
          <InfoDivMobile />
        </div>
        <div className="hidden md:block">
          <InfoDiv />
        </div>
        <IntegrationsDiv/>
        <Testimonials />
        <Timeline />
        <BlogPreview />
        <Footer /> 
      </div>
    </div>
  );
}
