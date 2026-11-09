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
  // Safely extract the ACF fields from WordPress
  const acf = data?.wpPage?.homePageContent || {};

  return (
    <main className="w-full min-h-screen bg-pocketWhite">
      <Navbar activePage="Home" />
      
      <HomeHeroIntro heroTitle={acf.heroTitle} />
      
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
        e1Pill={acf.employee1PillName} e1Name={acf.employee1FullName} e1Roles={acf.employee1Roles} e1Bio={acf.employee1Bio} e1Photo={acf.employee1Photo?.node?.sourceUrl}
        e2Pill={acf.employee2PillName} e2Name={acf.employee2FullName} e2Roles={acf.employee2Roles} e2Bio={acf.employee2Bio} e2Photo={acf.employee2Photo?.node?.sourceUrl}
        e3Pill={acf.employee3PillName} e3Name={acf.employee3FullName} e3Roles={acf.employee3Roles} e3Bio={acf.employee3Bio} e3Photo={acf.employee3Photo?.node?.sourceUrl}
        e4Pill={acf.employee4PillName} e4Name={acf.employee4FullName} e4Roles={acf.employee4Roles} e4Bio={acf.employee4Bio} e4Photo={acf.employee4Photo?.node?.sourceUrl}
        e5Pill={acf.employee5PillName} e5Name={acf.employee5FullName} e5Roles={acf.employee5Roles} e5Bio={acf.employee5Bio} e5Photo={acf.employee5Photo?.node?.sourceUrl}
        e6Pill={acf.employee6PillName} e6Name={acf.employee6FullName} e6Roles={acf.employee6Roles} e6Bio={acf.employee6Bio} e6Photo={acf.employee6Photo?.node?.sourceUrl}
      />
      
      <HomeReviews reviewsData={acf.reviews} />

      <HomePricing 
        pricingSubheading={acf.pricingSubheading}
        pricingParagraph={acf.pricingParagraph}
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
        
        employee1PillName employee1FullName employee1Roles employee1Bio employee1Photo { node { sourceUrl } }
        employee2PillName employee2FullName employee2Roles employee2Bio employee2Photo { node { sourceUrl } }
        employee3PillName employee3FullName employee3Roles employee3Bio employee3Photo { node { sourceUrl } }
        employee4PillName employee4FullName employee4Roles employee4Bio employee4Photo { node { sourceUrl } }
        employee5PillName employee5FullName employee5Roles employee5Bio employee5Photo { node { sourceUrl } }
        employee6PillName employee6FullName employee6Roles employee6Bio employee6Photo { node { sourceUrl } }

        reviews
        pricingSubheading
        pricingParagraph
      }
    }
  }
`;

export const Head = () => (
  <title>Pocket Creatives | Video Production & Photography</title>
);