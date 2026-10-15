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
    <section className="w-full min-h-screen bg-pocketLightGrey flex items-center">
      <div className="w-full py-20">
        <div className="pl-[12.5%] pr-8 md:pr-16">
          {/* Top row: label + Let's Talk */}
          <div className="flex items-center justify-between mb-16">
            <div className="flex items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="56"
                height="56"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#179CBD"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="9" />
                <circle cx="12" cy="12" r="3.5" />
                <path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4L7 17M17 7l1.4-1.4" />
              </svg>
              <span className="text-pocketGrey font-inter text-2xl md:text-[32px] lg:text-[40px] font-extrabold tracking-[-0.02em]">
                Photography
              </span>
            </div>
            <button className="bg-pocketTeal text-white font-bold text-base md:text-lg rounded-full w-20 h-20 md:w-28 md:h-28 flex items-center justify-center hover:opacity-90 transition-opacity shrink-0">
              Let's Talk
            </button>
          </div>

          {/* Main content: list left, image right */}
          <div className="grid grid-cols-1 lg:grid-cols-[440px_1fr] gap-10 lg:gap-24 items-start">
            <ul className="flex flex-col w-full">
              {categories.map((cat, idx) => (
                <li
                  key={cat.label}
                  onMouseEnter={() => setActiveIndex(idx)}
                  className="border-b border-pocketGrey/60"
                >
                  <button
                    className={`text-left w-full py-5 text-2xl md:text-3xl lg:text-[40px] font-extrabold tracking-[-0.02em] transition-colors leading-none ${
                      activeIndex === idx
                        ? "text-pocketYellow"
                        : "text-pocketGrey hover:text-pocketYellow"
                    }`}
                  >
                    {activeIndex === idx ? `View ${cat.label}` : cat.label}
                  </button>
                </li>
              ))}
            </ul>

            <div className="w-full aspect-[3/2] overflow-hidden">
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