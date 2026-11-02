import React from "react";

// Layout
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

// Pricing components
import PricingHero from "../components/pricing/PricingHero";
import PricingModular from "../components/pricing/PricingModular";
import PricingExplanation from "../components/pricing/PricingExplanation";
import PricingContact from "../components/pricing/PricingContact";
import PricingProduction from "../components/pricing/PricingProduction";

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