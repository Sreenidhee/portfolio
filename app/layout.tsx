import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sreenidhee Vidya Modugu — Software Engineer",
  description:
    "Software Engineer with experience in C/C++, backend development, enterprise systems, and full-stack applications. M.S. Computer Science, University of Florida.",
  keywords: [
    "Sreenidhee Vidya Modugu",
    "Software Engineer",
    "C++",
    "Python",
    "Django",
    "React",
    "University of Florida",
    "Accenture",
    "DRDO",
  ],
  openGraph: {
    title: "Sreenidhee Vidya Modugu — Software Engineer",
    description:
      "Software Engineer with experience in C/C++, backend development, enterprise systems, and full-stack applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
