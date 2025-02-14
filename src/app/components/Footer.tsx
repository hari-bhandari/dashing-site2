import Link from 'next/link'
import { IconBrandTwitter, IconBrandLinkedin, IconBrandGithub } from '@tabler/icons-react'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Company
            </h3>
            <div className="flex flex-col space-y-2">
              <Link href="/about" className="text-gray-600 hover:text-gray-900">
                About
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-gray-900">
                Contact
              </Link>
            </div>
          </div>

          {/* Resources */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Resources
            </h3>
            <div className="flex flex-col space-y-2">
              <Link href="/blog" className="text-gray-600 hover:text-gray-900">
                Blog
              </Link>
              <Link href="/docs" className="text-gray-600 hover:text-gray-900">
                Documentation
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Legal
            </h3>
            <div className="flex flex-col space-y-2">
              <Link href="/privacy" className="text-gray-600 hover:text-gray-900">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-600 hover:text-gray-900">
                Terms of Service
              </Link>
            </div>
          </div>

          {/* Social */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Social
            </h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <IconBrandTwitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <IconBrandLinkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <IconBrandGithub className="h-6 w-6" />
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
    </footer>
  )
}