import React from "react";
import Navbar from "../components/Navbar";
import VideographyHero from "../components/VideographyHero";
import VideographyHelp from "../components/VideographyHelp";
import Footer from "../components/Footer";
import VideographyPortfolio from "../components/VideographyPortfolio";
import VideographyDetails from "../components/VideographyDetails";

export default function VideographyPage() {
  return (
    <>
      <Navbar activePage="Services" />
      <main className="m-0 p-0">
        <VideographyHero />
        <VideographyHelp />
        <VideographyPortfolio />
        <VideographyDetails />
      </main>
      <Footer />
    </>
  );
}

export const Head = () => <title>Video Production Services | Pocket Creatives</title>;