import React from "react";
import camera from "../images/camera.png";
import p11 from "../images/p11.png"; // Assuming the 3rd image is p11.png

const VideographyDetails = () => {
  return (
    <section className="bg-[#F7F7F7] py-10 md:py-16 flex justify-center overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-12 2xl:px-8 flex flex-col gap-12 md:gap-16">
        
        {/* =========================================
            Block 1: How we work
        ========================================= */}
        <div className="flex flex-col min-[1440px]:flex-row items-center w-full gap-6 lg:gap-8">
          
          {/* Image */}
          <div className="w-full min-[1440px]:w-1/2 min-[1920px]:w-[650px] shrink-0">
            <img 
              src={camera} 
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
              <p>We aim to simplify the video production commissioning process as much as possible.</p>
              <p>At the start of your project we'll sit down with you to thoroughly discuss your brief, to understand your vision and goals for the project, and to nail down the <span className="text-[#1EA4B9] font-bold">video production services</span> and other support you'll need from our <span className="text-[#1EA4B9] font-bold">videography company</span>. We'll also cover things like our flexible quoting options and your budget at this point too. After defining the project scope, we'll finalise the creative approach, set dates for key milestones and capture footage.</p>
              <p>The edit phase – which is typically longer than the pre-production or production phases, includes multiple days for review and changes to be made, in order to make your video the best end product it can be. Throughout the post-production process we'll be happy to provide online viewing copies for review, or you can join us for in-person editing.</p>
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
              <p>Our <span className="text-[#1EA4B9] font-bold">video production services</span> are delivered using cutting-edge <span className="text-[#1EA4B9] font-bold">Panasonic S1H cameras</span>, offering exceptional image quality in challenging lighting. These cameras support up to 6K resolution and high-quality slow motion.</p>
              <p>We also offer customised solutions with <span className="text-[#1EA4B9] font-bold">RED</span>, <span className="text-[#1EA4B9] font-bold">Blackmagic</span>, <span className="text-[#1EA4B9] font-bold">Canon C Series</span> and Kinefinity Mavo cameras, again providing up to 6K capture with enhanced detail and impactful slow-motion capabilities. Standard additions to this video capture equipment include sound, lighting and creative options like sliders, gimbals and <span className="text-[#1EA4B9] font-bold">GoPros</span>, with further additional features available.</p>
            </div>
          </div>

          {/* Image */}
          <div className="w-full min-[1440px]:w-1/2 min-[1920px]:w-[872px] shrink-0 order-1 min-[1440px]:order-2">
            <img 
              src={camera} 
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
              <p>We offer comprehensive in-house <span className="text-[#1EA4B9] font-bold">video production services</span> covering pre-production, planning, scripting, talent and location sourcing, production, edit, QC and delivery.</p>
              <p>Various strategic partnerships support our video production and <span className="text-[#1EA4B9] font-bold">videography services</span> too – meaning we can help you source on-screen talent, specialised equipment and studio spaces. Additionally, our recommended suppliers offer agency, digital, design and web services.</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default VideographyDetails;