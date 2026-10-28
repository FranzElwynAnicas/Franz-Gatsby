import React from "react";
import logoV1 from "../images/v1.png";

const VideographyHelp = () => {
  return (
    <section className="w-full bg-[#F7F7F7] py-16 md:py-24 px-6 md:px-12 flex justify-center">
      <div className="w-full max-w-[1280px] min-[1440px]:max-w-[1440px] flex flex-col min-[1440px]:flex-row gap-12 md:gap-24 items-center min-[1440px]:justify-between">
        
        {/* Left Side: Text Content */}
        <div className="w-full flex-1 text-center min-[1440px]:text-left">
          <h2 
            // Text stays black until 1920px, where it turns blue/grey
            className="mb-6 flex flex-wrap justify-center min-[1440px]:justify-start items-center gap-x-2 text-black min-[1920px]:text-[#526E87]"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 500,
              fontSize: "clamp(28px, 3vw, 40px)",
              lineHeight: "114%",
              letterSpacing: "-0.05em",
            }}
          >
            <span>What exactly can</span>
            <span className="text-[#179CBD] font-bold">Pocket</span>
            <span className="text-[#FCBE17] font-bold">Creatives</span>
            <span className="relative inline-block">
              {/* Highlight background for "help me with?" */}
              <span className="absolute inset-x-0 bottom-1 h-[40%] bg-[#D6EAF1] -z-10"></span>
              <span className="relative z-10">help me with?</span>
            </span>
          </h2>

          <p 
            className="text-black min-[1920px]:text-[#526E87] mx-auto min-[1440px]:mx-0 max-w-[600px] min-[1440px]:max-w-none"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 500,
              fontSize: "clamp(16px, 1.5vw, 20px)",
              lineHeight: "114%",
              letterSpacing: "-0.05em",
            }}
          >
            The Pocket Creatives team are highly adept at providing professional video production services (and top quality finished videos) that can be used for promoting brands, for social media, hero videos for your website, crowdfunding campaign videos, event coverage, internal communications and for tv advertising. Our flexibility and experience also means that we can adapt our approach to meet any challenge or brief.
          </p>
        </div>

        {/* Right Side: Large Logo (Hidden on mobile, shows at 1440px) */}
        <div className="hidden min-[1440px]:flex w-auto justify-end items-center shrink-0">
          <img 
            src={logoV1} 
            alt="Pocket Creatives Logo" 
            className="w-[331px] h-[351px] object-contain"
          />
        </div>

      </div>
    </section>
  );
};

export default VideographyHelp;