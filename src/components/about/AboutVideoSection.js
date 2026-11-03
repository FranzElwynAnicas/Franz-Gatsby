import * as React from "react";
import { useState, useRef } from "react";

const AboutVideoSection = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const handleVideoClick = () => {
    if (videoRef.current) {
      const newMutedState = !isMuted;
      videoRef.current.muted = newMutedState;
      setIsMuted(newMutedState);
    }
  };

  return (
    <section className="w-full bg-pocketWhite py-16 md:py-24">
      {/* On mobile, remove container padding so video goes edge-to-edge */}
      <div className="w-full md:pocket-container flex flex-col items-center">
        
        {/* Typography Block */}
        <div className="w-full max-w-[1563px] mb-8 md:mb-12 px-6 md:px-0">
          <h2 className="font-inter font-normal text-[24px] md:text-[32px] lg:text-[40px] leading-[120%] tracking-[-0.05em] text-black text-center md:text-left">
            Want to know a bit more about who we work with, and{" "}
            <span className="font-bold">
              what makes a ‘Pocket Person’?
            </span>{" "}
            Go behind the scenes to see how we work in action...
          </h2>
        </div>

        {/* Video Container */}
        <div className="w-full max-w-[1563px] flex flex-col items-start">
          
          {/* 
            Mobile: Give it a comfortable height (e.g., 65% of screen height) so it fills 
            the width without squishing the video into a tiny strip, but doesn't crop too aggressively.
            Desktop (lg): Switch back to your ultra-wide cinematic ratio.
          */}
          <div 
            className="relative w-full cursor-pointer h-[65vh] md:h-[50vh] lg:h-auto lg:aspect-[1563/738] bg-black"
            onClick={handleVideoClick}
          >
            <video
              ref={videoRef}
              src="/videos/clientfilm.mp4"
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted={isMuted}
              playsInline
            />
          </div>

          {/* Click to toggle sound text */}
          <p className="mt-2 text-[#526E87] font-inter font-medium text-[14px] md:text-[16px] leading-[200%] tracking-[-0.05em] px-6 md:px-0">
            *Click on Video to toggle sound
          </p>
        </div>

      </div>
    </section>
  );
};

export default AboutVideoSection;