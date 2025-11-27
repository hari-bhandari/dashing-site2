"use client";

import { useEffect, useState } from "react";

interface ResourcesBlogProps {
  hubspotBlogId: string;
}

export default function ResourcesBlog({ hubspotBlogId }: ResourcesBlogProps) {
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    // If your HubSpot script can dispatch a custom event when content renders,
    // you can listen for it here and call setHasLoaded(true).
    const handleLoaded = () => setHasLoaded(true);
    window.addEventListener("hubspot-blog-loaded", handleLoaded);
    return () => window.removeEventListener("hubspot-blog-loaded", handleLoaded);
  }, []);

  return (
    <section className="w-full bg-white py-16 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-lime-400">Blog</p>
        <h2 className="mt-2 text-3xl font-extrabold leading-tight text-[#0a2440] sm:text-4xl">
          Latest insights from the Dashing team
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#0a2440]/80 sm:text-base">
          Articles, guides, and perspectives on running a more profitable, efficient brokerage.
        </p>

        <div className="mt-10 rounded-2xl border border-[#0a2440]/10 bg-white/50 p-4 shadow-[0_20px_55px_-30px_rgba(10,36,64,0.5)]">
          {!hasLoaded && (
            <p className="mb-4 text-2xl font-2xl text-[#0a2440]/70 text-center">
              Blog content coming soon...
            </p>
          )}
          <div
            className="min-h-[300px]"
            data-hs-blog-id={hubspotBlogId}
          />
        </div>
      </div>
    </section>
  );
}
