import React from "react";
import Navbar from "../components/Navbar";
import ServicesCategoryBlock from "../components/ServicesCategoryBlock"; 
import ServicesProcess from "../components/ServicesProcess"; 
import ServicesCategoryBlock2 from "../components/ServicesCategoryBlock2"; 
import ServicesProcess2 from "../components/ServicesProcess2"; 
import ServicesCategoryBlock3 from "../components/ServicesCategoryBlock3"; 
import WhatWeCanOffer from "../components/ServicesWhatWeCanOffer"; 
import Footer from "../components/Footer"; 

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