import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://farhann.dev"),
  title: {
    default: "Mohammad Farhan",
    template: "%s | Mohammad Farhan",
  },
  description:
    "Computer Science graduate from UPM specializing in full-stack development, cloud infrastructure, and AI integrations. Skilled in Java, Python, AWS, DigitalOcean, and networking.",
  keywords: [
    "Software Engineer",
    "Full Stack Developer",
    "Java",
    "Spring Boot",
    "Python",
    "FastAPI",
    "Vue.js",
    "AWS",
    "DigitalOcean",
    "Docker",
    "Cloud",
    "Networking",
    "UPM",
    "farhanlabs",
  ],
  authors: [{ name: "Mohammad Farhan" }],
  creator: "Mohammad Farhan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://farhann.dev",
    siteName: "farhann.dev",
    title: "Mohammad Farhan",
    description:
      "Computer Science graduate from UPM specializing in full-stack development, cloud infrastructure, and AI integrations.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammad Farhan",
    description:
      "Computer Science graduate from UPM specializing in full-stack development, cloud infrastructure, and AI integrations.",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen antialiased text-gray-900">
        {children}
      </body>
    </html>
  );
}
