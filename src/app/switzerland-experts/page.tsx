import Navbar from "@/components/Shared/Navbar";
import Footer from "@/components/Shared/Footer";
import SignupForm from "@/components/Home/SignupForm";
import PageHero from "@/components/TravelDesigners/PageHero";
import IntroText from "@/components/TravelDesigners/IntroText";
import StoryRow from "@/components/TravelDesigners/StoryRow";
import ExperienceGrid from "@/components/switzerland-experts/ExperienceGride";
import Testimonial from "@/components/switzerland-experts/Testimonals";
import SwissQuiz from "@/components/switzerland-experts/SwissQuiz";
import TeamGrid from "@/components/switzerland-experts/TeamGrid";

export default function SwitzerlandExpertsPage() {
  return (
    <>
      <Navbar />

      <PageHero
        eyebrow="Switzerland Experts"
        title="Welcome to Switzerland"
        subtitle="It's more than just cheese and skis with Cosa"
        image="/Bookingspecialist/switzerland.png"
      />

      <main className="bg-[#f8f7f4]">
        <IntroText>
          We take the best bits of Switzerland and make them even better.
          Our Switzerland isn&apos;t only cheese and chocolate, it&apos;s
          watching cheese being made halfway up a mountain or crafting your
          own chocolate souvenir. Your desires guide our tours so that we
          can give you the ultimate Swiss experience. We also like to take
          guests behind the scenery to show them there&apos;s more to this
          wonderful Alpine nation than a pretty picture. Not forgetting our
          Swiss attention to detail.
        </IntroText>

        <ExperienceGrid />

        <StoryRow
          image="https://picsum.photos/seed/cosa-se-tailormade/900/700"
          title="Tailor made"
          copy="At Cosa, there's no such thing as a standard Swiss itinerary. Each one is tailor-made from scratch for every customer. From actively enjoying nature at its most spectacular or slowly discovering centuries of history, you can be sure that we'll put the best of Switzerland at your fingertips."
        />

        <StoryRow
          reverse
          image="https://picsum.photos/seed/cosa-se-insidertips/900/700"
          title="Insider tips"
          copy="Travelling in Switzerland with Cosa means you're in safe hands. This is our home so we know the country inside out. And we use only the best local guides who love helping others discover the real Switzerland, the one behind the scenery, the one full of culture and adventure."
        />

        <Testimonial />

        <StoryRow
          image="https://picsum.photos/seed/cosa-se-gettingaround/900/700"
          title="Getting around"
          copy="The Swiss are world champions in train travel so getting around by public transportation is all part of a Swiss trip. We plan every journey in detail, be it by train, bus, boat or cable car. Of course, we can also arrange private cars, helicopters or even horse-drawn carriages."
        />

        <SwissQuiz />
        <TeamGrid />
        <SignupForm />
      </main>

      <Footer />
    </>
  );
}
