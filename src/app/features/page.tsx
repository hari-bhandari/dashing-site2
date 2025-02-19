"use client";
import dynamic from 'next/dynamic';
import Navbar from '@/app/components/Navbar';
import Footer from "@/app/components/Footer";
import FeaturedivExpanded from "@/app/components/FeaturedivExpanded";




export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen dark:bg-slate-950">
      <Navbar />
      <div className=' mt-14'>
        <h1 className="text-center text-5xl font-bold dark:text-white">Discover Our Features</h1>
        <h2 className="text-xl text-gray-500 text-center mx-auto dark:text-white mt-4">Our software is packed with features designed to help your business thrive!</h2>
      </div>
      <FeaturedivExpanded />
      <Footer /> 
     
    </div>
  );
}