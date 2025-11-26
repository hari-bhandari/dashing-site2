import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from 'next-themes';
import { SpeedInsights } from "@vercel/speed-insights/next";
import TabAttentionTitle from "./components/TabAttentionTitle";
import ChatProvider from "./components/ChatProvider";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-barlow",
});

export const metadata: Metadata = {
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
        <ChatProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
            <SpeedInsights />
          </ThemeProvider>
          <TabAttentionTitle />
        </ChatProvider >
      </body>
    </html>
  );
}