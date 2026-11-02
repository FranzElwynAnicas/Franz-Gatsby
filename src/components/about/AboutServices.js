import * as React from "react";
import { useState, useRef } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";

const AboutServices = () => {
  const data = useStaticQuery(graphql`
    query AboutServicesQuery {
      videoImg: file(relativePath: { eq: "burgerads.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, width: 718, height: 529, placeholder: BLURRED)
        }
      }
      photoImg: file(relativePath: { eq: "photography.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, width: 755, height: 529, placeholder: BLURRED)
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
    <section className="w-full bg-pocketWhite md:py-20 overflow-hidden">

      {/* ============================================================ */}
      {/* MOBILE — 2 slides, peek, alternating text/image order          */}
      {/* ============================================================ */}
      <div className="lg:hidden">
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
            className="flex items-start"
            style={{
              transform: `translateX(calc(-${slideIndex * SLIDE_WIDTH}% + ${dragOffset}px))`,
              transition: isDragging
                ? "none"
                : "transform 500ms cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          >
            {/* ─── Slide 1: Video Production — text first, image below ─── */}
            <div className="shrink-0 px-6 py-16" style={{ width: `${SLIDE_WIDTH}%` }}>
              <h2 className="font-inter text-left text-[32px] font-normal leading-[100%] tracking-[-0.05em] text-black mb-6">
                We're a <span className="font-extrabold text-[#179CBD]">video production</span><br />
                company
              </h2>
              <div className="font-inter font-medium text-[16px] leading-[1.4] tracking-[-0.05em] text-black space-y-5">
                <p>As a video production company, we deliver high quality and engaging content for commercial, corporate, and promotional use. We create TV adverts, brand films, promotional videos, crowdfunding campaign videos, and video content for social media. Our professional video team knows how to craft the right elements together to convey your messages and tell your story.</p>
                <p>What are you looking for in a video production company? If it's a creative team who are trustworthy, knowledgeable, enjoyable to work with and well-priced, then we might just be the right fit for you.</p>
              </div>
              <div className="mt-8 flex justify-center">
                {videoImage && (
                  <GatsbyImage
                    image={videoImage}
                    alt="Video production studio setup"
                    className="w-[75%] h-auto object-cover"
                  />
                )}
              </div>
            </div>

            {/* ─── Slide 2: Photography — image above, text below ─── */}
            <div className="shrink-0 px-6 py-16" style={{ width: `${SLIDE_WIDTH}%` }}>
              <div className="mb-8 flex justify-center">
                {photoImage && (
                  <GatsbyImage
                    image={photoImage}
                    alt="Photographer capturing food on a table"
                    className="w-[75%] h-auto object-cover"
                  />
                )}
              </div>
              <h2 className="font-inter text-left text-[32px] font-normal leading-[100%] tracking-[-0.05em] text-black mb-6">
                and a <span className="font-bold text-[#179CBD]">photography company</span> too…
              </h2>
              <div className="font-inter font-medium text-[16px] leading-[1.4] tracking-[-0.05em] text-black space-y-5">
                <p>As a photography company, we're able to squeeze every pixel to deliver images that perform. A photographer must know how to communicate, and view a project from different perspectives, knowing how to create images that jump out and catch attention. We strive to do just that. We offer product photography, people photography and lifestyle photography across a wide range of sectors.</p>
                <p>As a content creation company, we know how to give you the best of both worlds: through the use of video production to tell a story across multiple shots, or where a single photograph has to say it all.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* DESKTOP — completely unchanged                                */}
      {/* ============================================================ */}
      <div className="hidden lg:block">
        {/* Top row */}
        <div className="w-full flex flex-row items-start justify-between mb-12">
          <div className="w-1/2 flex justify-end pr-4 xl:pr-8 ml-[120px]">
            <div className="w-full max-w-[850px] flex flex-col items-end gap-6">
              <div className="w-[740px]">
                <h2 className="font-inter text-left text-[40px] font-normal leading-[100%] tracking-[-0.05em] text-[#526E87]">
                  We're a <span className="font-extrabold text-[#179CBD]">video production</span><br />
                  company
                </h2>
              </div>
              <div className="w-[740px] min-h-[216px] font-inter font-medium text-[20px] leading-[1.2] tracking-[-0.05em] text-[#526E87]">
                <div className="mb-6 flex flex-col">
                  <span className="block w-full text-justify [text-justify:inter-word] [text-align-last:justify]">As a video production company, we deliver high quality and engaging content for</span>
                  <span className="block w-full text-justify [text-justify:inter-word] [text-align-last:justify]">commercial, corporate, and promotional use. We create TV adverts, brand films,</span>
                  <span className="block w-full text-justify [text-justify:inter-word] [text-align-last:justify]">promotional videos, crowdfunding campaign videos, and video content for social</span>
                  <span className="block w-full text-justify [text-justify:inter-word] [text-align-last:justify]">media. Our professional video team knows how to craft the right elements together to</span>
                  <span className="block w-full text-justify [text-justify:inter-word] [text-align-last:left]">convey your messages and tell your story.</span>
                </div>
                <div className="flex flex-col">
                  <span className="block w-full text-justify [text-justify:inter-word] [text-align-last:justify]">What are you looking for in a video production company? If it's a creative team who</span>
                  <span className="block w-full text-justify [text-justify:inter-word] [text-align-last:justify]">are trustworthy, knowledgeable, enjoyable to work with and well-priced, then we </span>
                  <span className="block w-full text-justify [text-justify:inter-word] [text-align-last:left]">might just be the right fit for you.</span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2 flex justify-end">
            {photoImage && (
              <GatsbyImage image={photoImage} alt="Photographer capturing food on a table" className="w-[755px] h-[529px] flex-shrink-0 object-cover" />
            )}
          </div>
        </div>

        {/* Bottom row */}
        <div className="w-full flex flex-row items-center -mt-24">
          <div className="w-1/2 flex justify-start">
            {videoImage && (
              <GatsbyImage image={videoImage} alt="Video production studio setup" className="w-[718px] h-[529px] flex-shrink-0 object-cover" />
            )}
          </div>
          <div className="w-1/2 flex justify-start items-center pl-12 -ml-32 relative z-10">
            <div className="w-full max-w-[850px] flex flex-col gap-6">
              <h2 className="font-inter text-left text-[40px] font-normal leading-[100%] tracking-[-0.05em] text-[#526E87]">
                and a <span className="font-bold text-[#179CBD]">photography company</span> too…
              </h2>
              <div className="w-[816px] min-h-[216px] font-inter font-medium text-[20px] leading-[1.2] tracking-[-0.05em] text-[#526E87]">
                <div className="mb-6 flex flex-col">
                  <span className="block w-full text-justify [text-justify:inter-word] [text-align-last:justify]">As a photography company, we're able to squeeze every pixel to deliver images that perform.</span>
                  <span className="block w-full text-justify [text-justify:inter-word] [text-align-last:justify]">A photographer must know how to communicate, and view a project from different</span>
                  <span className="block w-full text-justify [text-justify:inter-word] [text-align-last:justify]">perspectives, knowing how to create images that jump out and catch attention. We strive to do</span>
                  <span className="block w-full text-justify [text-justify:inter-word] [text-align-last:justify]">just that. We offer product photography, people photography and lifestyle photography across</span>
                  <span className="block w-full text-justify [text-justify:inter-word] [text-align-last:left]">a wide rangeof sectors.</span>
                </div>
                <div className="flex flex-col">
                  <span className="block w-full text-justify [text-justify:inter-word] [text-align-last:justify]">As a content creation company, we know how to give you the best of both worlds: through the</span>
                  <span className="block w-full text-justify [text-justify:inter-word] [text-align-last:justify]">use of video production to tell a story across multiple shots, or where a single photograph has</span>
                  <span className="block w-full text-justify [text-justify:inter-word] [text-align-last:left]">to say it all.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default AboutServices;