import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import GallerySection from "@/components/GallerySection";
import FAQSection from "@/components/FAQSection";
import FloatingContact from "@/components/FloatingContact";

export default function Home() {
  return (
    <main className="bg-[#f3fbf6] text-slate-950">
      {/* 1. Split Hero with Live Telemetry Card */}
      <Hero />

      {/* 2. Enterprise Partners Validation Strip */}
      <TrustedBy />

      {/* 3. Who We Are & Overview */}
      <AboutSection />

      {/* 4. Core Capabilities Bento Grid */}
      <ServicesSection />

      {/* 5. Live Operational Numbers & Proof Points */}
      <StatsSection />

      {/* 6. Why Choose Dada Green */}
      <WhyChooseUs />

      {/* 7. On-Ground Photo Moments Showcase */}
      <GallerySection />

      {/* 8. Interactive B2B FAQ Accordion */}
      <FAQSection />

      {/* 9. Floating Quick Contact / Scroll to Top Widget */}
      <FloatingContact />
    </main>
  );
}