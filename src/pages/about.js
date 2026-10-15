import * as React from "react";
import Navbar from "../components/Navbar";
import AboutHero from "../components/AboutHero";
import AboutIntro from "../components/AboutIntro";
import AboutServices from "../components/AboutServices";
import AboutWorks from "../components/AboutWorks";
import AboutWhyWorkWithUs from "../components/AboutWhyWorkWithUs"; 
import AboutWhoWeWorkWith from "../components/AboutWhoWeWorkWith"; 
import AboutOurStory from "../components/AboutOurStory"; // <-- Import this
import Footer from "../components/Footer";

const AboutPage = () => (
  <main className="w-full bg-pocketWhite">
    <Navbar activePage="About" />
    <AboutHero />
    <AboutIntro />
    <AboutWorks />
    <AboutServices />
    <AboutWhyWorkWithUs />
    <AboutWhoWeWorkWith />
    <AboutOurStory />
    <Footer />
  </main>
);

export default AboutPage;