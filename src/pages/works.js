import * as React from "react";
import { graphql } from "gatsby";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import WorksHero from "../components/works/WorksHero";
import WorksCategoryBlock from "../components/works/WorksCategoryBlock";
import WorksBeautyVideography from "../components/works/WorksBeautyVideography";
import WorksBeautyPhotography from "../components/works/WorksBeautyPhotography";

const Works = ({ data }) => {
  const acf = data?.wpPage?.worksPageContent || {};

  return (
    <main className="w-full bg-pocketLightGrey">
      <Navbar activePage="Works" />
      <div style={{ minHeight: "calc(100vh - 72px)" }}>
        {/* Pass the category repeater to Hero */}
        <WorksHero title={acf.heroTitle} categories={acf.category} />
      </div>
      <WorksCategoryBlock 
        title={acf.categoryTitle} 
        paragraph={acf.categoryParagraph} 
      />
      <WorksBeautyVideography videoGridHeading={acf.videoGridHeading} />
      <WorksBeautyPhotography photoGridHeading={acf.photoGridHeading} />
      <Footer />
    </main>
  );
};

export default Works;

export const query = graphql`
  query WorksPageQuery {
    wpPage(title: { eq: "Works" }) {
      worksPageContent {
        heroTitle
        categoryTitle
        categoryParagraph
        category {
          label
        }
        videoGridHeading
        photoGridHeading
      }
    }
  }
`;

export const Head = () => <title>Works | Pocket Creatives</title>;