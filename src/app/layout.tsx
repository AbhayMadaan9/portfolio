import { Analytics } from "@vercel/analytics/react"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

// Load Inter font for non-Apple devices
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Abhay Madaan - Generative AI Engineer | Python & Full Stack Developer | Professional Portfolio",
    template: "%s | Abhay Madaan Portfolio"
  },
  description: "Professional portfolio of Abhay Madaan - Generative AI Engineer and Python & Full Stack Developer. Building RAG pipelines, multi-agent systems, and scalable backends with LangChain, LangGraph, Node.js, and FastAPI.",
  keywords: [
    "Abhay Madaan",
    "Generative AI Engineer",
    "Full-stack Developer",
    "Python Developer",
    "AI Engineer",
    "Portfolio",
    "Software Developer",
    "Machine Learning",
    "RAG Pipelines",
    "Web Development",
    "Next.js",
    "React",
    "FastAPI",
    "Node.js",
    "Automation",
    "LangChain",
    "LangGraph",
    "Multi-Agent Systems",
    "AI Chatbot",
    "Professional Portfolio",
    "Developer Portfolio",
    "Tech Portfolio",
    "AWS Certified Developer",
    "Web Scraping",
    "API Development"
  ],
  authors: [
    {
      name: "Abhay Madaan",
      url: "https://in.linkedin.com/in/abhay-madaan-709175205",
    },
  ],
  creator: "Abhay Madaan",
  publisher: "Abhay Madaan",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abhaymadaan.dev/",
    title: "Abhay Madaan - Generative AI Engineer | Python & Full Stack Developer | Professional Portfolio",
    description: "Professional portfolio showcasing RAG pipelines, multi-agent AI systems, and scalable full-stack applications built with LangChain, LangGraph, Node.js, and FastAPI.",
    siteName: "Abhay Madaan Portfolio",
    images: [
      {
        url: "https://abhaymadaan.dev/profile.jpg",
        width: 1200,
        height: 1200,
        alt: "Abhay Madaan - Professional Portfolio with AI Chatbot",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhay Madaan - Generative AI Engineer | Python & Full Stack Developer",
    description: "Professional portfolio showcasing RAG pipelines, multi-agent AI systems, and scalable full-stack applications.",
    creator: "",
    site: "",
    images: [{
      url: "https://abhaymadaan.dev/profile.jpg",
      alt: "Abhay Madaan Professional Portfolio"
    }],
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
      }
    ],
    shortcut: "/favicon.ico?v=2",
    apple: "/apple-touch-icon.svg?v=2",
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: "https://abhaymadaan.dev/",
  },
  category: "technology",
  classification: "Portfolio Website",
  other: {
    "google-site-verification": "your-google-verification-code-here",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="canonical" href="https://abhaymadaan.dev/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Abhay Madaan",
              "jobTitle": "Generative AI Engineer | Python & Full Stack Developer",
              "url": "https://abhaymadaan.dev/",
              "image": "https://abhaymadaan.dev/profile.jpg",
              "sameAs": [
                "https://github.com/AbhayMadaan9",
                "https://in.linkedin.com/in/abhay-madaan-709175205"
              ],
              "worksFor": {
                "@type": "Organization",
                "name": "Gammastack"
              },
              "alumniOf": {
                "@type": "Organization",
                "name": "Guru Nanak Dev Engineering College, Ludhiana"
              },
              "knowsAbout": [
                "Python Development",
                "Generative AI Engineering",
                "RAG Pipelines",
                "Multi-Agent Systems",
                "Machine Learning",
                "Web Development",
                "Full Stack Development"
              ],
              "description": "Generative AI Engineer and Python & Full Stack Developer with expertise in RAG pipelines, multi-agent orchestration, and production AI systems."
            })
          }}
        />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          <main className="flex min-h-screen flex-col">
            {children}
          </main>
          <Toaster />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}