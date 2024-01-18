import Image from "next/image";
import HeroSection from "./component/HeroSection";
import Navbar from "./component/Navbar";
import AboutSections from "./component/AboutSections";
import ProjectSections from "./component/ProjectSections";
import EmailSection from "./component/EmailSection";
import Footer from "./component/Footer";
import AchievementsSection from "./component/AchievementsSection";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#000000] ">
      <Navbar />
      <div className="container mt-24 mx-auto py-4 px-12">
        <HeroSection />
        <AchievementsSection/>
        <AboutSections />
        <ProjectSections />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
