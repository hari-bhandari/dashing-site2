"use client";

import { IconArrowLeft, IconArrowRight, IconStar } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState, useCallback } from "react";
import { useTheme } from "next-themes";

const scrollbarStyles = `
  .hide-scrollbar {
    -ms-overflow-style: none;  /* Internet Explorer and Edge */
    scrollbar-width: none;     /* Firefox */
  }
  
  .hide-scrollbar::-webkit-scrollbar {
    display: none;  /* Chrome, Safari and Opera */
  }
`;

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
  darkSrc?: string;
};

const defaultTestimonials: Testimonial[] = [
  {
    quote: "The Dashing support team and programmers have been awesome to work with. They have really listened to our suggestions and requests, and continuously make improvements to the software. I finally have an ERP software that I can rely on and where I know I will get the support and flexibility that is needed in this industry.",
    name: "Michael",
    designation: "Sonicare Solutions Inc.",
    src: "/testimonials/Sonicare.png",
    darkSrc: "/testimonials/SonicareDark.png"
  },
  {
    quote: "Our new Dashing software has been instrumental in streamlining our operations and the customer service and technical support is on point. Highly recommend!",
    name: "Travis",
    designation: "Sonar",
    src: "/testimonials/Sonar.png",
    darkSrc: "/testimonials/SonarDark.png"
  },
  {
    quote: "Dashing Distribution Software. Our journey to finding and utilizing a software platform was an exhausting, frustrating, and, at times, seemingly hopeless process. Thankfully, through word-of-mouth by a fellow distributor, Dashing was presented. The software flows nicely and is very user friendly. Purchase orders are easily created, sent, and received and are directly linked to the correlating sales order. The shipping process is easily navigated and has the ability to adhere to customer needs and requirements specifically. Myself and my team certainly feel relieved. This industry is unique and securing the appropriate software is difficult. The Dashing team is amazing. I could not be happier, quite honestly.",
    name: "Michelle Gorman",
    designation: "K-1 Technologies",
    src: "/testimonials/K1.png",
    darkSrc: "/testimonials/K1Dark.png"
  },
];

const StarRating = ({ rating = 5, size = "default" }) => {
  const starSize = size === "small" ? "w-4 h-4" : "w-5 h-5";
  
  return (
    <div className={`flex gap-1 ${size === "small" ? "mt-2" : "mt-4"}`}>
      {[...Array(rating)].map((_, index) => (
        <IconStar
          key={index}
          className={`${starSize} text-yellow-400 fill-yellow-400`}
        />
      ))}
    </div>
  );
};

