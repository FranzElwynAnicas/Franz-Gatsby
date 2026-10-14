import * as React from "react";
import Navbar from "../components/Navbar";
import AboutHero from "../components/AboutHero";
import Footer from "../components/Footer";

const AboutPage = () => (
  <main className="w-full bg-pocketWhite">
    <Navbar activePage="About" />
    <AboutHero />
    <Footer />
  </main>
);

export default AboutPage;

export const Head = () => <title>About | Pocket Creatives</title>;