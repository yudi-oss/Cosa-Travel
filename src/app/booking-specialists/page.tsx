import Navbar from "@/components/Shared/Navbar";
import Footer from "@/components/Shared/Footer";
import SignupForm from "@/components/Home/SignupForm";
import PageHero from "@/components/TravelDesigners/PageHero";
import IntroText from "@/components/TravelDesigners/IntroText";
import ServicesGrid from "@/components/BookingSpecialists/ServicesGrid";
import TeamGrid from "@/components/BookingSpecialists/TeamGrid";

export default function BookingSpecialistsPage() {
  return (
    <>
      <Navbar />

      <PageHero
        eyebrow="Booking Specialists"
        title="Booking specialists"
        subtitle="Wherever you’d like to go, we can make it happen"
        image="/Bookingspecialist/hero.png"
      />

      <main className="bg-[#f8f7f4]">
        <IntroText>
We are a full-service agency to look after you from beginning to end and take care of everything in between. No matter where you want to go or how you want to travel, we can organise it. Not only that but as your booking specialists, we can arrange more than just flights and hotels. From cars and cruises to dinners and dances, we can book it for you.        </IntroText>

        <ServicesGrid />
        <TeamGrid />

        <SignupForm />
      </main>

      <Footer />
    </>
  );
}
