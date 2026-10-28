import React, { useRef, useState } from "react";
import { Link } from "gatsby";

const VideographyHero = () => {
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
    <section className="w-full bg-[#FCBE17] pt-28 md:pt-36 pb-16 md:pb-24 px-6 md:px-12 flex justify-center overflow-hidden">
      <div className="w-full max-w-[1440px]">
        
        {/* Main Heading */}
        <div className="mb-4 md:mb-8 text-left">
          <h1 
            className="text-black mb-2 md:mb-4"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 700, // Changed to Bold as per specs
              fontSize: "clamp(42px, 8vw, 120px)", // Exact 120px on desktop
              lineHeight: "100%",
              letterSpacing: "-0.05em"
            }}
          >
            Video Production Services
          </h1>
          <p 
            className="text-black"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 700, // Changed to Bold as per specs
              fontSize: "clamp(20px, 3vw, 40px)", // Exact 40px on desktop
              lineHeight: "100%",
              letterSpacing: "-0.05em"
            }}
          >
            by POCKET CREATIVES
          </p>
        </div>

        {/* Video Banner - Exact 1411x495 on desktop */}
        <div className="relative w-full aspect-[4/3] md:aspect-video md:h-[495px] overflow-hidden mb-2 bg-black/10">
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
              <div className="w-16 h-16 md:w-20 md:h-20 bg-[#FCBE17] rounded-full flex items-center justify-center hover:scale-105 transition-transform shadow-md">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="black" className="ml-1 md:w-7 md:h-7">
                  <polygon points="8,5 8,19 19,12" />
                </svg>
              </div>
            </button>
          )}
        </div>
        
        {/* Video Instruction Text */}
        <p 
          className="text-black mb-8 md:mb-10 font-medium text-left"
          style={{ 
            fontFamily: "Inter, sans-serif",
            fontWeight: 500,
            fontSize: "clamp(12px, 1.5vw, 16px)", // Exact 16px on desktop
            lineHeight: "200%",
            letterSpacing: "-0.05em"
          }}
        >
          *Click on Video to toggle sound
        </p>

        {/* Two Column Text Area */}
        <div className="flex flex-col md:grid md:grid-cols-[1.4fr_1fr] gap-8 md:gap-16 items-start">
          
          {/* Left Side Text */}
          <div className="w-full text-left flex flex-col gap-4">
            <h2 
              className="text-black"
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 700,
                fontSize: "clamp(24px, 3vw, 40px)", // Exact 40px on desktop
                lineHeight: "100%",
                letterSpacing: "-0.05em"
              }}
            >
              Our professional video production and videography services are easy to commission...
            </h2>
            <p 
              className="text-black"
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 500,
                fontSize: "clamp(16px, 1.5vw, 20px)", // Exact 20px on desktop
                lineHeight: "100%",
                letterSpacing: "-0.05em"
              }}
            >
              whether you're a seasoned pro or if you're producing video for the first time.
            </p>
          </div>
          
          {/* Right Side Text & Button */}
          <div className="flex flex-col items-center md:items-end justify-between h-full w-full text-center md:text-right mt-6 md:mt-0">
            <p 
              className="text-black mb-6 max-w-[320px]"
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 500,
                fontSize: "clamp(16px, 1.5vw, 20px)",
                lineHeight: "120%",
                letterSpacing: "-0.02em"
              }}
            >
              We take the time to understand your requirements: how your video will be used and what it needs to achieve.
            </p>
            
            <Link 
              to="/contact"
              className="inline-flex items-center justify-center gap-3 bg-[#1EA4B9] text-white font-medium text-[18px] md:text-[20px] px-8 py-4 rounded-full hover:bg-[#179CBD] transition-colors shadow-sm w-auto"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 6L12 13L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Have questions?
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
};

export default VideographyHero;