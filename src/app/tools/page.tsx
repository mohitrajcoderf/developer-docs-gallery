import ToolsPageContent from "@/components/ToolsPageContent";
import { Metadata } from "next";
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata: Metadata = {
  title: "Best Developer Documentation Tools in 2024 - Developer Docs Gallery",
  description:
    "Discover the best tools for creating high-quality developer documentation in 2024. Find the best tools for AI projects, API references, cloud docs, and more.",
  openGraph: {
    title: "Best Developer Documentation Tools in 2024 - Developer Docs Gallery",
    description:
      "Discover the best tools for creating high-quality developer documentation in 2024. Find the best tools for AI projects, API references, cloud docs, and more.",
    url: "https://developer-docs-gallery.xyz/tools",
    siteName: "developer-docs-gallery.xyz",
    images: [
      {
        url: "#",
        width: 1200,
        height: 630,
        alt: "Developer Docs Gallery",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Developer Documentation Tools in 2024 - Developer Docs Gallery",
    description:
      "Discover the best tools for creating high-quality developer documentation in 2024. Find the best tools for AI projects, API references, cloud docs, and more.",
    creator: "@mohit",
    images: ["#"],
  },
  alternates: {
    canonical: "https://developer-docs-gallery.xyz/tools",
  },
};

export default function ToolsPage() {
  <GoogleAnalytics gaId="G-XHVRBZLJDK"/>
  return <ToolsPageContent />;
}
