'use client';

import IntegrationsAnimation from "./IntegrationsAnimation";

export default function IntegrationsDiv() {
  return (
    <div className="relative w-full max-w-6xl mx-auto py-16 px-4">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="w-full md:w-1/2">
          <IntegrationsAnimation />
        </div>     
        <div className="w-full md:w-1/2 space-y-4 text-left">
          <h2 className="text-2xl md:text-4xl font-bold dark:text-white">Everything in One Place</h2>
          <h2 className="text-sm md:text-xl text-gray-600 dark:text-white">
            No more jumping between different tools—Dashing does it all for you. 
            What used to take multiple apps is now seamlessly handled in one place, 
            saving you time and hassle.
          </h2>
          <ul className="text-sm md:text-xl text-gray-600 list-disc pl-5 space-y-2 dark:text-white">
            <li>Easy setup, no headaches</li>
            <li>Real-time data syncing, always up to date</li>
            <li>A solution that fits your needs</li>
          </ul>
          <h2 className="text-m md:text-xl text-gray-600 font-bold dark:text-white">Simple, smooth, and stress-free. That&apos;s Dashing.</h2>
        </div>
      </div>
    </div>
  )
}