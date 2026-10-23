import React from "react";
import bi1 from "../images/bi1.png";
import bi2 from "../images/bi2.png";
import bi3 from "../images/bi3.png";
import bi4 from "../images/bi4.png";
import bi5 from "../images/bi5.png";
import bi6 from "../images/bi6.png";
import bi7 from "../images/bi7.png";
import bi8 from "../images/bi8.png";

const relatedPosts = [
  { id: 1, title: "What is DP in Video Production? Role & Importance Explained", image: bi1 },
  { id: 2, title: "What Are The 5 Stages of Video Production? (Essential Guide)", image: bi2 },
  { id: 3, title: "Crowdfunding video for Synergised UK", image: bi3 },
  { id: 4, title: "Our Product Videographers Shoot With Skinny Tan", image: bi4 },
  { id: 5, title: "Beauty Product Photography for Pony Revolution", image: bi5 },
  { id: 6, title: "Video Production For Publishing", image: bi6 },
  { id: 7, title: "Photography and video production with energy", image: bi7 },
  { id: 8, title: "Our first TV ad as a Video Production Company", image: bi8 },
];

const BlogRelated = () => {
  return (
    <section className="w-full bg-white py-12 font-inter">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16">
        
        {/* Like & Share Bar */}
        <div className="flex items-center gap-6 mb-8 py-2">
          {/* Like Button */}
          <button className="bg-[#FCBE17] text-black font-bold px-6 py-2 flex items-center gap-2 hover:opacity-90 transition-opacity">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
            </svg>
            Like
          </button>
          
          {/* Divider line 1 */}
          <div className="h-6 w-[1px] bg-gray-300"></div>
          
          {/* Like Count */}
          <div className="flex items-center gap-2 text-[#179CBD] font-bold">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
            </svg>
            <span>999</span>
          </div>
          
          {/* Divider line 2 (Stretches to the right) */}
          <div className="h-[1px] bg-gray-300 flex-grow ml-2"></div>
        </div>

        {/* Related News Title */}
        <h2 className="text-black lg:text-[#526E87] text-2xl font-medium lg:font-bold mb-8 mt-8">
          Related News
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6 md:gap-y-12">
          {relatedPosts.map((post, index) => (
            <a 
              key={post.id} 
              href={`#related-${post.id}`}
              className={`group cursor-pointer flex flex-row md:flex-col gap-4 pb-6 md:pb-0 border-b border-[#526E87]/30 md:border-none ${
                index >= 4 ? "hidden lg:flex" : "flex"
              }`}
            >
              {/* Image Container */}
              <div className="overflow-hidden shrink-0 w-[120px] h-[90px] md:w-[364px] md:h-[180px]">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              {/* Title */}
              <h3 
                // font-normal (400) on mobile, font-bold (700) on desktop
                // text-[14px] on mobile, lg:text-[20px] on desktop
                className="text-black lg:text-[#526E87] group-hover:text-[#179CBD] transition-colors max-w-[364px] self-center md:self-start mt-0 md:mt-2 font-normal lg:font-bold text-[14px] lg:text-[20px]"
                style={{
                  fontFamily: "Inter, sans-serif",
                  lineHeight: "100%",
                  letterSpacing: "-0.05em", // Tailwind doesn't have -5%, so we use the em equivalent
                }}
              >
                {post.title}
              </h3>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BlogRelated;