import React, { useRef, useState } from "react";
import logo from "../images/logo-pocket-wordmark.png";
import photographer1 from "../images/photographer-1.png";
import photographer2 from "../images/photographer-2.png";

const HeroIntro = () => {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    if (!videoRef.current) return;
    videoRef.current.play();
    setPlaying(true);
  };

  const handlePause = () => {
    if (!videoRef.current) return;
    videoRef.current.pause();
    setPlaying(false);
  };

  const togglePlay = () => {
    if (playing) {
      handlePause();
    } else {
      handlePlay();
    }
  };

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

        {/* Hero video — user clicks to play */}
        <div className="mt-2 w-full aspect-[16/8] relative overflow-hidden rounded-md bg-pocketGrey/30">
          <video
            ref={videoRef}
            className="w-full h-full object-cover cursor-pointer"
            src="/videos/hero.mp4"
            loop
            playsInline
            onClick={togglePlay}
          />

          {/* Play button overlay — hides when playing */}
          {!playing && (
            <button
              onClick={handlePlay}
              aria-label="Play video"
              className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 bg-pocketTeal rounded-full flex items-center justify-center hover:scale-105 transition-transform">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="white" className="ml-1">
                  <polygon points="8,5 8,19 19,12" />
                </svg>
              </div>
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroIntro;