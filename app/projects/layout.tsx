import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Projects & Current Operations | Electric Bus Fleet Depots",
  description:
    "Explore Dada Green's active electric bus projects, depot maintenance hubs, and deployed workforce across Gujarat (Mansa, Gandhinagar, Ahmedabad, Surat) and Maharashtra (Nagpur, Amravati, Chandrapur).",
  keywords: [
    "Dada Green Projects",
    "Electric Bus Operations Gujarat",
    "EV Bus Depots Maharashtra",
    "GSRTC EV Bus Operations",
    "Olectra Evey Trans Project",
    "Nagpur Electric Transit Operations",
    "Depot Maintenance Manpower Projects",
  ],
  alternates: {
    canonical: "https://www.dadagreens.com/projects",
  },
  openGraph: {
    title: "Our Active Projects & Electric Bus Fleet Operations | Dada Green",
    description:
      "On-ground operational proof: 165+ EV buses operated, 445+ deployed crew, and active depot facilities across Gujarat & Maharashtra.",
    url: "https://www.dadagreens.com/projects",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
