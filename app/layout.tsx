import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/app/components/theme-provider";
import { Analytics } from "@vercel/analytics/next";
import ChatBot from "./components/ui/chatbot";
import { SITE_URL } from "@/app/lib/constants";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Pawan Sachdeva | Senior Full Stack & AI Engineer",
  description:
    "Senior Full Stack & AI Engineer with 5+ years of experience in React, Next.js, Python, FastAPI, and GenAI: LangChain, LangGraph, RAG, and AI agents.",
  keywords: [
    "Pawan Sachdeva",
    "Pawan",
    "Sachdeva",
    "Portfolio",
    "Full Stack Developer",
    "AI Engineer",
    "GenAI",
    "AI Agents",
    "LangChain",
    "LangGraph",
    "RAG",
    "FastAPI",
    "Next.js",
    "React",
  ],
  openGraph: {
    title: "Pawan Sachdeva | Senior Full Stack & AI Engineer",
    description:
      "Senior Full Stack & AI Engineer with 5+ years of experience in React, Next.js, Python, FastAPI, and GenAI: LangChain, LangGraph, RAG, and AI agents.",
    type: "website",
    url: "https://personal-portfolio-pawan-kumar-sachdevas-projects.vercel.app/",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <ChatBot />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
