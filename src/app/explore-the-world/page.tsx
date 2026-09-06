import Navbar from "@/components/Shared/Navbar";
import WorldMapExplorer from "@/components/Explore/WorldMapExplorer";
import DestinationGrid from "@/components/Explore/DestinationGrid";
import Footer from "@/components/Shared/Footer";

export default function ExploreTheWorldPage() {
  return (
    <>
      <Navbar />
      <WorldMapExplorer />
      <DestinationGrid />
      <Footer />
    </>
  );
}