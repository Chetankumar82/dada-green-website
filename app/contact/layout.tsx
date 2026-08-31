import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Mansa Headquarters & Commercial Inquiries",
  description:
    "Get in touch with Dada Green E-Mobility in Mansa (Gujarat). Contact our operations leadership for electric bus fleet schedules, maintenance manpower, and depot management.",
  keywords: [
    "Contact Dada Green E-Mobility",
    "Dada Green Mansa Office",
    "13 Srinath Arcade Mansa",
    "Electric Bus Operations Inquiry",
    "EV Maintenance Manpower Contact",
    "Dada Green Phone Number",
  ],
  alternates: {
    canonical: "https://www.dadagreens.com/contact",
  },
  openGraph: {
    title: "Contact Dada Green E-Mobility | Mansa Headquarters",
    description:
      "Discuss electric bus operations, maintenance manpower requirements, or depot management with our team in Mansa, Gujarat.",
    url: "https://www.dadagreens.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
