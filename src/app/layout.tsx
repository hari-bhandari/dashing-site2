import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from 'next-themes';
import { SpeedInsights } from "@vercel/speed-insights/next";
import TabAttentionTitle from "./components/TabAttentionTitle";
import ChatProvider from "./components/ChatProvider";
import {GoogleTagManager} from '@next/third-parties/google'
import JsonLd from "./components/JsonLd";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-barlow",
});

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Dashing Distribution Software",
  url: "https://www.dashingdisty.com",
  logo: "https://www.dashingdisty.com/logodark.svg",
  description:
    "Dashing Distribution Software provides a dedicated distribution software package designed specifically for the electronic components industry.",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+44-1904-935608",
    contactType: "customer support",
    email: "support@dashingdisty.com",
    areaServed: "GB",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Independence House, Millfield Lane, Nether Poppleton",
    addressLocality: "York",
    postalCode: "YO26 6PH",
    addressCountry: "GB",
  },
  sameAs: ["https://www.linkedin.com/company/dashing-distribution-software"],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dashingdisty.com"),
  title: "Dashing Distribution Software",
  description: "Dashing Distribution Software provides a dedicated distribution software package designed specifically for the electronic components industry.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    images: [{
      url: '/meta/metaimage.png', 
      width: 1200,
      height: 630,
      alt: 'Dashing Distribution Software',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/meta/metaimage.png'], 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    

  return (
    <html lang="en" className="overflow-x-hidden" suppressHydrationWarning>
      <body className={`${barlow.variable} font-sans antialiased overflow-x-hidden bg-[#0a2440] text-white`}>
        <JsonLd data={organizationJsonLd} />
        <ChatProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
            <GoogleTagManager gtmId="GTM-KTLDFGMD"/>
            <SpeedInsights />
          </ThemeProvider>
          <TabAttentionTitle />
        </ChatProvider >
      </body>
    </html>
  );
}