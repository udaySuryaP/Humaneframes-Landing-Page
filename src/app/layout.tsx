import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const anton = Anton({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://humaneframes.com"),
  title: "Humaneframes - Brand, Web, Content, Growth",
  description:
    "Humaneframes is an independent brand and digital studio crafting identities, websites, content systems, and growth assets for ambitious businesses.",
  openGraph: {
    title: "Humaneframes",
    description: "Your business is better than your brand. We fix that.",
    url: "https://humaneframes.com",
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
    <html
      lang="en"
      className={`${inter.variable} ${anton.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
