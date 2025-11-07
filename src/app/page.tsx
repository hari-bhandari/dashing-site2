"use client";


import Footer from "@/app/components/Navigation/Footer";
import Hero from "@/app/components/Hero";
import Navbar from '@/app/components/Navigation/Navbar';
import Testimonials from '@/app/components/Testimonials/Testimonials';
import BrokersDilemma from "@/app/components/Sections/BrokersDilemma";
import DashingGoal from "@/app/components/Sections/DashingGoal";
import DashingTransformation from "@/app/components/Sections/DashingTransformation";
import DashingCapabilities from "@/app/components/Sections/DashingCapabilities";
import RoleSolutions from "@/app/components/Sections/RoleSolutions";
import DashingJourney from "@/app/components/Sections/DashingJourney";
import DashingResources from "@/app/components/Sections/DashingResources";
import DashingCTA from "@/app/components/Sections/DashingCTA";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen text-white">
      <Navbar /> 
      <Hero />
      <BrokersDilemma />  
      <DashingGoal />
      <DashingTransformation />
      <DashingCapabilities />
      <RoleSolutions />
      <DashingJourney />
      <DashingResources />
      <DashingCTA />
      <Testimonials />
      <Footer /> 
 
    </div>
  );
}
