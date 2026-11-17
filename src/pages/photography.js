import React from "react";
import { graphql } from "gatsby";

// Layout
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

// Photography components
import PhotographyHero from "../components/photography/PhotographyHero";
import PhotographyAbout from "../components/photography/PhotographyAbout";
import PhotographyMail from "../components/photography/PhotographyMail";
import PhotographyDetails from "../components/photography/PhotographyDetails";

export default function PhotographyPage({ data }) {
  const acf = data?.wpPage?.photographyPageContent || {};

  return (
    <>
      <Navbar activePage="Services" />
      <main className="m-0 p-0">
        <PhotographyHero
          heading={acf.heroHeading}
          text1={acf.heroText1}
          text2={acf.heroText2}
          videoUrl={acf.heroVideo?.node?.mediaItemUrl}
        />

        <PhotographyAbout
          yellowPill={acf.aboutYellowPill}
          text1={acf.aboutText1}
          text2={acf.aboutText2}
          text3={acf.aboutText3}
          text4={acf.aboutText4}
          gridImage1={acf.aboutGridImage1?.node?.sourceUrl}
          gridImage2={acf.aboutGridImage2?.node?.sourceUrl}
          gridImage3={acf.aboutGridImage3?.node?.sourceUrl}
          gridImage4={acf.aboutGridImage4?.node?.sourceUrl}
          gridImage5={acf.aboutGridImage5?.node?.sourceUrl}
          gridImage6={acf.aboutGridImage6?.node?.sourceUrl}
          gridImage7={acf.aboutGridImage7?.node?.sourceUrl}
          gridImage8={acf.aboutGridImage8?.node?.sourceUrl}
        />

        <PhotographyMail />

        <PhotographyDetails
          d1Title={acf.details1Title}
          d1Text={acf.details1Text}
          d1Image={acf.detailsImage1?.node?.sourceUrl}
          d2Title={acf.details2Title}
          d2Text={acf.details2Text}
          d2Image={acf.detailsImage2?.node?.sourceUrl}
          d3Title={acf.details3Title}
          d3Text={acf.details3Text}
          d3Image={acf.detailsImage3?.node?.sourceUrl}
        />
      </main>
      <Footer />
    </>
  );
}

export const query = graphql`
  query PhotographyPageQuery {
    wpPage(title: { eq: "Photography" }) {
      photographyPageContent {
        # Hero
        heroHeading
        heroText1
        heroText2
        heroVideo { node { mediaItemUrl } }

        # About
        aboutYellowPill
        aboutText1
        aboutText2
        aboutText3
        aboutText4
        aboutGridImage1 { node { sourceUrl } }
        aboutGridImage2 { node { sourceUrl } }
        aboutGridImage3 { node { sourceUrl } }
        aboutGridImage4 { node { sourceUrl } }
        aboutGridImage5 { node { sourceUrl } }
        aboutGridImage6 { node { sourceUrl } }
        aboutGridImage7 { node { sourceUrl } }
        aboutGridImage8 { node { sourceUrl } }

        # Details
        details1Title
        details1Text
        detailsImage1 { node { sourceUrl } }
        details2Title
        details2Text
        detailsImage2 { node { sourceUrl } }
        details3Title
        details3Text
        detailsImage3 { node { sourceUrl } }
      }
    }
  }
`;

export const Head = () => <title>Photography | Pocket Creatives</title>;