import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NetEdge Solutions - Leading IT Networking & Infrastructure Company in India",
  description: "NetEdge Solutions provides enterprise-grade IT networking, MPLS, Wi-Fi, Firewall, CCTV, and infrastructure solutions across India. Contact us for expert consultation.",
  keywords: "IT networking, MPLS solutions, enterprise wifi, firewall security, CCTV installation, server room setup, network infrastructure, IT services India",
};

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingActionButton from '@/components/ui/FloatingActionButton';
import BackToTop from '@/components/ui/BackToTop';
import SmoothScroll from '@/components/ui/SmoothScroll';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SmoothScroll />
        <Navbar />
        <main className="min-h-screen pt-16">
          {children}
        </main>
        <FloatingActionButton />
        <BackToTop />
        <Footer />
      </body>
    </html>
  );
}
