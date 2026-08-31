import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://www.dadagreens.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Dada Green E-Mobility | Electric Bus Operations & Maintenance Manpower",
    template: "%s | Dada Green E-Mobility",
  },
  description:
    "Dada Green E-Mobility LLP delivers end-to-end electric bus fleet operations, dedicated Maintenance Manpower Service, depot management, and trained driver deployment across India.",
  keywords: [
    "Dada Green E-Mobility",
    "Electric Bus Operations India",
    "Maintenance Manpower Service",
    "EV Fleet Management Gujarat",
    "Electric Bus Depot Management",
    "EV Driver Deployment India",
    "Electric Transit Maintenance",
    "Commercial EV Operations",
    "Mansa Gujarat EV Company",
    "Zero-Emission Public Transit",
    "Olectra Operations Partner",
    "EV Charging Depot Infrastructure",
  ],
  authors: [{ name: "Dada Green E-Mobility LLP", url: siteUrl }],
  creator: "Dada Green E-Mobility LLP",
  publisher: "Dada Green E-Mobility LLP",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Dada Green E-Mobility | Electric Bus Operations & Maintenance Manpower",
    description:
      "Full-stack electric bus fleet operations, specialized maintenance manpower, depot management, and trained crew deployment across India.",
    url: siteUrl,
    siteName: "Dada Green E-Mobility",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/dada-green-logo-ultra-hd.png",
        width: 1200,
        height: 630,
        alt: "Dada Green E-Mobility Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dada Green E-Mobility | Electric Bus Operations & Maintenance Manpower",
    description:
      "Full-stack electric bus fleet operations, specialized maintenance manpower, depot management, and trained crew deployment across India.",
    images: ["/dada-green-logo-ultra-hd.png"],
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
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured Data Schema for Search Engines (Schema.org)
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "Dada Green E-Mobility LLP",
        url: siteUrl,
        logo: {
          "@type": "ImageObject",
          url: `${siteUrl}/dada-green-logo-ultra-hd.png`,
          caption: "Dada Green E-Mobility Logo",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+91-88665-54242",
          contactType: "customer support",
          email: "info@dadagreens.com",
          areaServed: "IN",
          availableLanguage: ["English", "Hindi", "Gujarati"],
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: "13, Srinath Arcade, Mansa-Gandhinagar Road, Near Hyundai Showroom",
          addressLocality: "Mansa",
          addressRegion: "Gujarat",
          addressCountry: "IN",
        },
      },
      {
        "@type": "LocalBusiness",
        "@id": `${siteUrl}/#localbusiness`,
        name: "Dada Green E-Mobility Headquarters",
        image: `${siteUrl}/dada-green-logo-ultra-hd.png`,
        telephone: "+91-88665-54242",
        email: "info@dadagreens.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "13, Srinath Arcade, Mansa-Gandhinagar Road, Near Hyundai Showroom",
          addressLocality: "Mansa",
          addressRegion: "Gujarat",
          addressCountry: "IN",
        },
        priceRange: "$$",
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            opens: "09:00",
            closes: "19:00",
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Dada Green E-Mobility",
        publisher: {
          "@id": `${siteUrl}/#organization`,
        },
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} font-sans antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-screen bg-[#f3fbf6] font-sans text-slate-900 selection:bg-emerald-200 selection:text-emerald-900">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}