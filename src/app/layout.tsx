import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mo Tabish | AI Engineer & Full-Stack Developer",
  description: "Portfolio of Mo Tabish - AI Engineer, Data Science Innovator, and Full-Stack Developer. Georgia State University Computer Information Systems student with 4.0 GPA. Experienced in AI/ML, RAG systems, and enterprise solutions.",
  keywords: ["Mo Tabish", "AI Engineer", "Full Stack Developer", "Georgia State University", "Data Science", "Machine Learning", "RAG", "Python", "React", "TypeScript"],
  authors: [{ name: "Mo Tabish" }],
  creator: "Mo Tabish",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Mo Tabish | AI Engineer & Full-Stack Developer",
    description: "AI Engineer and Full-Stack Developer passionate about building intelligent systems. 4.0 GPA student at Georgia State University.",
    siteName: "Mo Tabish Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mo Tabish | AI Engineer & Full-Stack Developer",
    description: "AI Engineer and Full-Stack Developer passionate about building intelligent systems.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#0a0a0f" />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-[#0a0a0f] text-white antialiased noise-overlay`}
      >
        {children}
      </body>
    </html>
  );
}
