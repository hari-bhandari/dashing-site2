"use client";

import { cn } from "@/app/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const featureItems = [
  {
    id: 1,
    title: "Real-Time Market Data",
    description: "Access live market data and trading insights with our advanced analytics platform.",
    link: "/features/market-data"
  },
  {
    id: 2,
    title: "Automated Trading",
    description: "Set up automated trading rules and let our system execute trades based on your strategy.",
    link: "/features/automated-trading"
  },
  {
    id: 3,
    title: "Risk Management",
    description: "Comprehensive risk management tools to protect your investments and optimize returns.",
    link: "/features/risk-management"
  }
];

export default function FeatureDiv() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col items-center w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 w-[60%] mx-auto gap-4">
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
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </Card>
          </Link>
        ))}
      </div>
      
      {/* Added button section */}
      <div className="mt-8 mb-12">
        <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-lg">
          Explore More Features
        </button>
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
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-white border border-gray-200 shadow-lg group-hover:shadow-xl transition-all duration-200 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-900 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
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
        "mt-8 text-zinc-600 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};