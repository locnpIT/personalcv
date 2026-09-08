import type { Metadata, Viewport } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#090d16",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://phuocloc.io.vn"),
  title: {
    default: "Nguyen Phuoc Loc | Backend Software Engineer",
    template: "%s | Nguyen Phuoc Loc",
  },
  description:
    "Nguyen Phuoc Loc is a Backend Software Engineer specializing in Java, Spring Boot, Redis, MySQL, distributed systems, and database performance optimization.",
  keywords: [
    "Nguyen Phuoc Loc",
    "phuocloc.io.vn",
    "Backend Software Engineer",
    "Java Developer",
    "Spring Boot",
    "Redis",
    "MySQL Optimization",
    "Distributed Systems",
    "Concurrency",
    "Da Nang Software Engineer",
  ],
  authors: [{ name: "Nguyen Phuoc Loc", url: "https://phuocloc.io.vn" }],
  creator: "Nguyen Phuoc Loc",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://phuocloc.io.vn",
    title: "Nguyen Phuoc Loc | Backend Software Engineer",
    description:
      "I build reliable backend systems with Java, Spring Boot, Redis, and SQL. Interested in performance, distributed systems, and real-world system reliability.",
    siteName: "phuocloc.io.vn",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nguyen Phuoc Loc | Backend Software Engineer",
    description:
      "Backend Software Engineer specializing in Java, Spring Boot, Redis, MySQL, and distributed systems.",
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
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#090d16] text-zinc-100 min-h-screen flex flex-col font-sans antialiased selection:bg-emerald-500/20 selection:text-emerald-200">
        <div className="fixed inset-0 bg-grid-pattern opacity-100 pointer-events-none z-0" />
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
