import React from "react";
import Navbar from "../components/Navbar";
import VideoTestimonialsHero from "../components/VideoTestimonialsHero";
import VideoTestimonialsMail from "../components/VideoTestimonialsMail";
import VideoTestimonialsContent from "../components/VideoTestimonialsContent";
import Footer from "../components/Footer";

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