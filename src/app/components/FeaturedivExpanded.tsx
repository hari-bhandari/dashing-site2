"use client";

import { cn } from "@/app/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import {
  IconDashboard,
  IconChartBar,
  IconFileDescription,
  IconUsers,
  IconBoxSeam,
  IconTruck,
  IconShoppingCart,
  IconClipboardCheck,
  IconReportMoney,
  IconPackageExport, // Fixed typo in icon name
  IconUserCircle,
  IconChartDots,
  IconWorld,
  IconLicense
} from '@tabler/icons-react';

interface FeatureItem {
  id: number;
  title: string;
  description: string;
  link: string;
  icon: React.ElementType;
}

const featureItems: FeatureItem[] = [
  {
    id: 1,
    title: "Interactive Dashboard",
    description: "Experience a colourful and informative dashboard with an interactive map to visualise your global business reach. Monitor sales, invoicing, quote to order ratiosalong with company performance metrics making instant decisions easy.",
    link: "/features/market-data",
    icon: IconDashboard
  },
  {
    id: 2,
    title: "Sales Management",
    description: "Set and monitor Team and individual sales targets in multi currencies. Track Quote to Order ratio’s, manage customer performance, including effective merging of multi channel offices.",
    link: "/features/automated-trading",
    icon: IconChartBar
  },
  {
    id: 3,
    title: "Quoting",
    description: "Create, manage, and send quotes using live franchised stock and price checkers. Add descriptions and images, handle single-line items or full BOMs, and customise pricing margins. Easily offer price breaks with instant multi line additions.",
    link: "/features/risk-management",
    icon: IconFileDescription  // Added missing icon
  },
  {
    id: 4,
    title: "Customer and Supplier Management",
    description: "Manage customers and suppliers with a single company record. Set different terms and currencies, merge and associate companies, monitor interactions, rate companies, and manage their shipping and invoice addresses.",
    link: "/features/market-data",
    icon: IconUsers  // Added missing icon
  },
  {
    id: 5,
    title: "Inventory Management",
    description: "Efficiently manage your inventory - physical, logical, availability, product testing, store locations, images, datasheets and more. Handle consignments, costings, and export stock lists for seamless operations.",
    link: "/features/automated-trading",
    icon: IconBoxSeam  // Added missing icon
  },
  {
    id: 6,
    title: "Shipping Management",
    description: "Integrate EasyPost with your system to manage shipments, collections, and deliveries. Track packages online, and generate commercial invoices and customs paperwork effortlessly.",
    link: "/features/risk-management",
    icon: IconTruck  // Added missing icon
  },
  {
    id: 7,
    title: "Purchasing",
    description: "Streamline purchasing with one-click online purchasing for web shop suppliers, authorised spend control on purchase orders, and management of back orders, sourcing, and resourcing. Receive detailed email notifications for purchase order arrivals.",
    link: "/features/risk-management",
    icon: IconShoppingCart
  },
  {
    id: 8,
    title: "Quality Management",
    description: "Ensure ISO compliance with a multi-step inspection process, visual inspection checklists, incoming inspection reports, and non-conforming material management. Track inspection authorisations and manage the RMA process with up-to-date analysis.",
    link: "/features/risk-management",
    icon: IconClipboardCheck
  },
  {
    id: 10,
    title: "Financial Control",
    description: "Integrate your accounting software API for a fully compatible interface, reducing manual errors and streamlining invoicing. Generate live financial reports and manage multi-currency invoices effortlessly.",
    link: "/features/risk-management",
    icon: IconReportMoney
  },
  {
    id: 11,
    title: "Excess Stock Management",
    description: "Optimise Excess Stock management with a dedicated Excess Portal, assisted monitoring of bids and quotes, Excess inventory management and financial report generation. Incorporated into WebCommerce shop with Auto Posting for instant purchase.",
    link: "/features/risk-management",
    icon: IconPackageExport // Fixed typo in icon name
  },
  {
    id: 12,
    title: "User Management",
    description: "Customise user permissions and authorisation levels against values to ensure compliance to procedures. Flexible profile management, reporting of commissions for pay and performance management.",
    link: "/features/risk-management",
    icon: IconUserCircle
  },
  {
    id: 13,
    title: "Business Reporting",
    description: "Utilise a full range of business reporting tools in our reporting suite to keep track of your business in real-time.",
    link: "/features/risk-management",
    icon: IconChartDots
  },
  {
    id: 14,
    title: "Web-based Secure Access Anywhere",
    description: "Access your data securely from anywhere and on any device, keeping your information safe and under your control.",
    link: "/features/risk-management",
    icon: IconWorld
  },
  {
    id: 15,
    title: "Flexible Licensing",
    description: "Activate licenses with one click for easy, fast onboarding of new users. Available in most languages and currencies for global compatibility.",
    link: "/features/risk-management",
    icon: IconLicense
  }
  
];

// Component interfaces
interface CardProps {
  className?: string;
  children: React.ReactNode;
}

interface CardTitleProps {
  className?: string;
  children: React.ReactNode;
  icon: React.ElementType;
}

interface CardDescriptionProps {
  className?: string;
  children: React.ReactNode;
}

// Components
const Card = ({ className, children }: CardProps) => {
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

const CardTitle = ({ className, children, icon: Icon }: CardTitleProps) => {
  return (
    <div className="flex flex-col items-center text-center">
      <Icon className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" stroke={1.5} />
      <h4 className={cn("text-black text-2xl font-bold tracking-wide dark:text-white", className)}>
        {children}
      </h4>
    </div>
  );
};

const CardDescription = ({ className, children }: CardDescriptionProps) => {
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

export default function FeatureDivExpanded() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col items-center w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 w-[75%] md:w-[60%] mx-auto gap-4">
        {featureItems.map((item, idx) => (
          <div
            key={item.id}
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
          </div>
        ))}
      </div>
    </div>
  );
}
