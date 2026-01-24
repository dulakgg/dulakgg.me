import type { Metadata } from "next";
import { Sour_Gummy } from 'next/font/google'
import './globals.css'
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

const sourGummy = Sour_Gummy({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Dulakgg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={sourGummy.className}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
