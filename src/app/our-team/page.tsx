import Navbar from "@/components/Shared/Navbar";
import Footer from "@/components/Shared/Footer";
import StoryRow from "@/components/TravelDesigners/StoryRow";
import PageIntro from "@/components/OurTeam/PageIntro";
import TeamMemberSections from "@/components/OurTeam/TeamMemberSections";
import JoinTeamListings from "@/components/OurTeam/JoinTeamListings";
import TeamEnquiryForm from "@/components/OurTeam/TeamEnquiryForm";

export default function OurTeamPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#f8f7f4]">
        <PageIntro />
        <TeamMemberSections />

        <StoryRow
          image="https://picsum.photos/seed/cosa-team-jointeam/900/700"
          title="Join our team"
          copy="We're always looking for inspiring new talent. If you're passionate about what we do, we'd love to hear from you. Explore our current opportunities below."
        />

        <JoinTeamListings />
        <TeamEnquiryForm />
      </main>

      <Footer />
    </>
  );    
}
