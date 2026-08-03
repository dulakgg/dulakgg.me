import type { Metadata } from "next";
import { Sour_Gummy } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";


const sourGummy = Sour_Gummy({
  subsets: ['latin'],
  variable: '--font-sour-gummy', 
});


const myCustomFont = localFont({
  src: "../../public/BaconyScript.otf", 
  display: 'swap',
  variable: '--font-custom-otf', 
});

export const metadata: Metadata = {
  title: "Dulakgg",
  description: "Dulak - developer building Geometry Dash mods, websites and games. Check out my mods, support me or get in touch.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `
          try {
            var t = localStorage.getItem('theme');
            if (t && t !== 'blue') document.documentElement.setAttribute('data-theme', t);
          } catch(e) {}
        ` }} />
      </head>
      <body className={`${sourGummy.variable} ${myCustomFont.variable} antialiased`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}