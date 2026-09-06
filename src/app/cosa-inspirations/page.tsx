import Navbar from "@/components/Shared/Navbar";
import Footer from "@/components/Shared/Footer";
import PageHero from "@/components/TravelDesigners/PageHero";
import IntroText from "@/components/TravelDesigners/IntroText";
import InspirationStories from "@/components/Inspirations/InspirationStories";
import InspirationsCompassBanner from "@/components/Inspirations/InspirationsCompassBanner";
import InspirationsContactCTA from "@/components/Inspirations/InspirationsContactCTA";
import MoreInspirationsGrid from "@/components/Inspirations/MoreInspirationGrid";
import { inspirations2026 } from "@/components/Inspirations/data/inspirations2026";

export default function CosaInspirationsPage() {
  return (
    <>
      <Navbar />

      <PageHero
        eyebrow=""
        title="Cosa inspirations for 2026"
        subtitle="Seven destinations, each chosen to move you in a different way"
        image="/images/inspirations/2026/hero.jpg"
      />

      <main className="bg-bg">
        <IntroText>
          Every year brings a world of possibilities – and 2026 is no
          exception. From polar silence to tropical rhythm, our latest Cosa
          Inspirations reveal seven extraordinary journeys that capture the
          spirit of discovery in all its forms. Chosen by our travel
          designers for their beauty, depth and sheer sense of wonder, these
          experiences invite you to see the world differently. Whether you
          crave stillness or adventure, this is your moment to dream again –
          and let Cosa turn those dreams into reality.
        </IntroText>

        <InspirationStories stories={inspirations2026} />
        <InspirationsCompassBanner />
        <InspirationsContactCTA />
        <MoreInspirationsGrid excludeYear="2026" />
      </main>

      <Footer />
    </>
  );
}