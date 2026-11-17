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

  // ---- Services (grouped) ----
  const videoService = acf.videoservice || {};
  const photoService = acf.photoService || {};

  // ---- Why Items (grouped) ----
  const whyItems = acf.whyItems || {};

  // ---- Who Paragraphs (grouped) ----
  const whoParagraphs = acf.whoparagraphs || {};

  // ---- Works Slides (grouped) → build an array for AboutWorks ----
  const worksSlidesGroup = acf.worksSlides || {};
  const worksSlides = [1, 2, 3, 4]
    .map((n) => ({
      tag: worksSlidesGroup[`slide${n}Tag`],
      subtitle: worksSlidesGroup[`slide${n}Subtitle`],
      description: worksSlidesGroup[`slide${n}Description`],
      mediaUrl: worksSlidesGroup[`slide${n}Media`]?.node?.mediaItemUrl,
    }))
    .filter((s) => s.tag || s.subtitle || s.description || s.mediaUrl);

  return (
    <main className="w-full bg-pocketWhite">
      <Navbar activePage="About" onContactClick={() => setIsContactOpen(true)} />

      <AboutHero
        heroHeadingText={acf.heroHeading}
        heroColorWord1={acf.heroWord1}
        heroColorWord2={acf.heroWord2}
        heroVideoUrl={acf.heroVideo?.node?.mediaItemUrl}
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
        videoHeading={videoService.servicesVideoHeading}
        videoBody={videoService.servicesVideoBody}
        videoImage={videoService.servicesVideoImage?.node?.sourceUrl}
        photoHeading={photoService.servicesPhotoHeading}
        photoBody={photoService.servicesPhotoBody}
        photoImage={photoService.servicesPhotoImage?.node?.sourceUrl}
      />

      <AboutWorks
        worksHeading={acf.worksHeading}
        slides={worksSlides}
      />

      <AboutWhyWorkWithUs
        whyHeading={acf.whyHeading}
        whyIntroParagraph={acf.whyIntroParagraph}
        item1Title={whyItems.item1Title}
        item1Desc={whyItems.item1Desc}
        item2Title={whyItems.item2Title}
        item2Desc={whyItems.item2Desc}
        item3Title={whyItems.item3Title}
        item3Desc={whyItems.item3Desc}
        item4Title={whyItems.item4Title}
        item4Desc={whyItems.item4Desc}
        item5Title={whyItems.item5Title}
        item5Desc={whyItems.item5Desc}
      />

      <AboutVideoSection
        videoSectionHeading={acf.videoSectionHeading}
        videoSectionVideoUrl={acf.videoSectionVideo?.node?.mediaItemUrl}
      />

      <AboutWhoWeWorkWith
        whoHeading={acf.whoHeading}
        whoParagraph1={whoParagraphs.whoParagraph1}
        whoParagraph2={whoParagraphs.whoParagraph2}
        whoParagraph3Prefix={whoParagraphs.whoParagraph3Prefix}
        whoParagraph3Suffix={whoParagraphs.whoParagraph3Suffix}
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
        heroVideo { node { mediaItemUrl } }
        heroBodyCopy
        heroCtaLabel

        # Intro
        introHeading
        introParagraph
        introImage { node { sourceUrl } }
        introBadgeText

        # Services (grouped)
        videoservice {
          servicesVideoHeading
          servicesVideoBody
          servicesVideoImage { node { sourceUrl } }
        }
        photoService {
          servicesPhotoHeading
          servicesPhotoBody
          servicesPhotoImage { node { sourceUrl } }
        }

        # Works (grouped slides)
        worksHeading
        worksSlides {
          slide1Tag
          slide1Subtitle
          slide1Description
          slide1Media { node { mediaItemUrl } }
          slide2Tag
          slide2Subtitle
          slide2Description
          slide2Media { node { mediaItemUrl } }
          slide3Tag
          slide3Subtitle
          slide3Description
          slide3Media { node { mediaItemUrl } }
          slide4Tag
          slide4Subtitle
          slide4Description
          slide4Media { node { mediaItemUrl } }
        }

        # Why Work With Us (grouped items)
        whyHeading
        whyIntroParagraph
        whyItems {
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
        }

        # Video Section
        videoSectionHeading
        videoSectionVideo { node { mediaItemUrl } }

        # Who We Work With (grouped paragraphs)
        whoHeading
        whoRotatingNames
        whoTestimonialsUrl
        whoTestimonialsCta
        whoparagraphs {
          whoParagraph1
          whoParagraph2
          whoParagraph3Prefix
          whoParagraph3Suffix
        }

        # Our Story
        storyHeading
        storyIntro
      }
    }
  }
`;

export const Head = () => <title>About | Pocket Creatives</title>;