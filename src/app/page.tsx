import HomePageContent from "@/components/HomePageContent";
import type { Metadata } from "next";
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata: Metadata = {
  title:
    "Developer Docs Gallery — A crowdsourced, open-source gallery for high-quality dev docs.",
  description:
    "Discover high-quality developer documentation resources in our crowdsourced gallery. Find the best payments, ML-AI, IaaS, SaaS, API and cloud docs.",
  openGraph: {
    title:
      "Developer Docs Gallery — A crowdsourced, open-source gallery for high-quality dev docs.",
    description:
      "Discover high-quality developer documentation resources in our crowdsourced gallery. Find the best payments, ML-AI, IaaS, SaaS, API and cloud docs.",
    url: "https://developer-docs-gallery.xyz",
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
    title:
      "Developer Docs Gallery — A crowdsourced, open-source gallery for high-quality dev docs.",
    description:
      "Discover high-quality developer documentation resources in our crowdsourced gallery. Find the best payments, ML-AI, IaaS, SaaS, API and cloud docs.",
    creator: "@mohit",
    images: ["#"],
  },
  alternates: {
    canonical: "https://developer-docs-gallery.xyz",
  },
};

export default function HomePage() {
  <GoogleAnalytics gaId="G-XHVRBZLJDK"/>
  return <HomePageContent />;

}
