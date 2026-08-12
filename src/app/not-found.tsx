import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/app/components/Navigation/Navbar";
import Footer from "@/app/components/Navigation/Footer";

export const metadata: Metadata = {
  title: "Page Not Found | Dashing Distribution Software",
  description: "The page you're looking for doesn't exist. Find your way back to Dashing Distribution Software.",
};

const helpfulLinks = [
  { href: "/our-product", label: "Our Product" },
  { href: "/for-sales-leaders", label: "For Sales Leaders" },
  { href: "/for-finance-leaders", label: "For Finance Leaders" },
  { href: "/for-ceos", label: "For CEOs" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact Us" },
];

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col text-white">
      <Navbar />
      <main className="flex flex-grow flex-col items-center justify-center px-4 py-32 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-lime-400">404</p>
        <h1 className="mt-4 text-4xl font-bold sm:text-5xl">Page Not Found</h1>
        <p className="mt-4 max-w-xl text-lg text-white/70">
          The page you&apos;re looking for doesn&apos;t exist or may have moved. Let&apos;s get you back on track.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-lime-400 px-6 py-3 text-base font-semibold text-[#0a2440] transition hover:-translate-y-0.5 hover:bg-lime-400"
        >
          Back to Home
        </Link>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          {helpfulLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-medium text-white/70 underline underline-offset-4 transition hover:text-white hover:no-underline"
            >
              {label}
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
