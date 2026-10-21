import React from "react";
import Navbar from "../components/Navbar";
import ContactHero from "../components/ContactHero";
import ContactLocation from "../components/ContactLocation";
import ContactPartners from "../components/ContactPartners"; // <-- Added
import Footer from "../components/Footer";

export default function ContactPage() {
  return (
    <>
      <Navbar activePage="Contact" />
      <main className="m-0 p-0 flex flex-col bg-white">
        <ContactHero />
        <ContactLocation />
        <ContactPartners /> {/* <-- Added */}
      </main>
      <Footer />
    </>
  );
}