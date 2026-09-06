import Navbar from "@/components/Shared/Navbar";
import Footer from "@/components/Shared/Footer";
import PageHero from "@/components/TravelDesigners/PageHero";
import IntroText from "@/components/TravelDesigners/IntroText";
import InspirationStories from "@/components/Inspirations/InspirationStories";
import InspirationsCompassBanner from "@/components/Inspirations/InspirationsCompassBanner";
import InspirationsContactCTA from "@/components/Inspirations/InspirationsContactCTA";
import MoreInspirationsGrid from "@/components/Inspirations/MoreInspirationGrid";
import type { InspirationStory } from "@/components/Inspirations/InspirationStories";

// TODO: replace with real 2025 destinations once content/screenshots are provided
const inspirations2025: InspirationStory[] = [];

export default function CosaInspirations2025Page() {
  return (
    <>
      <Navbar />

      <PageHero
        eyebrow=""
        title="Cosa inspirations for 2025"
        subtitle="Salt flats, coastlines and wilderness — seven journeys worth chasing"
        image="/images/inspirations/2025/hero.jpg"
      />

      <main className="bg-bg">
        <IntroText>
          Walking across the salt flats of Bolivia, driving along the coast
          of Australia, paddling through the wilderness of Canada. These
          are the moments that stay with you long after the trip ends —
          and the ones we chased down for 2025.
        </IntroText>

        <InspirationStories stories={inspirations2025} />
        <InspirationsCompassBanner />
        <InspirationsContactCTA />
        <MoreInspirationsGrid excludeYear="2025" />
      </main>

      <Footer />
    </>
  );
}