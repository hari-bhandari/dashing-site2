"use client";
import {
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { BsStars } from "react-icons/bs";
import CalendlyPopup from "../Popups/CalendlyPopup";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

const timelineData: TimelineEntry[] = [
    {
      title: "Request a Demo",
      content: (
        <div className="prose prose-sm dark:prose-invert">
          <p className="text-neutral-600 dark:text-neutral-300">
          Interested in discovering more? Request a live online demo of our software to gain a better understanding of its features and capabilities. Our team will provide a comprehensive walkthrough of the platform and answer any questions you may have.
          </p>
        </div>
      ),
    },
    {
      title: "Data Migration",
      content: (
        <div className="prose prose-sm dark:prose-invert">
          <p className="text-neutral-600 dark:text-neutral-300">
            Our methods of migrating your data are tried and tested, with evolving routines we will assist and support the data transfer from your existing platform. 
          </p>
        </div>
      ),
    },
    {
      title: "Educate",
      content: (
        <div className="prose prose-sm dark:prose-invert">
          <p className="text-neutral-600 dark:text-neutral-300">
            Our priority is to ensure your team are effective on how the business processes operate in our software. Our team are packed with industry experience, ensuring support and guidance on operations are appropriate and relevant.
          </p>
        </div>
      ),
    },
    {
      title: "Go Live",
      content: (
        <div className="prose prose-sm dark:prose-invert">
          <p className="text-neutral-600 dark:text-neutral-300">
            A full roadmap of events are agreed to deliver a go-live, maximising the best time with seamless disruption to business activities. Our customer support is unprecedented with 24/7 coverage across multiple communication channels.  
          </p>
        </div>
      ),
    },
  ];

export default function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const [activeDotIndex, setActiveDotIndex] = useState(-1);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  useEffect(() => {
    if (!ref.current) return;
    
    const dots = ref.current.querySelectorAll('.timeline-dot');
    const dotsArray = Array.from(dots);
    
    const dotPositions = dotsArray.map(dot => {
      const rect = dot.getBoundingClientRect();
      const containerRect = ref.current!.getBoundingClientRect();
      return rect.top - containerRect.top;
    });

    const updateActiveDot = () => {
      const currentHeight = heightTransform.get();
      const newActiveIndex = dotPositions.reduce((maxIndex, pos, index) => {
        return pos <= currentHeight ? index : maxIndex;
      }, -1);
      setActiveDotIndex(newActiveIndex);
    };

    const unsubscribe = heightTransform.onChange(updateActiveDot);
    return () => unsubscribe();
  }, [heightTransform, ref]);

  return (
    <div
      className="w-[90%] mx-auto bg-white dark:bg-neutral-950 font-sans px-4 md:px-10"
      ref={containerRef}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        {/* Header section */}
        <div className="flex items-center">
          <div className="text-left max-w-md">
            <h2 className="text-2xl md:text-4xl mb-4 text-black dark:text-white font-bold">
              Our quick and easy onboarding process
            </h2>
            <p className="text-neutral-700 dark:text-white text-gray-400 text-lg md:text-lg mb-6">
              We empower our clients to achieve measurable, high-impact results through 
              tailored software solutions and a seamless onboarding experience designed 
              for success.
            </p>
            <button 
              className="flex items-center gap-2 bg-[#22263e] text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-80 transition-colors relative"
              onClick={() => setIsCalendlyOpen(true)}
            >
              Get Started
              <BsStars className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>

        {/* Timeline section */}
        <div>
          <div ref={ref} className="relative mx-auto pb-20">
            {timelineData.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-start pt-10 md:pt-20"
              >
                {/* Title and dot container */}
                <div className="flex items-center mb-6 relative z-10">
                  <div className="absolute -left-[20px] h-10 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                    <div 
                      className={`timeline-dot h-4 w-4 rounded-full transition-colors duration-300 ${
                        index <= activeDotIndex 
                          ? 'bg-gradient-to-r from-purple-500 to-blue-500 border-transparent' 
                          : 'bg-neutral-200 dark:bg-neutral-800 border-neutral-300 dark:border-neutral-700'
                      } border p-2`}
                    />
                  </div>
                  <h3 className="ml-8 text-2xl font-bold text-black dark:text-white">
                    {item.title}
                  </h3>
                </div>

                {/* Content container */}
                <div className="w-full max-w-2xl pl-8">
                  {item.content}
                </div>
              </div>
            ))}
            
            {/* Timeline line with animation */}
            <div
              style={{
                height: height + "px",
              }}
              className="absolute left-0 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] z-0"
            >
              <motion.div
                style={{
                  height: heightTransform,
                  opacity: opacityTransform,
                }}
                className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
      <CalendlyPopup 
        isOpen={isCalendlyOpen}
        onClose={() => setIsCalendlyOpen(false)}
      />
    </div>
  );
}