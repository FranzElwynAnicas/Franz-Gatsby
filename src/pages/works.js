import * as React from "react";
import Navbar from "../components/Navbar";
import WorksHero from "../components/WorksHero";
import WorksCategoryBlock from "../components/WorksCategoryBlock";
import Footer from "../components/Footer";
import BeautyVideography from "../components/BeautyVideography";
import BeautyPhotography from "../components/BeautyPhotography";

const WorksPage = () => (
  <main className="w-full bg-pocketLightGrey">
    <Navbar activePage="Works" />
    <div style={{ minHeight: "calc(100vh - 72px)" }}>
      <WorksHero title="BEAUTY" />
    </div>
    <WorksCategoryBlock title="Beauty" />
    <BeautyVideography />
    <BeautyPhotography />
    <Footer />
  </main>
);

export default WorksPage;

export const Head = () => <title>Works | Pocket Creatives</title>;