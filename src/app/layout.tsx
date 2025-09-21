import type { Metadata } from "next";
import { DM_Serif_Display } from "next/font/google";
import "./globals.css";

const dmSerifDisplay = DM_Serif_Display({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-dm-serif-display',
});

export const metadata: Metadata = {
  title: "Quddle AI - Production Ready Next.js App",
  description: "A production-ready Next.js application with TypeScript, Tailwind CSS, and modern development tools.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSerifDisplay.variable} font-serif antialiased`}>
        {children}
      </body>
    </html>
  );
}
