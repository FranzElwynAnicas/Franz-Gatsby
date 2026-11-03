import * as React from "react";
import { useState, useRef } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";

const AboutServices = () => {
  const data = useStaticQuery(graphql`
    query AboutServicesQuery {
      videoImg: file(relativePath: { eq: "burgerads.png" }) {
        childImageSharp {
          gatsbyImageData(
            layout: CONSTRAINED
            width: 755
            placeholder: BLURRED
          )
        }
      }
      photoImg: file(relativePath: { eq: "photography.png" }) {
        childImageSharp {
          gatsbyImageData(
            layout: CONSTRAINED
            width: 755
            placeholder: BLURRED
          )
        }
      }
    }
  `);

  const videoImage = getImage(data.videoImg);
  const photoImage = getImage(data.photoImg);

  const [slideIndex, setSlideIndex] = useState(0);
  const dragStartX = useRef(null);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const SWIPE_THRESHOLD = 60;
  const totalSlides = 2;
  const SLIDE_WIDTH = 85;
  const SHIFT_AMOUNT = 80;

  const goNext = () => setSlideIndex((i) => Math.min(i + 1, totalSlides - 1));
  const goPrev = () => setSlideIndex((i) => Math.max(i - 1, 0));

  const handlePointerDown = (e) => {
    dragStartX.current = e.clientX ?? e.touches?.[0]?.clientX;
    setIsDragging(true);
    setDragOffset(0);
  };

  const handlePointerMove = (e) => {
    if (!isDragging || dragStartX.current === null) return;
    const x = e.clientX ?? e.touches?.[0]?.clientX;
    setDragOffset(x - dragStartX.current);
  };

  const handlePointerUp = () => {
    if (!isDragging) return;
    if (dragOffset < -SWIPE_THRESHOLD) goNext();
    else if (dragOffset > SWIPE_THRESHOLD) goPrev();
    setIsDragging(false);
    setDragOffset(0);
    dragStartX.current = null;
  };

  return (
    <section className="w-full bg-pocketWhite py-16 lg:py-20 overflow-hidden">

      {/* ============================================================ */}
      {/* MOBILE & TABLET (default, sm, md) — CAROUSEL                 */}
      {/* ============================================================ */}
      <div className="block lg:hidden">
        <div
          className="relative overflow-hidden"
          style={{ touchAction: "pan-y" }}
          onMouseDown={handlePointerDown}
          onMouseMove={handlePointerMove}
          onMouseUp={handlePointerUp}
          onMouseLeave={handlePointerUp}
          onTouchStart={handlePointerDown}
          onTouchMove={handlePointerMove}
          onTouchEnd={handlePointerUp}
        >
          <div
            className="flex items-start gap-6"
            style={{
              transform: `translateX(calc(-${slideIndex * SHIFT_AMOUNT}% + ${dragOffset}px))`,
              transition: isDragging
                ? "none"
                : "transform 500ms cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          >
            {/* ─── Slide 1 ─── */}
            <div className="shrink-0 pl-6 pr-0 py-8 md:py-16" style={{ width: `${SLIDE_WIDTH}%` }}>
              <h2 className="font-inter text-left text-[40px] font-extrabold leading-[100%] tracking-[-0.05em] text-black mb-6">
                We're a <span className="text-[#55C8E4]">video production</span> company
              </h2>
              <div className="font-inter font-medium text-[20px] leading-[120%] tracking-[-0.05em] text-black space-y-5 text-justify">
                <p>As a video production company, we deliver high quality and engaging content for commercial, corporate, and promotional use. We create TV adverts, brand films, promotional videos, crowdfunding campaign videos, and video content for social media. Our professional video team knows how to craft the right elements together to convey your messages and tell your story.</p>
                <p>What are you looking for in a video production company? If it's a creative team who are trustworthy, knowledgeable, enjoyable to work with and well-priced, then we might just be the right fit for you.</p>
              </div>
              <div className="mt-8 flex justify-center">
                {videoImage && (
                  <GatsbyImage
                    image={videoImage}
                    alt="Video production studio setup"
                    className="w-[85%] md:w-[75%] h-auto object-cover"
                  />
                )}
              </div>
            </div>

            {/* ─── Slide 2 ─── */}
            <div className="shrink-0 px-0 py-8 md:py-16 flex flex-col justify-start items-start text-left" style={{ width: `${SLIDE_WIDTH}%` }}>
              <div className="mb-8 flex justify-start w-full">
                {photoImage && (
                  <GatsbyImage
                    image={photoImage}
                    alt="Photographer capturing food on a table"
                    className="w-[85%] md:w-[75%] h-auto object-cover"
                  />
                )}
              </div>
              <h2 className="font-inter text-left text-[40px] font-extrabold leading-[100%] tracking-[-0.05em] text-black mb-6">
                and a <span className="text-[#FCBE17]">photography company</span> too…
              </h2>
              <div className="font-inter font-medium text-[20px] leading-[120%] tracking-[-0.05em] text-black space-y-5 text-justify">
                <p>As a photography company, we're able to squeeze every pixel to deliver images that perform. A photographer must know how to communicate, and view a project from different perspectives, knowing how to create images that jump out and catch attention. We strive to do just that. We offer product photography, people photography and lifestyle photography across a wide range of sectors.</p>
                <p>As a content creation company, we know how to give you the best of both worlds: through the use of video production to tell a story across multiple shots, or where a single photograph has to say it all.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* DESKTOP (lg, xl, 2xl) — Fully Clamped Layout                 */}
      {/* ============================================================ */}
      <div className="hidden lg:block w-full">
        
        {/* Top row */}
        <div className="w-full grid grid-cols-[1fr_1.15fr] items-start mb-8 relative z-10 gap-6 xl:gap-10 2xl:gap-16">
          
          {/* Text Container */}
          <div className="flex justify-end py-4 pl-6 2xl:pl-12">
            <div className="w-full max-w-[clamp(450px,42vw,740px)] flex flex-col gap-6">
              <h2 className="font-inter text-left text-[clamp(24px,2.5vw,40px)] font-extrabold xl:font-normal leading-[100%] tracking-[-0.05em] text-black xl:text-[#526E87]">
                We're a <span className="text-[#55C8E4] xl:text-[#179CBD] xl:font-extrabold">video production</span> company
              </h2>
              <div className="font-inter font-medium text-[clamp(13px,1.2vw,20px)] leading-[1.25] tracking-[-0.05em] text-black xl:text-[#526E87] text-left xl:text-justify space-y-4">
                <p>As a video production company, we deliver high quality and engaging content for commercial, corporate, and promotional use. We create TV adverts, brand films, promotional videos, crowdfunding campaign videos, and video content for social media. Our professional video team knows how to craft the right elements together to convey your messages and tell your story.</p>
                <p>What are you looking for in a video production company? If it's a creative team who are trustworthy, knowledgeable, enjoyable to work with and well-priced, then we might just be the right fit for you.</p>
              </div>
            </div>
          </div>
          
          {/* Top Photo Image */}
          <div className="flex justify-end w-full">
            {photoImage && (
              <GatsbyImage 
                image={photoImage} 
                alt="Photographer capturing food on a table" 
                className="w-[clamp(300px,40vw,755px)] h-auto object-cover"
              />
            )}
          </div>
        </div>

        {/* Bottom row */}
        <div className="w-full grid grid-cols-[1.15fr_1fr] items-center -mt-[clamp(2rem,5vw,6rem)] relative z-20 gap-6 xl:gap-10 2xl:gap-16">
          
          {/* Bottom Video Image */}
          <div className="flex justify-start w-full">
            {videoImage && (
              <GatsbyImage 
                image={videoImage} 
                alt="Video production studio setup" 
                className="w-[clamp(300px,40vw,755px)] h-auto object-cover"
              />
            )}
          </div>
          
          {/* Text Container — Added margin top to push it downwards */}
          <div className="flex justify-start py-4 pr-6 2xl:pr-12 mt-4 xl:mt-16 2xl:mt-24">
            <div className="w-full max-w-[clamp(480px,45vw,816px)] flex flex-col gap-6">
              <h2 className="font-inter text-left text-[clamp(24px,2.5vw,40px)] font-extrabold xl:font-normal leading-[100%] tracking-[-0.05em] text-black xl:text-[#526E87]">
                and a <span className="text-[#FCBE17] xl:text-[#179CBD] xl:font-extrabold">photography company</span> too…
              </h2>
              <div className="w-full font-inter font-medium text-[clamp(13px,1.2vw,20px)] leading-[1.25] tracking-[-0.05em] text-black xl:text-[#526E87] text-left xl:text-justify space-y-4">
                <p>As a photography company, we're able to squeeze every pixel to deliver images that perform. A photographer must know how to communicate, and view a project from different perspectives, knowing how to create images that jump out and catch attention. We strive to do just that. We offer product photography, people photography and lifestyle photography across a wide range of sectors.</p>
                <p>As a content creation company, we know how to give you the best of both worlds: through the use of video production to tell a story across multiple shots, or where a single photograph has to say it all.</p>
              </div>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
};

export default AboutServices;