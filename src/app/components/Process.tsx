"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useTransform, useScroll, useSpring } from "framer-motion";

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // Adjusted offset to map scroll to a lower point
  });

  const contentRef = useRef<HTMLDivElement>(null);
  const [svgHeight, setSvgHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setSvgHeight(contentRef.current.offsetHeight);
    }
  }, []);

  // Add snap points calculation
  const snapPoints = [0, 0.33, 0.66, 1]; // Evenly distributed points

  // Update dot transform to use snap points
  const dotTransform = useSpring(
    useTransform(
      scrollYProgress,
      snapPoints,
      snapPoints.map(point => point * (svgHeight - 80))
    ),
    {
      stiffness: 2000,
      damping: 50,
      mass: 0.5,
    }
  );

  // Update gradient transforms to match snap points
  const y1 = useSpring(
    useTransform(
      scrollYProgress,
      snapPoints,
      snapPoints.map(point => point * svgHeight + 50)
    ),
    {
      stiffness: 2000,
      damping: 50,
      mass: 0.5,
    }
  );

  const y2 = useSpring(
    useTransform(
      scrollYProgress,
      snapPoints,
      snapPoints.map(point => point * (svgHeight - 200))
    ),
    {
      stiffness: 2000,
      damping: 50,
      mass: 0.5,
    }
  );

  // Add active section state
  const activeSection = useTransform(
    scrollYProgress,
    snapPoints,
    [0, 1, 2, 3]
  );

  // Add state to track if we've reached the last point
  const [hasReachedEnd, setHasReachedEnd] = useState(false);

  // Update scroll progress handler
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      if (latest >= 0.95) { // Adjust this threshold as needed
        setHasReachedEnd(true);
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  // Add scroll lock effect
  useEffect(() => {
    if (!hasReachedEnd) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [hasReachedEnd]);

  return (
    <div className="relative w-[75%] md:w-[50%] mx-auto h-full mb-12 mt-10">
      {/* Flex container with column direction on mobile, row on desktop */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Left section - full width on mobile */}
        <div className="w-full md:w-[45%] flex flex-col justify-center min-h-[300px] md:min-h-[600px]">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-black dark:text-white">
            Our quick and easy onboarding process
          </h1>
          <h3 className="text-xl md:text-2xl text-gray-400 mb-8 dark:text-white">
            We empower our clients to achieve measurable, high-impact results
            through tailored software solutions and a seamless onboarding
            experience designed for success.
          </h3>
          <button className="mt-4 px-8 py-3 bg-[#22263e] text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-lg">
            Get Started
          </button>
        </div>

        {/* Right section with timeline - full width on mobile */}
        <motion.div ref={ref} className="relative w-full md:w-[45%]">
          <div className="absolute -left-4 md:-left-20 top-3">
            {/* Replace the static dot with animated one */}
            <motion.div
              style={{
                y: dotTransform,
              }}
              className="absolute ml-[27px] h-4 w-4 rounded-full border border-neutral-200 bg-white shadow-sm flex items-center justify-center"
            >
              <div className="h-2 w-2 rounded-full border border-emerald-600 bg-emerald-500" />
            </motion.div>
            <svg
              viewBox={`0 0 20 ${svgHeight}`}
              width="20"
              height={svgHeight}
              className="ml-4 block"
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
              />
              <motion.path
                d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
                fill="none"
                stroke="url(#gradient)"
                strokeWidth="1.25"
                className="motion-reduce:hidden"
                transition={{
                  duration: 10,
                }}
              />
              <defs>
                <motion.linearGradient
                  id="gradient"
                  gradientUnits="userSpaceOnUse"
                  x1="0"
                  x2="0"
                  y1={y1} // set y1 for gradient
                  y2={y2} // set y2 for gradient
                >
                  <stop stopColor="#18CCFC" stopOpacity="0" />
                  <stop stopColor="#18CCFC" />
                  <stop offset="0.325" stopColor="#6344F5" />
                  <stop offset="1" stopColor="#AE48FF" stopOpacity="0" />
                </motion.linearGradient>
              </defs>
            </svg>
          </div>
          <div ref={contentRef} className="space-y-8">
            {['Request a Demo', 'Data Migration', 'Onsite Training', 'Go Live'].map((title, index) => (
              <motion.div
                key={title}
                className="ml-8"
                style={{
                  opacity: useTransform(
                    activeSection,
                    [index - 0.5, index, index + 0.5],
                    [0.5, 1, 0.5]
                  )
                }}
              >
                <h3 className="text-2xl font-bold mb-2 dark:text-white">
                  {title}
                </h3>
                <p className="text-gray-400 dark:text-white">
                  {title === 'Request a Demo' && 'Interested clients can request a live demo of our software to gain a better understanding of its features and capabilities. Our team will provide a comprehensive walkthrough of the platform and answer any questions you may have.'}
                  {title === 'Data Migration' && 'Once you decide to move forward with our software, we will assist you in migrating all your data from your existing platform to ours. This includes transferring customer and supplier information, inventory data, and any other relevant business records.'}
                  {title === 'Onsite Training' && 'To ensure your team is well-equipped to use our software effectively, we provide onsite training sessions tailored to your business needs. Our trainers will cover all the essential features and functionalities, as well as any specific areas of interest for your team.'}
                  {title === 'Go Live' && 'After the data migration and training sessions are completed, your business is ready to start using our software. Our team will provide ongoing support as needed, helping you maximise the benefits of our platform and drive growth for your business.'}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}