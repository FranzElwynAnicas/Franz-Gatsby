import React, { useState } from "react";
import photoBeauty from "../images/product-pink.png";

const categories = [
  { label: "Beauty" },
  { label: "Food & Drink" },
  { label: "Product" },
  { label: "Events" },
  { label: "Crowdfunding" },
  { label: "Fashion" },
  { label: "People" },
  { label: "Jewellery" },
];

const HomePhotography = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full min-h-screen bg-pocketLightGrey flex items-center overflow-hidden">
      <div className="w-full py-16 md:py-20">
        {/* Symmetrical padding on mobile, offset on desktop */}
        <div className="px-6 md:pl-[12.5%] md:pr-16">
          
          {/* Top row: icon + Photography label (+ Let's Talk on desktop only) */}
          <div className="flex items-center justify-between mb-8 md:mb-16">
            <div className="flex items-center gap-3 md:gap-4">
              <svg
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 md:w-14 md:h-14 shrink-0"
              >
                <path
                  d="M55 27.5C54.9893 27.3669 54.9893 27.2331 55 27.1C55 26.4 54.8 25.7 54.675 25C54.2178 22.9288 53.4863 20.9278 52.5 19.05C50.8158 15.6043 48.3615 12.5923 45.327 10.247C42.2924 7.9017 38.7589 6.28603 35 5.525L32.9 5.2H32.5H31.775H31.575L30 5C29.15 5 28.3 5 27.5 5H27.1L25 5.5C20.2001 6.48423 15.7952 8.85723 12.3328 12.3241C8.87037 15.791 6.50303 20.1989 5.52495 25C5.39995 25.7 5.29995 26.4 5.19995 27.1C5.21063 27.2331 5.21063 27.3669 5.19995 27.5C5.19995 28.325 5.19995 29.175 5.19995 30C5.19995 30.825 5.19995 31.7 5.19995 32.5C5.21063 32.6331 5.21063 32.7669 5.19995 32.9C5.19995 33.6 5.39995 34.3 5.52495 35C5.91861 37.0616 6.58268 39.0622 7.49995 40.95C9.18406 44.3957 11.6384 47.4077 14.6729 49.753C17.7075 52.0983 21.241 53.714 25 54.475L27.1 54.8L27.5 55H28.35H28.7C29.15 55 29.575 55 30.025 55C30.875 55 31.725 55 32.525 54.875H32.925L35 54.5C39.7998 53.5158 44.2047 51.1428 47.6671 47.6759C51.1295 44.209 53.4969 39.8011 54.475 35C54.6 34.3 54.7 33.6 54.7999 32.9C54.8545 32.761 54.9215 32.6271 55 32.5C55 31.675 55.125 30.825 55.125 30C55.125 29.175 55 28.3 55 27.5ZM32.9 10.25L34.15 10.425C38.6694 11.3897 42.7153 13.8897 45.6 17.5H28.55L32.9 10.25ZM26.05 10.45L27.0499 10.3L18.45 25L14.25 17.7C17.159 13.9708 21.2955 11.3933 25.925 10.425L26.05 10.45ZM11.475 37.5C11.0232 36.392 10.6718 35.2458 10.425 34.075C10.425 33.525 10.225 32.95 10.175 32.375C10.1629 32.2754 10.1629 32.1746 10.175 32.075C10.0416 30.7283 10.0416 29.3717 10.175 28.025C10.1629 27.9254 10.1629 27.8246 10.175 27.725C10.175 27.15 10.325 26.575 10.425 26.025C10.6449 24.9076 10.9628 23.8117 11.375 22.75L20 37.5H11.475ZM27.225 49.775L25.975 49.6C21.4067 48.6557 17.3122 46.1441 14.4 42.5H31.45L27.225 49.775ZM25.675 37.5L21.35 30L25.675 22.5H34.325L38.65 30L34.325 37.5H25.675ZM34.075 49.575L33.075 49.725L41.55 35L45.75 42.3C42.8409 46.0292 38.7044 48.6067 34.075 49.575ZM49.8999 32.075C49.912 32.1746 49.912 32.2754 49.8999 32.375C49.8999 32.95 49.75 33.525 49.65 34.075C49.4244 35.1585 49.1066 36.2207 48.7 37.25L40 22.5H48.425C48.8767 23.608 49.2281 24.7542 49.475 25.925C49.475 26.475 49.6749 27.05 49.7249 27.625C49.737 27.7246 49.737 27.8254 49.7249 27.925C49.8583 29.2717 49.8583 30.6283 49.7249 31.975L49.8999 32.075Z"
                  fill="#179CBD"
                />
              </svg>
              <span className="text-pocketGrey font-inter text-2xl md:text-[32px] lg:text-[40px] font-extrabold tracking-[-0.02em]">
                Photography
              </span>
            </div>
            
            {/* Hidden on mobile, visible on desktop */}
            <button className="hidden md:flex bg-pocketTeal text-white font-bold text-base md:text-lg rounded-full w-20 h-20 md:w-28 md:h-28 items-center justify-center hover:opacity-90 transition-opacity shrink-0">
              Let's Talk
            </button>
          </div>

          {/* Main content */}
          <div className="grid grid-cols-1 lg:grid-cols-[440px_1fr] gap-8 lg:gap-24 items-start">
            
            {/* The list */}
            <ul className="flex flex-col w-full order-2 lg:order-1">
              {categories.map((cat, idx) => (
                <li
                  key={cat.label}
                  onMouseEnter={() => setActiveIndex(idx)}
                  onClick={() => setActiveIndex(idx)}
                  className="border-b border-pocketTeal/40 md:border-pocketGrey/60"
                >
                  <button
                    className={`text-left w-full py-4 md:py-5 text-xl md:text-3xl lg:text-[40px] font-extrabold tracking-[-0.02em] transition-colors leading-none ${
                      activeIndex === idx
                        ? "text-pocketTeal md:text-pocketYellow"
                        : "text-pocketGrey hover:text-pocketYellow"
                    }`}
                  >
                    {activeIndex === idx ? `View ${cat.label}` : cat.label}
                  </button>
                </li>
              ))}
            </ul>

            {/* The image */}
            <div className="w-full aspect-[4/3] md:aspect-[3/2] overflow-hidden order-1 lg:order-2">
              <img
                src={photoBeauty}
                alt={categories[activeIndex].label}
                className="w-full h-full object-cover transition-opacity duration-300"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HomePhotography;