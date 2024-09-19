import Navbar from "./component/Navbar";
import HeroSection from "./component/HeroSection";
import AchievementsSection from "./component/AchievementsSection";
import AboutSections from "./component/AboutSections";
import ProjectSections from "./component/ProjectSections";
import EmailSection from "./component/EmailSection";
import Footer from "./component/Footer";

function App() {
  return (
    <main className="flex min-h-screen flex-col bg-[#000000]">
      <Navbar />
      <div className="container mt-24 mx-auto py-4 px-5">
        <HeroSection />
        <AchievementsSection />
        <AboutSections />
        <ProjectSections />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}

export default App;
