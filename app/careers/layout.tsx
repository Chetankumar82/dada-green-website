import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers & Job Openings | Electric Bus Drivers, Technicians & Staff",
  description:
    "Join Dada Green E-Mobility's 600+ workforce. We are hiring Electric Bus Drivers, EV Maintenance Technicians, Auto Electricians, Workshop Supervisors, and Depot Managers in Gujarat & Maharashtra.",
  keywords: [
    "Electric Bus Driver Jobs",
    "EV Technician Jobs Gujarat",
    "Auto Electrician EV Jobs",
    "Depot Manager Jobs Maharashtra",
    "Dada Green Careers",
    "Join Dada Green E-Mobility",
  ],
  alternates: {
    canonical: "https://www.dadagreens.com/careers",
  },
  openGraph: {
    title: "Careers & Job Openings | Dada Green E-Mobility",
    description:
      "Build your career in India's green transit revolution. Competitive salary, PF, ESIC medical benefits, and professional OEM technical training.",
    url: "https://www.dadagreens.com/careers",
  },
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
