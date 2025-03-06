"use client";
import React from "react";
import { MotionValue, motion } from "framer-motion";
import Image from "next/image";

export const Lid = ({
  scaleX,
  scaleY,
  rotate,
  translate,
  src,
}: {
  scaleX: MotionValue<number>;
  scaleY: MotionValue<number>;
  rotate: MotionValue<number>;
  translate: MotionValue<number>;
  src?: string;
}) => {
  return (
    <div className="relative [perspective:800px]">
      <div
        style={{
          transform: "perspective(800px) rotateX(-25deg) translateZ(0px)",
          transformOrigin: "bottom",
          transformStyle: "preserve-3d",
        }}
        className="h-[12rem] w-[32rem] bg-[#010101] rounded-2xl p-2 relative"
      >
        <div
          style={{
            boxShadow: "0px 2px 0px 2px var(--neutral-900) inset",
          }}
          className="absolute inset-0 bg-[#010101] rounded-lg flex items-center justify-center"
        >
          <span className="text-white"></span>
        </div>
      </div>
      <motion.div
        style={{
          scaleX: scaleX,
          scaleY: scaleY,
          rotateX: rotate,
          translateY: translate,
          transformStyle: "preserve-3d",
          transformOrigin: "top",
          willChange: 'transform', // Add for better performance
        }}
        className="h-96 w-[32rem] absolute inset-0 bg-[#010101] rounded-2xl p-2"
      >
        <div className="absolute inset-0 bg-[#272729] rounded-lg" />
        <div className="absolute inset-0 bg-gray-300 animate-pulse rounded-lg" />
        <Image
          src={src as string}
          alt="Product Preview"
          fill
          priority // Add this to prioritize loading
          loading="eager" // Ensure it loads early
          className="object-cover object-left-top absolute rounded-lg inset-0 h-full w-full"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // More specific sizes
          quality={85} // Slightly reduce quality for better load time
          onLoadingComplete={(img) => {
            // Remove placeholder when image is loaded
            const parent = img.parentElement;
            if (parent) {
              // Find and remove the placeholder
              const placeholder = parent.querySelector('.bg-gray-300');
              if (placeholder) placeholder.remove();
            }
          }}
        />
      </motion.div>
    </div>
  );
};

export default Lid;