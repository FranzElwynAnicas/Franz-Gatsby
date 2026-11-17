import React from "react";
import { graphql } from "gatsby";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import CoursesHero from "../components/courses/CoursesHero";
import CoursesHowItWorks from "../components/courses/CoursesHowItWorks";
import CoursesExamples from "../components/courses/CoursesExamples";
import CoursesBehindScenes from "../components/courses/CoursesBehindScenes";
import CoursesTestimonial from "../components/courses/CoursesTestimonial";

export default function CoursesPage({ data }) {
  const acf = data?.wpPage?.coursesPageContent || {};

  return (
    <>
      <Navbar activePage="Courses" />
      <main className="m-0 p-0 bg-[#F7F7F7]">
        <CoursesHero
          p1={acf.heroParagraph1}
          p2={acf.heroParagraph2}
          p3={acf.heroParagraph3}
          videoUrl={acf.heroVideo?.node?.mediaItemUrl}
        />

        <CoursesHowItWorks
          howTitle={acf.howTitle}
          howP1={acf.howParagraph1}
          howP2={acf.howParagraph2}
          howP3={acf.howParagraph3}
        />

        <CoursesExamples
          examples={{
            courseBox1: acf.courseBox1,
            courseBox2: acf.courseBox2,
            courseBox3: acf.courseBox3,
          }}
        />

        <CoursesBehindScenes
          behindHeading={acf.behindHeading}
          behindP1={acf.behindParagraph1}
          behindP2={acf.behindParagraph2}
          video1={acf.behindVideo1?.node?.mediaItemUrl}
          video2={acf.behindVideo2?.node?.mediaItemUrl}
          video3={acf.behindVideo3?.node?.mediaItemUrl}
          video4={acf.behindVideo4?.node?.mediaItemUrl}
        />

        <CoursesTestimonial
          quote={acf.testimonialQuote}
          name={acf.testimonialName}
          image={acf.testimonialImage?.node?.sourceUrl}
        />
      </main>
      <Footer />
    </>
  );
}

export const query = graphql`
  query CoursesPageQuery {
    wpPage(title: { eq: "Courses" }) {
      coursesPageContent {
        # Hero
        heroParagraph1
        heroParagraph2
        heroParagraph3
        heroVideo { node { mediaItemUrl } }

        # How It Works
        howTitle
        howParagraph1
        howParagraph2
        howParagraph3

        # Example Courses
        courseBox1 {
          title
          details
        }
        courseBox2 {
          title
          details
        }
        courseBox3 {
          title
          details
        }

        # Behind the Scenes
        behindHeading
        behindParagraph1
        behindParagraph2
        behindVideo1 { node { mediaItemUrl } }
        behindVideo2 { node { mediaItemUrl } }
        behindVideo3 { node { mediaItemUrl } }
        behindVideo4 { node { mediaItemUrl } }

        # Testimonial
        testimonialQuote
        testimonialName
        testimonialImage { node { sourceUrl } }
      }
    }
  }
`;

export const Head = () => <title>Creative Training Courses | Pocket Creatives</title>;