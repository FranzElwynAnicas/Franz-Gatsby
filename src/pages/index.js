import * as React from "react";
import Navbar from "../components/Navbar";
import HomeHeroIntro from "../components/HomeHeroIntro";
import HomePartnersGrid from "../components/HomePartnersGrid";
import HomeVideoWork from "../components/HomeVideoWork";
import HomeVideoCategories from "../components/HomeVideoCategories";
import HomeQuality from "../components/HomeQuality";
import HomePhotography from "../components/HomePhotography";
import HomeServicesCheck from "../components/HomeServicesCheck";
import HomeMeetTheTeam from "../components/HomeMeetTheTeam";
import HomeReviews from "../components/HomeReviews";
import HomePricing from "../components/HomePricing";
import Footer from "../components/Footer";

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