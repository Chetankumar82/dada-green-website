import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Electric Fleet & Operations Gallery | High-Resolution Moments",
  description:
    "Explore high-resolution photos of Dada Green's electric bus fleets, technical maintenance bays, certified drivers, and fast-charging depot infrastructure across India.",
  keywords: [
    "Dada Green Fleet Gallery",
    "Electric Bus Photos India",
    "EV Maintenance Bay Gallery",
    "Charging Station Photos",
    "Electric Transit Depot Images",
  ],
  alternates: {
    canonical: "https://www.dadagreens.com/gallery",
  },
  openGraph: {
    title: "Electric Fleet & Operations Gallery | Dada Green",
    description:
      "A visual showcase of electric bus operations, depot maintenance, driver crews, and charging infrastructure.",
    url: "https://www.dadagreens.com/gallery",
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
