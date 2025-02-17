"use client";
import dynamic from 'next/dynamic';
const Navbar = dynamic(() => import('@/app/components/Navbar'), {
  ssr: false
});
import Footer from "@/app/components/Footer";




export default function Home() {
  return (
    <div className="flex flex-col items-stretch justify-between min-h-screen">
      <Navbar />
      <h1 className="text-6xl font-bold text-center dark:text-white mt-[100] mb-[300]">Coming Soon...</h1>
      <Footer /> 
     
    </div>
  );
}