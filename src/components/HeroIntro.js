import React from "react";
import logo from "../images/logo-pocket-wordmark.png";
import photographer1 from "../images/photographer-1.png";
import photographer2 from "../images/photographer-2.png";
import heroVideo from "../images/product-pink.png";

const HeroIntro = () => {
  return (
    <section className="w-full bg-pocketWhite pt-6 pb-16">
      <div className="pocket-container">
        {/* Logo + photographers row */}
        <div className="flex items-end justify-between gap-6">
          <img
            src={logo}
            alt="Pocket Creatives"
            className="h-16 md:h-20 lg:h-24 w-auto object-contain"
          />
          <div className="flex items-end">
            <img
              src={photographer1}
              alt="Photographer"
              className="w-28 md:w-36 lg:w-40 h-auto object-cover"
            />
            <img
              src={photographer2}
              alt="Videographer"
              className="w-28 md:w-36 lg:w-40 h-auto object-cover -ml-3 md:-ml-4"
            />
          </div>
        </div>

        {/* Divider */}
        <div className="border-b border-pocketGrey my-6"></div>

        {/* Intro text */}
        <h1 className="text-[26px] md:text-[32px] lg:text-[42px] font-normal leading-[1.4] tracking-[-0.03em] text-pocketGrey">
          <span className="whitespace-nowrap">
            We're a{" "}
            <span className="text-pocketYellow font-bold">fast</span>{" "}
            <span>&amp;</span>{" "}
            <span className="text-pocketYellow font-bold">friendly</span>{" "}
            <span className="text-pocketTeal font-bold">Video Production</span>{" "}
            <span>and</span>{" "}
            <span className="text-pocketTeal font-bold">Photography</span>{" "}
            <span>company</span>
          </span>
          <br />
          <span>with</span>{" "}
          <span className="text-pocketYellow font-bold">bags of experience</span>{" "}
          <span>&amp; who</span>{" "}
          <span className="text-[#FF1E00]">❤️</span>{" "}
          <span>what we do :)</span>
        </h1>

        <p className="mt-6 text-xs text-pocketGrey">
          *Click on Video to toggle sound
        </p>

        {/* Hero video */}
        <div className="mt-2 w-full aspect-[16/8] relative overflow-hidden">
          <img
            src={heroVideo}
            alt="Showreel"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              aria-label="Play video"
              className="w-20 h-20 bg-pocketTeal/80 hover:bg-pocketTeal rounded-full flex items-center justify-center transition-colors"
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
                <polygon points="8,5 8,19 19,12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroIntro;