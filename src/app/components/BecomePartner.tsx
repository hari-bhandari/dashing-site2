"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { BsStars } from "react-icons/bs";

export default function BecomePartner() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    const { clientX, clientY } = event;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (clientX - (rect.left + rect.width / 2)) / 20;
    const y = (clientY - (rect.top + rect.height / 2)) / 20;
    setMousePosition({ x, y });
  };

  return (
    <motion.section
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        setMousePosition({ x: 0, y: 0 });
      }}
      initial={{ opacity: 1 }}
      style={{
        transform: isHovering
          ? `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0) scale3d(1, 1, 1)`
          : "translate3d(0px, 0px, 0) scale3d(1, 1, 1)",
        transition: "transform 0.1s ease-out",
      }}
      className="mx-auto w-[75%] md:w-[60%] bg-[#22263e] relative rounded-2xl overflow-hidden"
    >
      <div
    className="relative h-full [background-image:radial-gradient(88%_100%_at_top,rgba(255,255,255,0.9),rgba(3, 196, 255, 0.8))] sm:mx-0 sm:rounded-2xl overflow-hidden hover:cursor-pointer"
    style={{
      boxShadow:
        "0 10px 32px rgba(5, 109, 255, 0.25), 0 1px 1px rgba(0, 119, 255, 0.1), 0 0 0 1px rgba(0, 106, 255, 0.1), 0 4px 6px rgba(34, 42, 53, 0.15), 0 24px 108px rgba(123, 139, 255, 0.2)",
    }}
      >
        <motion.div
          style={{
            transform: isHovering
              ? `translate3d(${-mousePosition.x}px, ${-mousePosition.y}px, 0) scale3d(1.03, 1.03, 1)`
              : "translate3d(0px, 0px, 0) scale3d(1, 1, 1)",
            transition: "transform 0.1s ease-out",
          }}
          className="h-full px-4 py-20 sm:px-10"
        >
          <Noise />
          <div className="flex flex-col items-center justify-center text-center text-white">
            <h2 className="text-4xl font-bold mb-4">
              Become a Dashing Partner
            </h2>
            <h3 className="text-2xl font-semibold mb-4">
              Add Content here
            </h3>
            <button className="flex items-center gap-2 bg-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-80 transition-colors bg-opacity-25">
              Contact Us
              <BsStars className="w-4 h-4 text-white" />
            </button>
          </div>
        </motion.div>
      </div>
    </motion.section>
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