import React from "react";
import { graphql } from "gatsby";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import VideographyHero from "../components/videography/VideographyHero";
import VideographyHelp from "../components/videography/VideographyHelp";
import VideographyPortfolio from "../components/videography/VideographyPortfolio";
import VideographyDetails from "../components/videography/VideographyDetails";

export default function VideographyPage({ data }) {
  const acf = data?.wpPage?.videographyPageContent || {};
  const portfolioItems = acf.portfolioItems || {};

  // Build portfolio array from ACF group (fallback handled inside the component)
  const portfolioData = [
    { id: 1, title: portfolioItems.item1Title, videoSrc: portfolioItems.item1Video?.node?.mediaItemUrl },
    { id: 2, title: portfolioItems.item2Title, videoSrc: portfolioItems.item2Video?.node?.mediaItemUrl },
    { id: 3, title: portfolioItems.item3Title, videoSrc: portfolioItems.item3Video?.node?.mediaItemUrl },
    { id: 4, title: portfolioItems.item4Title, videoSrc: portfolioItems.item4Video?.node?.mediaItemUrl },
  ];

  return (
    <>
      <Navbar activePage="Services" />
      <main className="m-0 p-0">
        <VideographyHero
          title={acf.heroTitle}
          subtitle={acf.heroSubtitle}
          videoUrl={acf.heroVideo?.node?.mediaItemUrl}
        />

        <VideographyHelp
          heading={acf.helpHeading}
          paragraph={acf.helpParagraph}
          logo={acf.helpLogo?.node?.sourceUrl}
        />

        <VideographyPortfolio
          heading={acf.portfolioHeading}
          description={acf.portfolioDescription}
          portfolioData={portfolioData}
        />

        <VideographyDetails
          howWeWorkTitle={acf.howWeWorkTitle}
          howWeWorkText={acf.howWeWorkText}
          howWeWorkImage={acf.howWeWorkImage?.node?.sourceUrl}
          techTitle={acf.techTitle}
          techText={acf.techText}
          techImage={acf.techImage?.node?.sourceUrl}
          servicesTitle={acf.servicesTitle}
          servicesText={acf.servicesText}
          servicesImage={acf.servicesImage?.node?.sourceUrl}
        />
      </main>
      <Footer />
    </>
  );
}

export const Head = () => (
  <title>Video Production Services | Pocket Creatives</title>
);

export const query = graphql`
  query VideographyPageQuery {
    wpPage(title: { eq: "Videography" }) {
      videographyPageContent {
        heroTitle
        heroSubtitle
        heroVideo { node { mediaItemUrl } }
        portfolioHeading
        portfolioDescription
        portfolioItems {
          item1Title
          item1Video { node { mediaItemUrl } }
          item2Title
          item2Video { node { mediaItemUrl } }
          item3Title
          item3Video { node { mediaItemUrl } }
          item4Title
          item4Video { node { mediaItemUrl } }
        }
        howWeWorkTitle
        howWeWorkText
        howWeWorkImage { node { sourceUrl } }
        techTitle
        techText
        techImage { node { sourceUrl } }
        servicesTitle
        servicesText
        servicesImage { node { sourceUrl } }
        helpHeading
        helpParagraph
        helpLogo { node { sourceUrl } }
      }
    }
  }
`;