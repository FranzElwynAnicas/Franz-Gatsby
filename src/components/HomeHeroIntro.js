import React, { useRef, useState } from "react";
import logo from "../images/logo-pocket-wordmark.png";
import photographer1 from "../images/photographer-1.png";
import photographer2 from "../images/photographer-2.png";

const HomeHeroIntro = () => {
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
    // Added overflow-hidden here to clip any accidental wide elements
    <section className="w-full bg-pocketWhite pt-6 pb-16 overflow-hidden">
      <div className="pocket-container w-full">
        
        {/* Logo + photographers row */}
        <div className="flex items-end self-center md:self-auto max-w-full">
          <img
            src={logo}
            alt="Pocket Creatives"
            className="h-12 md:h-20 lg:h-24 w-auto object-contain self-start max-w-full"
          />
          
          {/* Added max-w-full and justify-center to keep it contained */}
          <div className="flex items-end self-center md:self-auto max-w-full">
            <img
              src={photographer1}
              alt="Photographer"
              className="w-24 md:w-36 lg:w-40 h-auto object-cover"
            />
            <img
              src={photographer2}
              alt="Videographer"
              className="w-24 md:w-36 lg:w-40 h-auto object-cover -ml-2 md:-ml-4"
            />
          </div>
        </div>

        {/* Divider */}
        <div className="border-b border-pocketGrey my-5 md:my-6 w-full"></div>

        {/* Intro text - Forced exact line breaks on mobile */}
        <h1 className="text-[28px] md:text-[32px] lg:text-[42px] font-normal leading-[1.3] md:leading-[1.4] tracking-[-0.02em] w-full break-words">
          
          <span className="block md:inline">
            <span className="text-pocketBlack font-normal">A</span>{" "}
            <span className="text-pocketTeal font-bold">fast &amp; friendly</span>{" "}
            <span className="text-pocketBlack font-bold">Video</span>
          </span>

          <span className="block md:inline">
            <span className="text-pocketBlack font-bold">Production</span>{" "}
            <span className="text-pocketBlack font-normal">and</span>{" "}
            <span className="text-pocketBlack font-bold">Photography</span>
          </span>

          <span className="block md:inline">
            <span className="text-pocketBlack font-normal">company with</span>{" "}
            <span className="text-pocketBlack font-bold">bags of</span>
          </span>

          <span className="block md:inline">
            <span className="text-pocketBlack font-bold">experience</span>{" "}
            <span className="text-pocketBlack font-normal">and who</span>{" "}
            <span className="text-[#FF1E00]">❤️</span>{" "}
            <span className="text-pocketBlack font-normal">what</span>
          </span>

          <span className="block md:inline">
            <span className="text-pocketBlack font-normal">we do. :)</span>
          </span>

        </h1>

        <p className="mt-5 text-[13px] text-pocketGrey">
          *Tap Video to toggle sound
        </p>

        {/* Hero video */}
        <div className="mt-3 w-full aspect-[4/3] md:aspect-[16/9] relative overflow-hidden rounded-[4px] bg-pocketGrey/30">
          <video
            ref={videoRef}
            className="w-full h-full object-cover cursor-pointer"
            src="/videos/hero.mp4"
            loop
            playsInline
            onClick={togglePlay}
          />

          {!playing && (
            <button
              onClick={handlePlay}
              aria-label="Play video"
              className="absolute inset-0 flex items-center justify-center bg-black/10 hover:bg-black/20 transition-colors"
            >
              <div className="w-16 h-16 md:w-24 md:h-24 bg-pocketTeal rounded-full flex items-center justify-center hover:scale-105 transition-transform">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white" className="ml-1 md:w-8 md:h-8">
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

export default HomeHeroIntro;