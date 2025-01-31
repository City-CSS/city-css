import Header from "@/components/Header";
import HeroSection from "@/app/home/components/Hero";
import Usage from "@/app/home/components/Usage";
import JoinForm from "@/components/JoinForm";
import SponsorForm from "@/components/SponsorForm";
import { IconCloud } from "@/components/IconCloud";
import Footer from "@/components/Footer";
import { FileTreeDemo } from "@/app/home/components/FileTree";
import TopBanner from "@/components/TopBanner";
export default function Home() {
  return (
    <>
        <TopBanner/>
      <Header />
      <HeroSection />
      <JoinForm />
      <FileTreeDemo />

      <IconCloud />
      <SponsorForm
          colour={"red"}
      />
      <Usage />
      <Footer />
    </>
  );
}
