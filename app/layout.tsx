import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Krutansh Photography",
    default: "Krutansh Photography | Luxury Wedding & Fine Art Photography",
  },
  description: "High-end luxury wedding, portrait, and fine art photography by Krutansh.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Krutansh Photography",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-brand-black text-brand-white pt-20">
        <CustomCursor />
        <Header />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
