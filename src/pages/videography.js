import React from "react";

// Layout
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

// Videography components
import VideographyHero from "../components/videography/VideographyHero";
import VideographyHelp from "../components/videography/VideographyHelp";
import VideographyPortfolio from "../components/videography/VideographyPortfolio";
import VideographyDetails from "../components/videography/VideographyDetails";

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