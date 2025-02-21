"use client";

import { cn } from "@/app/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import {
  IconDashboard,
  IconChartBar,
  IconFileDescription,
  IconUsers,
  IconBoxSeam,
  IconTruck
} from '@tabler/icons-react';

const featureItems = [
  {
    id: 1,
    title: "Interactive Dashboard",
    description: "Experience a colorful and informative dashboard with an interactive map to visualize your global business reach. Monitor sales, invoicing, quote-to-order ratios, and company performance against targets with shortcut icons for easy navigation.",
    link: "/features/market-data",
    icon: IconDashboard
  },
  {
    id: 2,
    title: "Sales Management",
    description: "Set and monitor company and individual sales targets in various currencies. Track quote-to-order ratios, customer maintenance, and merge companies with different offices or trading names for effective management.",
    link: "/features/automated-trading",
    icon: IconChartBar
  },
  {
    id: 3,
    title: "Quoting",
    description: "Create, manage, and send quotes using live franchised stock and price checkers. Add descriptions and images, handle single-line items or full BOMs, and customize pricing margins. Easily offer price breaks with instant second-line addition.",
    link: "/features/risk-management",
    icon: IconFileDescription
  },
  {
    id: 4,
    title: "Customer and Supplier Management",
    description: "Manage customers and suppliers with a single company record. Set different terms and currencies, merge and associate companies, monitor interactions, rate companies, and manage their shipping and invoice addresses.",
    link: "/features/market-data",
    icon: IconUsers
  },
  {
    id: 5,
    title: "Inventory Management",
    description: "Efficiently manage your inventory with ecommerce integration, store locations, pictures, and datasheets. Handle consignments and costings, and export stocklists for seamless operations.",
    link: "/features/automated-trading",
    icon: IconBoxSeam
  },
  {
    id: 6,
    title: "Shipping Management",
    description: "Integrate EasyPost with your system to manage shipments, collections, and deliveries. Track packages online, and generate commercial invoices and customs paperwork effortlessly.",
    link: "/features/risk-management",
    icon: IconTruck
  }
];

export default function FeatureDiv() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col items-center w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 w-[75%] md:w-[60%] mx-auto gap-4">
        {featureItems.map((item, idx) => (
          <Link
            href={item.link}
            key={item.id} // Using unique id instead of link
            className="relative group block p-2 h-full w-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl "
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
