import * as React from "react";
import Navbar from "../components/Navbar";
import WorksHero from "../components/WorksHero";
import WorksCategoryBlock from "../components/WorksCategoryBlock";
import Footer from "../components/Footer";
import WorksBeautyVideography from "../components/WorksBeautyVideography";
import WorksBeautyPhotography from "../components/WorksBeautyPhotography";

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