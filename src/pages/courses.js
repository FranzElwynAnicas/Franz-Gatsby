import React from "react";
import Navbar from "../components/Navbar";
import CoursesHero from "../components/CoursesHero";
import Footer from "../components/Footer";
import CoursesHowItWorks from "../components/CoursesHowItWorks";
import CoursesExamples from "../components/CoursesExamples";
import CoursesBehindScenes from "../components/CoursesBehindScenes";
import CoursesTestimonial from "../components/CoursesTestimonial";

export default function CoursesPage() {
  return (
    <>
      <Navbar activePage="Courses" />
      <main className="m-0 p-0 bg-[#F7F7F7]">
        <CoursesHero />
        <CoursesHowItWorks/>
        <CoursesExamples />
        <CoursesBehindScenes />
        <CoursesTestimonial />
      </main>
      <Footer />
    </>
  );
}

export const Head = () => <title>Creative Training Courses | Pocket Creatives</title>;