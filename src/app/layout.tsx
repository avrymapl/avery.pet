import type { Metadata } from "next";
import { Newsreader, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

// Both font variables must live on <html>: --font-serif and --font-mono in
// tokens.css reference them, and a css variable resolves its var() lookups
// where it is declared (:root), so a font variable set further down the tree
// would be invisible to them.
const serifFont = Newsreader({
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--font-newsreader",
  subsets: ["latin"],
});

const monoFont = IBM_Plex_Mono({
  weight: ["400", "500"],
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
});

const description =
  "welcome to my little corner of the internet where i share projects i'm working on! :3";

export const metadata: Metadata = {
  // Needed so the social card image resolves to an absolute URL — crawlers
  // can't follow a relative one.
  metadataBase: new URL("https://avery.pet"),
  title: "avery.pet",
  description,
  openGraph: {
    title: "avery.pet",
    description,
    siteName: "avery.pet",
    url: "/",
    type: "website",
    images: [{ url: "/avatar.png", width: 256, height: 256, alt: "avery.pet" }],
  },
  twitter: {
    // The avatar is square, so a "summary" card (small square thumbnail) fits
    // it — "summary_large_image" would crop it into a wide banner.
    card: "summary",
    title: "avery.pet",
    description,
    images: ["/avatar.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${serifFont.variable} ${monoFont.variable} h-full`}>
      <body className="ap-page min-h-full">{children}</body>
    </html>
  );
}
