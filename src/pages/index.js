import * as React from "react";
import Navbar from "../components/Navbar";
import HeroIntro from "../components/HeroIntro";
import PartnersGrid from "../components/PartnersGrid";
import VideoWorkSection from "../components/VideoWorkSection";
import VideoCategories from "../components/VideoCategories";
import QualitySection from "../components/QualitySection";
import PhotographySection from "../components/PhotographySection";
import ServicesCheckSection from "../components/ServicesCheckSection";
import MeetTheTeam from "../components/MeetTheTeam";
import ReviewsSection from "../components/ReviewsSection";
import PricingSection from "../components/PricingSection";
import Footer from "../components/Footer";

const IndexPage = () => (
  <main className="w-full min-h-screen bg-pocketWhite">
    <Navbar />
    <HeroIntro />
    <PartnersGrid />
    <VideoWorkSection />
    <VideoCategories />
    <QualitySection />
    <PhotographySection />
    <ServicesCheckSection />
    <MeetTheTeam />
    <ReviewsSection />
    <PricingSection />
    <Footer />
  </main>
);

export default IndexPage;

export const Head = () => (
  <title>Pocket Creatives | Video Production & Photography</title>
);