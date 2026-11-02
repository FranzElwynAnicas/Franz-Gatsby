import React from "react";

// Layout
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

// Courses components
import CoursesHero from "../components/courses/CoursesHero";
import CoursesHowItWorks from "../components/courses/CoursesHowItWorks";
import CoursesExamples from "../components/courses/CoursesExamples";
import CoursesBehindScenes from "../components/courses/CoursesBehindScenes";
import CoursesTestimonial from "../components/courses/CoursesTestimonial";

export default function CoursesPage() {
  return (
    <>
      <Navbar activePage="Courses" />
      <main className="m-0 p-0 bg-[#F7F7F7]">
        <CoursesHero />
        <CoursesHowItWorks />
        <CoursesExamples />
        <CoursesBehindScenes />
        <CoursesTestimonial />
      </main>
      <Footer />
    </>
  );
}

export const Head = () => <title>Creative Training Courses | Pocket Creatives</title>;