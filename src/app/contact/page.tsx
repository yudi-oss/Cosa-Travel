import Navbar from "@/components/Shared/Navbar";
import Footer from "@/components/Shared/Footer";
import SignupForm from "@/components/Home/SignupForm";
import PageHero from "@/components/TravelDesigners/PageHero";
import IntroBlock from "@/components/contact/IntroBlock";
import DepartmentsGrid from "@/components/contact/DepartmentsGrid";
import OfficeSection from "@/components/contact/OfficeSection";
import GeneralEnquiryForm from "@/components/contact/GeneralEnquiryForm";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <PageHero
        eyebrow="Contact"
        title="Contact Us"
        subtitle=""
        image="/Bookingspecialist/contact.png"
      />

      <main className="bg-[#f8f7f4]">
        <IntroBlock />
        <DepartmentsGrid />
        <OfficeSection />
        <GeneralEnquiryForm />
        <SignupForm />
      </main>

      <Footer />
    </>
  );
}
