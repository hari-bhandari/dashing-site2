"use client";

import Link from 'next/link'
import Image from 'next/image'




export default function Navbar() {
  return (
    <nav className="top-0 w-full z-50 bg-white dark:bg-gray-800 border-gray-200 dark:bg-slate-950">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
                <Image
                src="/logo.svg" 
                alt="Logo"
                width={100}
                height={100}
                className="h-15 w-auto">

                </Image>
             
                
            
            </Link>
          </div>

          {/* Navigation links */}
          <div className="hidden sm:flex sm:space-x-4">
            <Link 
              href="/" 
              className="text-gray-900 hover:text-gray-600 px-3 py-2 text-m font-medium dark:text-white"
            >
              Home
            </Link>
            <Link 
              href="/about-us" 
              className="text-gray-900 hover:text-gray-600 px-3 py-2 text-m font-medium dark:text-white"
            >
              About Us
            </Link>
            <Link 
              href="/features" 
              className="text-gray-900 hover:text-gray-600 px-3 py-2 text-m font-medium dark:text-white"
            >
              Features
            </Link>
            <Link 
              href="/your-data" 
              className="text-gray-900 hover:text-gray-600 px-3 py-2 text-m font-medium dark:text-white"
            >
              Your Data
            </Link>
            <Link 
              href="/blog" 
              className="text-gray-900 hover:text-gray-600 px-3 py-2 text-m font-medium dark:text-white"
            >
              Blog
            </Link>
            <Link 
              href="/contact" 
              className="text-gray-900 hover:text-gray-600 px-3 py-2 text-m font-medium dark:text-white"
            >
              Contact Us
            </Link>
            <button className='bg-[#22263e] hover:bg-blue-700 text-white font-medium font-semibold py-2 px-4 rounded-xl'>
                Book a Demo 
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}