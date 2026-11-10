// src/pages/about.js

import * as React from "react";
import { useState } from "react";
import { graphql } from "gatsby";

// Layout
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ContactModal from "../components/layout/ContactModal";

// About components
import AboutHero from "../components/about/AboutHero";
import AboutIntro from "../components/about/AboutIntro";
import AboutServices from "../components/about/AboutServices";
import AboutWorks from "../components/about/AboutWorks";
import AboutWhyWorkWithUs from "../components/about/AboutWhyWorkWithUs";
import AboutVideoSection from "../components/about/AboutVideoSection";
import AboutWhoWeWorkWith from "../components/about/AboutWhoWeWorkWith"; 
import AboutOurStory from "../components/about/AboutOurStory";

const AboutPage = ({ data }) => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const acf = data?.wpPage?.aboutPageContent || {};

  return (
    <main className="w-full bg-pocketWhite">
      <Navbar activePage="About" onContactClick={() => setIsContactOpen(true)} />

      <AboutHero
        heroHeadingText={acf.heroHeading}
        heroColorWord1={acf.heroWord1}
        heroColorWord2={acf.heroWord2}
        heroVideoUrl={acf.heroVideoUrl}
        heroBodyCopy={acf.heroBodyCopy}
        heroCtaLabel={acf.heroCtaLabel}
      />

      <AboutIntro
        introHeading={acf.introHeading}
        introParagraph={acf.introParagraph}
        introImage={acf.introImage?.node?.sourceUrl}
        introBadgeText={acf.introBadgeText}
      />

      <AboutServices
        videoHeading={acf.servicesVideoHeading}
        videoBody={acf.servicesVideoBody}
        videoImage={acf.servicesVideoImage?.node?.sourceUrl}
        photoHeading={acf.servicesPhotoHeading}
        photoBody={acf.servicesPhotoBody}
        photoImage={acf.servicesPhotoImage?.node?.sourceUrl}
      />

      <AboutWorks worksHeading={acf.worksHeading} />

      <AboutWhyWorkWithUs
        whyHeading={acf.whyHeading}
        whyIntroParagraph={acf.whyIntroParagraph}
        item1Title={acf.item1Title}
        item1Desc={acf.item1Desc}
        item2Title={acf.item2Title}
        item2Desc={acf.item2Desc}
        item3Title={acf.item3Title}
        item3Desc={acf.item3Desc}
        item4Title={acf.item4Title}
        item4Desc={acf.item4Desc}
        item5Title={acf.item5Title}
        item5Desc={acf.item5Desc}
      />

      <AboutVideoSection
        videoSectionHeading={acf.videoSectionHeading}
        videoSectionVideoUrl={acf.videoSectionVideoUrl}
      />

      <AboutWhoWeWorkWith
        whoHeading={acf.whoHeading}
        whoParagraph1={acf.whoParagraph1}
        whoParagraph2={acf.whoParagraph2}
        whoParagraph3={acf.whoParagraph3}
        whoRotatingNames={acf.whoRotatingNames}
        whoTestimonialsUrl={acf.whoTestimonialsUrl}
        whoTestimonialsCta={acf.whoTestimonialsCta}
      />

      <AboutOurStory
        storyHeading={acf.storyHeading}
        storyIntro={acf.storyIntro}
      />

      <Footer />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </main>
  );
};

export default AboutPage;

export const query = graphql`
  query AboutPageQuery {
    wpPage(title: { eq: "About" }) {
      aboutPageContent {
        # Hero
        heroHeading
        heroWord1
        heroWord2
        heroVideoUrl
        heroBodyCopy
        heroCtaLabel

        # Intro
        introHeading
        introParagraph
        introImage { node { sourceUrl } }
        introBadgeText

        # Services
        servicesVideoHeading
        servicesVideoBody
        servicesVideoImage { node { sourceUrl } }
        servicesPhotoHeading
        servicesPhotoBody
        servicesPhotoImage { node { sourceUrl } }

        # Works
        worksHeading

        # Why Work With Us
        whyHeading
        whyIntroParagraph
        item1Title
        item1Desc
        item2Title
        item2Desc
        item3Title
        item3Desc
        item4Title
        item4Desc
        item5Title
        item5Desc

        # Video Section
        videoSectionHeading
        videoSectionVideoUrl

        # Who We Work With
        whoHeading
        whoParagraph1
        whoParagraph2
        whoParagraph3
        whoRotatingNames
        whoTestimonialsUrl
        whoTestimonialsCta

        # Our Story
        storyHeading
        storyIntro
      }
    }
  }
`;

export const Head = () => <title>About | Pocket Creatives</title>;