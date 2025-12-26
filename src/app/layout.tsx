import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Armonia Excursions",
    template: "%s | Armonia Excursions", // This automatically adds your brand to every page title
  },
  icons: [{ url: "/favicon.ico", type: "image/x-icon" }],
  alternates: {
    canonical: "/",
  },
  description:
    "Experience Greece with comfort. We provide premium private transfers, custom tours, and wheelchair-accessible travel services across Athens and mainland Greece.",
  openGraph: {
    title: "Armonia Excursions | Premium Travel & Transfers in Greece",
    description:
      "Your reliable partner for airport transfers, private sightseeing, and accessible tourism in Athens.",
    url: "https://www.armonia-excursions.gr", // Based on your footer email domain
    siteName: "Armonia Excursions",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/og-main.jpg", // Make sure to add an image at this path
        width: 1200,
        height: 630,
        alt: "Armonia Excursions Hero",
      },
    ],
  },
  keywords: [
    "Greece travel agency",
    "Athens private tours",
    "airport transfers Athens",
    "luxury chauffeur Greece",
    "wheelchair accessible tours",
    "Meteora day trip",
    "Sounion tour",
  ],
};


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SmoothScrolling>{children}</SmoothScrolling>
      </body>
    </html>
  );
}
