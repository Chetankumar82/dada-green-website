import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import GallerySection from "@/components/GallerySection";
import FloatingContact from "@/components/FloatingContact";

export default function Home() {
  return (
    <main className="bg-[#f3fbf6] text-slate-950">
      {/* 1. Split Hero with Live Telemetry Card */}
      <Hero />

      {/* 2. Enterprise Partners Validation Strip (Olectra, Evey Trans, GSRTC, Varde Mobility) */}
      <TrustedBy />

      {/* 3. Core Capabilities & Services Bento Grid */}
      <ServicesSection />

      {/* 4. Active Operations & Regional Projects Showcase */}
      <ProjectsSection />

      {/* 5. Why Choose Dada Green (Strategic Pillars & Statutory Compliance) */}
      <WhyChooseUs />

      {/* 6. On-Ground Fleet Moments Showcase (Clean Auto-Playing Slider) */}
      <GallerySection />

      {/* 7. Floating Quick Contact Widget */}
      <FloatingContact />
    </main>
  );
}