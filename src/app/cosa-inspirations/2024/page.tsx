import Navbar from "@/components/Shared/Navbar";
import Footer from "@/components/Shared/Footer";
import PageHero from "@/components/TravelDesigners/PageHero";
import IntroText from "@/components/TravelDesigners/IntroText";
import InspirationStories from "@/components/Inspirations/InspirationStories";
import InspirationsCompassBanner from "@/components/Inspirations/InspirationsCompassBanner";
import InspirationsContactCTA from "@/components/Inspirations/InspirationsContactCTA";
import MoreInspirationsGrid from "@/components/Inspirations/MoreInspirationGrid";
import type { InspirationStory } from "@/components/Inspirations/InspirationStories";

// TODO: replace with real 2024 destinations once content/screenshots are provided
const inspirations2024: InspirationStory[] = [];

export default function CosaInspirations2024Page() {
  return (
    <>
      <Navbar />

      <PageHero
        eyebrow=""
        title="Cosa inspirations for 2024"
        subtitle="Seven experiences, one unforgettable year"
        image="/images/inspirations/2024/hero.jpg"
      />

      <main className="bg-bg">
        <IntroText>
          With so many places and experiences to choose from, making a
          decision can be hard. That&apos;s where we come in — every year
          we hand-pick seven journeys that we believe deserve a place on
          your travel wish list.
        </IntroText>

        <InspirationStories stories={inspirations2024} />
        <InspirationsCompassBanner />
        <InspirationsContactCTA />
        <MoreInspirationsGrid excludeYear="2024" />
      </main>

      <Footer />
    </>
  );
}