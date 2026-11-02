import * as React from "react";

// Layout
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

// Works components
import WorksHero from "../components/works/WorksHero";
import WorksCategoryBlock from "../components/works/WorksCategoryBlock";
import WorksBeautyVideography from "../components/works/WorksBeautyVideography";
import WorksBeautyPhotography from "../components/works/WorksBeautyPhotography";

const Works = () => (
  <main className="w-full bg-pocketLightGrey">
    <Navbar activePage="Works" />
    <div style={{ minHeight: "calc(100vh - 72px)" }}>
      <WorksHero title="BEAUTY" />
    </div>
    <WorksCategoryBlock title="Beauty" />
    <WorksBeautyVideography />
    <WorksBeautyPhotography />
    <Footer />
  </main>
);

export default Works;

export const Head = () => <title>Works | Pocket Creatives</title>;