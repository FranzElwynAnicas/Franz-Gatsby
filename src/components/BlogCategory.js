import React from "react";
import { Link } from "gatsby";
import b1 from "../images/B1.png";
import b2 from "../images/B2.png";
import b3 from "../images/B3.png";
import b4 from "../images/B4.png";
import b5 from "../images/B5.png";
import b6 from "../images/B6.png";
import b7 from "../images/B7.png";
import b8 from "../images/B8.png";
import b9 from "../images/B9.png";

const blogPosts = [
  { id: 1, image: b1, title: "Our Product Videographers Shoot With Skinny Tan" },
  { id: 2, image: b2, title: "Our Product Videographers Shoot With Skinny Tan" },
  { id: 3, image: b3, title: "Our Product Videographers Shoot With Skinny Tan" },
  { id: 4, image: b4, title: "Our Product Videographers Shoot With Skinny Tan" },
  { id: 5, image: b5, title: "Our Product Videographers Shoot With Skinny Tan" },
  { id: 6, image: b6, title: "Our Product Videographers Shoot With Skinny Tan" },
  { id: 7, image: b7, title: "Our Product Videographers Shoot With Skinny Tan" },
  { id: 8, image: b8, title: "Our Product Videographers Shoot With Skinny Tan" },
  { id: 9, image: b9, title: "Our Product Videographers Shoot With Skinny Tan" },
];

const blogCategories = [
  { label: "BEAUTY", current: true },
  { label: "COMPANY" },
  { label: "CROWDFUNDING" },
  { label: "EVENTS" },
  { label: "FASHION" },
  { label: "FOOD" },
  { label: "FOOD & DRINK" },
  { label: "JEWELLERY" },
  { label: "PEOPLE" },
  { label: "PHOTOGRAPHY" },
  { label: "PORTAITS" },
  { label: "PRODUCTS" },
  { label: "VIDEO" },
];

const BlogCategory = () => {
  return (
    <section className="w-full bg-[#f2f2f2] py-16 md:py-24 font-inter overflow-hidden">
      <div className="max-w-[1500px] mx-auto px-2 md:px-6 lg:px-4 flex flex-col items-center">
        
        {/* Title */}
        <h2
          className="font-bold text-center tracking-[-0.05em] leading-[1] mb-8 text-black xl:text-[#179cbd]"
          style={{ fontSize: "clamp(40px, 8vw, 120px)" }}
        >
          Our Blogs
        </h2>

        {/* Mobile/Tablet Dropdown */}
        <div className="w-full max-w-[300px] mb-10 lg:hidden">
          <div className="relative border border-black bg-transparent">
            <select 
              className="w-full appearance-none bg-transparent px-4 py-2 text-center font-medium text-black outline-none"
              style={{ fontSize: "16px" }}
            >
              {blogCategories.map((cat) => (
                <option key={cat.label} value={cat.label}>{cat.label}</option>
              ))}
            </select>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1.5L6 6.5L11 1.5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Desktop Categories List */}
        <nav className="hidden lg:flex w-full mb-10 lg:mb-16 justify-center" aria-label="Blog categories">
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-3 px-4 pb-4">
            {blogCategories.map((category) => (
              <a
                key={category.label}
                href={`#${category.label.toLowerCase().replace(/\s+/g, "-")}`}
                className={`transition-colors text-black xl:text-[#526e87] hover:text-[#179CBD] ${
                  category.current
                    ? "font-bold text-[#FCBE17]"
                    : "font-medium"
                }`}
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: category.current ? 700 : 500,
                  fontSize: "20px",
                  lineHeight: "100%",
                  letterSpacing: "-0.05em"
                }}
              >
                {category.label}
              </a>
            ))}
          </div>
        </nav>

        {/* Cards Container */}
        <div 
          className="w-full flex overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-4 lg:px-0 lg:grid lg:grid-cols-3 md:gap-6 lg:gap-10 lg:overflow-visible relative"
        >
          <div className="flex flex-row gap-4 pl-[24px] lg:p-0 w-full lg:contents">
            {blogPosts.map((post) => (
              <article 
                key={post.id} 
                className="bg-white flex flex-col group cursor-pointer transition-colors shrink-0 snap-start w-[300px] lg:w-full"
                style={{ 
                  height: "598px",
                  border: "5px solid #526E87" 
                }}
              >
                <div className="w-full flex justify-center pt-4 px-4">
                  <div className="overflow-hidden w-full" style={{ height: "314px" }}>
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>

                <div className="flex flex-col px-4 pt-4 pb-6 flex-grow">
                  <h3 
                    className="text-[#526e87] mb-3"
                    style={{ 
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 700, 
                      fontSize: "20px", 
                      lineHeight: "123%", 
                      letterSpacing: "-0.05em" 
                    }}
                  >
                    {post.title}
                  </h3>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {["Beauty", "Products", "Video"].map((tag) => (
                      <span 
                        key={tag} 
                        className="text-black px-1.5 py-0.5"
                        style={{ 
                          backgroundColor: "#FCBE17",
                          fontFamily: "Inter, sans-serif",
                          fontWeight: 500,
                          fontStyle: "italic",
                          fontSize: "14px",
                          lineHeight: "123%",
                          letterSpacing: "-0.05em"
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 mb-auto">
                    <span 
                      style={{ 
                        color: "#179CBD",
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 800, 
                        fontSize: "14px", 
                        lineHeight: "123%", 
                        letterSpacing: "-0.05em" 
                      }}
                    >
                      POCKET CREATIVES
                    </span>
                    <span 
                      style={{ 
                        color: "#526E87",
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 500, 
                        fontSize: "14px", 
                        lineHeight: "123%", 
                        letterSpacing: "-0.05em" 
                      }}
                    >
                      DDTH MONTH YYYY
                    </span>
                  </div>

                  {/* Updated Link to match bloginner.js */}
                  <Link 
                    to="/bloginner" 
                    className="flex items-center gap-2 text-[#526e87] hover:text-[#179cbd] transition-colors mt-6"
                    style={{ 
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 500, 
                      fontSize: "20px", 
                      lineHeight: "100%", 
                      letterSpacing: "-0.05em" 
                    }}
                  >
                    Read More 
                    <svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 7.5H12M12 7.5L6.5 2M12 7.5L6.5 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
            
            <div className="shrink-0 w-[24px] lg:hidden"></div>
          </div>
        </div>

        {/* Pagination */}
        <div className="hidden lg:flex items-center justify-center gap-6 mt-16">
          <button className="flex items-center gap-2 text-[#526e87] font-medium hover:text-[#179cbd] transition-colors">
            ← Prev
          </button>
          <span className="text-[#526e87] font-medium">1 of 2</span>
          <button className="flex items-center gap-2 text-[#526e87] font-medium hover:text-[#179cbd] transition-colors">
            Next →
          </button>
        </div>

      </div>
    </section>
  );
};

export default BlogCategory;