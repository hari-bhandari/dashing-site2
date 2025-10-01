"use client"

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Moon, Sun, Menu, X } from 'lucide-react'
import ContactPopup from '../Popups/ContactPopup'

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
        className="text-xs font-medium text-white/75 transition-colors duration-200 hover:text-amber-200 sm:text-xs md:text-sm lg:text-base"
        onClick={() => setIsMenuOpen(false)}
      >
        Home
      </Link>
      <Link 
        href="/about" 
        className="text-xs font-medium text-white/75 transition-colors duration-200 hover:text-amber-200 sm:text-xs md:text-sm lg:text-base"
        onClick={() => setIsMenuOpen(false)}
      >
        About Us
      </Link>
      <Link 
        href="/features" 
        className="text-xs font-medium text-white/75 transition-colors duration-200 hover:text-amber-200 sm:text-xs md:text-sm lg:text-base"
        onClick={() => setIsMenuOpen(false)}
      >
        Features
      </Link>
      <Link 
        href="/your-data" 
        className="text-xs font-medium text-white/75 transition-colors duration-200 hover:text-amber-200 sm:text-xs md:text-sm lg:text-base"
        onClick={() => setIsMenuOpen(false)}
      >
        Your Data
      </Link>
      <Link 
        href="/blog" 
        className="text-xs font-medium text-white/75 transition-colors duration-200 hover:text-amber-200 sm:text-xs md:text-sm lg:text-base"
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
        className="text-xs font-medium text-white/75 transition-colors duration-200 hover:text-amber-200 sm:text-xs md:text-sm lg:text-base"
      >
        Contact Us
      </Link>
    </div>
  )

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#0c0424]/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/logodark.svg"
                alt="Logo"
                width={100}
                height={100}
                className="h-12 w-auto"
              />
            </Link>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="mr-2 rounded-lg bg-white/10 p-2 text-white transition hover:bg-white/15"
              aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5 text-amber-200" aria-hidden="true" />
              ) : (
                <Moon className="h-5 w-5 text-amber-200" aria-hidden="true" />
              )}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-white/70 transition hover:bg-white/10 hover:text-white"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-4">
            <NavLinks isMobile={false} />
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="rounded-lg bg-white/10 p-2 text-white transition hover:bg-white/15"
              aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5 text-amber-200" aria-hidden="true" />
              ) : (
                <Moon className="h-5 w-5 text-amber-200" aria-hidden="true" />
              )}
            </button>
            <button 
              
              className='rounded-full bg-[#8167FF] px-3 py-2 text-xs font-semibold text-white shadow-[0_20px_45px_-25px_rgba(129,103,255,0.8)] transition hover:-translate-y-0.5 hover:bg-[#6d54f0] md:px-4 md:text-sm lg:text-base'
              aria-label="Schedule a demo"
            >
              Book a Demo 
            </button>
          </div>
        </div>

        <div 
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } md:hidden fixed inset-0 z-50 bg-[#0c0424]/95 backdrop-blur-md`}
        >
          <div className="flex h-full flex-col">
            <div className="flex h-20 items-center justify-between border-b border-white/10 px-4">
              <Link href="/" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
                <Image src="/logodark.svg" alt="Logo" width={100} height={100} className="h-15 w-auto" />
              </Link>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="rounded-md p-2 text-white/70 transition hover:bg-white/10 hover:text-white"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto px-4 py-6">
              <NavLinks isMobile={true} />
              <div className="mt-6 border-t border-white/10 pt-6">
                <button 
                  className='w-full rounded-full bg-[#8167FF] px-4 py-3 font-semibold text-white shadow-[0_25px_50px_-20px_rgba(129,103,255,0.85)] transition hover:-translate-y-0.5 hover:bg-[#6d54f0]'
                  aria-label="Schedule a demo"
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