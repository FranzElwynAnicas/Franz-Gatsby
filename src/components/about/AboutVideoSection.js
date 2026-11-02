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
      <div className="pocket-container flex flex-col items-center">
        
        {/* Typography Block */}
        <div className="w-full max-w-[1563px] mb-8 md:mb-12">
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
          <div 
            className="relative w-full cursor-pointer"
            style={{ aspectRatio: "1563 / 738" }}
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
          <p className="mt-2 text-[#526E87] font-inter font-medium text-[14px] md:text-[16px] leading-[200%] tracking-[-0.05em]">
            *Click on Video to toggle sound
          </p>
        </div>

      </div>
    </section>
  );
};

export default AboutVideoSection;