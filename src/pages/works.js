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
  const category = acf.category || {};
  const marquee = acf.heroMarqueeItems || {};
  const videoGrid = acf.videoGridItems || {};
  const photoGrid = acf.photoGridItems || {};

  // Build hero marquee items array from ACF group
  const heroItems = [1, 2, 3, 4]
    .map((n) => ({
      media: marquee[`item${n}Media`]?.node?.mediaItemUrl,
      label: marquee[`item${n}Label`],
      tag: marquee[`item${n}Tag`],
    }))
    .filter((i) => i.media || i.label || i.tag);

  // Build video grid array from ACF group
  const videoItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    .map((n) => ({
      video: videoGrid[`item${n}Video`]?.node?.mediaItemUrl,
      label: videoGrid[`item${n}Label`],
    }))
    .filter((i) => i.video || i.label);

  // Build photo grid array from ACF group
  const photoItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    .map((n) => ({
      image: photoGrid[`item${n}Image`]?.node?.sourceUrl,
      label: photoGrid[`item${n}Label`],
    }))
    .filter((i) => i.image || i.label);

  return (
    <main className="w-full bg-pocketLightGrey">
      <Navbar activePage="Works" />
      <div style={{ minHeight: "calc(100vh - 72px)" }}>
        <WorksHero
          title={acf.heroTitle}
          categories={category}
          heroItems={heroItems}
        />
      </div>

      <WorksCategoryBlock
        title={category.title || acf.categoryTitle}
        paragraph={category.paragraph || acf.categoryParagraph}
      />

      <WorksBeautyVideography
        videoGridHeading={category.videoHeading || acf.videoGridHeading}
        videoItems={videoItems}
      />
      <WorksBeautyPhotography
        photoGridHeading={category.photoHeading || acf.photoGridHeading}
        photoItems={photoItems}
      />

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
        videoGridHeading
        photoGridHeading
        heroMarqueeItems {
          item1Media { node { mediaItemUrl } }
          item1Label
          item1Tag
          item2Media { node { mediaItemUrl } }
          item2Label
          item2Tag
          item3Media { node { mediaItemUrl } }
          item3Label
          item3Tag
          item4Media { node { mediaItemUrl } }
          item4Label
          item4Tag
        }
        category {
          title
          label
          paragraph
          videoHeading
          photoHeading
        }
        videoGridItems {
          item1Video { node { mediaItemUrl } }
          item1Label
          item2Video { node { mediaItemUrl } }
          item2Label
          item3Video { node { mediaItemUrl } }
          item3Label
          item4Video { node { mediaItemUrl } }
          item4Label
          item5Video { node { mediaItemUrl } }
          item5Label
          item6Video { node { mediaItemUrl } }
          item6Label
          item7Video { node { mediaItemUrl } }
          item7Label
          item8Video { node { mediaItemUrl } }
          item8Label
          item9Video { node { mediaItemUrl } }
          item9Label
          item10Video { node { mediaItemUrl } }
          item10Label
          item11Video { node { mediaItemUrl } }
          item11Label
          item12Video { node { mediaItemUrl } }
          item12Label
        }
        photoGridItems {
          item1Image { node { sourceUrl } }
          item1Label
          item2Image { node { sourceUrl } }
          item2Label
          item3Image { node { sourceUrl } }
          item3Label
          item4Image { node { sourceUrl } }
          item4Label
          item5Image { node { sourceUrl } }
          item5Label
          item6Image { node { sourceUrl } }
          item6Label
          item7Image { node { sourceUrl } }
          item7Label
          item8Image { node { sourceUrl } }
          item8Label
          item9Image { node { sourceUrl } }
          item9Label
          item10Image { node { sourceUrl } }
          item10Label
          item11Image { node { sourceUrl } }
          item11Label
          item12Image { node { sourceUrl } }
          item12Label
        }
      }
    }
  }
`;

export const Head = () => <title>Works | Pocket Creatives</title>;