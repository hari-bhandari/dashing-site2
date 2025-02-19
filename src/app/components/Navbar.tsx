"use client"

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Moon, Sun, Menu, X } from 'lucide-react'
import ContactPopup from './ContactPopup'

export default function Navbar() {
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const NavLinks = ({ className, isMobile }: { className?: string; isMobile?: boolean }) => (
    <div className={`${isMobile ? 'flex flex-col space-y-6' : 'flex items-center gap-4 md:gap-8 lg:gap-10'} ${className}`}>
      <Link 
        href="/" 
        className="transition-colors duration-200 text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 text-xs sm:text-xs md:text-sm lg:text-base font-medium"
        onClick={() => setIsMenuOpen(false)}
      >
        Home
      </Link>
      <Link 
        href="/about" 
        className="transition-colors duration-200 text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 text-xs sm:text-xs md:text-sm lg:text-base font-medium"
        onClick={() => setIsMenuOpen(false)}
      >
        About Us
      </Link>
      <Link 
        href="/features" 
        className="transition-colors duration-200 text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 text-xs sm:text-xs md:text-sm lg:text-base font-medium"
        onClick={() => setIsMenuOpen(false)}
      >
        Features
      </Link>
      <Link 
        href="/your-data" 
        className="transition-colors duration-200 text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 text-xs sm:text-xs md:text-sm lg:text-base font-medium"
        onClick={() => setIsMenuOpen(false)}
      >
        Your Data
      </Link>
      <Link 
        href="/blog" 
        className="transition-colors duration-200 text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 text-xs sm:text-xs md:text-sm lg:text-base font-medium"
        onClick={() => setIsMenuOpen(false)}
      >
        Blog
      </Link>
      <Link 
        href="#" 
        onClick={(e) => {
          e.preventDefault();
          setIsContactOpen(true);
          setIsMenuOpen(false);
        }} 
        className="transition-colors duration-200 text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 text-xs sm:text-xs md:text-sm lg:text-base font-medium"
      >
        Contact Us
      </Link>
    </div>
  )

  return (
    <nav className="sticky top-0 w-full z-50 bg-white dark:bg-slate-950">
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
                  className="h-12 w-auto"
                />
              ) : (
                <Image
                  src="/logo.svg"
                  alt="Logo"
                  width={100}
                  height={100}
                  className="h-12 w-auto"
                />
              )}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 mr-2"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5 text-gray-800 dark:text-gray-200" />
              ) : (
                <Moon className="h-4 w-4 text-gray-800 dark:text-gray-200" />
              )}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <NavLinks isMobile={false} />
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
            <button className='bg-[#22263e] hover:bg-blue-700 text-white text-xs md:text-sm lg:text-base font-semibold py-2 px-2 md:px-4 rounded-xl'>
              Book a Demo 
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div 
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } md:hidden fixed inset-0 z-50 bg-white dark:bg-slate-950`}
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between px-4 h-20 border-b border-gray-200 dark:border-gray-800">
              <Link href="/" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
                {theme === 'dark' ? (
                  <Image src="/logodark.svg" alt="Logo" width={100} height={100} className="h-15 w-auto" />
                ) : (
                  <Image src="/logo.svg" alt="Logo" width={100} height={100} className="h-15 w-auto" />
                )}
              </Link>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto px-4 py-6">
              <NavLinks isMobile={true} />
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800">
                <button 
                  className='w-full bg-[#22263e] hover:bg-blue-700 text-white font-medium font-semibold py-3 px-4 rounded-xl transition-colors duration-200'
                  onClick={() => setIsMenuOpen(false)}
                >
                  Book a Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactPopup 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
      />
    </nav>
  )
}