import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustedBy } from "@/components/TrustedBy";
import {
  SectionHeader,
  AIVisualSolutionBlock,
  Enterprise,
  MultiDevice,
  BrandKit,
} from "@/components/FeatureSections";
import { PricingTiers } from "@/components/PricingTiers";
import { Testimonials } from "@/components/Testimonials";
import { ToolsGrid } from "@/components/ToolsGrid";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <TrustedBy />
      <AIVisualSolutionBlock />
      <SectionHeader title="Built for businesses that sell online" />
      <PricingTiers />
      <Enterprise />
      <MultiDevice />
      <BrandKit />
      <Testimonials />
      <ToolsGrid />
      <FinalCTA />
      <Footer />
    </main>
  );
}
