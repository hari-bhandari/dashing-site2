"use client"

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'

type NavLink = { href: string; label: string }
type NavItem = NavLink | { label: string; children: NavLink[] }

const navItems: NavItem[] = [
  { href: '/', label: 'Home' },
  { href: '/our-product', label: 'Our Product' },
  {
    label: 'Features',
    children: [
      { href: '/features/real-time-quoting', label: 'Real-time quoting' },
      { href: '/features/inventory-management', label: 'Inventory management' },
      { href: '/features/finance-dashboard', label: 'Finance dashboard' },
      { href: '/features/compliance', label: 'Compliance and security' },
      { href: '/features/customer-and-team-management', label: 'Customer and team' },
    ],
  },
  {
    label: 'Industries',
    children: [
      { href: '/industries/independent-brokers', label: 'Independent brokers' },
      { href: '/industries/semiconductor-distributors', label: 'Semiconductor distributors' },
      { href: '/industries/excess-obsolete-inventory', label: 'Excess and obsolete inventory' },
    ],
  },
  {
    label: "Who it's for",
    children: [
      { href: '/for-sales-leaders', label: 'For Sales Leaders' },
      { href: '/for-finance-leaders', label: 'For Finance Leaders' },
      { href: '/for-ceos', label: 'For CEOs' },
    ],
  },
  { href: '/our-story', label: 'Our Story' },
  { href: '/resources', label: 'Resources' },
  { href: '/contact', label: 'Contact Us' },
]

const desktopLinkClass =
  'whitespace-nowrap text-sm font-medium text-white transition-colors duration-200 hover:text-lime-400 xl:text-base'

function DesktopDropdown({ label, links }: { label: string; links: NavLink[] }) {
  return (
    <div className="group relative">
      <button type="button" className={`flex items-center gap-1 ${desktopLinkClass}`} aria-haspopup="true">
        {label}
        <ChevronDown
          className="h-4 w-4 transition group-hover:rotate-180 group-focus-within:rotate-180"
          aria-hidden="true"
        />
      </button>
      <div className="invisible absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 pt-3 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
        <div className="rounded-2xl border border-white/10 bg-[#0a2440] p-2 shadow-xl">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="block rounded-xl px-4 py-3 text-sm font-medium text-white transition hover:bg-white/10 hover:text-lime-400"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const close = () => setIsMenuOpen(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a2440]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6 h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/logodark.svg"
                alt="Dashing Distribution Software home"
                width={100}
                height={100}
                className="h-10 w-auto xl:h-12"
              />
            </Link>
          </div>

          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsMenuOpen(true)}
              className="inline-flex items-center justify-center rounded-md p-2 text-white transition hover:bg-white/10"
              aria-label="Open menu"
              aria-expanded={isMenuOpen}
            >
              <Menu className="block h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="hidden lg:flex lg:items-center lg:gap-5 xl:gap-7">
            {navItems.map((item) =>
              'children' in item ? (
                <DesktopDropdown key={item.label} label={item.label} links={item.children} />
              ) : (
                <Link key={item.href} href={item.href} className={desktopLinkClass}>
                  {item.label}
                </Link>
              )
            )}
            <Link
              href="/book-a-demo"
              className="whitespace-nowrap rounded-full bg-lime-400 px-4 py-2 text-sm font-semibold text-[#0a2440] transition hover:-translate-y-0.5 hover:bg-lime-300 xl:text-base"
              aria-label="Schedule a demo"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      </div>

      <div
        className={`${isMenuOpen ? 'flex' : 'hidden'} lg:hidden fixed inset-0 z-50 flex-col bg-white/95 backdrop-blur-md`}
      >
        <div className="flex h-20 items-center justify-end px-4 sm:px-6">
          <button
            onClick={close}
            className="inline-flex items-center justify-center rounded-md p-2 text-[#0a2440] transition hover:bg-black/5"
            aria-label="Close menu"
          >
            <X className="block h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-4 pb-6 sm:px-6">
          <div className="flex flex-col space-y-5">
            {navItems.map((item) =>
              'children' in item ? (
                <div key={item.label} className="flex flex-col space-y-3">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0a2440]/60">
                    {item.label}
                  </span>
                  {item.children.map(({ href, label }) => (
                    <Link
                      key={href}
                      href={href}
                      className="pl-3 text-base font-medium text-[#0a2440] transition-colors duration-200 hover:text-lime-600"
                      onClick={close}
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-base font-medium text-[#0a2440] transition-colors duration-200 hover:text-lime-600"
                  onClick={close}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>
          <div className="mt-6 border-t border-gray-200 pt-6">
            <Link
              href="/book-a-demo"
              className="flex w-full justify-center rounded-full bg-[#8167FF] px-4 py-3 font-semibold text-white shadow-[0_25px_50px_-20px_rgba(129,103,255,0.85)] transition hover:-translate-y-0.5 hover:bg-[#6d54f0]"
              aria-label="Schedule a demo"
              onClick={close}
            >
              Book a Demo
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
