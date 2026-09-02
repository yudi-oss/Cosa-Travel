import Navbar from "@/components/Shared/Navbar";
import HashScroll from "@/components/Shared/HashScroll";
import Hero from "@/components/Home/Hero";
import WhatWeDo from "@/components/Home/WhatweDo";
import WhyChooseCosa from "@/components/Home/WhyChooseCosa";
import Destination from "@/components/Home/Destination";
import ContactSection from "@/components/Home/ContactSection";
import SignupForm from "@/components/Home/SignupForm";
import Footer from "@/components/Shared/Footer";



export default function Home() {
  return (
    <>
      <Navbar />
      <HashScroll />
      <Hero />

      <main className="max-w-[1180px] mx-auto">
        <section className="bg-[#f8f7f4] py-24">
          <div className="max-w-5xl mx-auto text-center px-8">
            <p className="text-center text-[18px] leading-[2] font-light text-neutral-900">
              <b>Every trip with Cosa is unique because your trip is tailor-made for you.
              No glossy brochures, no set itineraries, just you telling us what you
              want and then we make it happen. From exploration to relaxation, or solo
              travel to groups, anything is possible but everything is always
              individual to you. Your adventure starts here and now, with Cosa.</b>
            </p>
          </div>
        </section>
        

        <WhatWeDo />
        <WhyChooseCosa/>
        <Destination/>
        <ContactSection/>
        <SignupForm/>
        <Footer/>

      </main>
    </>
  );
}