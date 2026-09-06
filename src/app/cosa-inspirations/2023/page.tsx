import Navbar from "@/components/Shared/Navbar";
import Footer from "@/components/Shared/Footer";
import PageHero from "@/components/TravelDesigners/PageHero";
import IntroText from "@/components/TravelDesigners/IntroText";
import InspirationStories from "@/components/Inspirations/InspirationStories";
import InspirationsCompassBanner from "@/components/Inspirations/InspirationsCompassBanner";
import InspirationsContactCTA from "@/components/Inspirations/InspirationsContactCTA";
import MoreInspirationsGrid from "@/components/Inspirations/MoreInspirationGrid";
import { inspirations2023 } from "@/components/Inspirations/data/inspirations2023";

export default function CosaInspirations2023Page() {
  return (
    <>
      <Navbar />

      <PageHero
        eyebrow=""
        title="Cosa inspirations for 2023"
        subtitle="Join us in seven of our favourite places around the world"
        image="/images/inspirations/2023/hero.jpg"
      />

      <main className="bg-bg">
        <IntroText>
          Our mission is to inspire you to explore the world, and what
          better way to do that than with some of our favourite places on
          the planet. To celebrate the new Cosa Travel, we chose seven
          wonderful destinations that are guaranteed to give your itchy
          feet. From ultimate luxury in the South Pacific to unrivalled
          excellence in Northern Europe, let us take you around the world
          with the seven inspirations of Cosa. You can also get an overview
          of all seven inspirations on this special map.
        </IntroText>

        <InspirationStories stories={inspirations2023} />
        <InspirationsCompassBanner />
        <InspirationsContactCTA />
        <MoreInspirationsGrid excludeYear="2023" />
      </main>

      <Footer />
    </>
  );
}