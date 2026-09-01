import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us & Leadership Team | Gujarat & Maharashtra Depot Network",
  description:
    "Learn about Dada Green E-Mobility LLP, our co-founders Mrs. Rinaben Chaudhari & Mr. Ajaybhai Chaudhari, our 1000+ workforce, and our operational depots across Gujarat & Maharashtra.",
  keywords: [
    "About Dada Green E-Mobility",
    "Rinaben Chaudhari",
    "Ajaybhai Chaudhari",
    "Dineshbhai Chaudhari",
    "Mansa Gujarat EV Company",
    "Gujarat Electric Bus Depots",
    "Maharashtra EV Operations Hubs",
    "Sustainable Mobility India",
  ],
  alternates: {
    canonical: "https://www.dadagreens.com/about",
  },
  openGraph: {
    title: "About Dada Green E-Mobility | Leadership & Operations Footprint",
    description:
      "Headquartered in Mansa (Gujarat), Dada Green powers zero-emission transit with 1000+ skilled personnel across Gujarat and Maharashtra.",
    url: "https://www.dadagreens.com/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
