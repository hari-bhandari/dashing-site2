"use client";
import React, { useState } from "react";
import { IconRobot, IconHeadset, IconDeviceDesktopCode } from '@tabler/icons-react'; 
import { BsStars } from "react-icons/bs";
import CalendlyPopup from "../Popups/CalendlyPopup";

export default function InfoDiv() {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  return (
    <>
      <section
        className="mx-auto w-[75%] lg:w-[60%] bg-[#22263e] relative rounded-2xl overflow-hidden"
      >
        <div
          className="relative h-full [background-image:radial-gradient(88%_100%_at_top,rgba(255,255,255,0.9),rgba(3, 196, 255, 0.8))] sm:mx-0 sm:rounded-2xl overflow-hidden"
          style={{
            boxShadow:
              "0 10px 32px rgba(5, 109, 255, 0.25), 0 1px 1px rgba(0, 119, 255, 0.1), 0 0 0 1px rgba(0, 106, 255, 0.1), 0 4px 6px rgba(34, 42, 53, 0.15), 0 24px 108px rgba(123, 139, 255, 0.2)",
          }}
        >
          <div className="h-full px-2 py-12 sm:px-10">
            <Noise />
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-white h-full">
              <div className="hidden md:flex flex-1 w-full text-center md:text-left flex-col">
                <h2 className="text-2xl sm:text-4xl font-bold mb-4">
                  Ready to Transform Your Brokerage?
                </h2>
                <button 
                  className="flex items-center justify-center gap-2 bg-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-80 transition-colors bg-opacity-25 hover:cursor-pointer w-fit relative z-[60]"
                  onClick={() => setIsCalendlyOpen(true)}
                >
                  Get Started
                  <BsStars className="w-4 h-4 text-white" />
                </button>
              </div>
              
              {/* Cards section */}
              <div className="flex-1 flex flex-col gap-4 w-full">
                <div className="bg-white bg-opacity-10 p-4 rounded-lg">
                  <div className="flex items-center gap-3">
                    <IconRobot className="w-10 h-10 text-white" />
                    <div>
                      <h1 className="font-bold">AI-Powered Workflow</h1>
                      <h2>Ask Dashing AI streamlines RFQs, tariff codes, datasheets, and images for seamless component distribution.</h2>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white bg-opacity-10 p-4 rounded-lg">
                  <div className="flex items-center gap-3">
                    <IconHeadset className="w-10 h-10 text-white" />
                    <div>
                      <h1 className="font-bold">Exceptional Customer Service</h1>
                      <h2>We deliver 24/7 unmatched support on-site, phone, live tickets, and chat to keep your business running smoothly.</h2>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white bg-opacity-10 p-4 rounded-lg">
                  <div className="flex items-center gap-3">
                    <IconDeviceDesktopCode className="w-10 h-10 text-white" />
                    <div>
                      <h1 className="font-bold">Cutting-Edge Software Suite</h1>
                      <h2>Broker-designed software: sales, inventory, and finance tools in one platform for efficiency</h2>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile button - shown below md breakpoint */}
              <div className="md:hidden w-full mt-auto">
                <button 
                  className="flex items-center justify-center gap-2 bg-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-80 transition-colors bg-opacity-25 w-full relative z-[60]"
                  onClick={() => setIsCalendlyOpen(true)}
                >
                  Get Started
                  <BsStars className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Add the CalendlyPopup component */}
      <CalendlyPopup 
        isOpen={isCalendlyOpen}
        onClose={() => setIsCalendlyOpen(false)}
      />
    </>
  );
}

const Noise = () => {
  return (
    <div
      className="absolute inset-0 w-full h-full transform opacity-50 hidden md:block"
      style={{
        backgroundImage: "url('/bgtest.svg')",
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        mixBlendMode: "overlay",
      }}
    />
  );
};