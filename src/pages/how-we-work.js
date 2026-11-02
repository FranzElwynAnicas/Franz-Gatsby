import * as React from "react";

// Layout
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

// How We Work components
import HowWeWorkHero from "../components/how-we-work/HowWeWorkHero";
import HowWeWorkAccordion from "../components/how-we-work/HowWeWorkAccordion";
import HowWeWorkDetails from "../components/how-we-work/HowWeWorkDetails";
import HowWeWorkFooter from "../components/how-we-work/HowWeWorkFooter"; 

export default function HowWeWorkPage() {
  return (
    <>
      <Navbar activePage="How We Work" />
      <main className="m-0 p-0 bg-[#F7F7F7]">
        <HowWeWorkHero />
        <HowWeWorkAccordion />
        <HowWeWorkDetails />
        <HowWeWorkFooter />
      </main>
      <Footer />
    </>
  );
}

export const Head = () => <title>How We Work | Pocket Creatives</title>;