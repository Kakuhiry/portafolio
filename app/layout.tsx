import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gilbert Batista — DevOps Engineer",
  description: "DevOps engineer with 5+ years building cloud-native infrastructure. Deep expertise in Kubernetes, Terraform, and GitOps across multiple cloud providers.",
  openGraph: {
    title: "Gilbert Batista — DevOps Engineer",
    description: "DevOps engineer with 5+ years building cloud-native infrastructure. Deep expertise in Kubernetes, Terraform, and GitOps across multiple cloud providers.",
    url: "https://gbklabs.com",
    siteName: "Gilbert Batista",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Gilbert Batista — DevOps Engineer",
    description: "DevOps engineer with 5+ years building cloud-native infrastructure. Deep expertise in Kubernetes, Terraform, and GitOps.",
  },
  metadataBase: new URL("https://gbklabs.com"),
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
