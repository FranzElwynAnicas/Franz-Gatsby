import React from "react";
import { graphql } from "gatsby";

// Layout
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

// Services components
import ServicesCategoryBlock from "../components/services/ServicesCategoryBlock";
import ServicesProcess from "../components/services/ServicesProcess";
import ServicesCategoryBlock2 from "../components/services/ServicesCategoryBlock2";
import ServicesProcess2 from "../components/services/ServicesProcess2";
import ServicesCategoryBlock3 from "../components/services/ServicesCategoryBlock3";
import ServicesWhatWeCanOffer from "../components/services/ServicesWhatWeCanOffer";

export default function ServicesPage({ data }) {
  const acf = data?.wpPage?.servicesPageContent || {};
  const offers = acf.whatWeCanOffer || {};

  return (
    <>
      <Navbar activePage="Services" />
      <main className="m-0 p-0">
        {/* 1. Video Production block */}
        <ServicesCategoryBlock
          title={acf.block1Title}
          paragraph={acf.block1Paragraph}
        />

        {/* 2. Video process */}
        <ServicesProcess
          p1Title={acf.process1Title}
          p1Subtitle={acf.process1Subtitle}
          p1Text={acf.process1Text}
          p1Image={acf.process1Image?.node?.sourceUrl}
          p2Title={acf.process2Title}
          p2Subtitle={acf.process2Subtitle}
          p2Text={acf.process2Text}
          p2Image={acf.process2Image?.node?.sourceUrl}
          p3Title={acf.process3Title}
          p3Subtitle={acf.process3Subtitle}
          p3Text={acf.process3Text}
          p3Image={acf.process3Image?.node?.sourceUrl}
        />

        {/* 3. Photography block */}
        <ServicesCategoryBlock2
          title={acf.block2Title}
          paragraph={acf.block2Paragraph}
        />

        {/* 4. Photography process */}
        <ServicesProcess2
          p1Title={acf.process21Title}
          p1Subtitle={acf.process21Subtitle}
          p1Text={acf.process21Text}
          p1Image={acf.process21Image?.node?.sourceUrl}
          p2Title={acf.process22Title}
          p2Subtitle={acf.process22Subtitle}
          p2Text={acf.process22Text}
          p2Image={acf.process22Image?.node?.sourceUrl}
          p3Title={acf.process23Title}
          p3Subtitle={acf.process23Subtitle}
          p3Text={acf.process23Text}
          p3Image={acf.process23Image?.node?.sourceUrl}
        />

        {/* 5. The Whole Package block */}
        <ServicesCategoryBlock3
          title={acf.block3Title}
          paragraph={acf.block3Paragraph}
        />

        {/* 6. What we can offer */}
        <ServicesWhatWeCanOffer
          heading={acf.whatWeCanOfferHeading}
          offers={{
            offer1Title: offers.offer1Title,
            offer1Bullets: offers.offer1Bullets,
            offer1Text: offers.offer1Text,
            offer1Image: offers.offer1Image?.node?.sourceUrl,
            offer2Title: offers.offer2Title,
            offer2Bullets: offers.offer2Bullets,
            offer2Text: offers.offer2Text,
            offer2Image: offers.offer2Image?.node?.sourceUrl,
            offer3Title: offers.offer3Title,
            offer3Bullets: offers.offer3Bullets,
            offer3Text: offers.offer3Text,
            offer3Image: offers.offer3Image?.node?.sourceUrl,
          }}
        />
      </main>
      <Footer />
    </>
  );
}

export const query = graphql`
  query ServicesPageQuery {
    wpPage(title: { eq: "Services" }) {
      servicesPageContent {
        # Category Blocks
        block1Title
        block1Paragraph
        block2Title
        block2Paragraph
        block3Title
        block3Paragraph

        # Process (Video)
        process1Title
        process1Subtitle
        process1Text
        process1Image { node { sourceUrl } }
        process2Title
        process2Subtitle
        process2Text
        process2Image { node { sourceUrl } }
        process3Title
        process3Subtitle
        process3Text
        process3Image { node { sourceUrl } }

        # Process (Photography)
        process21Title
        process21Subtitle
        process21Text
        process21Image { node { sourceUrl } }
        process22Title
        process22Subtitle
        process22Text
        process22Image { node { sourceUrl } }
        process23Title
        process23Subtitle
        process23Text
        process23Image { node { sourceUrl } }

        # What We Can Offer
        whatWeCanOffer {
          offer1Title
          offer1Bullets
          offer1Text
          offer1Image { node { sourceUrl } }
          offer2Title
          offer2Bullets
          offer2Text
          offer2Image { node { sourceUrl } }
          offer3Title
          offer3Bullets
          offer3Text
          offer3Image { node { sourceUrl } }
        }
      }
    }
  }
`;

export const Head = () => <title>Services | Pocket Creatives</title>;