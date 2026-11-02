import React from "react";

// Layout
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

// Video Testimonials components
import VideoTestimonialsHero from "../components/video-testimonials/VideoTestimonialsHero";
import VideoTestimonialsMail from "../components/video-testimonials/VideoTestimonialsMail";
import VideoTestimonialsContent from "../components/video-testimonials/VideoTestimonialsContent";

export default function VideoTestimonialsPage() {
  return (
    <>
      <Navbar activePage="Services" />
      <main className="m-0 p-0 flex flex-col bg-white">
        <VideoTestimonialsHero />
        <VideoTestimonialsMail />
        <VideoTestimonialsContent />
      </main>
      <Footer />
    </>
  );
}

export const Head = () => <title>Video Testimonials | Pocket Creatives</title>;