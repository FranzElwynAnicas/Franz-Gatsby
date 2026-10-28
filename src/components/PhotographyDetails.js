import React from "react";
import p9 from "../images/p9.png";
import p10 from "../images/p10.png";
import p11 from "../images/p11.png";

const PhotographyDetails = () => {
  return (
    <section className="bg-[#F7F7F7] py-10 md:py-16 flex justify-center overflow-hidden">
      {/* Reduced vertical gap between the blocks from gap-16 md:gap-24 to gap-12 md:gap-16 */}
      <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-12 2xl:px-8 flex flex-col gap-12 md:gap-16">
        
        {/* =========================================
            Block 1: How we work
        ========================================= */}
        {/* Reduced horizontal gap between image and text from gap-8 lg:gap-12 to gap-6 lg:gap-8 */}
        <div className="flex flex-col min-[1440px]:flex-row items-center w-full gap-6 lg:gap-8">
          
          {/* Image */}
          <div className="w-full min-[1440px]:w-1/2 min-[1920px]:w-[650px] shrink-0">
            <img 
              src={p9} 
              alt="How we work" 
              className="w-full h-auto object-cover rounded-md" 
            />
          </div>

          {/* Text */}
          <div className="w-full min-[1440px]:flex-1 flex flex-col justify-center">
            <h3 
              className="mb-3 text-black min-[1920px]:text-[#526E87]"
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 800,
                fontSize: "clamp(26px, 3vw, 40px)",
                lineHeight: "1.1",
                letterSpacing: "-0.05em",
              }}
            >
              How we work
            </h3>
            <div 
              className="space-y-2.5 text-black min-[1920px]:text-[#526E87]"
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 500,
                fontSize: "17px",
                lineHeight: "1.5",
                letterSpacing: "-0.02em",
              }}
            >
              <p>We try to make the consultation process for our photography services as simple as possible – understanding your requirements as quickly as possible.</p>
              <p>Quoting is relatively easy, as <span className="text-[#1EA4B9] font-bold">we charge based on time and resources</span> (rather than per-image).</p>
              <p>You can book our photography agency for as little as one hour – ideal when you need a handful of simple images, and are happy for us to work remotely.</p>
              <p>We also offer either half day or full day slots, with full pre-planning consultation. We can help with props, backdrops, locations and models where required. We have numerous shoot location options as well, including the possibility to come to you.</p>
              <p>We like to think we have a solution to satisfy most challenges!</p>
            </div>
          </div>

        </div>

        {/* =========================================
            Block 2: Technically speaking
        ========================================= */}
        <div className="flex flex-col min-[1440px]:flex-row items-center w-full gap-6 lg:gap-8">
          
          {/* Text */}
          <div className="w-full min-[1440px]:flex-1 flex flex-col justify-center order-2 min-[1440px]:order-1">
            <h3 
              className="mb-3 text-black min-[1920px]:text-[#526E87]"
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 800,
                fontSize: "clamp(26px, 3vw, 40px)",
                lineHeight: "1.1",
                letterSpacing: "-0.05em",
              }}
            >
              Technically speaking
            </h3>
            <div 
              className="space-y-2.5 text-black min-[1920px]:text-[#526E87]"
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 500,
                fontSize: "17px",
                lineHeight: "1.5",
                letterSpacing: "-0.02em",
              }}
            >
              <p>We shoot on high resolution Nikon cameras, capable of delivering sleek, ultra sharp images with tons of detail.</p>
              <p>Our lens options include Nikon's two workhorse focal length ranges (24-70mm and 70-200mm), and we support macro lenses for close-up work and ultra-wide, as well as 12mm, for dramatic wide angles.</p>
              <p>We use both studio lighting and portable battery-powered flash, which makes us a photography company able to shoot in all locations. Post-production is completed through Adobe Raw and Photoshop.</p>
            </div>
          </div>

          {/* Image */}
          <div className="w-full min-[1440px]:w-1/2 min-[1920px]:w-[872px] shrink-0 order-1 min-[1440px]:order-2">
            <img 
              src={p10} 
              alt="Technically speaking" 
              className="w-full h-auto object-cover rounded-md" 
            />
          </div>

        </div>

        {/* =========================================
            Block 3: The whole package
        ========================================= */}
        <div className="flex flex-col min-[1440px]:flex-row items-center w-full gap-6 lg:gap-8">
          
          {/* Image */}
          <div className="w-full min-[1440px]:w-1/2 min-[1920px]:w-[706px] shrink-0">
            <img 
              src={p11} 
              alt="The whole package" 
              className="w-full h-auto object-cover rounded-md" 
            />
          </div>

          {/* Text */}
          <div className="w-full min-[1440px]:flex-1 flex flex-col justify-center">
            <h3 
              className="mb-3 text-black min-[1920px]:text-[#526E87]"
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 800,
                fontSize: "clamp(26px, 3vw, 40px)",
                lineHeight: "1.1",
                letterSpacing: "-0.05em",
              }}
            >
              The whole package
            </h3>
            <div 
              className="space-y-2.5 text-black min-[1920px]:text-[#526E87]"
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 500,
                fontSize: "17px",
                lineHeight: "1.5",
                letterSpacing: "-0.02em",
              }}
            >
              <p>We try to make the consultation process for our photography services as simple as possible – understanding your requirements as quickly as possible.</p>
              <p>Quoting is relatively easy, as we charge based on time and resources (rather than per-image).</p>
              <p>You can book our photography agency for as little as one hour – ideal when you need a handful of simple images, and are happy for us to work remotely.</p>
              <p>We also offer either half day or full day slots, with full pre-planning consultation. We can help with props, backdrops, locations and models where required. We have numerous shoot location options as well, including the possibility to come to you.</p>
              <p><span className="text-[#1EA4B9] font-bold">We like to think we have a solution to satisfy most challenges!</span></p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default PhotographyDetails;