import * as React from "react";
import { useState } from "react";

// Layout
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ContactModal from "../components/layout/ContactModal";

// About components
import AboutHero from "../components/about/AboutHero";
import AboutIntro from "../components/about/AboutIntro";
import AboutServices from "../components/about/AboutServices";
import AboutWorks from "../components/about/AboutWorks";
import AboutWhyWorkWithUs from "../components/about/AboutWhyWorkWithUs";
import AboutVideoSection from "../components/about/AboutVideoSection"; 
import AboutWhoWeWorkWith from "../components/about/AboutWhoWeWorkWith";
import AboutOurStory from "../components/about/AboutOurStory";

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