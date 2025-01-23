import Header from "@/components/Header";
import HeroSection from "@/components/Hero";
import Usage from "@/components/Usage";
import JoinForm from "@/components/JoinForm";
import SponsorForm from "@/components/SponsorForm";
import { IconCloudDemo } from "@/components/IconCloudDemo";
import Footer from "@/components/Footer";
import { FileTreeDemo } from "@/components/FileTree";
import TopBanner from "@/components/TopBanner";
import LogoCollabs from "@/components/logoCollabs";
export default function Home() {
  return (
    <>
        <TopBanner/>
      <Header />
      <HeroSection />
      <JoinForm />
      <FileTreeDemo />

      <IconCloudDemo />
      <SponsorForm />
      <Usage />
      <Footer />
    </>
  );
}
