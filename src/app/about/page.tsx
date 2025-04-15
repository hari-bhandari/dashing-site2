"use client";

import { 
    IconDeviceAnalytics, 
    IconShieldLock, 
    IconUsers, 
    IconRotate, 
    IconHeadset,
    IconMessage,
    IconCash
  } from '@tabler/icons-react';

import dynamic from 'next/dynamic';
const Navbar = dynamic(() => import('@/app/components/Navigation/Navbar'), {
  ssr: false
});
import Footer from "@/app/components/Navigation/Footer";
const Carousel = dynamic(() => import('@/app/components/Carousel/Carousel'), {
  ssr: false
});

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen dark:bg-slate-950">
      <Navbar />
      <div className="w-full flex flex-col gap-10 mt-32">
        <h1 className="text-center text-5xl font-bold dark:text-white">Who are we?</h1>
        <h2 className="text-xl text-gray-500 text-center font-semibold max-w-[60%] mx-auto dark:text-white">
          Powering the Electronic Component Distribution industry, we are the leading provider of software on the market. Built to lead industry standards, Dashing Distribution Software is where cutting edge technology meets timeless reliability. 
        </h2>
        <Carousel />
        
        <div className="flex flex-col gap-12 mx-auto mt-20"> {/* Increased gap between sections */}
          <div className='max-w-[60%] mx-auto'>
            <h1 className="text-4xl font-bold text-center mb-2 dark:text-white">Our Motto</h1>
            <p className="text-xl text-gray-600 text-center dark:text-white">
              Dashing Distribution Software – Quality, Speed, Future.
            </p>
          </div>

          <div className='max-w-[60%] mx-auto'>
            <h1 className="text-4xl font-bold text-center mb-6 dark:text-white">The Dashing Difference</h1>
            <p className="text-xl text-gray-600 text-center dark:text-white">
              We set out to find the perfect electronic component distribution software. When we couldn&apos;t find it, we built it ourselves.
              For three years, we developed a solution that truly delivers what the industry needs: efficient, visually appealing, and lightning fast. We didn&apos;t cut corners. We didn&apos;t settle. We created something we&apos;re genuinely proud of.
              Our growth has been intentional and measured. One customer at a time, each receiving our complete attention taking consideration to improvements as we develop our solution further. We reimagined the traditional implementation process, alignment of educating the team with flawless knowledge to ensure they can understand not just the software but the entire flow of business processing embedded into the intelligent workflows.
              Your success drives everything we do. That&apos;s why we&apos;re available whenever you need us, regardless of time zone. We&apos;ve developed comprehensive training materials, utilising AI responsive support tools, traditional manuals, all because we believe in empowering our users.
              The journey wasn&apos;t perfect. Our first test version had flaws and we&apos;re proud of that. Those challenges shaped Dashing into the robust, responsive solution it is today. We learnt. We adapted. We improved.
              This isn&apos;t just software. It&apos;s a partnership built on understanding the unique challenges of electronic component distribution industry and our unwavering commitment to solving them together.
            </p>
          </div>

          {/* New Strengths section */}
          <div className='max-w-[60%] mx-auto'>
            <h1 className="text-4xl font-bold text-center mb-6 dark:text-white">Why Dashing?</h1>
            <p className="text-xl text-gray-600 text-center dark:text-white">
              As industry leaders with decades of collective experience in electronic components distribution and software development, we&apos;ve crafted a system that truly understands your challenges. 
              Our solution makes your data simultaneously accessible and secure, whilst providing comprehensive tracking for orders in progress, processed shipments, and inventory management. We&apos;ve designed it to deliver exactly what you need, where you need it.
              We believe in putting you in control. That&apos;s why we&apos;ve rejected the industry standard of restrictive contracts in favour of flexible, non-committal licensing. Your business deserves freedom, not constraints.
              Value matters. We&apos;ve structured our pricing with a single company wide licence that gives your entire team access to powerful tools and critical information all centralised in one intuitive platform.
              This isn&apos;t about selling you software. It&apos;s about equipping your business with the capabilities it deserves.
            </p>
          </div>

          {/* New Customer Support section */}
          <div className='max-w-[60%] mx-auto'>
            <h1 className="text-4xl font-bold text-center mb-6 dark:text-white">Support your Success</h1>
            <p className="text-xl text-gray-600 text-center dark:text-white">
              We understand the frustration of being left without assistance when you need it most. That&apos;s why we&apos;re committed to providing round the clock support, 24/7, no matter where your business operates across the globe. When you need us, we are there. Our dedication extends beyond the initial implementation. We relentlessly pursue excellence, regularly deploying software updates and introducing new industry leading features that keep you ahead of the competition.
              We believe that powerful software deserves skilled users. Our consistent approach to continued education ensures your team harnesses Dashing&apos;s full capabilities, maximising your return on investment and operational efficiency.
              This isn&apos;t just about solving problems when they arise. It&apos;s about creating a partnership that proactively drives your business forward with every interaction, every update, and every innovation we deliver.
            </p>
          </div>

          {/* New What Drives Us section */}
          <div className='max-w-[60%] mx-auto'>
            <h1 className="text-4xl font-bold text-center mb-6 dark:text-white">What drives us?</h1>
            <p className="text-xl text-gray-600 text-center dark:text-white">
              At Dashing, we&apos;re guided by a few simple principles that are reflected in everything we do...
            </p>
          </div>

          {/* New Features Grid section */}
          <div className='max-w-[60%] mx-auto mb-20'>
            <div className="grid grid-cols-4 gap-6 mb-6">
              {/* First row */}
              <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-lg flex flex-col items-center text-center">
                <IconHeadset className="w-10 h-10 text-blue-500 mb-4" />
                <h3 className="font-bold mb-2 dark:text-white">Unparalleled Customer Support</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 dark:text-white">We put our customers first by providing top-notch support, ensuring your needs are always met.</p>
              </div>
              <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-lg flex flex-col items-center text-center">
                <IconDeviceAnalytics className="w-10 h-10 text-blue-500 mb-4" />
                <h3 className="font-bold mb-2 dark:text-white">User-Friendly Software</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 dark:text-white">Our intuitive and easy-to-use software is designed with our customers in mind, making your experience enjoyable and productive.</p>
              </div>
              <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-lg flex flex-col items-center text-center">
                <IconRotate className="w-10 h-10 text-blue-500 mb-4" />
                <h3 className="font-bold mb-2 dark:text-white">Fast Performance</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 dark:text-white">We understand the importance of speed, so we optimise our software to perform quickly and efficiently for our customers.</p>
              </div>
              <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-lg flex flex-col items-center text-center">
                <IconUsers className="w-10 h-10 text-blue-500 mb-4" />
                <h3 className="font-bold mb-2 dark:text-white">Evolving with Customer Needs</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 dark:text-white">We listen to our customers and continuously improve our software to meet their changing needs and expectations.</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6">
              {/* Second row */}
              <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-lg flex flex-col items-center text-center">
                <IconMessage className="w-10 h-10 text-blue-500 mb-4" />
                <h3 className="font-bold mb-2 dark:text-white">Active Feedback Seekers</h3>
                <p className="text-sm text-gray-600 dark:text-white dark:text-white">We value customer feedback and actively seek it to enhance our software and deliver the best user experience.</p>
              </div>
              <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-lg flex flex-col items-center text-center">
                <IconCash className="w-10 h-10 text-blue-500 mb-4" />
                <h3 className="font-bold mb-2 dark:text-white">Affordable Pricing</h3>
                <p className="text-sm text-gray-600 dark:text-white ">We believe in offering high-quality software at affordable prices, making our solutions accessible to all customers.</p>
              </div>
              <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-lg flex flex-col items-center text-center">
                <IconShieldLock className="w-10 h-10 text-blue-500 mb-4" />
                <h3 className="font-bold mb-2 dark:text-white">Long-Term Security</h3>
                <p className="text-sm text-gray-600 dark:text-white">We are committed to providing long-term security to our customers by continually investing in our software and infrastructure.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}