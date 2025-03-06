"use client";
import React, { useEffect, useRef, useState } from "react";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";
import { BsStars } from "react-icons/bs";
import Image from "next/image";
import CalendlyPopup from "../CalendlyPopup";
import Typewriter from "./Typewriter";
import Lid from "./MacbookLid"; // Import the Lid component
import { Keypad, SpeakerGrid, Trackpad } from "./MacbookKeyboard"; // Import the keyboard components

export default function MacbookScroll({
  src,
  showGradient,
  title,
  badge,
}: {
  src?: string;
  showGradient?: boolean;
  title?: string | React.ReactNode;
  badge?: React.ReactNode;
}) {
  const [isMobile, setIsMobile] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scaleX = useTransform(scrollYProgress, [0, 0.3], [1.2, 1.5]);
  const scaleY = useTransform(scrollYProgress, [0, 0.3], [0.6, 1.5]);
  const translate = useTransform(
    scrollYProgress,
    [0, 0.5],
    [0, isMobile ? 1000 : 325] 
  );
  const rotate = useTransform(scrollYProgress, [0.1, 0.12, 0.3], [-28, -28, 0]);
  const textTransform = useTransform(scrollYProgress, [0, 0.3], [0, 100]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  // Define the typewriter words for the heading
  const typewriterWords = [
    {
      text: "Software",
      className: "text-neutral-800 dark:text-white",
    },
    {
      text: "Built",
      className: "text-neutral-800 dark:text-white",
    },
    {
      text: "By",
      className: "text-neutral-800 dark:text-white",
    },
    {
      text: "Brokers",
      className: "text-blue-500",
    },
    {
      text: "For",
      className: "text-neutral-800 dark:text-white",
    },
    {
      text: "Brokers",
      className: "text-blue-500",
    },
  ];

  return (
    <>
      {/* Mobile View */}
      <div className="md:hidden w-full flex flex-col items-center justify-center py-40">
        <div className="text-center px-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white border border-gray-200 text-sm text-gray-400 font-semibold dark:bg-slate-950">
            <BsStars className="w-4 h-4 text-blue-500" />
            <span>Sell With Confidence & Ease</span>
          </div>

          {/* Static heading for mobile instead of Typewriter */}
          {title || 
            <h1 className="text-4xl font-bold mb-6">
              <span className="text-neutral-800 dark:text-white">Software </span>
              <span className="text-neutral-800 dark:text-white">Built </span>
              <span className="text-neutral-800 dark:text-white">By </span>
              <span className="text-blue-500">Brokers </span>
              <span className="text-neutral-800 dark:text-white">For </span>
              <span className="text-blue-500">Brokers</span>
            </h1>
          }
          
          <p className="text-gray-400 text-base mb-8">
          Unlock your business&apos;s full potential with innovative software designed to effortlessly manage, optimise, and scale your distribution operations, driving efficiency and growth every step of the way
          </p>
          <div className="mb-8">
            <button 
              className="px-8 py-3 bg-[#22263e] text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-lg"
              onClick={() => setIsCalendlyOpen(true)}>
              Book a Demo
            </button>
          </div>
          {/* Optional: Add a mobile-optimized image */}
          <div className="w-full max-w-sm mx-auto">
            <Image
              src={src as string}
              alt="Product Preview Mobile"
              width={400}
              height={300}
              priority // Add priority flag to improve LCP
              sizes="(max-width: 400px) 100vw, 400px"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>

      {/* Desktop MacBook View */}
      <div className="hidden md:block">
        <div
          ref={ref}
          className="h-fit-content flex flex-col items-center py-48 justify-start flex-shrink-0 [perspective:800px] transform scale-100 origin-top"
        >
          <div className="text-center">
            {/* New rounded div with border */}
            <motion.div
              style={{
                translateY: textTransform,
                opacity: textOpacity,
              }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white border border-gray-200 text-sm text-gray-400 font-semibold dark:bg-slate-950"
            >
              <BsStars className="w-4 h-4 text-blue-500" />
              <span>Sell With Confidence & Ease</span>
            </motion.div>

            {/* Replace static heading with Typewriter inside motion div */}
            <motion.div
              style={{
                translateY: textTransform,
                opacity: textOpacity,
              }}
              className="mb-8 flex flex-col items-center" /* Added flex-col items-center */
            >
              {title || 
                <Typewriter
                  words={typewriterWords}
                  className="text-center text-4xl md:text-5xl"
                />
              }
            </motion.div>
            
            <motion.p
              style={{
                translateY: textTransform,
                opacity: textOpacity,
              }}
              className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto"
            >
              Unlock your business&apos;s full potential with innovative software designed to effortlessly manage, optimise, and scale your distribution operations, driving efficiency and growth every step of the way
            </motion.p>
            {/* New button */}
            <motion.div className="mb-12">
              <button 
                className="px-8 py-3 bg-[#22263e] text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-lg"
                onClick={() => setIsCalendlyOpen(true)}>
                Book a Demo
              </button>
            </motion.div>
          </div>
          {/* Lid - Using the imported component */}
          <Lid 
            src={src} 
            scaleX={scaleX} 
            scaleY={scaleY} 
            rotate={rotate} 
            translate={translate} 
          />
          {/* Base area */}
          <div className="h-[22rem] w-[32rem] bg-gray-200 dark:bg-[#272729] rounded-2xl overflow-hidden relative -z-10">
            {/* above keyboard bar */}
            <div className="h-10 w-full relative">
              <div className="absolute inset-x-0 mx-auto w-[80%] h-4 bg-[#050505]" />
            </div>
            <div className="flex relative">
              <div className="mx-auto w-[10%] overflow-hidden h-full">
                <SpeakerGrid />
              </div>
              <div className="mx-auto w-[80%] h-full">
                <Keypad />
              </div>
              <div className="mx-auto w-[10%] overflow-hidden h-full">
                <SpeakerGrid />
              </div>
            </div>
            <Trackpad />
            <div className="h-2 w-20 mx-auto inset-x-0 absolute bottom-0 bg-gradient-to-t from-[#272729] to-[#050505] rounded-tr-3xl rounded-tl-3xl" />
            {showGradient && (
              <div className="h-40 w-full absolute bottom-0 inset-x-0 bg-gradient-to-t dark:from-black from-white via-white dark:via-black to-transparent z-50"></div>
            )}
            {badge && <div className="absolute bottom-4 left-4">{badge}</div>}
          </div>
          
          {/* Motion button that follows the screen */}
          <motion.div 
            className="text-center mt-8"
            style={{
              opacity: useTransform(scrollYProgress, [0.22, 0.3], [0, 1]),
              translateY: useTransform(translate, 
                [0, 100, 200, 325], 
                [0, 100, 200, 325]
              ),
              position: "relative",
              zIndex: 10,
              width: "48rem", // Match the MacBook width
              maxWidth: "100%"
            }}
          >
            
          </motion.div>
        </div>
        <CalendlyPopup isOpen={isCalendlyOpen} onClose={() => setIsCalendlyOpen(false)} />
      </div>
    </>
  );
}