import React, { useState, useEffect } from "react";
import b1 from "../images/B1.png";
import b2 from "../images/B2.png";
import b3 from "../images/B3.png";
import b4 from "../images/B4.png";
import b5 from "../images/B5.png";
import b6 from "../images/B6.png";
import b7 from "../images/B7.png";
import b8 from "../images/B8.png";
import b9 from "../images/B9.png";
import b10 from "../images/B10.png";
import b11 from "../images/B11.png";
import b12 from "../images/B12.png";

const slides = [
  { image: b1, title: "What is an Explainer Video? Benefits and Uses Explained", subtitle: "Beauty, Products" },
  { image: b2, title: "Beauty Product Photography for Pony Revolution", subtitle: "Beauty, Product Photography, Products, Video" },
  { image: b3, title: "Meeting Gour Kubair at Holy Lama", subtitle: "Beauty" },
  { image: b4, title: "Shooting Stop Motion Video", subtitle: "Beauty, Video" },
  { image: b5, title: "Christmas Photography 2020", subtitle: "Beauty, Product Photography, Jewellery, Products" },
  { image: b6, title: "6 Beauty Photography Tips", subtitle: "Beauty" },
  { image: b7, title: "Model Behavi[or]", subtitle: "Beauty, Photography, Beauty, Food & Drink, Watches" },
  { image: b8, title: "Created at home", subtitle: "Beauty, Photography, Beauty, Food & Drink, Watches" },
  { image: b9, title: "Christmas Photography Content", subtitle: "Beauty, Product Photography, Food & Drink, Products" },
  { image: b10, title: "Fantastic Flat Lay", subtitle: "Beauty, Photography, Beauty, Food & Drink" },
  { image: b11, title: "Getting our nails into beauty", subtitle: "Beauty, Video" },
  { image: b12, title: "Scrubs Up Well", subtitle: "Cosmetics, Beauty, Video" }
];

const BlogCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(1440);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1440;
  const isDesktop = windowWidth >= 1440;

  // Responsive sizes
  const cardWidth = isMobile
    ? windowWidth - 32
    : isTablet
    ? Math.min(windowWidth * 0.72, 900)
    : 1300;

  const cardHeight = isMobile ? 580 : isTablet ? 650 : 913;
  const gap = isDesktop ? 80 : isTablet ? 40 : 16;
  const slideStep = cardWidth + gap;

  // Fixed paddingLeft for desktop to achieve exact 1/8th peeking
  const paddingLeft = isDesktop
    ? 204.5
    : isTablet
    ? (windowWidth - cardWidth) / 2 - gap + cardWidth / 16
    : 0;

  return (
    <section className="w-full bg-[#f2f2f2] pt-32 md:pt-40 pb-16 font-inter flex flex-col items-center">
      {/* 
        CONTAINMENT WRAPPER:
        Using max-w-[1745px] overflow-hidden on desktop prevents cards from stretching to the monitor edge!
      */}
      <div 
        className={`w-full overflow-hidden relative mx-auto ${
          isMobile ? "px-4" : "max-w-[1745px]"
        }`}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            paddingLeft: isMobile ? "0px" : `${paddingLeft}px`,
            gap: `${gap}px`,
            transform: `translateX(-${activeIndex * slideStep}px)`
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="shrink-0 overflow-hidden group cursor-pointer relative"
              style={{
                width: `${cardWidth}px`,
                height: `${cardHeight}px`,
                boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
              }}
            >
              <img
                src={slide.image}
                alt={slide.subtitle}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div
                className="absolute inset-0 flex flex-col justify-end p-6 md:p-10 lg:p-12 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(252, 190, 23, 0.03) 52.8%, #FCBE17 80.22%)"
                }}
              >
                <div className="pointer-events-auto flex flex-col items-start gap-2 md:gap-3 max-w-[95%] md:max-w-[85%]">
                  <div className="bg-[#179CBD] px-4 py-2 md:px-5 md:py-2.5 inline-block">
                    <h3
                      className="text-white text-left font-bold"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 700,
                        fontSize: isMobile ? "20px" : isTablet ? "26px" : "35px",
                        lineHeight: "123%",
                        letterSpacing: "-0.05em"
                      }}
                    >
                      {slide.title}
                    </h3>
                  </div>

                  <p
                    className="text-black font-bold mt-1"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 700,
                      fontSize: isMobile ? "16px" : isTablet ? "18px" : "20px",
                      lineHeight: "123%",
                      letterSpacing: "-0.05em"
                    }}
                  >
                    {slide.subtitle}
                  </p>

                  <a
                    href={`#post-${index}`}
                    className="flex items-center gap-2 text-black hover:opacity-75 transition-opacity"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 500,
                      fontSize: isMobile ? "16px" : isTablet ? "18px" : "20px",
                      lineHeight: "100%",
                      letterSpacing: "-0.05em"
                    }}
                  >
                    Read More
                    <svg
                      width="13"
                      height="15"
                      viewBox="0 0 13 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 7.5H12M12 7.5L6.5 2M12 7.5L6.5 13"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="mt-8 md:mt-12 flex justify-center items-center gap-[10px] w-full">
        <button
          onClick={prevSlide}
          className="flex items-center justify-center text-white transition-colors duration-300"
          style={{
            width: "50px",
            height: "50px",
            backgroundColor: "#179CBD",
            borderRadius: "50px",
            paddingTop: "6px",
            paddingRight: "7px",
            paddingBottom: "6px",
            paddingLeft: "7px"
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#FCBE17")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#179CBD")}
          aria-label="Previous slide"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="flex items-center justify-center text-white transition-colors duration-300"
          style={{
            width: "50px",
            height: "50px",
            backgroundColor: "#179CBD",
            borderRadius: "50px",
            paddingTop: "6px",
            paddingRight: "7px",
            paddingBottom: "6px",
            paddingLeft: "7px"
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#FCBE17")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#179CBD")}
          aria-label="Next slide"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default BlogCarousel;