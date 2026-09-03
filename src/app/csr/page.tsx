import Navbar from "@/components/Shared/Navbar";
import Footer from "@/components/Shared/Footer";
import PageHero from "@/components/TravelDesigners/PageHero";
import CSRIntro from "@/components/CSR/CSRIntro";
import CSRPillars from "@/components/CSR/CSRPillars";
import CSRImpressions from "@/components/CSR/CSRImpressions";
import GivingBackPractice from "@/components/CSR/GivingBackPractice";
import GiveBackCTA from "@/components/CSR/GiveBackCTA";
import DiscoverCosaEvents from "@/components/CorporateEvents/DiscoverCosaEvents";
import CSRContactBanner from "@/components/CSR/CSRContactBanner";

export default function CSRPage() {
  return (
    <>
      <Navbar />

      <PageHero
        eyebrow="Corporate Social Responsibility"
        title="Giving back with Cosa"
        subtitle="Corporate Social Responsibility"
        image="/traveldesigner/gettingtoknow.png"
      />

      <main className="bg-[#f8f7f4]">
        <CSRIntro />
        <CSRPillars />
        <CSRImpressions />
        <GivingBackPractice />
        <GiveBackCTA />
        <DiscoverCosaEvents />
        <CSRContactBanner />
      </main>

      <Footer />
    </>
  );
}
