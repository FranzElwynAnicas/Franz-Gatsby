import React, { useRef } from "react";
import { UilPlayCircle } from "@iconscout/react-unicons";

const categories = [
  { title: "Beauty" },
  { title: "Food&Drink" },
  { title: "Product" },
  { title: "Events" },
  { title: "Crowdfunding" },
  { title: "Tv Ads" },
  { title: "HR" },
  { title: "Education" },
  { title: "Explainers" },
  { title: "Social First" },
];

const VideoCategories = () => {
  const scrollRef = useRef(null);

  const scrollBy = (direction) => {
    if (!scrollRef.current) return;
    const amount = 700;
    scrollRef.current.scrollBy({
      left: direction === "next" ? amount : -amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full min-h-screen bg-pocketLightGrey flex items-center overflow-hidden">
      <div className="w-full py-20">
        {/* Top row — starts at 12.5% from left */}
        <div className="pl-[12.5%] pr-8 flex items-center justify-between mb-12">
          <div className="flex items-center gap-4">
            <UilPlayCircle size="56" color="#179CBD" />
            <span className="text-pocketGrey font-inter text-2xl md:text-3xl lg:text-[40px] font-medium">
              Video Production
            </span>
          </div>

          <button className="bg-pocketTeal text-white font-bold text-lg rounded-full w-24 h-24 md:w-32 md:h-32 flex items-center justify-center hover:opacity-90 transition-opacity shrink-0">
            Let's Talk
          </button>
        </div>

        {/* Carousel — also starts at 12.5% from left */}
        <div className="pl-[12.5%]">
          <div
            ref={scrollRef}
            className="flex gap-14 md:gap-16 overflow-x-auto pb-6 scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {categories.map((cat) => (
              <div key={cat.title} className="shrink-0">
                <h3 className="text-4xl md:text-5xl lg:text-[80px] font-black text-pocketBlack leading-none tracking-[-0.05em] mb-10">
                  {cat.title}
                </h3>
                <div className="w-[500px] md:w-[712px] aspect-[712/400] bg-pocketGrey/40 rounded-xl flex items-center justify-center">
                  <span className="text-white font-poppins text-sm md:text-base">
                    [{cat.title} video placeholder]
                  </span>
                </div>
              </div>
            ))}

            <div className="shrink-0 flex items-center">
              <button className="text-[80px] md:text-[120px] font-black text-pocketBlack leading-[1.2] tracking-[-0.05em] hover:text-pocketTeal transition-colors">
                View All.
              </button>
            </div>
          </div>
        </div>

        {/* Controls — same left offset */}
        <div className="pl-[12.5%] pr-8 mt-8">
          <p className="text-sm md:text-base text-pocketGrey mb-3">
            *Drag to play the next Video, Click to toggle sound
          </p>
          <div className="flex gap-3">
            <button
              onClick={() => scrollBy("prev")}
              aria-label="Previous"
              className="w-10 h-10 bg-pocketYellow rounded-full flex items-center justify-center hover:opacity-90"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5">
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
            </button>
            <button
              onClick={() => scrollBy("next")}
              aria-label="Next"
              className="w-10 h-10 bg-pocketYellow rounded-full flex items-center justify-center hover:opacity-90"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoCategories;