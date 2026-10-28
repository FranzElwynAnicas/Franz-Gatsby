import React from "react";
import Navbar from "../components/Navbar";
import PhotographyHero from "../components/PhotographyHero";
import PhotographyAbout from "../components/PhotographyAbout";
import PhotographyMail from "../components/PhotographyMail";
import PhotographyDetails from "../components/PhotographyDetails";
import Footer from "../components/Footer"; 

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