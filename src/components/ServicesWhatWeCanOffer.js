import * as React from "react";
import { useRef } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";

const ServicesWhatWeCanOffer = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = window.innerWidth > 768 ? 750 : 320;
      current.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
    }
  };

  const data = useStaticQuery(graphql`
    query WhatWeCanOfferImagesQuery {
      offer1Img: file(relativePath: { eq: "offer1.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 600, placeholder: BLURRED)
        }
      }
      offer2Img: file(relativePath: { eq: "offer2.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 600, placeholder: BLURRED)
        }
      }
      offer3Img: file(relativePath: { eq: "offer3.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 600, placeholder: BLURRED)
        }
      }
    }
  `);

  const offer1 = getImage(data.offer1Img);
  const offer2 = getImage(data.offer2Img);
  const offer3 = getImage(data.offer3Img);

  const offers = [
    {
      title: "Planning",
      bullets: ["Lorem Ipsum dolor sit", "Lorem Ipsum dolor sit", "Lorem Ipsum dolor sit", "Lorem Ipsum dolor sit"],
      text: "Nunc id ridiculus mattis ullamcorper in id accumsan eu habitant. Mollis duis eu tellus aliquam viverra. Amet feugiat et habitasse mauris massa iaculis.",
      image: offer1,
      alt: "Planning phase",
    },
    {
      title: "Talent & Location",
      bullets: ["Lorem Ipsum dolor sit", "Lorem Ipsum dolor sit", "Lorem Ipsum dolor sit", "Lorem Ipsum dolor sit"],
      text: "Nunc id ridiculus mattis ullamcorper in id accumsan eu habitant. Mollis duis eu tellus aliquam viverra. Amet feugiat et habitasse mauris massa iaculis.",
      image: offer2,
      alt: "Talent and Location scouting",
    },
    {
      title: "Editing & Delivery",
      bullets: ["Lorem Ipsum dolor sit", "Lorem Ipsum dolor sit", "Lorem Ipsum dolor sit", "Lorem Ipsum dolor sit"],
      text: "Nunc id ridiculus mattis ullamcorper in id accumsan eu habitant. Mollis duis eu tellus aliquam viverra. Amet feugiat et habitasse mauris massa iaculis.",
      image: offer3,
      alt: "Editing and delivery",
    },
  ];

  return (
    <section className="w-full bg-[#F7F7F7] py-16 md:py-24 overflow-hidden">
      <div className="w-full max-w-[1280px] mx-auto px-6 md:px-12">
        
        {/* Header - Only visible on mobile */}
        <h2 
          className="font-extrabold text-black mb-10 tracking-[-0.05em] md:hidden"
          style={{ fontSize: "clamp(32px, 4vw, 48px)", lineHeight: "100%" }}
        >
          What we can offer
        </h2>

        {/* Scrollable Container */}
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 md:gap-10 md:pb-12 hide-scrollbar"
        >
          {offers.map((offer, index) => (
            <div 
              key={index} 
              // Desktop width adjusted to comfortably fit the 346px image + text
              className="min-w-[85vw] sm:min-w-[320px] md:min-w-[650px] lg:min-w-[700px] snap-start flex flex-col md:flex-row gap-6 md:gap-10 items-start"
            >
              
              {/* Text Side */}
              <div className="w-full md:w-[calc(100%-346px-2.5rem)] flex flex-col pt-2 order-2 md:order-1">
                <h3 
                  className="mb-4 text-black md:text-[#526E87]"
                  style={{ 
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 500,
                    fontStyle: "normal",
                    fontSize: "30px",
                    lineHeight: "100%",
                    letterSpacing: "-0.05em" 
                  }}
                >
                  {offer.title}
                </h3>

                <ul className="list-disc pl-5 mb-6 text-black md:text-[#526E87] font-medium text-[16px] md:text-[18px] leading-[1.4] tracking-[-0.02em]">
                  {offer.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>

                <p className="text-black md:text-[#526E87] font-medium text-[16px] md:text-[18px] leading-[1.5] tracking-[-0.02em]">
                  {offer.text}
                </p>
              </div>

              {/* Image Side - Exact Figma Dimensions */}
              <div 
                className="w-full aspect-[4/3] rounded-[6px] overflow-hidden order-1 md:order-2 shrink-0 md:w-[346px] md:h-[280px]"
              >
                {offer.image && (
                  <GatsbyImage
                    image={offer.image}
                    alt={offer.alt}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

            </div>
          ))}
        </div>

        {/* Navigation Buttons - Hidden on mobile, flex on desktop */}
        <div className="hidden md:flex items-center gap-3 mt-8">
          <button 
            onClick={() => scroll("left")}
            className="w-8 h-8 rounded-full bg-[#1EA4B9] hover:bg-[#FCBE17] transition-colors duration-300 flex items-center justify-center"
            aria-label="Scroll left"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-180">
              <path d="M5 12H19" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 5L19 12L12 19" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <button 
            onClick={() => scroll("right")}
            className="w-8 h-8 rounded-full bg-[#1EA4B9] hover:bg-[#FCBE17] transition-colors duration-300 flex items-center justify-center"
            aria-label="Scroll right"
          >
             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 5L19 12L12 19" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

      </div>

      {/* CSS to hide native scrollbar */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default ServicesWhatWeCanOffer;