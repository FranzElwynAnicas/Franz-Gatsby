import React from "react";
import Navbar from "../components/Navbar";
import PhotographyTestimonialsHero from "../components/PhotographyTestimonialsHero";
import PhotographyTestimonialsMail from "../components/PhotographyTestimonialsMail";
import PhotographyTestimonialsContent from "../components/PhotographyTestimonialsContent";
import Footer from "../components/Footer";

export default function PhotographyTestimonialsPage() {
  return (
    <>
      <Navbar activePage="Services" />
      <main className="m-0 p-0 flex flex-col bg-white">
        <PhotographyTestimonialsHero />
        <PhotographyTestimonialsMail />
        <PhotographyTestimonialsContent />
      </main>
      <Footer />
    </>
  );
}

export const Head = () => <title>Photography Testimonials | Pocket Creatives</title>;

