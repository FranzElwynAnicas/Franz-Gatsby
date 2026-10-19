import * as React from "react";
import { useState } from "react";
import Navbar from "../components/Navbar";
import AboutHero from "../components/AboutHero";
import AboutIntro from "../components/AboutIntro";
import AboutServices from "../components/AboutServices";
import AboutWorks from "../components/AboutWorks";
import AboutWhyWorkWithUs from "../components/AboutWhyWorkWithUs";
import AboutVideoSection from "../components/AboutVideoSection"; // 👈 added
import AboutWhoWeWorkWith from "../components/AboutWhoWeWorkWith";
import AboutOurStory from "../components/AboutOurStory";
import Footer from "../components/Footer";
import ContactModal from "../components/ContactModal";

const AboutPage = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <main className="w-full bg-pocketWhite">
      <Navbar
        activePage="About"
        onContactClick={() => setIsContactOpen(true)}
      />
      <AboutHero />
      <AboutIntro />
      <AboutWorks />
      <AboutServices />
      <AboutWhyWorkWithUs />
      <AboutVideoSection />
      <AboutWhoWeWorkWith />
      <AboutOurStory />
      <Footer />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </main>
  );
};

export default AboutPage;