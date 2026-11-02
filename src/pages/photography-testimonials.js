import React from "react";

// Layout
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

// Photography Testimonials components
import PhotographyTestimonialsHero from "../components/photography-testimonials/PhotographyTestimonialsHero";
import PhotographyTestimonialsMail from "../components/photography-testimonials/PhotographyTestimonialsMail";
import PhotographyTestimonialsContent from "../components/photography-testimonials/PhotographyTestimonialsContent";

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