import * as React from "react";
import { graphql } from "gatsby";

// Layout
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

// How We Work components
import HowWeWorkHero from "../components/how-we-work/HowWeWorkHero";
import HowWeWorkAccordion from "../components/how-we-work/HowWeWorkAccordion";
import HowWeWorkDetails from "../components/how-we-work/HowWeWorkDetails";
import HowWeWorkFooter from "../components/how-we-work/HowWeWorkFooter";

export default function HowWeWorkPage({ data }) {
  const acf = data?.wpPage?.howWeWorkContent || {};
  const accordion = acf.accordionItems || {};

  // Build accordion array from ACF; null if empty so the component falls back
  const accordionFromAcf =
    accordion.item1Title || accordion.item1Content ||
    accordion.item2Title || accordion.item2Content ||
    accordion.item3Title || accordion.item3Content
      ? [
          {
            id: "item-1",
            title: accordion.item1Title,
            content: accordion.item1Content,
          },
          {
            id: "item-2",
            title: accordion.item2Title,
            content: accordion.item2Content,
          },
          {
            id: "item-3",
            title: accordion.item3Title,
            content: accordion.item3Content,
          },
        ]
      : null;

  return (
    <>
      <Navbar activePage="How We Work" />
      <main className="m-0 p-0 bg-[#F7F7F7]">
        <HowWeWorkHero
          heroHeading={acf.heroHeading}
          heroParagraph={acf.heroParagraph}
          blueTitle={acf.blueCardTitle}
          blueText={acf.blueCardText}
          yellowTitle={acf.yellowCardTitle}
          yellowText={acf.yellowCardText}
        />
        <HowWeWorkAccordion accordionData={accordionFromAcf} />
        <HowWeWorkDetails
          d1Title={acf.details1Title}
          d1Text1={acf.details1Text1}
          d1Text2={acf.details1Text2}
          d1Text3={acf.details1Text3}
          d1Image={acf.details1Image?.node?.sourceUrl}
          d2Title={acf.details2Title}
          d2Text1={acf.details2Text1}
          d2Text2={acf.details2Text2}
          d2Image={acf.details2Image?.node?.sourceUrl}
        />
        <HowWeWorkFooter
          footerHeading={acf.footerHeading}
          footerText1={acf.footerText1}
          footerText2={acf.footerText2}
          formHeading={acf.footerFormHeading}
        />
      </main>
      <Footer />
    </>
  );
}

export const query = graphql`
  query HowWeWorkPageQuery {
    wpPage(title: { eq: "How We Work" }) {
      howWeWorkContent {
        # Hero
        heroHeading
        heroParagraph
        blueCardTitle
        blueCardText
        yellowCardTitle
        yellowCardText

        # Accordion (grouped)
        accordionItems {
          item1Title
          item1Content
          item2Title
          item2Content
          item3Title
          item3Content
        }

        # Details
        details1Title
        details1Text1
        details1Text2
        details1Text3
        details1Image { node { sourceUrl } }
        details2Title
        details2Text1
        details2Text2
        details2Image { node { sourceUrl } }

        # Footer
        footerHeading
        footerText1
        footerText2
        footerFormHeading
      }
    }
  }
`;

export const Head = () => <title>How We Work | Pocket Creatives</title>;