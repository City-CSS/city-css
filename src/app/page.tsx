import Header from "@/components/Header";
import HeroSection from "@/components/Hero";
import Usage from "@/components/Usage";
import Banner from "@/components/Banner";
import { IconCloudDemo } from "@/components/IconCloudDemo";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
      <HeroSection />
      <Banner />
      <Usage />
      <IconCloudDemo />
      <Footer />
    </>
  );
}
