import * as React from "react";
import Navbar from "../components/Navbar";
import HowWeWorkHero from "../components/HowWeWorkHero";
import HowWeWorkAccordion from "../components/HowWeWorkAccordion";
import HowWeWorkDetails from "../components/HowWeWorkDetails";
import HowWeWorkFooter from "../components/HowWeWorkFooter"; 
import Footer from "../components/Footer";

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