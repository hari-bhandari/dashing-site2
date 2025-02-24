"use client";
import React from "react";
import { IconRobot, IconHeadset, IconDeviceDesktopCode } from '@tabler/icons-react';
import { BsStars } from "react-icons/bs";

export default function InfoDivMobile() {
  return (
    <section className="mx-auto w-[75%] bg-transparent relative rounded-2xl overflow-hidden">
      <div className="relative h-full bg-none sm:rounded-2xl overflow-hidden">
        <div className="h-full px-2 py-12">
          <div className="flex flex-col items-center justify-between gap-8 text-neutral-900 dark:text-white h-full">
            <div className="flex-1 w-full text-center flex-col">
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-neutral-900/[0.15] dark:bg-white/[0.05] border border-white/[0.2] text-sm text-neutral-900 dark:text-white font-semibold">
                <BsStars className="w-4 h-4 text-blue-500" />
                <span>Unlock Full Distribution Capability</span>
              </div>

              <h2 className="text-2xl font-bold mb-4 text-neutral-900 dark:text-white">
                Ready to Transform Your Brokerage?
              </h2>
            </div>
            
            <div className="flex-1 flex flex-col gap-4 w-full">
              <div className="bg-neutral-900/[0.1] dark:bg-white/[0.05] backdrop-blur-sm border border-white/[0.2] p-4 rounded-lg hover:bg-neutral-900/[0.15] dark:hover:bg-white/[0.1] transition-colors">
                <div className="flex items-center gap-3">
                  <IconRobot className="w-10 h-10 text-neutral-900 dark:text-white" />
                  <div>
                    <h3 className="font-bold text-lg text-neutral-900 dark:text-white">AI-Powered Workflow</h3>
                    <p className="text-neutral-700 dark:text-white/80">Ask Dashing AI streamlines RFQs, tariff codes, datasheets, and images for seamless component distribution.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-neutral-900/[0.1] dark:bg-white/[0.05] backdrop-blur-sm border border-white/[0.2] p-4 rounded-lg hover:bg-neutral-900/[0.15] dark:hover:bg-white/[0.1] transition-colors">
                <div className="flex items-center gap-3">
                  <IconHeadset className="w-10 h-10 text-neutral-900 dark:text-white" />
                  <div>
                    <h3 className="font-bold text-lg text-neutral-900 dark:text-white">Exceptional Customer Service</h3>
                    <p className="text-neutral-700 dark:text-white/80">We deliver 24/7 unmatched support—on-site, phone, live tickets, and chat—to keep your business running smoothly.</p>
                  </div>
                </div>
              </div>

              <div className="bg-neutral-900/[0.1] dark:bg-white/[0.05] backdrop-blur-sm border border-white/[0.2] p-4 rounded-lg hover:bg-neutral-900/[0.15] dark:hover:bg-white/[0.1] transition-colors">
                <div className="flex items-center gap-3">
                  <IconDeviceDesktopCode className="w-10 h-10 text-neutral-900 dark:text-white" />
                  <div>
                    <h3 className="font-bold text-lg text-neutral-900 dark:text-white">Cutting-Edge Software Suite</h3>
                    <p className="text-neutral-700 dark:text-white/80">Broker-designed software: sales, inventory, and finance tools in one platform for efficiency</p>
                  </div>
                </div>
              </div>
            </div>

            <button className="flex items-center justify-center gap-2 bg-[#22263e] dark:bg-white/[0.05] backdrop-blur-sm border border-white/[0.2] px-6 py-3 rounded-lg font-semibold hover:bg-[#2b3152] dark:hover:bg-white/[0.1] transition-colors w-full mt-4 text-white">
              Get Started
              <BsStars className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

