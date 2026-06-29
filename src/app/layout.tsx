import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nisha Nazar | Frontend Developer Portfolio",
  description: "Portfolio of Nisha Nazar, a passionate Frontend Developer specializing in Next.js, TypeScript, and Tailwind CSS. Showcasing modern web projects and technical skills.",
  openGraph: {
    title: "Nisha Nazar | Frontend Developer Portfolio",
    description: "Explore the web development projects and technical skills of Nisha Nazar.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
