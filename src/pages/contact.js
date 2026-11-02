import React from "react";

// Layout
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

// Contact components
import ContactHero from "../components/contact/ContactHero";
import ContactLocation from "../components/contact/ContactLocation";
import ContactPartners from "../components/contact/ContactPartners"; 

export default function ContactPage() {
  return (
    <>
      <Navbar activePage="Contact" />
      <main className="m-0 p-0 flex flex-col bg-white">
        <ContactHero />
        <ContactLocation />
        <ContactPartners /> 
      </main>
      <Footer />
    </>
  );
}