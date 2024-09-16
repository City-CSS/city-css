import Header from "@/components/Header";
import HeroSection from "@/components/Hero";
import Usage from "@/components/Usage";
import Banner from "@/components/Banner";
import Banner2 from "@/components/Banner2";
import { IconCloudDemo } from "@/components/IconCloudDemo";
import Footer from "@/components/Footer";
import { FileTreeDemo } from "@/components/FileTree";
export default function Home() {
  return (
    <>
      <HeroSection />
      <Banner />
      <FileTreeDemo />

      <IconCloudDemo />
      <Banner2 />
      <Usage />
      <Footer />
    </>
  );
}
