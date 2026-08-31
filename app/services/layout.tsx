import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Electric Bus Operations & Maintenance Manpower Services",
  description:
    "Explore Dada Green's core EV services: Electric Bus Fleet Operations, Maintenance Manpower Service, Driver & Crew Deployment, Depot Management, and 24×7 Operations Support.",
  keywords: [
    "Electric Bus Operations",
    "Maintenance Manpower Service",
    "EV Maintenance Workforce India",
    "Electric Bus Depot Management",
    "EV Driver Deployment",
    "Charging Operations Support",
    "24x7 Fleet Uptime SLA",
    "Commercial EV Services Gujarat",
  ],
  alternates: {
    canonical: "https://www.dadagreens.com/services",
  },
  openGraph: {
    title: "Electric Bus Operations & Maintenance Manpower | Dada Green",
    description:
      "Comprehensive electric mobility operations, maintenance manpower, depot management, and trained driver deployment across India.",
    url: "https://www.dadagreens.com/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
