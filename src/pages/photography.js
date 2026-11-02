import React from "react";

// Layout
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

// Photography components
import PhotographyHero from "../components/photography/PhotographyHero";
import PhotographyAbout from "../components/photography/PhotographyAbout";
import PhotographyMail from "../components/photography/PhotographyMail";
import PhotographyDetails from "../components/photography/PhotographyDetails";

export default function PhotographyPage() {
  return (
    <>
      <Navbar activePage="Services" />
      <main className="m-0 p-0">
        <PhotographyHero />
        <PhotographyAbout />
        <PhotographyMail />
        <PhotographyDetails />
      </main>
      <Footer /> 
    </>
  );
}