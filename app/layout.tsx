import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gilbert Batista — DevOps Engineer",
  description: "Portfolio of Gilbert Batista, DevOps Engineer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-black min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
