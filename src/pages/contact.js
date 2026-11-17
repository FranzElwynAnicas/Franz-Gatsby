import React from "react";
import { graphql } from "gatsby";

// Layout
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

// Contact components
import ContactHero from "../components/contact/ContactHero";
import ContactLocation from "../components/contact/ContactLocation";
import ContactPartners from "../components/contact/ContactPartners";

export default function ContactPage({ data }) {
  const acf = data?.wpPage?.contactPageContent || {};

  return (
    <>
      <Navbar activePage="Contact" />
      <main className="m-0 p-0 flex flex-col bg-white">
        <ContactHero
          heading={acf.heroHeading}
          text1={acf.heroText1}
          text2={acf.heroText2}
          text3={acf.heroText3}
        />
        <ContactLocation
          phone={acf.phoneNumber}
          address={acf.address}
          email={acf.emailAddress}
          mapImage={acf.mapImage?.node?.sourceUrl}
        />
        <ContactPartners
          vTitle={acf.vacancyTitle}
          vText={acf.vacancyText}
          vEmail={acf.vacancyEmail}
          vImage={acf.vacancyImage?.node?.sourceUrl}
          pTitle={acf.partnersTitle}
          pText={acf.partnersText}
          pEmail={acf.partnersEmail}
          pImage={acf.partnersImage?.node?.sourceUrl}
        />
      </main>
      <Footer />
    </>
  );
}

export const query = graphql`
  query ContactPageQuery {
    wpPage(title: { eq: "Contact" }) {
      contactPageContent {
        # Hero
        heroHeading
        heroText1
        heroText2
        heroText3

        # Location
        phoneNumber
        address
        emailAddress
        mapImage { node { sourceUrl } }

        # Vacancies
        vacancyTitle
        vacancyText
        vacancyEmail
        vacancyImage { node { sourceUrl } }

        # Partners
        partnersTitle
        partnersText
        partnersEmail
        partnersImage { node { sourceUrl } }
      }
    }
  }
`;

export const Head = () => <title>Contact | Pocket Creatives</title>;