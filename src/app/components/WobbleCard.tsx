"use client";
import React from "react";
import {IconRobot, IconHeadset, IconDeviceDesktopCode } from '@tabler/icons-react';
import { BsStars } from "react-icons/bs";

export default function WobbleCard() {
  return (
    <section className="mx-auto w-[60%] bg-[#22263e] relative rounded-2xl overflow-hidden cursor-pointer">
      <div
        className="relative h-full [background-image:radial-gradient(88%_100%_at_top,rgba(255,255,255,0.9),rgba(3, 196, 255, 0.8))] sm:mx-0 sm:rounded-2xl overflow-hidden"
        style={{
          boxShadow:
            "0 10px 32px rgba(5, 109, 255, 0.25), 0 1px 1px rgba(0, 119, 255, 0.1), 0 0 0 1px rgba(0, 106, 255, 0.1), 0 4px 6px rgba(34, 42, 53, 0.15), 0 24px 108px rgba(123, 139, 255, 0.2)",
        }}
      >
        <div className="h-full px-4 py-20 sm:px-10">
          <Noise />
          <div className="flex items-center justify-between gap-8 text-white">
            <div className="flex-1">
              <h2 className="text-4xl font-bold mb-4">
                Elevate Your Electronic Component Distribution
              </h2>
              <h3 className="text-xl font-semibold mb-4">
                Focus on growing your business while we handle the technical aspects.
              </h3>
              <button 
                className="cursor-pointer flex items-center gap-2 bg-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-80 hover:cursor-pointer transition-all duration-200 bg-opacity-25"
              >
                Get Started
                <BsStars className="w-4 h-4 text-white" />
              </button>
            </div>
            
            <div className="flex-1 flex flex-col gap-4"> 
              <div className="bg-white bg-opacity-10 p-4 rounded-lg">
                <div className="flex items-center gap-3">
                  <IconRobot className="w-12 h-12 text-white" />
                  <div>
                    <h1 className="font-bold">AI-Powered Workflow</h1>
                    <h2>Ask Dashing AI streamlines RFQs, tariff codes, datasheets, and images for seamless component distribution.</h2>
                  </div>
                </div>
              </div>
              
              <div className="bg-white bg-opacity-10 p-4 rounded-lg">
                <div className="flex items-center gap-3">
                  <IconHeadset className="w-12 h-12 text-white" />
                  <div>
                    <h1 className="font-bold">Exceptional Customer Service</h1>
                    <h2>We deliver 24/7 unmatched support—on-site, phone, live tickets, and chat—to keep your business running smoothly.</h2>
                  </div>
                </div>
              </div>

              <div className="bg-white bg-opacity-10 p-4 rounded-lg">
                <div className="flex items-center gap-3">
                  <IconDeviceDesktopCode className="w-12 h-12 text-white" />
                  <div>
                    <h1 className="font-bold">Cutting-Edge Software Suite</h1>
                    <h2>Broker-designed software: sales, inventory, and finance tools in one platform for efficiency.</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const Noise = () => {
  return (
    <div
      className="absolute inset-0 w-full h-full scale-[100%] transform opacity-100 mb-6"
      style={{
        backgroundImage: "url('/bgtest.svg')",
        backgroundSize: "60%",
        mixBlendMode: "overlay",
      }}
    ></div>
  );
};
