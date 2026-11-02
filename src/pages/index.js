import * as React from "react";

// Layout
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

// Home components
import HomeHeroIntro from "../components/home/HomeHeroIntro";
import HomePartnersGrid from "../components/home/HomePartnersGrid";
import HomeVideoWork from "../components/home/HomeVideoWork";
import HomeVideoCategories from "../components/home/HomeVideoCategories";
import HomeQuality from "../components/home/HomeQuality";
import HomePhotography from "../components/home/HomePhotography";
import HomeServicesCheck from "../components/home/HomeServicesCheck";
import HomeMeetTheTeam from "../components/home/HomeMeetTheTeam";
import HomeReviews from "../components/home/HomeReviews";
import HomePricing from "../components/home/HomePricing";

const Home = () => (
  <main className="w-full min-h-screen bg-pocketWhite">
    <Navbar activePage="Home" />
    <HomeHeroIntro />
    <HomePartnersGrid />
    <HomeVideoWork />
    <HomeVideoCategories />
    <HomeQuality />
    <HomePhotography />
    <HomeServicesCheck />
    <HomeMeetTheTeam />
    <HomeReviews />
    <HomePricing />
    <Footer />
  </main>
);

export default Home;

export const Head = () => (
  <title>Pocket Creatives | Video Production & Photography</title>
);