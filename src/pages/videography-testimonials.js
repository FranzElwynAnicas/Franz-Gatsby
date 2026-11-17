import React from "react";
import { graphql } from "gatsby";

// Layout
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

// Video Testimonials components
import VideoTestimonialsHero from "../components/video-testimonials/VideoTestimonialsHero";
import VideoTestimonialsMail from "../components/video-testimonials/VideoTestimonialsMail";
import VideoTestimonialsContent from "../components/video-testimonials/VideoTestimonialsContent";

export default function VideoTestimonialsPage({ data }) {
  const acf = data?.wpPage?.videoTestimonialsPageContent || {};
  const testimonials = acf.testimonials || {};
  const contentCards = acf.contentCards || {};

  return (
    <>
      <Navbar activePage="Services" />
      <main className="m-0 p-0 flex flex-col bg-white">
        <VideoTestimonialsHero
          heroTitle={acf.heroTitle}
          heroDescription1={acf.heroDescription1}
          heroDescription2={acf.heroDescription2}
          testimonials={{
            card1Name: testimonials.card1Name,
            card1Text: testimonials.card1Text,
            card1Logo: testimonials.card1Logo?.node?.sourceUrl,
            card2Name: testimonials.card2Name,
            card2Text: testimonials.card2Text,
            card2Logo: testimonials.card2Logo?.node?.sourceUrl,
            card3Name: testimonials.card3Name,
            card3Text: testimonials.card3Text,
            card3Logo: testimonials.card3Logo?.node?.sourceUrl,
          }}
        />
        <VideoTestimonialsMail
          mailHeading={acf.mailHeading}
          mailParagraph={acf.mailParagraph}
          nameLabel={acf.nameLabel}
          emailLabel={acf.emailLabel}
          phoneLabel={acf.phoneLabel}
          messageLabel={acf.messageLabel}
          submitButtonText={acf.submitButtonText}
        />
        <VideoTestimonialsContent
          contentTitle={acf.contentTitle}
          contentImage={acf.contentImage?.node?.sourceUrl}
          contentCards={contentCards}
        />
      </main>
      <Footer />
    </>
  );
}

export const query = graphql`
  query VideoTestimonialsPageQuery {
    wpPage(title: { eq: "Video Testimonials" }) {
      videoTestimonialsPageContent {
        heroTitle
        heroDescription1
        heroDescription2
        testimonials {
          card1Text
          card1Name
          card1Logo { node { sourceUrl } }
          card2Text
          card2Name
          card2Logo { node { sourceUrl } }
          card3Text
          card3Name
          card3Logo { node { sourceUrl } }
        }
        mailHeading
        mailParagraph
        nameLabel
        emailLabel
        phoneLabel
        messageLabel
        submitButtonText
        contentTitle
        contentImage { node { sourceUrl } }
        contentCards {
          card1Heading
          card1Paragraph1
          card1Paragraph2
          card2Heading
          card2Paragraph1
          card2Paragraph2
        }
      }
    }
  }
`;

export const Head = () => <title>Video Testimonials | Pocket Creatives</title>;