"use client"

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'

export default function Navbar() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <nav className="top-0 w-full z-50 bg-white dark:bg-slate-950 border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              {theme === 'dark' ? (
                <Image
                  src="/logodark.svg" 
                  alt="Logo"
                  width={100}
                  height={100}
                  className="h-15 w-auto"
                />
              ) : (
                <Image
                  src="/logo.svg"
                  alt="Logo"
                  width={100}
                  height={100}
                  className="h-15 w-auto"
                />
              )}
            </Link>
          </div>

          {/* Navigation links */}
          <div className="hidden sm:flex sm:space-x-4 items-center">
            <Link 
              href="/" 
              className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 px-3 py-2 text-m font-medium"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 px-3 py-2 text-m font-medium"
            >
              About Us
            </Link>
            <Link 
              href="/features" 
              className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 px-3 py-2 text-m font-medium"
            >
              Features
            </Link>
            <Link 
              href="/contact" 
              className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 px-3 py-2 text-m font-medium"
            >
              Your Data
            </Link>
            <Link 
              href="/blog" 
              className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 px-3 py-2 text-m font-medium"
            >
              Blog
            </Link>
            <Link 
              href="/contact" 
              className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 px-3 py-2 text-m font-medium"
            >
              Contact Us
            </Link>
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5 text-gray-800 dark:text-gray-200" />
              ) : (
                <Moon className="h-5 w-5 text-gray-800 dark:text-gray-200" />
              )}
            </button>
            <button className='bg-[#22263e] hover:bg-blue-700 text-white font-medium font-semibold py-2 px-4 rounded-xl'>
                Book a Demo 
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}