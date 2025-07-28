import "./globals.css";

import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import localFont from "next/font/local";

import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";

export const metadata: Metadata = {
  metadataBase: new URL("https://mandjoudama.com"),
  title: {
    default: "Mandjou Dama",
    template: "%s | Mandjou Dama",
  },
  description: "Mobile & Frontend Developer",
  openGraph: {
    title: "Mandjou Dama",
    description: "Mobile & Frontend Developer",
    url: "https://mandjoudama.com",
    siteName: "Mandjou Dama",
    images: [
      {
        url: "https://mandjoudama.com/opengraph-image.jpg",
        width: 1200,
        height: 600,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "_PmIseyz3VvJwrGjQqJJYKHD_THMBlF7TxopDvZUOxQ",
    other: {
      me: ["contact@mandjoudama.com", "https://mandjoudama.com"],
    },
  },
  referrer: "origin-when-cross-origin",
};

const jetbrainsMono = localFont({
  src: "../public/fonts/JetBrainsMono-Variable.woff2",
  variable: "--jetbrains-mono",
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable}`}>
      <body>
        <section className="pt-24">
          <section className="main_section">
            <Header />
            <main className="">{children}</main>
            <Footer />
          </section>
        </section>
        <SpeedInsights />
      </body>
    </html>
  );
}
