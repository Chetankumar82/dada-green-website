import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import SafetySection from "@/components/SafetySection";
import StatsSection from "@/components/StatsSection";
import GallerySection from "@/components/GallerySection";
import FAQSection from "@/components/FAQSection";
import FloatingContact from "@/components/FloatingContact";

export default function Home() {
  return (
    <main className="bg-[#f3fbf6] text-slate-950">
      {/* 1. Split Hero with Live Telemetry Card */}
      <Hero />

      {/* 2. Enterprise Partners Validation Strip (Olectra, Evey Trans, GSRTC, Varde Mobility) */}
      <TrustedBy />

      {/* 3. Who We Are & Overview */}
      <AboutSection />

      {/* 4. Core Capabilities Bento Grid */}
      <ServicesSection />

      {/* 5. Our Projects & Current Operations (Cities, Buses, Depots, Manpower) */}
      <ProjectsSection />

      {/* 6. Live Operational Numbers & Proof Points */}
      <StatsSection />

      {/* 7. Why Choose Dada Green (7 Key Strategic Pillars) */}
      <WhyChooseUs />

      {/* 8. Safety & Compliance Framework */}
      <SafetySection />

      {/* 9. On-Ground Photo Moments Showcase (Clean Auto-playing Slider) */}
      <GallerySection />

      {/* 10. Interactive B2B FAQ Accordion */}
      <FAQSection />

      {/* 11. Floating Quick Contact / Scroll to Top Widget */}
      <FloatingContact />
    </main>
  );
}