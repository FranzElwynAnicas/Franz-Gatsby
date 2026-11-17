import React from "react";
import camera from "../../images/camera.png";
import p11 from "../../images/p11.png"; 

const VideographyDetails = ({ 
  howWeWorkTitle, howWeWorkText, howWeWorkImage,
  techTitle, techText, techImage,
  servicesTitle, servicesText, servicesImage
}) => {
  
  // Helper to render ACF WYSIWYG HTML
  const renderHtml = (html, fallback) => {
    if (html) {
      return <div dangerouslySetInnerHTML={{ __html: html }} />;
    }
    return <p>{fallback}</p>;
  };

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
              src={howWeWorkImage || camera} 
              alt={howWeWorkTitle || "How we work"} 
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
              {howWeWorkTitle || "How we work"}
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
              {renderHtml(
                howWeWorkText, 
                "We aim to simplify the video production commissioning process as much as possible."
              )}
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
              {techTitle || "Technically speaking"}
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
              {renderHtml(
                techText, 
                "Our video production services are delivered using cutting-edge Panasonic S1H cameras..."
              )}
            </div>
          </div>

          {/* Image */}
          <div className="w-full min-[1440px]:w-1/2 min-[1920px]:w-[872px] shrink-0 order-1 min-[1440px]:order-2">
            <img 
              src={techImage || camera} 
              alt={techTitle || "Technically speaking"} 
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
              src={servicesImage || p11} 
              alt={servicesTitle || "The whole package"} 
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
              {servicesTitle || "The whole package"}
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
              {renderHtml(
                servicesText, 
                "We offer comprehensive in-house video production services covering pre-production, planning, scripting, talent and location sourcing, production, edit, QC and delivery."
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default VideographyDetails;