import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Safety & Statutory Compliance | EV Fleet & Workshop Standards",
  description:
    "Explore Dada Green's zero-accident safety culture: High-voltage EV battery safety, driver defensive training, emergency response protocols, PPE standards, and 100% statutory labor compliance.",
  keywords: [
    "EV Bus Safety Standards",
    "High Voltage Battery Safety",
    "Electric Bus Driver Safety Training",
    "EV Workshop PPE Compliance",
    "Statutory Labor Compliance EV",
    "Dada Green Safety Protocols",
  ],
  alternates: {
    canonical: "https://www.dadagreens.com/safety",
  },
  openGraph: {
    title: "Safety & Statutory Compliance Standards | Dada Green E-Mobility",
    description:
      "A complete breakdown of our high-voltage battery safety, defensive driver training, emergency response, and statutory labor compliance across all depots.",
    url: "https://www.dadagreens.com/safety",
  },
};

export default function SafetyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
