import type { Metadata } from "next";
import { SitePage } from "@/components/SitePage";
import { kawabaNav } from "@/lib/kawaba/kawaba-nav";
import { lastFetched } from "@/lib/updates";

const description =
  "a minimalist oligosynthetic constructed language";

export const metadata: Metadata = {
  title: {
    template: "%s — kawaba",
    default: "kawaba",
  },
  description,
  openGraph: {
    title: "kawaba – the language of parts",
    description,
    siteName: "avery.pet",
    url: "/kawaba",
    type: "website",
    images: [{ url: "/kawaba.png", width: 256, height: 256, alt: "kawaba" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "kawaba – the language of parts",
    description,
    images: ["/kawaba.png"],
  },
};

export default function KawabaLayout({ children }: { children: React.ReactNode }) {
  return (
    <SitePage
      subsite={{ name: "kawaba", href: "/kawaba" }}
      tagline="the language of parts"
      nav={kawabaNav}
      lastFetched={lastFetched("kawaba")}
    >
      {children}
    </SitePage>
  );
}
