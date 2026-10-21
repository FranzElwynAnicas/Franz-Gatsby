import React from "react";
import Navbar from "../components/Navbar";
import PricingHero from "../components/PricingHero";
import PricingModular from "../components/PricingModular";
import PricingExplanation from "../components/PricingExplanation";
import PricingContact from "../components/PricingContact";
import PricingProduction from "../components/PricingProduction";
import Footer from "../components/Footer";
export default function PricingPage() {
  return (
    <>
      <Navbar activePage="Pricing" />
      <main className="w-full bg-pocketWhite overflow-hidden">
        <PricingHero />
        <PricingModular />
        <PricingExplanation />
        <PricingContact />
        <PricingProduction />
        <Footer />
      </main>
    </>
  );
}