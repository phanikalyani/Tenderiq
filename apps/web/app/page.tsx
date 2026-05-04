import Header from "@/components/marketing/Header";
import Hero from "@/components/marketing/Hero";
import FeatureGrid from "@/components/marketing/FeatureGrid";
import CTA from "@/components/marketing/CTA";
import Footer from "@/components/marketing/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      {/* Header */}
      <Header />

      {/* Hero Section with 3D */}
      <Hero />

      {/* Features */}
      <FeatureGrid />

      {/* Call To Action */}
      <CTA />

      {/* Footer */}
      <Footer />
    </main>
  );
}