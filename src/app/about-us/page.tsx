import Navbar from "@/components/Shared/Navbar";
import Footer from "@/components/Shared/Footer";
import SignupForm from "@/components/Home/SignupForm";
import PageHero from "@/components/TravelDesigners/PageHero";
import StoryRow from "@/components/TravelDesigners/StoryRow";
import IntroBlock from "@/components/About Us/IntroBlock";

const CAMELS_IMAGE = "https://picsum.photos/seed/cosa-about-camels/900/700";
const SOCIAL_IMAGE = "https://picsum.photos/seed/cosa-about-social/900/700";

export default function AboutUsPage() {
  return (
    <>
      <Navbar />

      <PageHero
        eyebrow="About Us - Conscious Travel"
        title="Conscious travel"
        subtitle="Making a difference with Cosa"
        image="https://picsum.photos/seed/cosa-about-hero/1600/900"
      />

      <main className="bg-[#f8f7f4]">
        <IntroBlock />

        <StoryRow
          reverse
          image={CAMELS_IMAGE}
          title="Holistic approach"
          copy="As travellers, we have a choice, and that choice can make a difference: the hotel that pays a fair wage, the restaurant that buys locally, the communities that need support. Luxury travel can help you give back because higher prices mean there's more for things like protecting wildlife in national parks. We choose the businesses we work with carefully and give you the choice of how sustainable you want your trip to be."
        />

        <StoryRow
          image={SOCIAL_IMAGE}
          title="Social projects"
          copy="Our events and incentives focus on enjoyment but we also offer fulfilment with hands-on community projects. We choose ones with a lasting environmental or social impact, such as creating a kitchen garden for a school in South Africa or renovating a centre for single mothers in Madrid. Client feedback has shown us that these projects are often a highlight of the whole trip. Our events are organised as sustainably as possible, reducing food waste, not using plastic and minimising our footprint."
        />

        <StoryRow
          reverse
          image={CAMELS_IMAGE}
          title="Personal growth"
          copy="During the year the Cosa family gets together for an Action Week when we explore sustainable topics. We look at issues such as the impact our consumption has on the planet. Or how we can improve our ecological footprint. Through workshops, lectures, live talks and discussions, we make these subjects more tangible and strengthen our awareness as a team. And we have lots of fun too."
        />

        <StoryRow
          image={SOCIAL_IMAGE}
          title="Sustainable tags"
          copy="It looks like leather. It feels like leather. But this isn't leather. This is Bio-Tex, a unique material made from plant protein and cellulose. It combines American innovation with Italian craftsmanship, making it both sustainable and luxurious. We chose it for our luggage tags as part of our commitment to conscious travel, using fewer resources to produce something natural. We love it and think you will too."
        />

        <SignupForm />
      </main>

      <Footer />
    </>
  );
}
