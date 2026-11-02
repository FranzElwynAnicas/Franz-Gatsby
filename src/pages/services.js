import React from "react";

// Layout
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

// Services components
import ServicesCategoryBlock from "../components/services/ServicesCategoryBlock"; 
import ServicesProcess from "../components/services/ServicesProcess"; 
import ServicesCategoryBlock2 from "../components/services/ServicesCategoryBlock2"; 
import ServicesProcess2 from "../components/services/ServicesProcess2"; 
import ServicesCategoryBlock3 from "../components/services/ServicesCategoryBlock3"; 
import WhatWeCanOffer from "../components/services/ServicesWhatWeCanOffer"; 

export default function ServicesPage() {
  return (
    <>
      <Navbar activePage="Services" />
      <main className="m-0 p-0">
        <ServicesCategoryBlock 
          title="Aaaand Action: Video Production"
          bgColor="bg-[#FCBE17]"
          links={[
            { label: "Videography", to: "#category-video-production" },
            { label: "Photography", to: "#photography" },
          ]}
        />

        <ServicesProcess /> 
        <ServicesCategoryBlock2 
          links={[
            { label: "Video Production", to: "#category-video-production" }, 
            { label: "The Rest", to: "#the-rest" }, 
          ]}
        />

        <ServicesProcess2 />
        <ServicesCategoryBlock3 />
        <WhatWeCanOffer />
      </main>
      <Footer /> 
    </>
  );
}