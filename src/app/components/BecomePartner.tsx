"use client";
import React from "react";
import { BsStars } from "react-icons/bs";

export default function BecomePartner() {
  return (
    <section className="mx-auto w-[60%] bg-[#22263e] relative rounded-2xl overflow-hidden">
      <div
        className="relative h-full [background-image:radial-gradient(88%_100%_at_top,rgba(255,255,255,0.9),rgba(3, 196, 255, 0.8))] sm:mx-0 sm:rounded-2xl overflow-hidden"
        style={{
          boxShadow:
            "0 10px 32px rgba(5, 109, 255, 0.25), 0 1px 1px rgba(0, 119, 255, 0.1), 0 0 0 1px rgba(0, 106, 255, 0.1), 0 4px 6px rgba(34, 42, 53, 0.15), 0 24px 108px rgba(123, 139, 255, 0.2)",
        }}
      >
        <div className="h-full px-4 py-20 sm:px-10">
          <Noise />
          <div className="flex flex-col items-center justify-center text-center text-white">
            <h2 className="text-4xl font-bold mb-4">
              Become a Dashing Partner
            </h2>
            <h3 className="text-xl font-semibold mb-4">
                test
            </h3>
            <button className="flex items-center gap-2 bg-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-80 transition-colors bg-opacity-25">
              Contact Us
              <BsStars className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

const Noise = () => {
  return (
    <div
      className="absolute inset-0 w-full h-full scale-100 transform opacity-100"
      style={{
        backgroundImage: "url('/bgtest.svg')",
        backgroundSize: "55%",
        mixBlendMode: "overlay",
      }}
    ></div>
  );
};
