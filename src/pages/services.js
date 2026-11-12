import React from "react";
import { graphql } from "gatsby";

// Layout
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

// Pricing components
import PricingHero from "../components/pricing/PricingHero";
import PricingModular from "../components/pricing/PricingModular";
import PricingExplanation from "../components/pricing/PricingExplanation";
import PricingContact from "../components/pricing/PricingContact";
import PricingProduction from "../components/pricing/PricingProduction";

export default function PricingPage({ data }) {
  const acf = data?.wpPage?.pricingPageContent || {};

  return (
    <>
      <Navbar activePage="Pricing" />
      <main className="w-full bg-pocketWhite overflow-hidden">
        <PricingHero 
          topText={acf.heroTopText}
          title={acf.heroTitle}
          p1={acf.heroParagraph1}
          p2={acf.heroParagraph2}
        />
        
        <PricingModular 
          modularHeading={acf.modularHeading}
          b1={acf.benefit1} b2={acf.benefit2} b3={acf.benefit3}
          c1Title={acf.card1Title} c1Text={acf.card1Text}
          c2Title={acf.card2Title} c2Text={acf.card2Text}
        />
        
        <PricingExplanation 
          e1Title={acf.exp1Title} e1Text1={acf.exp1Text1} e1Text2={acf.exp1Text2}
          e2Title={acf.exp2Title} e2Text1={acf.exp2Text1} e2Text2={acf.exp2Text2} 
          e2Text3={acf.exp2Text3} e2Text4={acf.exp2Text4}
        />
        
        <PricingContact 
          title={acf.contactTitle}
          subtitle={acf.contactSubtitle}
        />
        
        <PricingProduction 
          p1Heading={acf.prod1Heading} p1Text={acf.prod1Text}
          p2Heading={acf.prod2Heading} p2Text={acf.prod2Text}
        />
        
        <Footer />
      </main>
    </>
  );
}

export const query = graphql`
  query PricingPageQuery {
    wpPage(title: { eq: "Pricing" }) {
      pricingPageContent {
        # Hero
        heroTopText
        heroTitle
        heroParagraph1
        heroParagraph2
        
        # Explanation
        exp1Title
        exp1Text1
        exp1Text2
        
        exp2Title
        exp2Text1
        exp2Text2
        exp2Text3
        exp2Text4
        
        # Contact
        contactTitle
        contactSubtitle

        # Modular
        modularHeading
        benefit1
        benefit2
        benefit3
        card1Title
        card1Text
        card2Title
        card2Text

        # Production
        prod1Heading
        prod1Text
        prod2Heading
        prod2Text
      }
    }
  }
`;

export const Head = () => <title>Pricing | Pocket Creatives</title>;