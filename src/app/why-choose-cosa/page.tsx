import Navbar from "@/components/Shared/Navbar";
import Footer from "@/components/Shared/Footer";
import SignupForm from "@/components/Home/SignupForm";
import PageHero from "@/components/TravelDesigners/PageHero";
import IntroText from "@/components/TravelDesigners/IntroText";
import StoryRow from "@/components/TravelDesigners/StoryRow";
import AdvantageGrid from "@/components/WhyChooseCosaPage/AdvantageGrid";
import ContactCTA from "@/components/WhyChooseCosaPage/ContactCTA";
import ServicesGrid from "@/components/WhyChooseCosaPage/ServicesGrid";

export default function WhyChooseCosaPage() {
  return (
    <>
      <Navbar />

      <PageHero
        eyebrow="Why Choose Cosa"
        title="Why choose Cosa"
        subtitle="Adventure is in our DNA"
        image="/whyus/whyus.png"
      />

      <main className="bg-[#f8f7f4]">
        <IntroText>
          Cosa has been crafting one-of-a-kind travel experiences for those
          seeking adventure since 1979. We build dream trips across the world,
          working with local experts to offer you luxurious and authentic
          travel that will awaken your senses and broaden your horizons. So
          why choose Cosa?
        </IntroText>

        <StoryRow
          reverse
          image="/traveldesigner/ideas.png"
          title="Because we travel"
          copy="There's a reason we're perfectly placed to create the most interesting and creative travel experiences – we're explorers too. Our lust for life takes us across the world, seeking out all that is inspiring, beautiful and thrilling. We do this to help you see the best of our planet."
        />

        <StoryRow
          image="/traveldesigner/gettingtoknow.png"
          title="Because we're family"
          copy="Cosa is a family-run business that understands the value of people and diversity. All our partners share our passion for enjoying the world's most exciting treasures. We'll work closely with you, tailoring your trip to what you want so you feel like part of the family too."
        />

        <StoryRow
          reverse
          image="/traveldesigner/ideas.png"
          title="Because we listen"
          copy="We know that each trip is as unique as each client so we promise we'll listen to your wishes. If you dream of travelling, then your dreams are safe with us. We'll use our creative flair and meticulous planning to transform those dreams into memories you'll cherish forever."
        />

        <StoryRow
          image="/traveldesigner/gettingtoknow.png"
          title="Because we're experts"
          copy="At Cosa, we know that everyone has different travel needs, be that an authentic expedition or a special group event. No matter what you're looking for, we've got the expertise to make it happen. You can trust us with your trip, leaving you to immerse yourself in the experience."
        />

        <StoryRow
          reverse
          image="/traveldesigner/ideas.png"
          title="Because we care"
          copy="We collaborate with those who make a positive difference, for example by working in local communities or on conservation projects. Sustainable, local and ecological are our priorities so we can empower curious explorers while respecting traditional cultures and nature."
        />

        <AdvantageGrid />
        <ContactCTA />
        <ServicesGrid />
        <SignupForm />
      </main>

      <Footer />
    </>
  );
}
