import * as React from "react";
import { graphql } from "gatsby";

// Layout
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

// Home components
import HomeHeroIntro from "../components/home/HomeHeroIntro";
import HomePartnersGrid from "../components/home/HomePartnersGrid";
import HomeVideoWork from "../components/home/HomeVideoWork";
import HomeVideoCategories from "../components/home/HomeVideoCategories";
import HomeQuality from "../components/home/HomeQuality";
import HomePhotography from "../components/home/HomePhotography";
import HomeServicesCheck from "../components/home/HomeServicesCheck";
import HomeMeetTheTeam from "../components/home/HomeMeetTheTeam";
import HomeReviews from "../components/home/HomeReviews";
import HomePricing from "../components/home/HomePricing";

const Home = ({ data }) => {
  const acf = data?.wpPage?.homePageContent || {};
  const team = acf.teamMembers || {};
  const pricing = acf.pricing || {};

  return (
    <main className="w-full min-h-screen bg-pocketWhite">
      <Navbar activePage="Home" />

      <HomeHeroIntro
        heroTitle={acf.heroTitle}
        videoUrl={acf.heroVideo?.node?.mediaItemUrl}
      />

      <HomePartnersGrid
        aboutHeading={acf.aboutHeading}
        aboutParagraph={acf.aboutParagraph}
        partnerSubheading={acf.partnerSubheading}
      />

      <HomeVideoWork
        videoHeading={acf.videoWorkHeading}
        videoParagraph={acf.videoWorkParagraph}
      />

      <HomeVideoCategories sectionHeading={acf.videoSectionHeading} />

      <HomeQuality
        qualityHeading={acf.qualityHeading}
        qualityLeftParagraph={acf.qualityLeftParagraph}
        qualityRightParagraph={acf.qualityRightParagraph}
      />

      <HomePhotography
        photographyHeading={acf.photographyHeading}
        photographyCategories={acf.photographyCategories}
      />

      <HomeServicesCheck sectionHeading={acf.servicesCheckHeading} />

      <HomeMeetTheTeam
        e1Pill={team.employee1PillName} e1Name={team.employee1FullName} e1Roles={team.employee1Roles} e1Bio={team.employee1Bio} e1Photo={team.employee1Photo?.node?.sourceUrl}
        e2Pill={team.employee2PillName} e2Name={team.employee2FullName} e2Roles={team.employee2Roles} e2Bio={team.employee2Bio} e2Photo={team.employee2Photo?.node?.sourceUrl}
        e3Pill={team.employee3PillName} e3Name={team.employee3FullName} e3Roles={team.employee3Roles} e3Bio={team.employee3Bio} e3Photo={team.employee3Photo?.node?.sourceUrl}
        e4Pill={team.employee4PillName} e4Name={team.employee4FullName} e4Roles={team.employee4Roles} e4Bio={team.employee4Bio} e4Photo={team.employee4Photo?.node?.sourceUrl}
        e5Pill={team.employee5PillName} e5Name={team.employee5FullName} e5Roles={team.employee5Roles} e5Bio={team.employee5Bio} e5Photo={team.employee5Photo?.node?.sourceUrl}
        e6Pill={team.employee6PillName} e6Name={team.employee6FullName} e6Roles={team.employee6Roles} e6Bio={team.employee6Bio} e6Photo={team.employee6Photo?.node?.sourceUrl}
      />

      <HomeReviews reviewsData={acf.reviews} />

      <HomePricing
        pricingSubheading={pricing.pricingSubheading}
        pricingParagraph={pricing.pricingParagraph}
      />

      <Footer />
    </main>
  );
};

export default Home;

export const query = graphql`
  query HomePageQuery {
    wpPage(title: { eq: "Home" }) {
      homePageContent {
        heroTitle
        heroVideo { node { mediaItemUrl } }

        aboutHeading
        aboutParagraph
        partnerSubheading

        videoWorkHeading
        videoWorkParagraph
        videoSectionHeading

        qualityHeading
        qualityLeftParagraph
        qualityRightParagraph

        photographyHeading
        photographyCategories

        servicesCheckHeading

        teamMembers {
          employee1PillName employee1FullName employee1Roles employee1Bio employee1Photo { node { sourceUrl } }
          employee2PillName employee2FullName employee2Roles employee2Bio employee2Photo { node { sourceUrl } }
          employee3PillName employee3FullName employee3Roles employee3Bio employee3Photo { node { sourceUrl } }
          employee4PillName employee4FullName employee4Roles employee4Bio employee4Photo { node { sourceUrl } }
          employee5PillName employee5FullName employee5Roles employee5Bio employee5Photo { node { sourceUrl } }
          employee6PillName employee6FullName employee6Roles employee6Bio employee6Photo { node { sourceUrl } }
        }

        reviews

        pricing {
          pricingSubheading
          pricingParagraph
        }
      }
    }
  }
`;

export const Head = () => (
  <title>Pocket Creatives | Video Production & Photography</title>
);