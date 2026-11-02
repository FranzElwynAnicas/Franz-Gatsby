import React, { useRef, useState } from "react";
import { Link } from "gatsby";

const PhotographyHero = () => {
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
    <section className="w-full bg-[#179CBD] pt-28 md:pt-32 pb-16 md:pb-24 px-6 md:px-12 flex justify-center overflow-hidden">
      <div className="w-full max-w-[1280px]">
        
        {/* Main Heading */}
        <div className="mb-6 md:mb-8">
          <h1 
            className="text-white mb-1 md:mb-2"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(42px, 8vw, 80px)", // Adjusted for mobile
              lineHeight: "1.05",
              letterSpacing: "-0.05em"
            }}
          >
            Photography<br className="block md:hidden" /> Services
          </h1>
          <p 
            className="text-white text-[15px] md:text-[20px] lg:text-[28px]"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
              letterSpacing: "-0.02em"
            }}
          >
            available from <span className="font-extrabold">POCKET CREATIVES</span>
          </p>
        </div>

        {/* Video Banner - Removed fixed heights on mobile so it respects the natural 384x231 ratio */}
        <div className="relative w-full h-auto md:aspect-video md:h-[500px] overflow-hidden mb-2 md:mb-3 bg-black/10">
          <video
            ref={videoRef}
            className="w-full h-auto md:h-full object-cover cursor-pointer"
            src="/videos/pv1.mp4" 
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
              <div className="w-14 h-14 md:w-24 md:h-24 bg-[#179CBD] rounded-full flex items-center justify-center hover:scale-105 transition-transform shadow-lg">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white" className="ml-1 w-6 h-6 md:w-8 md:h-8">
                  <polygon points="8,5 8,19 19,12" />
                </svg>
              </div>
            </button>
          )}
        </div>
        
        {/* Video Instruction Text */}
        <p 
          className="text-white text-[11px] md:text-[13px] mb-8 md:mb-12 opacity-90"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          *Click on Video to toggle sound
        </p>

        {/* Two Column Text Area */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-20 items-start">
          
          {/* Left Side Text */}
          <div className="w-full">
            <h2 
              className="text-white text-[22px] md:text-[28px] lg:text-[32px]"
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 800,
                lineHeight: "1.25",
                letterSpacing: "-0.02em"
              }}
            >
              If you're looking for expert photography services, you've come to{" "}
              <span className="bg-[#FCBE17] text-black px-1.5 py-0.5 inline-block">
                the right place.
              </span>
            </h2>
          </div>
          
          {/* Right Side Text & Button */}
          <div className="flex flex-col items-center lg:items-start justify-between w-full mt-2 lg:mt-0">
            <p 
              className="text-white text-[15px] md:text-[16px] lg:text-[18px] mb-8 text-center lg:text-left max-w-[450px]"
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 500,
                lineHeight: "1.45",
                letterSpacing: "-0.02em"
              }}
            >
              We put quality and creativity at the heart of what we do, and can work with you to edit, model, make-up artists and more to complete the picture. <br /><br />
              It really is the full package.
            </p>
            
            <Link 
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#FCBE17] text-black font-extrabold text-[16px] px-8 py-3.5 rounded-xl hover:bg-yellow-500 transition-colors w-auto"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 6L12 13L2 6" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Have questions?
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
};

export default PhotographyHero;