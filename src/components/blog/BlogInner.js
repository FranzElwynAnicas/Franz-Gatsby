import React, { useState, useEffect, useRef } from "react";
import { Link } from "gatsby";
import BlogRelated from "./BlogRelated";

const BlogInner = ({ post, relatedPosts }) => {
  // Get the featured image from WordPress
  const featuredImage = post.featuredImage ? post.featuredImage.node.sourceUrl : null;
  
  // State for the dynamic Table of Contents
  const [toc, setToc] = useState([]);

  // --- STICKY / CLAMPING LOGIC ---
  const [tocStyles, setTocStyles] = useState({ 
    position: "relative", 
    top: "auto", 
    left: "auto", 
    width: "300px" 
  });
  const [placeholderHeight, setPlaceholderHeight] = useState(0);

  const tocRef = useRef(null);
  const articleRef = useRef(null);

  // 1. AUTOMATICALLY GENERATE TOC FROM WORDPRESS H2 TAGS
  useEffect(() => {
    // Wait a moment for the WordPress HTML to render into the DOM
    const timer = setTimeout(() => {
      if (!articleRef.current) return;
      
      // Find all H2 tags inside the article
      const headings = articleRef.current.querySelectorAll("h2");
      const tocItems = [];

      headings.forEach((heading, index) => {
        // Create a unique ID for the heading if it doesn't have one
        const id = heading.id || `heading-${index}`;
        heading.id = id; // Assign the ID so we can scroll to it
        
        tocItems.push({
          id: id,
          text: heading.innerText,
        });
      });

      setToc(tocItems);
    }, 100);

    return () => clearTimeout(timer);
  }, [post.content]);

  // 2. SCROLL LOGIC FOR THE STICKY SIDEBAR
  useEffect(() => {
    const handleScroll = () => {
      if (!tocRef.current || !articleRef.current) return;

      const tocHeight = tocRef.current.offsetHeight;
      setPlaceholderHeight(tocHeight);

      const articleRect = articleRef.current.getBoundingClientRect();
      const topOffset = 0; 
      const bottomGap = 40; 

      const isPastTop = articleRect.top <= topOffset;
      const remainingSpace = articleRect.bottom - topOffset;
      const isPastBottom = remainingSpace <= tocHeight + bottomGap;

      if (isPastBottom) {
        const articleHeight = articleRef.current.offsetHeight;
        const clampTop = articleHeight - tocHeight - bottomGap;
        
        setTocStyles({
          position: "absolute",
          top: `${Math.max(0, clampTop)}px`,
          left: "0px",
          width: "300px",
        });
      } else if (isPastTop) {
        const asideRect = tocRef.current.parentElement.getBoundingClientRect();
        setTocStyles({
          position: "fixed",
          top: `${topOffset}px`,
          width: "300px",
          left: `${asideRect.left}px`, 
        });
      } else {
        setTocStyles({
          position: "relative",
          top: "auto",
          left: "auto",
          width: "300px",
        });
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    const timeout = setTimeout(handleScroll, 50);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      clearTimeout(timeout);
    };
  }, []);
  // -------------------------------

  // 3. RENDER THE DYNAMIC TOC LIST
  const tocList = (
    <ul className="flex flex-col gap-4">
      {toc.length > 0 ? (
        toc.map((item) => (
          <li key={item.id}>
            <a 
              href={`#${item.id}`} 
              className="text-black font-medium hover:text-[#179CBD] transition-colors"
              style={{ fontFamily: "Inter, sans-serif", fontSize: "16px", lineHeight: "1.4", letterSpacing: "-0.05em" }}
            >
              {item.text}
            </a>
          </li>
        ))
      ) : (
        <p className="text-sm font-medium text-black">Scroll to read the article...</p>
      )}
    </ul>
  );

  return (
    <section className="w-full bg-white py-12 px-4 md:px-8 lg:px-16 font-inter">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Back to blogs link */}
        <Link to="/blog" className="mb-6 flex items-center gap-2 cursor-pointer w-fit group">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform group-hover:-translate-x-1 transition-transform">
            <path d="M2.46659 6.52112C2.17402 6.22855 2.17402 5.75341 2.46659 5.46083L6.96052 0.966908C7.25309 0.674335 7.72823 0.674335 8.0208 0.966908C8.31338 1.25948 8.31338 1.73462 8.0208 2.02719L4.05585 5.99215L8.01846 9.9571C8.31104 10.2497 8.31104 10.7248 8.01846 11.0174C7.72589 11.31 7.25075 11.31 6.95818 11.0174L2.46425 6.52346L2.46659 6.52112Z" fill="#179CBD"/>
          </svg>
          <span className="text-[#179CBD] text-base font-medium leading-none tracking-[-0.05em]">Go back to blogs</span>
        </Link>

        {/* DYNAMIC TITLE */}
        <h1 className="text-black 2xl:text-[#526E87] text-4xl md:text-5xl lg:text-[64px] xl:text-[80px] font-bold leading-[1.1] tracking-[-0.05em] max-w-[1334px] mb-8">
          {post.title}
        </h1>

        {/* DYNAMIC META DATA */}
        <div className="flex flex-wrap items-center gap-4 md:gap-8 mb-10">
          <span className="text-[#179CBD] text-lg md:text-xl font-medium tracking-[-0.05em]">
            {post.author?.node?.name || "Pocket Creatives"}
          </span>
          <span className="text-[#179CBD] text-lg md:text-xl font-medium tracking-[-0.05em]">{post.date}</span>
          
          {/* Render Categories dynamically if they exist */}
          {post.categories?.nodes?.map((cat, i) => (
            <span key={i} className="bg-[#FCBE17] text-black text-lg font-medium px-6 py-2 rounded-[10px]">
              {cat.name}
            </span>
          ))}
        </div>

        {/* DYNAMIC FEATURED IMAGE */}
        {featuredImage && (
          <div className="w-full mb-12 relative rounded-xl overflow-hidden">
            <img src={featuredImage} alt={post.title} className="w-full h-auto object-cover" />
          </div>
        )}

        {/* Article Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-10 xl:gap-16 relative items-start">
          
          {/* Table of Contents Column (Desktop Only) */}
          <aside className="hidden lg:block relative">
            {tocStyles.position !== "relative" && (
              <div style={{ height: `${placeholderHeight}px`, width: "300px" }} />
            )}
            <div ref={tocRef} style={tocStyles} className="z-40 transition-none">
              <div className="bg-[#FCBE17] p-8 rounded-sm flex flex-col gap-6">
                <h3 style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "20px", lineHeight: "100%", letterSpacing: "-0.05em", color: "#000000" }}>
                  Table of Contents
                </h3>
                {tocList}
              </div>
            </div>
          </aside>

          {/* Main Text Content */}
          <article ref={articleRef} className="flex flex-col gap-6">
            
            {/* Mobile/Tablet Table of Contents */}
            <div className="block lg:hidden w-full mb-4">
              <div className="bg-[#FCBE17] p-6 rounded-sm flex flex-col gap-4">
                <h3 style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "20px", lineHeight: "100%", letterSpacing: "-0.05em", color: "#000000" }}>
                  Table of Contents
                </h3>
                {tocList}
              </div>
            </div>

            {/* DYNAMIC CONTENT FROM WORDPRESS */}
            <div 
              className="wordpress-content text-black 2xl:text-[#526E87]" 
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: "20px", lineHeight: "1.5", letterSpacing: "-0.05em" }}
              dangerouslySetInnerHTML={{ __html: post.content }} 
            />
            
          </article>
        </div>

        <BlogRelated relatedPosts={relatedPosts} /> 
      </div>
    </section>
  );
};

export default BlogInner;