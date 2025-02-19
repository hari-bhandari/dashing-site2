"use client";

import { useState } from 'react';
import Link from 'next/link';
import { IconBrandTwitter, IconBrandLinkedin } from '@tabler/icons-react';
import ContactPopup from './ContactPopup';

export default function Footer() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <footer className="w-full bg-white border-t border-gray-200 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4 dark:text-white">
              Company
            </h3>
            <div className="flex flex-col space-y-2">
              <Link href="/about" className="text-gray-600 hover:text-gray-900 dark:text-white">
                About
              </Link>
              <Link 
                href="#" 
                onClick={(e) => {
                  e.preventDefault();
                  setIsContactOpen(true);
                }}
                className="text-gray-600 hover:text-gray-900 dark:text-white"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Resources */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4 dark:text-white">
              Resources
            </h3>
            <div className="flex flex-col space-y-2">
              <Link href="/blog" className="text-gray-600 hover:text-gray-900 dark:text-white">
                Blog
              </Link>
           
            </div>
          </div>

          {/* Legal */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4 dark:text-white">
              Legal
            </h3>
            <div className="flex flex-col space-y-2">
              <Link href="/privacy-policy" className="text-gray-600 hover:text-gray-900 dark:text-white">
                Privacy Policy
              </Link>
            </div>
          </div>

          {/* Social */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4 dark:text-white">
              Social
            </h3>
            <div className="flex space-x-4">
              <a 
                href="https://x.com/dashingdisty" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 dark:text-white"
              >
                <IconBrandTwitter className="h-6 w-6" />
              </a>
              <a 
                href="https://www.linkedin.com/company/dashing-distribution-software" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 dark:text-white"
              >
                <IconBrandLinkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} Dashing Distrubution Software. All rights reserved.
          </p>
        </div>
      </div>

      {/* Add the ContactPopup component */}
      <ContactPopup 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
      />
    </footer>
  );
}