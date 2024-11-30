import ContributePageContent from "@/components/ContributePageContent";
import { Metadata } from "next";
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata: Metadata = {
  title: "Contribute - Developer Docs Gallery",
  description:
    "Add a documentation site to Awesome Docs Gallery. Help developers discover high-quality developer documentation resources in our crowdsourced gallery.",
  openGraph: {
    title: "Contribute - Developer Docs Gallery",
    description:
      "Add a documentation site to Awesome Docs Gallery. Help developers discover high-quality developer documentation resources in our crowdsourced gallery.",
    url: "https://developer-docs-gallery.xyz/contribute",
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
    title: "Contribute — Developer Docs Gallery",
    description:
      "Discover high-quality developer documentation resources in our crowdsourced gallery. Find the best payments, ML-AI, IaaS, SaaS, API and cloud docs.",
    creator: "@mohit",
    images: ["#"],
  },
  alternates: {
    canonical: "https://developer-docs-gallery.xyz/contribute",
  },
};

export default function ContributePage() {
  <GoogleAnalytics gaId="G-XHVRBZLJDK"/>
  return <ContributePageContent />;
}