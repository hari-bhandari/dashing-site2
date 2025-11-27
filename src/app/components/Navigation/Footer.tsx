import Link from "next/link";

const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/our-product", label: "Our Product" },
  { href: "/for-sales-leaders", label: "For Sales Leaders" },
  { href: "/for-finance-leaders", label: "For Finance Leaders" },
  { href: "/for-ceos", label: "For CEOs" },
  { href: "/our-story", label: "Our Story" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-[#0a2440] text-white">
      <div
        className="absolute inset-0 -z-10"
        aria-hidden
      />
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_auto]">
          {/* Left column */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Navigation</h3>
              <nav className="flex flex-wrap gap-x-6 gap-y-2">
                {navigationLinks.map(({ href, label }, index) => (
                  <span key={href} className="flex items-center gap-2">
                    <Link
                      href={href}
                      className="text-white/70 underline underline-offset-4 transition hover:text-white hover:no-underline"
                    >
                      {label}
                    </Link>
                    {index < navigationLinks.length - 1 && (
                      <span className="text-white/40">|</span>
                    )}
                  </span>
                ))}
              </nav>
            </div>
            
            <div className="space-y-4">
              <p className="text-white/80">
                Empowering brokerages with intelligent technology solutions across North America and Europe.
              </p>
              <p className="text-sm text-white/70">
                Transform your operations, enhance client relationships, and drive measurable growth with our comprehensive platform designed specifically for modern brokerage firms.
              </p>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-semibold text-white">Legal & Social</h4>
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
                <Link href="/privacy-policy" className="text-white/70 underline underline-offset-4 hover:text-white hover:no-underline">
                  Privacy Policy
                </Link>
                <span className="text-white/40">|</span>
                <Link href="/your-data" className="text-white/70 underline underline-offset-4 hover:text-white hover:no-underline">
                  Terms of Service
                </Link>
              </div>
              <p className="text-sm text-white/70">
                Follow us on{" "}
                <Link 
                  href="https://www.linkedin.com/company/dashing-distribution-software"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 underline underline-offset-4 hover:text-white hover:no-underline"
                >
                  LinkedIn
                </Link>{" "}
                for industry insights
              </p>
            </div>
            
            <div className="border-t border-white/20 pt-6">
              <p className="text-sm text-white/60">
                © 2025 Dashing. All rights reserved. 
              </p>
            </div>
          </div>
          
          {/* Right column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Ready to Transform Your Brokerage?</h3>
            <Link
          href="https://dashing-distribution-software-144785672.hubspotpagebuilder.eu/book-a-dashing-demo"
          className="inline-flex items-center justify-center rounded-lg bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
        >
          Book a Demo
        </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}