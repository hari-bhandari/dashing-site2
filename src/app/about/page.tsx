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
const Navbar = dynamic(() => import('@/app/components/Navbar'), {
  ssr: false
});
import Footer from "@/app/components/Footer";
const Carousel = dynamic(() => import('@/app/components/Carousel'), {
  ssr: false
});

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen dark:bg-slate-950">
      <Navbar />
      <div className="w-full flex flex-col gap-10 mt-32">
        <h1 className="text-center text-5xl font-bold dark:text-white">Who are we?</h1>
        <h2 className="text-xl text-gray-500 text-center font-semibold max-w-[60%] mx-auto dark:text-white">
          Dashing Distribution Software are the provider of the most comprehensive, electronic component distribution software, on the market today. Combining cutting edge technology, with timeless principles.
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
            <h1 className="text-4xl font-bold text-center mb-6 dark:text-white">Our Story</h1>
            <p className="text-xl text-gray-600 text-center dark:text-white">
              At Dashing, we started out searching for software that catered to the needs of the electronic component industry. However, we soon realized that there wasn&apos;t a single program that checked all the boxes for us. We wanted software that was efficient, visually appealing, and lightning fast. When we couldn&apos;t find it, we decided to build it ourselves. And that&apos;s how Dashing came into existence.
              After three years of relentless effort, we built a software that we are immensely proud of. We started small, with a customer-first approach, and grew organically. We took one customer at a time, ensuring that we provided the best possible service.
              We made a conscious decision to reinvent the installation and training process. We send a member of our team to each customer site to train their staff, making sure they can leverage the software&apos;s features to the fullest.
              Our customers are at the heart of everything we do. We&apos;re always available, no matter the time zone. We&apos;ve created training videos, support tools, and manuals to help users get the most out of the software.
              We&apos;re proud that our first test version of the application had its flaws. It helped us shape the software into what it is today.
            </p>
          </div>

          {/* New Strengths section */}
          <div className='max-w-[60%] mx-auto'>
            <h1 className="text-4xl font-bold text-center mb-6 dark:text-white">Our Strengths</h1>
            <p className="text-xl text-gray-600 text-center dark:text-white">
              As some of the leading experts backed by years of experience within electronic components distribution, we were able to build a system that meets your every need, making your data accessible and private, as well as keeping track of tracked orders, processed orders, and stock. With the flexibility of non-committal licensing, we wanted to ensure we made a system that doesn&apos;t tie you down to contracts, so that you&apos;re still in control. We also wanted to offer our customers the best value we could, so all you need is one license per company and you will have all the information you need in one place.
            </p>
          </div>

          {/* New Customer Support section */}
          <div className='max-w-[60%] mx-auto'>
            <h1 className="text-4xl font-bold text-center mb-6 dark:text-white">Customer-Focused Support</h1>
            <p className="text-xl text-gray-600 text-center dark:text-white">
              We know how frustrating it can be to find yourself stuck without any help, so we make sure we&apos;re available to offer you support every step of the way, 24/7, regardless of your time zone. We are constantly striving to make our great software even greater, with regular software updates and new features as well as training in order to fully utilize our system.
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
                <p className="text-sm text-gray-600 dark:text-gray-400 dark:text-white">We understand the importance of speed, so we optimize our software to perform quickly and efficiently for our customers.</p>
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