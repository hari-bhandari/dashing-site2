"use client";

import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('@lottielab/lottie-player/react'), { ssr: false });

export default function Integrationsdiv() {
  return (
    <div className="max-w-[60%] mx-auto pb-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Video section */}
        <div className="w-full md:w-1/2 relative aspect-video rounded-lg overflow-hidden h-[415px] order-2 md:order-1">
          <Lottie src="https://cdn.lottielab.com/l/ApkB1Vgh2nCdEM.json" autoplay />
        </div>

        {/* Content section */}
        <div className="w-full md:w-1/2 flex flex-col gap-6 order-1 md:order-2">
          <h2 className="text-4xl font-bold text-black dark:text-white">
            Everything in One Place
          </h2>
          <p className="text-xl text-gray-600 dark:text-white">
            No more jumping between different tools—Dashing does it all for you. What used to take multiple apps is now seamlessly handled in one place, saving you time and hassle.
          </p>
          <ul className="space-y-4 text-gray-600 dark:text-white">
            <li className="flex items-center gap-2">
              • Easy setup, no headaches
            </li>
            <li className="flex items-center gap-2">
              • Real-time data syncing, always up to date
            </li>
            <li className="flex items-center gap-2">
              • A solution that fits your needs
            </li>
          </ul>
          <p className="text-xl text-gray-600 dark:text-white">
            Simple, smooth, and stress-free. That’s Dashing.
          </p>
        </div>
      </div>
    </div>
  );
}