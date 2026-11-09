import React, { useState } from "react";
import { Link } from "gatsby";

const BlogCategory = ({ posts }) => {
  // 1. MOVE THIS TO THE TOP (before the early return)
  const [activeCategory, setActiveCategory] = useState("All");

  // 2. THEN do the safety check
  if (!posts || posts.length === 0) return null;

  // Extract unique categories from the posts
  const allCategories = ["All", ...new Set(posts.flatMap(post => post.categories.nodes.map(cat => cat.name)))];
  
  // Filter posts based on selected category
  const filteredPosts = activeCategory === "All" 
    ? posts 
    : posts.filter(post => post.categories.nodes.some(cat => cat.name === activeCategory));

  return (
    <section className="w-full bg-[#f2f2f2] py-16 md:py-24 font-inter overflow-hidden">
      <div className="max-w-[1500px] mx-auto px-2 md:px-6 lg:px-4 flex flex-col items-center">
        
        <h2 className="font-bold text-center tracking-[-0.05em] leading-[1] mb-8 text-black xl:text-[#179cbd]" style={{ fontSize: "clamp(40px, 8vw, 120px)" }}>
          Our Blogs
        </h2>

        {/* DYNAMIC CATEGORY FILTER */}
        <div className="hidden lg:flex flex-wrap justify-center gap-x-6 gap-y-3 mb-12 max-w-[1200px]">
          {allCategories.map((catName) => (
            <button
              key={catName}
              onClick={() => setActiveCategory(catName)}
              className={`transition-colors text-lg font-medium tracking-[-0.05em] ${
                activeCategory === catName ? "text-[#FCBE17] font-bold" : "text-[#526e87] hover:text-[#179CBD]"
              }`}
            >
              {catName.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Cards Container */}
        <div className="w-full flex overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-4 lg:px-0 lg:grid lg:grid-cols-3 md:gap-6 lg:gap-10 lg:overflow-visible relative">
          <div className="flex flex-row gap-4 pl-[24px] lg:p-0 w-full lg:contents">
            {filteredPosts.map((post) => (
              <article key={post.id} className="bg-white flex flex-col group cursor-pointer transition-colors shrink-0 snap-start w-[300px] lg:w-full" style={{ height: "598px", border: "5px solid #526E87" }}>
                <div className="w-full flex justify-center pt-4 px-4">
                  <div className="overflow-hidden w-full" style={{ height: "314px" }}>
                    {post.featuredImage?.node?.sourceUrl && (
                      <img src={post.featuredImage.node.sourceUrl} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    )}
                  </div>
                </div>

                <div className="flex flex-col px-4 pt-4 pb-6 flex-grow">
                  <h3 className="text-[#526e87] mb-3" style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "20px", lineHeight: "123%", letterSpacing: "-0.05em" }}>
                    {post.title}
                  </h3>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.categories?.nodes?.map((cat, i) => (
                      <span key={i} className="text-black px-1.5 py-0.5" style={{ backgroundColor: "#FCBE17", fontFamily: "Inter, sans-serif", fontWeight: 500, fontStyle: "italic", fontSize: "14px", lineHeight: "123%", letterSpacing: "-0.05em" }}>
                        {cat.name}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 mb-auto">
                    <span style={{ color: "#179CBD", fontFamily: "Inter, sans-serif", fontWeight: 800, fontSize: "14px", lineHeight: "123%", letterSpacing: "-0.05em" }}>
                      {post.author?.node?.name || "Pocket Creatives"}
                    </span>
                    <span style={{ color: "#526E87", fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: "14px", lineHeight: "123%", letterSpacing: "-0.05em" }}>
                      {post.date}
                    </span>
                  </div>

                  <Link to={post.uri} className="flex items-center gap-2 text-[#526e87] hover:text-[#179cbd] transition-colors mt-6" style={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: "20px", lineHeight: "100%", letterSpacing: "-0.05em" }}>
                    Read More 
                    <svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 7.5H12M12 7.5L6.5 2M12 7.5L6.5 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogCategory;