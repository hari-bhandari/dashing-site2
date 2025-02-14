"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useTransform,
  useScroll,
  useSpring,
} from "framer-motion";


export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const contentRef = useRef<HTMLDivElement>(null);
  const [svgHeight, setSvgHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setSvgHeight(contentRef.current.offsetHeight);
    }
  }, []);

  const y1 = useSpring(
    useTransform(scrollYProgress, [0, 0.8], [50, svgHeight]),
    {
      stiffness: 500,
      damping: 90,
    }
  );
  const y2 = useSpring(
    useTransform(scrollYProgress, [0, 1], [50, svgHeight - 200]),
    {
      stiffness: 500,
      damping: 90,
    }
  );

  return (
    <div className="relative w-[60%] mx-auto h-full mb-12">
      <div className="flex justify-between items-center gap-8"> {/* Changed items-start to items-center */}
        {/* Left section */}
        <div className="w-[45%] flex flex-col justify-center min-h-[600px]"> {/* Added flex, justify-center and min-height */}
          <h1 className="text-4xl font-bold mb-4 text-black dark:text-white">Our quick and easy onboarding process</h1>
          <h2 className="text-2xl font-bold mb-2 dark:text-white">We are with you every step of the way</h2>
          <h3 className="text-l font-semibold  text-gray-400 mb-8 dark:text-white">We empower our clients to achieve measurable, high-impact results through tailored software solutions and a seamless onboarding experience designed for success.</h3>
          <button className="px-8 py-3 bg-[#22263e] text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-lg inline-block dark:text-white">Get Started</button>      
        </div>

        {/* Right section with timeline */}
        <motion.div
          ref={ref}
          className="relative w-[45%]"
        >
          <div className="absolute -left-4 md:-left-20 top-3">
            <motion.div
              transition={{
                duration: 0.2,
                delay: 0.5,
              }}
              animate={{
                boxShadow:
                  scrollYProgress.get() > 0
                    ? "none"
                    : "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              }}
              className="ml-[27px] h-4 w-4 rounded-full border border-netural-200 shadow-sm flex items-center justify-center"
            >
              <motion.div
                transition={{
                  duration: 0.2,
                  delay: 0.5,
                }}
                animate={{
                  backgroundColor:
                    scrollYProgress.get() > 0 ? "white" : "var(--emerald-500)",
                  borderColor:
                    scrollYProgress.get() > 0 ? "white" : "var(--emerald-600)",
                }}
                className="h-2 w-2  rounded-full border border-neutral-300 bg-white"
              />
            </motion.div>
            <svg
              viewBox={`0 0 20 ${svgHeight}`}
              width="20"
              height={svgHeight} 
              className=" ml-4 block"
              aria-hidden="true"
            >
              <motion.path
                d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
                fill="none"
                stroke="#9091A0"
                strokeOpacity="0.16"
                transition={{
                  duration: 10,
                }}
              ></motion.path>
              <motion.path
                d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
                fill="none"
                stroke="url(#gradient)"
                strokeWidth="1.25"
                className="motion-reduce:hidden"
                transition={{
                  duration: 10,
                }}
              ></motion.path>
              <defs>
                <motion.linearGradient
                  id="gradient"
                  gradientUnits="userSpaceOnUse"
                  x1="0"
                  x2="0"
                  y1={y1} // set y1 for gradient
                  y2={y2} // set y2 for gradient
                >
                  <stop stopColor="#18CCFC" stopOpacity="0"></stop>
                  <stop stopColor="#18CCFC"></stop>
                  <stop offset="0.325" stopColor="#6344F5"></stop>
                  <stop offset="1" stopColor="#AE48FF" stopOpacity="0"></stop>
                </motion.linearGradient>
              </defs>
            </svg>
          </div>
          <div ref={contentRef} className="space-y-8">
            <div className="ml-8">
              <h3 className="text-2xl font-bold mb-2 dark:text-white">Request a Demo</h3>
              <p className="text-gray-600 dark:text-white">
                Interested clients can request a live demo of our software
                to gain a better understanding of its features and
                capabilities. Our team will provide a comprehensive
                walkthrough of the platform and answer any questions you
                may have.
              </p>
            </div>
            <div className="ml-8">
              <h3 className="text-2xl font-bold mb-2 dark:text-white">Data Migration</h3>
              <p className="text-gray-600 dark:text-white">
                Once you decide to move forward with our software, we will
                assist you in migrating all your data from your existing
                platform to ours. This includes transferring customer and
                supplier information, inventory data, and any other relevant
                business records.
              </p>
            </div>
            <div className="ml-8">
              <h3 className="text-2xl font-bold mb-2 dark:text-white">Onsite Training</h3>
              <p className="text-gray-600 dark:text-white">
                To ensure your team is well-equipped to use our software
                effectively, we provide onsite training sessions tailored to
                your business needs. Our trainers will cover all the essential
                features and functionalities, as well as any specific areas of
                interest for your team.
              </p>
            </div>
            <div className="ml-8">
              <h3 className="text-2xl font-bold mb-2 dark:text-white">Go Live</h3>
              <p className="text-gray-600 dark:text-white">
                After the data migration and training sessions are
                completed, your business is ready to start using our
                software. Our team will provide ongoing support as
                needed, helping you maximise the benefits of our platform
                and drive growth for your business.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
