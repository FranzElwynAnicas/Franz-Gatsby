import React, { useState, useEffect, useRef } from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import BlogRelated from "./BlogRelated";

const BlogInner = () => {
  const data = useStaticQuery(graphql`
    query BlogInnerQuery {
      headerImage: file(relativePath: { eq: "BlogHeader.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 1442, placeholder: BLURRED)
        }
      }
    }
  `);

  const headerImage = getImage(data.headerImage);

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

  const textStyle = {
    fontFamily: "Inter, sans-serif",
    fontWeight: 500,
    fontSize: "20px",
    lineHeight: "1.5",
    letterSpacing: "-0.05em",
  };

  const boldHeadingStyle = {
    ...textStyle,
    fontWeight: 700,
  };

  const tocList = (
    <ul className="flex flex-col gap-6">
      <li style={{...textStyle, color: "#000000", lineHeight: "1.2"}}>What is Treatment in Video Production?</li>
      <li style={{...textStyle, color: "#000000", lineHeight: "1.2"}}>Different Types of Video Treatments &amp; Their Use Cases</li>
      <li style={{...textStyle, color: "#000000", lineHeight: "1.2"}}>Treatment vs. Script vs. Storyboard – What's the Difference?</li>
      <li style={{...textStyle, color: "#000000", lineHeight: "1.2"}}>Why is a Video Treatment Important?</li>
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

        {/* Main Title: Black up to 1440px, Blue-Grey on 1920px (2xl) */}
        <h1 className="text-black 2xl:text-[#526E87] text-4xl md:text-5xl lg:text-[64px] xl:text-[80px] font-bold leading-[1.1] tracking-[-0.05em] max-w-[1334px] mb-8">
          What is a Treatment in Video Production? Expert Answers!
        </h1>

        {/* Meta Data */}
        <div className="flex flex-wrap items-center gap-4 md:gap-8 mb-10">
          <span className="text-[#179CBD] text-lg md:text-xl font-medium tracking-[-0.05em]">Pocket Creatives</span>
          <span className="text-[#179CBD] text-lg md:text-xl font-medium tracking-[-0.05em]">20th March 2025</span>
          <span className="bg-[#FCBE17] text-black text-lg font-medium px-8 py-2 rounded-[10px]">Video</span>
        </div>

        {/* Feature Image */}
        <div className="w-full mb-12 relative rounded-xl overflow-hidden">
          {headerImage && (
            <GatsbyImage image={headerImage} alt="What is a treatment in video production" className="w-full h-auto object-cover" />
          )}
        </div>

        {/* Article Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-10 xl:gap-16 relative items-start">
          
          {/* Table of Contents Column (Desktop Only) */}
          <aside className="hidden lg:block relative">
            
            {tocStyles.position !== "relative" && (
              <div style={{ height: `${placeholderHeight}px`, width: "300px" }} />
            )}

            <div 
              ref={tocRef}
              style={tocStyles}
              className="z-40 transition-none"
            >
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

            {/* Switched classes to text-black 2xl:text-[#526E87] */}
            <p style={textStyle} className="text-black 2xl:text-[#526E87]">
              Ever had a brilliant video idea but struggled to communicate it clearly? Whether you're planning a product video, brand film, or social media advert, ensuring everyone shares the same vision is crucial. That's where a treatment comes in.
            </p>
            <p style={textStyle} className="text-black 2xl:text-[#526E87]">
              But what is a treatment in video production? It's a concise, structured document outlining your video's concept, tone, narrative, and stylistic approach. It acts as a roadmap before scriptwriting, helping directors, clients, and production teams stay aligned.
            </p>
            <p style={textStyle} className="text-black 2xl:text-[#526E87]">
              A well-structured video treatment ensures clarity, minimises revisions, and keeps your creative vision intact. But what does it look like? And how do you write one? In this guide, we'll break down everything you need to know – from step-by-step structuring to common mistakes to avoid.
            </p>

            <h2 style={boldHeadingStyle} className="mt-6 text-black 2xl:text-[#526E87]">What is a Treatment in Video Production?</h2>
            <p style={textStyle} className="text-black 2xl:text-[#526E87]">
              A video treatment is a pre-production document that summarises a project's creative vision, story structure, and stylistic approach. It's often used before scriptwriting to define the mood, tone, and key messaging of the video.
            </p>
            <p style={textStyle} className="text-black 2xl:text-[#526E87]">A treatment is particularly useful for:</p>
            <ul className="list-disc pl-6 flex flex-col gap-3">
              <li style={textStyle} className="text-black 2xl:text-[#526E87]">Aligning stakeholders – ensuring everyone shares the same creative vision.</li>
              <li style={textStyle} className="text-black 2xl:text-[#526E87]">Pitching ideas – helping clients, investors, or internal teams approve a concept.</li>
              <li style={textStyle} className="text-black 2xl:text-[#526E87]">Minimising revisions – reducing confusion and costly reshoots during production.</li>
            </ul>

            <h2 style={boldHeadingStyle} className="mt-6 text-black 2xl:text-[#526E87]">Treatment vs. Script vs. Storyboard – What's the Difference?</h2>
            <div className="flex flex-col gap-2 mb-6">
              <p style={textStyle} className="text-black 2xl:text-[#526E87]">Document Purpose Focus</p>
              <p style={textStyle} className="text-black 2xl:text-[#526E87]">Treatment High-level concept &amp; visual style <span className="ml-4">Big-picture storytelling</span></p>
              <p style={textStyle} className="text-black 2xl:text-[#526E87]">Script Detailed dialogue &amp; scene actions <span className="ml-4">Every word &amp; movement</span></p>
              <p style={textStyle} className="text-black 2xl:text-[#526E87]">Storyboard Shot-by-shot visual representation <span className="ml-4">Camera angles &amp; flow</span></p>
            </div>

            <p style={textStyle} className="text-black 2xl:text-[#526E87]">
              If you're wondering what is a treatment in video production, it's essentially the first step to transforming an idea into a fully structured video concept.
            </p>

            <h2 style={boldHeadingStyle} className="mt-6 text-black 2xl:text-[#526E87]">Different Types of Video Treatments &amp; Their Use-Cases</h2>
            <p style={textStyle} className="text-black 2xl:text-[#526E87]">
              Not all video treatments are created equal! Depending on the type of video, a treatment can vary significantly in structure, tone, and purpose. Here's how treatments differ based on video type:
            </p>

            <div className="flex flex-col gap-6">
              <div>
                <h3 style={textStyle} className="mb-2 text-black 2xl:text-[#526E87]">Commercial Video Treatment</h3>
                <ul className="list-disc pl-6 flex flex-col gap-2">
                  <li style={textStyle} className="text-black 2xl:text-[#526E87]">Used by brands to develop advertising concepts before production.</li>
                  <li style={textStyle} className="text-black 2xl:text-[#526E87]">Focuses on storytelling, emotional triggers, and brand messaging.</li>
                  <li style={textStyle} className="text-black 2xl:text-[#526E87]">Often includes a mood board, visual style guide, and proposed call-to-action (CTA).</li>
                </ul>
              </div>
              <div>
                <h3 style={textStyle} className="mb-2 text-black 2xl:text-[#526E87]">Corporate Video Treatment</h3>
                <ul className="list-disc pl-6 flex flex-col gap-2">
                  <li style={textStyle} className="text-black 2xl:text-[#526E87]">Ideal for company overview videos, testimonials, or training content.</li>
                  <li style={textStyle} className="text-black 2xl:text-[#526E87]">Emphasises clarity, professionalism, and messaging alignment.</li>
                  <li style={textStyle} className="text-black 2xl:text-[#526E87]">Often contains structured interview segments, voice over scripting, and branding elements.</li>
                </ul>
              </div>
              <div>
                <h3 style={textStyle} className="mb-2 text-black 2xl:text-[#526E87]">Product Video Treatment</h3>
                <ul className="list-disc pl-6 flex flex-col gap-2">
                  <li style={textStyle} className="text-black 2xl:text-[#526E87]">Essential for eCommerce, product showcases, and explainer videos.</li>
                  <li style={textStyle} className="text-black 2xl:text-[#526E87]">Focuses on highlighting product features, functionality, and benefits.</li>
                  <li style={textStyle} className="text-black 2xl:text-[#526E87]">May include macro product shots, animation concepts, and demonstration sequences.</li>
                </ul>
              </div>
              <div>
                <h3 style={textStyle} className="mb-2 text-black 2xl:text-[#526E87]">Event Video Treatment</h3>
                <ul className="list-disc pl-6 flex flex-col gap-2">
                  <li style={textStyle} className="text-black 2xl:text-[#526E87]">Guides the filming of conferences, product launches, or live events.</li>
                  <li style={textStyle} className="text-black 2xl:text-[#526E87]">Details multi-camera setups, key interview shots, crowd interactions, and event highlights.</li>
                  <li style={textStyle} className="text-black 2xl:text-[#526E87]">Ensures smooth coverage with a shot list and schedule.</li>
                </ul>
              </div>
              <div>
                <h3 style={textStyle} className="mb-2 text-black 2xl:text-[#526E87]">Social Media Video Treatment</h3>
                <ul className="list-disc pl-6 flex flex-col gap-2">
                  <li style={textStyle} className="text-black 2xl:text-[#526E87]">Short-form, engaging, and highly visual.</li>
                  <li style={textStyle} className="text-black 2xl:text-[#526E87]">Optimised for Instagram Reels, TikTok, and YouTube Shorts.</li>
                  <li style={textStyle} className="text-black 2xl:text-[#526E87]">Focuses on snappy edits, eye-catching transitions, and mobile-friendly framing.</li>
                </ul>
              </div>
            </div>

            <p style={textStyle} className="text-black 2xl:text-[#526E87]">
              At Pocket Creatives, we tailor each treatment to match the brand's goals, audience, and video platform – ensuring every project delivers maximum impact! If you're still asking what is a treatment in video production, the answer is it's an essential blueprint for video success.
            </p>

            <h2 style={boldHeadingStyle} className="mt-6 text-black 2xl:text-[#526E87]">Why is a Video Treatment Important?</h2>
            <p style={textStyle} className="text-black 2xl:text-[#526E87]">
              A video production treatment isn't just a creative exercise – it's a practical tool that saves time, money, and confusion.
            </p>
            <p style={textStyle} className="text-black 2xl:text-[#526E87]">Key Benefits:</p>
            <ul className="list-disc pl-6 flex flex-col gap-3">
              <li style={textStyle} className="text-black 2xl:text-[#526E87]">Clarity &amp; Direction – A well-structured treatment eliminates misinterpretation between teams.</li>
              <li style={textStyle} className="text-black 2xl:text-[#526E87]">Client Approvals – Treatments provide a clear preview of the video's message before investing in production.</li>
              <li style={textStyle} className="text-black 2xl:text-[#526E87]">Fewer Revisions – A solid treatment reduces back-and-forth changes, cutting production delays.</li>
              <li style={textStyle} className="text-black 2xl:text-[#526E87]">Professionalism – Agencies and brands expect structured treatments before committing to large-scale projects.</li>
              <li style={textStyle} className="text-black 2xl:text-[#526E87]">Brand Consistency – A well-written treatment not only improves creative alignment but also strengthens brand consistency.</li>
            </ul>

            <p style={textStyle} className="text-black 2xl:text-[#526E87]">
              By outlining visual and messaging guidelines upfront, businesses can ensure that every video reflects their brand identity. This makes marketing efforts more cohesive across different campaigns, improving audience trust and recognition.
            </p>
            <p style={textStyle} className="text-black 2xl:text-[#526E87]">
              For example, at Pocket Creatives, when working on a crowdfunding video for a beauty brand, a treatment helped refine the product's visual story before production, avoiding costly mid-project changes.
            </p>
            <p style={textStyle} className="text-black 2xl:text-[#526E87]">So on......</p>
            
          </article>
        </div>

        <BlogRelated /> 
      </div>
    </section>
  );
};

export default BlogInner;