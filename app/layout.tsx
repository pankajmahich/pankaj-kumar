import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { portfolioData } from "@/constants/constants";
import { getPersonJsonLd } from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#07090e" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(portfolioData.socialLinks.portfolio || "https://example.com"),
  title: {
    default: `${portfolioData.personal.name} | ${portfolioData.personal.role}`,
    template: `%s | ${portfolioData.personal.name}`,
  },
  description: portfolioData.personal.tagline,
  keywords: [
    "Software Engineer",
    "Full Stack Developer",
    "Creative Developer",
    "Next.js Portfolio",
    "Three.js",
    "React",
    "TypeScript",
    "Web Performance",
  ],
  authors: [{ name: portfolioData.personal.name, url: portfolioData.socialLinks.portfolio }],
  creator: portfolioData.personal.name,
  openGraph: {
    title: `${portfolioData.personal.name} — ${portfolioData.personal.role}`,
    description: portfolioData.personal.shortBio,
    url: portfolioData.socialLinks.portfolio || "https://example.com",
    siteName: `${portfolioData.personal.name} Portfolio`,
    images: [
      {
        url: portfolioData.personal.profileImage,
        width: 1200,
        height: 630,
        alt: `${portfolioData.personal.name} Portfolio`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${portfolioData.personal.name} — ${portfolioData.personal.role}`,
    description: portfolioData.personal.tagline,
    images: [portfolioData.personal.profileImage],
    creator: "@example",
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
}: {
  children: React.ReactNode;
}) {
  const jsonLd = getPersonJsonLd();

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <head>
        <script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[var(--background)] text-[var(--foreground)] selection:bg-indigo-500/30 selection:text-indigo-200">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
