"use client";

import { cn } from "@/app/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  IconDashboard,
  IconChartBar,
  IconFileDescription,
  IconUsers,
  IconBoxSeam,
  IconTruck,
  IconChevronLeft,
  IconChevronRight
} from '@tabler/icons-react';

const featureItems = [
  {
    id: 1,
    title: "Interactive Dashboard",
    description: "Experience a colourful and informative dashboard with an interactive map to visualise your global business reach. Monitor sales, invoicing, quote to order ratios along with company performance metrics making instant decisions easy.",
    link: "/features",
    icon: IconDashboard
  },
  {
    id: 2,
    title: "Sales Management",
    description: "Set and monitor Team and individual sales targets in multi currencies. Track Quote to Order ratio’s, manage customer performance, including effective merging of multi channel offices.",
    link: "/features",
    icon: IconChartBar
  },
  {
    id: 3,
    title: "Quoting",
    description: "Create, manage, and send quotes using live franchised stock and price checkers. Add descriptions and images, handle single-line items or full BOMs, and customise pricing margins. Easily offer price breaks with instant multi line additions.",
    link: "/features",
    icon: IconFileDescription
  },
  {
    id: 4,
    title: "Customer and Supplier Management",
    description: "Manage customers and suppliers with a single company record. Set different terms and currencies, merge and associate companies, monitor interactions, rate companies, and manage their shipping and invoice addresses.",
    link: "/features",
    icon: IconUsers
  },
  {
    id: 5,
    title: "Inventory Management",
    description: "Efficiently manage your inventory - physical, logical, availability, product testing, store locations, images, datasheets and more. Handle consignments, costings, and export stock lists for seamless operations.",
    link: "/features",
    icon: IconBoxSeam
  },
  {
    id: 6,
    title: "Shipping Management",
    description: "Integrate EasyPost with your system to manage shipments, collections, and deliveries. Track packages online, and generate commercial invoices and customs paperwork effortlessly.",
    link: "/features",
    icon: IconTruck
  }
];

export default function FeatureDiv() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check if we're on mobile screen
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint in Tailwind
    };
    
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    
    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % featureItems.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => prevIndex === 0 ? featureItems.length - 1 : prevIndex - 1);
  };

  return (
    <div className="flex flex-col items-center w-full">
      {/* Desktop layout */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 py-10 w-[75%] md:w-[60%] mx-auto gap-4">
        {featureItems.map((item, idx) => (
          <Link
            href={item.link}
            key={item.id}
            className="relative group block p-2 h-full w-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <Card>
              <CardTitle icon={item.icon}>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </Card>
          </Link>
        ))}
      </div>

      {/* Mobile layout with improved navigation */}
      <div className="md:hidden w-full py-10 px-2 sm:px-4">
        <div className="relative w-full max-w-sm mx-auto">
          {/* Card content */}
          <div className="mx-8 sm:mx-12">
            <Card>
              <CardTitle icon={featureItems[activeIndex].icon}>
                {featureItems[activeIndex].title}
              </CardTitle>
              <CardDescription>
                {featureItems[activeIndex].description}
              </CardDescription>
            </Card>
          </div>
          
          {/* Navigation buttons positioned outside the card */}
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-slate-800 rounded-full p-2 shadow-md hover:bg-gray-100 dark:hover:bg-slate-700 transition-all"
            onClick={prevSlide}
            aria-label="Previous feature"
          >
            <IconChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-200" />
          </button>
          
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-slate-800 rounded-full p-2 shadow-md hover:bg-gray-100 dark:hover:bg-slate-700 transition-all"
            onClick={nextSlide}
            aria-label="Next feature"
          >
            <IconChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-200" />
          </button>
        </div>
      </div>
      
      {/* Mobile indicator dots */}
      <div className="flex md:hidden justify-center space-x-2 mt-4">
        {featureItems.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`w-2 h-2 rounded-full transition-colors ${
              idx === activeIndex 
                ? "bg-blue-600 dark:bg-blue-400" 
                : "bg-gray-300 dark:bg-gray-600"
            }`}
            aria-label={`Go to feature ${idx + 1}`}
          />
        ))}
      </div>
      
      {/* View More Button */}
      <div className="mt-8 mb-12">
        <Link 
          href="/features" 
          className="px-8 py-3 bg-[#22263e] text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-lg inline-block"
        >
          Explore More Features
        </Link>
      </div>
    </div>
  );
}

const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-white border border-gray-200 shadow-lg group-hover:shadow-xl transition-all duration-200 relative z-20 dark:bg-slate-950",
        className
      )}>
      <div className="relative z-50">
        {children}
      </div>
    </div>
  );
};

const CardTitle = ({
  className,
  children,
  icon: Icon,
}: {
  className?: string;
  children: React.ReactNode;
  icon: React.ElementType;
}) => {
  return (
    <div className="flex flex-col items-center text-center">
      <Icon className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" stroke={1.5} />
      <h4 className={cn("text-black text-2xl font-bold tracking-wide dark:text-white", className)}>
        {children}
      </h4>
    </div>
  );
};

const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-4 text-grey-400 tracking-wide leading-relaxed text-m text-center dark:text-white",
        className
      )}
    >
      {children}
    </p>
  );
};
