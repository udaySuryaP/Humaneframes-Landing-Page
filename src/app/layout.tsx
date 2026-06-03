import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Humaneframes - Brand & Digital Experience Company",
  description:
    "Humaneframes is a Kerala based brand and digital experience company helping businesses grow through strategy, design, technology, and measurable digital performance.",
  openGraph: {
    title: "Humaneframes - Brand & Digital Experience Company",
    description:
      "Humaneframes is a Kerala based brand and digital experience company helping businesses grow through strategy, design, technology, and measurable digital performance.",
    siteName: "Humaneframes",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} ${inter.variable} h-full scroll-smooth antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
