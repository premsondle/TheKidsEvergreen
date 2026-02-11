import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://thekidsevergreen.com"; // Replace with your actual domain

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "The Kids Evergreen - Best Play School & Preschool in Indore",
    template: "%s | The Kids Evergreen"
  },
  description: "The Kids Evergreen is a trusted play school and preschool in Indore offering Play Group, Nursery, LKG, and UKG programs. Admission open! Safe, caring environment with experienced teachers, modern facilities, CCTV, smart classes, and affordable fees.",
  keywords: [
    "play school in Indore",
    "preschool in Indore",
    "nursery school Indore",
    "kindergarten Indore",
    "The Kids Evergreen",
    "best play school Indore",
    "LKG UKG admission",
    "kids school Aradhana Nagar",
    "preschool admission open",
    "play group Indore",
    "early childhood education Indore"
  ],
  authors: [{ name: "The Kids Evergreen" }],
  creator: "The Kids Evergreen",
  publisher: "The Kids Evergreen",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "The Kids Evergreen",
    title: "The Kids Evergreen - Best Play School & Preschool in Indore",
    description: "Trusted play school in Indore offering Play Group, Nursery, LKG & UKG. Safe environment, experienced teachers, modern facilities. Admission open!",
    images: [
      {
        url: "/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "The Kids Evergreen Play School Logo",
      },
      {
        url: "/collage1.jpeg",
        width: 1200,
        height: 630,
        alt: "The Kids Evergreen School Activities",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Kids Evergreen - Best Play School & Preschool in Indore",
    description: "Trusted play school in Indore offering Play Group, Nursery, LKG & UKG. Safe environment, experienced teachers. Admission open!",
    images: ["/logo.jpeg"],
    creator: "@thekidsevergreen", // Replace with actual Twitter handle if available
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console verification code
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
  category: "education",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#4FC3F7" },
    { media: "(prefers-color-scheme: dark)", color: "#4FC3F7" }
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.jpeg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/logo.jpeg" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="overflow-x-hidden">{children}</body>
    </html>
  );
}