export default function Testimonials({
  testimonials = defaultTestimonials,
  autoplay = true,
  interval = 5000,
}: {
  testimonials?: Testimonial[];
  autoplay?: boolean;
  interval?: number;
}) {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const { resolvedTheme } = useTheme();
  const [isMobile, setIsMobile] = useState(false);

  // Check if the screen is mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const handleNext = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const handlePrev = useCallback(() => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  useEffect(() => {
    if (autoplay && !isPaused) {
      const intervalId = setInterval(handleNext, interval);
      return () => clearInterval(intervalId);
    }
  }, [autoplay, handleNext, interval, isPaused]);

  const isActive = (index: number) => {
    return index === active;
  };

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };

  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  // Render compact mobile view
  if (isMobile) {
    return (
      <div>
        <style jsx global>{scrollbarStyles}</style>
        {/* Mobile Header section */}
        <div className="text-center max-w-xs mx-auto mb-4">
          <h1 className="text-2xl font-bold mb-2 text-black dark:text-white">
            Don&apos;t Just Take Our Word For It!
          </h1>
          <p className="text-sm text-gray-600 dark:text-white">
            Our users love our software
          </p>
        </div>
        
        {/* Mobile content section - more compact */}
        <div className="max-w-xs mx-auto antialiased font-sans px-3 py-4">
          <div 
            className="relative bg-white p-4 rounded-xl shadow-md dark:bg-slate-950 dark:border dark:border-gray-700"
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
          >
            {/* Top row with navigation */}
            <div className="flex justify-between items-center mb-3">
              <p className="text-xs font-medium text-gray-500 dark:text-gray-400">
                {`${active + 1} / ${testimonials.length}`}
              </p>
              
              <div className="flex gap-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrev();
                  }}
                  aria-label="Previous testimonial"
                  className="h-6 w-6 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center"
                >
                  <IconArrowLeft className="h-4 w-4 text-black dark:text-neutral-400" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                  aria-label="Next testimonial"
                  className="h-6 w-6 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center"
                >
                  <IconArrowRight className="h-4 w-4 text-black dark:text-neutral-400" />
                </button>
              </div>
            </div>
            
            {/* Mobile testimonial content */}
            <div className="relative h-40 w-full mb-3">
              <AnimatePresence>
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.src}
                    initial={{
                      opacity: 0,
                      scale: 0.9,
                      z: -100,
                      rotate: randomRotateY(),
                    }}
                    animate={{
                      opacity: isActive(index) ? 1 : 0.7,
                      scale: isActive(index) ? 1 : 0.95,
                      z: isActive(index) ? 0 : -100,
                      rotate: isActive(index) ? 0 : randomRotateY(),
                      zIndex: isActive(index)
                        ? 50
                        : testimonials.length + 2 - index,
                      y: isActive(index) ? [0, -40, 0] : 0,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.9,
                      z: 100,
                      rotate: randomRotateY(),
                    }}
                    transition={{
                      duration: 0.4,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 origin-bottom"
                  >
                    <Image
                      src={resolvedTheme === 'dark' && testimonial.darkSrc ? testimonial.darkSrc : testimonial.src}
                      alt={testimonial.name}
                      width={200}
                      height={32}
                      draggable={false}
                      className="h-full w-full rounded-xl object-cover object-center"
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-black dark:text-white">
                {testimonials[active].name}
              </h3>
              <p className="text-xs text-gray-500 dark:text-white">
                {testimonials[active].designation}
              </p>
            </div>
            
            <div className="mt-4 overflow-y-auto max-h-[100px] pr-1 hide-scrollbar">
              <motion.p className="text-sm text-gray-500 dark:text-white">
                {testimonials[active].quote.split(" ").map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{
                      filter: "blur(10px)",
                      opacity: 0,
                      y: 5,
                    }}
                    animate={{
                      filter: "blur(0px)",
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.2,
                      ease: "easeInOut",
                      delay: 0.02 * index,
                    }}
                    className="inline-block"
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}
              </motion.p>
            </div>
            
            <StarRating size="small" />
          </div>
        </div>
      </div>
    );
  }

  // Render desktop view
  return (
    <div>
      <style jsx global>{scrollbarStyles}</style>
      {/* Header section */}
      <div className="text-center max-w-4xl mx-auto mb-8">
        <h1 className="text-4xl font-bold mb-4 text-black dark:text-white">
          Don&apos;t Just Take Our Word For It!
        </h1>
        <p className="text-xl text-gray-600 dark:text-white">
          Our users consistently praise our software for its user-friendly
          interface, advanced features and robust security.
        </p>
      </div>
      {/* Main content section */}
      <div className="max-w-sm md:max-w-4xl mx-auto antialiased font-sans px-4 md:px-8 lg:px-12 py-8">
        <div 
          className="relative grid grid-cols-1 md:grid-cols-2 gap-20 bg-white p-8 rounded-2xl shadow-lg dark:bg-slate-950 dark:border dark:border-gray-200"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div>
            <div className="relative h-80 w-full">
              <AnimatePresence>
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.src}
                    initial={{
                      opacity: 0,
                      scale: 0.9,
                      z: -20,
                      rotate: randomRotateY(),
                    }}
                    animate={{
                      opacity: isActive(index) ? 1 : 0.7,
                      scale: isActive(index) ? 1 : 0.95,
                      z: isActive(index) ? 0 : -100,
                      rotate: isActive(index) ? 0 : randomRotateY(),
                      zIndex: isActive(index)
                        ? 20
                        : testimonials.length + 2 - index,
                      y: isActive(index) ? [0, -80, 0] : 0,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.9,
                      z: 20,
                      rotate: randomRotateY(),
                    }}
                    transition={{
                      duration: 0.4,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 origin-bottom"
                  >
                    <Image
                      src={resolvedTheme === 'dark' && testimonial.darkSrc ? testimonial.darkSrc : testimonial.src}
                      alt={testimonial.name}
                      width={400}
                      height={64}
                      draggable={false}
                      className="h-full w-full rounded-3xl object-cover object-center"
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
          <div className="flex justify-between flex-col py-4">
            <motion.div
              key={active}
              initial={{
                y: 20,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              exit={{
                y: -20,
                opacity: 0,
              }}
              transition={{
                duration: 0.2,
                ease: "easeInOut",
              }}
              className="flex flex-col h-full"
            >
              <div>
                <h3 className="text-2xl font-bold text-black dark:text-white">
                  {testimonials[active].name}
                </h3>
                <p className="text-sm text-gray-500 dark:text-white">
                  {testimonials[active].designation}
                </p>
              </div>
              
              {/* Scrollable testimonial text container */}
              <div className="mt-8 overflow-y-auto max-h-[200px] pr-2 hide-scrollbar">
                <motion.p className="text-lg text-gray-500 dark:text-white">
                  {testimonials[active].quote.split(" ").map((word, index) => (
                    <motion.span
                      key={index}
                      initial={{
                        filter: "blur(10px)",
                        opacity: 0,
                        y: 5,
                      }}
                      animate={{
                        filter: "blur(0px)",
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        duration: 0.2,
                        ease: "easeInOut",
                        delay: 0.02 * index,
                      }}
                      className="inline-block"
                    >
                      {word}&nbsp;
                    </motion.span>
                  ))}
                </motion.p>
              </div>
              
              <StarRating />
            </motion.div>
            <div className="flex gap-4 pt-6 md:pt-4">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                aria-label="Previous testimonial"
                className="h-7 w-7 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group/button relative z-10"
              >
                <IconArrowLeft className="h-5 w-5 text-black dark:text-neutral-400 group-hover/button:rotate-12 transition-transform duration-300" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                aria-label="Next testimonial"
                className="h-7 w-7 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group/button relative z-10"
              >
                <IconArrowRight className="h-5 w-5 text-black dark:text-neutral-400 group-hover/button:-rotate-12 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}