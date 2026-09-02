import Navbar from "@/components/Shared/Navbar";
import Footer from "@/components/Shared/Footer";
import SignupForm from "@/components/Home/SignupForm";
import PageHero from "@/components/TravelDesigners/PageHero";
import IntroText from "@/components/TravelDesigners/IntroText";
import StoryRow from "@/components/TravelDesigners/StoryRow";
import Testimonial from "@/components/TravelDesigners/Testimonial";
import TravellerTypes from "@/components/TravelDesigners/TravellerTypes";
import TeamGrid from "@/components/TravelDesigners/TeamGrid";

export default function TravelDesignersPage() {
  return (
    <>
      <Navbar />

      <PageHero
        eyebrow="Travel Designers"
        title="Travel design"
        subtitle="Inspiring people with our passion for travel"
        image="/images/Hero.png"
      />

      <main className="bg-[#f8f7f4]">
        <IntroText>
          Create and curate. Two words that seem similar but at Cosa we know
          the difference because we do both. First we create a trip that&apos;s
          unique to you, because every Cosa itinerary is made to measure so
          that it fits perfectly. Then we curate the experience for you, so
          that everything is taken care of from the moment you book with us.
          Sounds simple, doesn&apos;t it? In fact, it&apos;s anything but, so
          here&apos;s a look at how the magic of travel design happens.
        </IntroText>

        <StoryRow
          image="/traveldesigner/gettingtoknow.png"
          title="Getting To know you"
          copy="You might make the first move by getting in touch, but then we'll be the ones asking all the questions. Taking the time to find out more about you is crucial, so that we know what your hopes, dreams and expectations are, at least when it comes to the trip you're taking."
        />

        <StoryRow
          reverse
          image="/traveldesigner/ideas.png"
          title="Ideas and itineraries"
          copy="Once we have a good grasp of what you're looking for, we work on creating options for you. Thanks to years of our own hands-on experience and a global network of partners, we can convert ideas into imaginative itineraries. All you have to do is choose."
        />

        <StoryRow
          image="/traveldesigner/planning.png"
          title="It's all in the planning"
          copy="Then we start planning your whole trip: transport, accommodation, sights and food, plus all the unique Cosa extras. This is the part we love. We are experts at turning dreams into reality, using our expertise and contacts in countless destinations to make sure you get the best."
        />

        <StoryRow
          reverse
          image="/traveldesigner/bonvoyage.png"
          title="Bon voyage!"
          copy="And you're off! It's time for your adventure to begin, but not yet time for us to say goodbye. While you're travelling, we're here to support you no matter what happens. We deliver the best personal service through honesty and attention to detail: we are Swiss, after all."
        />

        <Testimonial/>
        <TravellerTypes/>
        <TeamGrid/>
        <SignupForm/>

      </main>

      <Footer />
    </>
  );
}
