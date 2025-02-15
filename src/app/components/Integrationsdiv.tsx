"use client";

import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('@lottielab/lottie-player/react'), { ssr: false });

export default function Integrationsdiv() {
  return (
    <div className="max-w-[60%] mx-auto py-20">
      <div className="flex items-center justify-between gap-12">
        {/* Video section */}
        <div className="w-1/2 relative aspect-video rounded-lg overflow-hidden h-[415px]">
        <Lottie src="https://cdn.lottielab.com/l/ApkB1Vgh2nCdEM.json" autoplay />
        </div>
        

        {/* Content section */}
        <div className="w-1/2 flex flex-col gap-6">
          <h2 className="text-4xl font-bold text-black">
            Seamless Integrations
          </h2>
          <p className="text-xl text-gray-600">
          Easily integrate Dashing with your existing software solutions to save time & money.
          </p>
          <ul className="space-y-4 text-gray-600">
            <li className="flex items-center gap-2">
              • Easy setup and configuration
            </li>
            <li className="flex items-center gap-2">
              • Real-time data synchronization
            </li>
            <li className="flex items-center gap-2">
              • Tailored Solution
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}