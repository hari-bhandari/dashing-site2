"use client";
import dynamic from 'next/dynamic';
const Navbar = dynamic(() => import('@/app/components/Navbar'), {
  ssr: false
});
import Footer from "@/app/components/Footer";
import { 
  IconShieldLock,
  IconUserCog,
  IconServer,
  IconTargetArrow
} from '@tabler/icons-react';




export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen dark:bg-slate-950">
      <Navbar />
      <div className=' mt-32 max-w-[60%] mx-auto'>
        <h1 className="text-center text-5xl font-bold dark:text-white">Your Data is your Data</h1>
        <h2 className="text-xl text-gray-500 text-center mx-auto dark:text-white mt-4">Your data is what makes your business unique. We understand the importance of keeping your data safe and secure. Our software is designed to work independently from your data, ensuring you have complete control over your valuable company information.</h2>
      </div>
      <div className='max-w-[60%] mx-auto mb-20 mt-14'>
            <div className="grid grid-cols-4 gap-6 mb-6">
             
              <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-lg flex flex-col items-center text-center">
                <IconShieldLock className="w-10 h-10 text-blue-500 mb-4" />
                <h3 className="font-bold mb-2 dark:text-white">Top-Notch Protection</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 dark:text-white">We offer industry-leading security measures to ensure your data remains protected at all times, giving you peace of mind.</p>
              </div>
              <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-lg flex flex-col items-center text-center">
                <IconUserCog className="w-10 h-10 text-blue-500 mb-4" />
                <h3 className="font-bold mb-2 dark:text-white">Manage Your Data</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 dark:text-white">You have full control over your data, ensuring that only authorized personnel can access it, providing an added layer of security.</p>
              </div>
              <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-lg flex flex-col items-center text-center">
                <IconServer className="w-10 h-10 text-blue-500 mb-4" />
                <h3 className="font-bold mb-2 dark:text-white">On Your Server</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 dark:text-white">Your data is stored on your own server, giving you complete control over its management and ensuring your business remains secure.</p>
              </div>
              <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-lg flex flex-col items-center text-center">
                <IconTargetArrow className="w-10 h-10 text-blue-500 mb-4" />
                <h3 className="font-bold mb-2 dark:text-white">Your Needs Matter</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 dark:text-white">Our solutions are designed with you in mind, ensuring they meet your unique needs and help your business succeed.</p>
              </div>
            </div>
        </div>
     
      <Footer /> 
     
    </div>
  );
}