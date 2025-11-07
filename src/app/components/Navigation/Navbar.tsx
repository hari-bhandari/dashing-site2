"use client"

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Moon, Sun, Menu, X } from 'lucide-react'


export default function Navbar() {
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
    <div className={`${isMobile ? 'flex flex-col space-y-6' : 'flex items-center gap-4 md:gap-8 lg:gap-8'} ${className}`}>
      <Link 
        href="/" 
        className="text-xs font-medium text-white transition-colors duration-200 hover:text-slate-900 sm:text-xs md:text-sm lg:text-base"
        onClick={() => setIsMenuOpen(false)}
      >
        Home
      </Link>
      <Link
        href="/our-product"
        className="text-xs font-medium text-white transition-colors duration-200 hover:text-slate-900 sm:text-xs md:text-sm lg:text-base"
        onClick={() => setIsMenuOpen(false)}
      >
        Our Product
      </Link>
      <Link 
        href="/for-sales-leaders" 
        className="text-xs font-medium text-white transition-colors duration-200 hover:text-slate-900 sm:text-xs md:text-sm lg:text-base"
        onClick={() => setIsMenuOpen(false)}
      >
        For Sales Leaders
      </Link>
      <Link 
        href="/for-finance-leaders" 
        className="text-xs font-medium text-white transition-colors duration-200 hover:text-slate-900 sm:text-xs md:text-sm lg:text-base"
        onClick={() => setIsMenuOpen(false)}
      >
        For Finance Leaders
      </Link>
      <Link 
        href="/for-ceos" 
        className="text-xs font-medium text-white transition-colors duration-200 hover:text-slate-900 sm:text-xs md:text-sm lg:text-base"
        onClick={() => setIsMenuOpen(false)}
      >
        For CEOs
      </Link>
      <Link
        href="/our-story"
        className="text-xs font-medium text-white transition-colors duration-200 hover:text-slate-900 sm:text-xs md:text-sm lg:text-base"
        onClick={() => setIsMenuOpen(false)}
      >
        Our Story
      </Link>
      <Link 
        href="/resources" 
        className="text-xs font-medium text-white transition-colors duration-200 hover:text-slate-900 sm:text-xs md:text-sm lg:text-base"
        onClick={() => setIsMenuOpen(false)}
      >
        Resources
      </Link>
      <Link 
        href="" 
        className="text-xs font-medium text-white transition-colors duration-200 hover:text-slate-900 sm:text-xs md:text-sm lg:text-base"
        onClick={() => setIsMenuOpen(false)}      
      >
        Contact
      </Link>
    </div>
  )

  return (
  <nav className="fixed top-0 left-0 right-0 z-50 border-b bg-[#0a2440]">
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
              className="mr-2 rounded-lg bg-black/5 p-2 text-slate-700 transition hover:bg-black/10"
              aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5 text-[#8167FF]" aria-hidden="true" />
              ) : (
                <Moon className="h-5 w-5 text-[#8167FF]" aria-hidden="true" />
              )}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-slate-700 transition hover:bg-black/5 hover:text-slate-900"
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
              
              className='rounded-full bg-lime-400 px-3 py-2 text-xs font-semibold text-[#0a2440] transition hover:-translate-y-0.5 hover:bg-lime-400 md:px-4 md:text-sm lg:text-base'
              aria-label="Schedule a demo"
            >
              Book a Demo 
            </button>
          </div>
        </div>

        <div 
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } md:hidden fixed inset-0 z-50 bg-white/95 backdrop-blur-md`}
        >

            
            <div className="flex-1 overflow-y-auto px-4 py-6">
              <NavLinks isMobile={true} />
              <div className="mt-6 border-t border-gray-200 pt-6">
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
    </nav>
  )
}