import React from "react";
import p9 from "../../images/p9.png";
import p10 from "../../images/p10.png";
import p11 from "../../images/p11.png";

// Helper: split ACF text into paragraphs by newline (double or single)
const splitIntoParagraphs = (text) => {
  if (!text) return [];
  return text
    .split(/\n+/)
    .map((line) => line.trim())
    .filter(Boolean);
};

const PhotographyDetails = ({ 
  d1Title, d1Text, d1Image,
  d2Title, d2Text, d2Image,
  d3Title, d3Text, d3Image,
}) => {
  const d1Paragraphs = splitIntoParagraphs(d1Text);
  const d2Paragraphs = splitIntoParagraphs(d2Text);
  const d3Paragraphs = splitIntoParagraphs(d3Text);

  return (
    <section className="bg-[#F7F7F7] py-10 md:py-16 flex justify-center overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-12 2xl:px-8 flex flex-col gap-12 md:gap-16">
        
        {/* Block 1: How we work */}
        <div className="flex flex-col min-[1440px]:flex-row items-center w-full gap-6 lg:gap-8">
          
          <div className="w-full min-[1440px]:w-1/2 min-[1920px]:w-[650px] shrink-0">
            <img src={d1Image || p9} alt="How we work" className="w-full h-auto object-cover rounded-md" />
          </div>

          <div className="w-full min-[1440px]:flex-1 flex flex-col justify-center">
            <h3 className="mb-3 text-black xl:text-[#526E87]" style={{ fontFamily: "Inter, sans-serif", fontWeight: 800, fontSize: "clamp(26px, 3vw, 40px)", lineHeight: "1.1", letterSpacing: "-0.05em" }}>
              {d1Title || "How we work"}
            </h3>
            <div className="space-y-2.5 text-black xl:text-[#526E87]" style={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: "17px", lineHeight: "1.5", letterSpacing: "-0.02em" }}>
              {d1Paragraphs.length > 0 ? (
                d1Paragraphs.map((para, i) => <p key={i}>{para}</p>)
              ) : (
                <>
                  <p>We try to make the consultation process for our photography services as simple as possible – understanding your requirements as quickly as possible.</p>
                  <p>Quoting is relatively easy, as <span className="text-[#1EA4B9] font-bold">we charge based on time and resources</span> (rather than per-image).</p>
                  <p>You can book our photography agency for as little as one hour – ideal when you need a handful of simple images, and are happy for us to work remotely.</p>
                  <p>We also offer either half day or full day slots, with full pre-planning consultation. We can help with props, backdrops, locations and models where required. We have numerous shoot location options as well, including the possibility to come to you.</p>
                  <p>We like to think we have a solution to satisfy most challenges!</p>
                </>
              )}
            </div>
          </div>

        </div>

        {/* Block 2: Technically speaking */}
        <div className="flex flex-col min-[1440px]:flex-row items-center w-full gap-6 lg:gap-8">
          
          <div className="w-full min-[1440px]:flex-1 flex flex-col justify-center order-2 min-[1440px]:order-1">
            <h3 className="mb-3 text-black xl:text-[#526E87]" style={{ fontFamily: "Inter, sans-serif", fontWeight: 800, fontSize: "clamp(26px, 3vw, 40px)", lineHeight: "1.1", letterSpacing: "-0.05em" }}>
              {d2Title || "Technically speaking"}
            </h3>
            <div className="space-y-2.5 text-black xl:text-[#526E87]" style={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: "17px", lineHeight: "1.5", letterSpacing: "-0.02em" }}>
              {d2Paragraphs.length > 0 ? (
                d2Paragraphs.map((para, i) => <p key={i}>{para}</p>)
              ) : (
                <>
                  <p>We shoot on high resolution Nikon cameras, capable of delivering sleek, ultra sharp images with tons of detail.</p>
                  <p>Our lens options include Nikon's two workhorse focal length ranges (24-70mm and 70-200mm), and we support macro lenses for close-up work and ultra-wide, as well as 12mm, for dramatic wide angles.</p>
                  <p>We use both studio lighting and portable battery-powered flash, which makes us a photography company able to shoot in all locations. Post-production is completed through Adobe Raw and Photoshop.</p>
                </>
              )}
            </div>
          </div>

          <div className="w-full min-[1440px]:w-1/2 min-[1920px]:w-[872px] shrink-0 order-1 min-[1440px]:order-2">
            <img src={d2Image || p10} alt="Technically speaking" className="w-full h-auto object-cover rounded-md" />
          </div>

        </div>

        {/* Block 3: The whole package */}
        <div className="flex flex-col min-[1440px]:flex-row items-center w-full gap-6 lg:gap-8">
          
          <div className="w-full min-[1440px]:w-1/2 min-[1920px]:w-[706px] shrink-0">
            <img src={d3Image || p11} alt="The whole package" className="w-full h-auto object-cover rounded-md" />
          </div>

          <div className="w-full min-[1440px]:flex-1 flex flex-col justify-center">
            <h3 className="mb-3 text-black xl:text-[#526E87]" style={{ fontFamily: "Inter, sans-serif", fontWeight: 800, fontSize: "clamp(26px, 3vw, 40px)", lineHeight: "1.1", letterSpacing: "-0.05em" }}>
              {d3Title || "The whole package"}
            </h3>
            <div className="space-y-2.5 text-black xl:text-[#526E87]" style={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: "17px", lineHeight: "1.5", letterSpacing: "-0.02em" }}>
              {d3Paragraphs.length > 0 ? (
                d3Paragraphs.map((para, i) => <p key={i}>{para}</p>)
              ) : (
                <>
                  <p>We try to make the consultation process for our photography services as simple as possible – understanding your requirements as quickly as possible.</p>
                  <p>Quoting is relatively easy, as we charge based on time and resources (rather than per-image).</p>
                  <p>You can book our photography agency for as little as one hour – ideal when you need a handful of simple images, and are happy for us to work remotely.</p>
                  <p>We also offer either half day or full day slots, with full pre-planning consultation. We can help with props, backdrops, locations and models where required. We have numerous shoot location options as well, including the possibility to come to you.</p>
                  <p><span className="text-[#1EA4B9] font-bold">We like to think we have a solution to satisfy most challenges!</span></p>
                </>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default PhotographyDetails;