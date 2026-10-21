import * as React from "react";
import { useState, useRef } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";

const ServicesProcess2 = () => {
  const data = useStaticQuery(graphql`
    query ServicesProcess2ImagesQuery {
      preProdImg: file(relativePath: { eq: "girls-meeting.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 1147, height: 528, placeholder: BLURRED)
        }
      }
      prodImg: file(relativePath: { eq: "girl-makeup.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 1147, height: 528, placeholder: BLURRED)
        }
      }
      postProdImg: file(relativePath: { eq: "videoedit.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 1147, height: 528, placeholder: BLURRED)
        }
      }
    }
  `);

  const preProdImage = getImage(data.preProdImg);
  const prodImage = getImage(data.prodImg);
  const postProdImage = getImage(data.postProdImg);

  // Mobile Carousel State
  const [slideIndex, setSlideIndex] = useState(0);
  const dragStartX = useRef(null);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const SWIPE_THRESHOLD = 60;
  const totalSlides = 3;
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

  // Reusable typographic components (Black on Mobile, #526E87 on Desktop)
  const StepTitle = ({ children }) => (
    <h3 
      className="font-extrabold mb-3 text-black lg:text-[#526E87]"
      style={{ fontSize: "30px", lineHeight: "100%", letterSpacing: "-0.05em" }}
    >
      {children}
    </h3>
  );

  const StepSubtitle = ({ children }) => (
    <h4 
      className="font-medium mb-6 text-black lg:text-[#526E87]"
      style={{ fontSize: "20px", lineHeight: "100%", letterSpacing: "-0.05em" }}
    >
      {children}
    </h4>
  );

  const StepBody = ({ children }) => (
    <p 
      className="font-medium text-black lg:text-[#526E87]"
      style={{ fontSize: "20px", lineHeight: "120%", letterSpacing: "-0.05em" }}
    >
      {children}
    </p>
  );

  const steps = [
    {
      title: "Pre-production",
      subtitle: "Meeting & Planning",
      text: "Lorem ipsum dolor sit amet consectetur. Morbi mi elit vulputate aliquet amet. Consectetur imperdiet ac tortor urna. Amet convallis cras amet tortor massa odio consectetur. Nunc egestas euismod odio ullamcorper. Risus pharetra massa quam tincidunt odio senectus nunc pulvinar nisl. Commodo mattis quis mauris libero aliquet nunc quis aliquam. Ultricies.",
      image: preProdImage,
      alt: "Pre-production planning and meeting",
    },
    {
      title: "Production",
      subtitle: "Lights, Camera, Action",
      text: "Lorem ipsum dolor sit amet consectetur. Morbi mi elit vulputate aliquet amet. Consectetur imperdiet ac tortor urna. Amet convallis cras amet tortor massa odio consectetur. Nunc egestas euismod odio ullamcorper. Risus pharetra massa quam tincidunt odio senectus nunc pulvinar nisl. Commodo mattis quis mauris libero aliquet nunc quis aliquam. Ultricies.",
      image: prodImage,
      alt: "Production makeup application",
    },
    {
      title: "Post-production",
      subtitle: "Review & Edit",
      text: "Lorem ipsum dolor sit amet consectetur. Morbi mi elit vulputate aliquet amet. Consectetur imperdiet ac tortor urna. Amet convallis cras amet tortor massa odio consectetur. Nunc egestas euismod odio ullamcorper. Risus pharetra massa quam tincidunt odio senectus nunc pulvinar nisl. Commodo mattis quis mauris libero aliquet nunc quis aliquam. Ultricies.",
      image: postProdImage,
      alt: "Post-production video editing",
    }
  ];

  return (
    <section className="w-full bg-[#F5F5F5] py-16 md:py-24 overflow-hidden">
      
      {/* HEADING */}
      <div className="px-6 md:px-12 max-w-[1280px] mx-auto mb-16 md:mb-24">
        <h2 
          className="font-extrabold text-black lg:whitespace-nowrap lg:text-transparent"
          style={{ fontSize: "clamp(32px, 4.2vw, 75px)", lineHeight: "100%", letterSpacing: "-0.05em" }}
        >
          <span className="lg:text-[#179CBD]">The process:</span>{" "}
          <span className="lg:text-[#FCBE17]">making it easy for you</span>
        </h2>
      </div>

      {/* ============================================================ */}
      {/* MOBILE — Swipeable Carousel                                    */}
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
            {steps.map((step, index) => {
              const isTextFirst = index === 0 || index === 2;

              const TextContent = (
                <div className="w-full">
                  <StepTitle>{step.title}</StepTitle>
                  <StepSubtitle>{step.subtitle}</StepSubtitle>
                  <StepBody>{step.text}</StepBody>
                </div>
              );

              const ImageContent = (
                <div className="w-full">
                  {step.image && (
                    <GatsbyImage
                      image={step.image}
                      alt={step.alt}
                      className="w-full h-[200px] object-cover"
                    />
                  )}
                </div>
              );

              return (
                <div 
                  key={index} 
                  className="shrink-0 px-6 py-8 flex flex-col gap-8" 
                  style={{ width: `${SLIDE_WIDTH}%` }}
                >
                  {isTextFirst ? (
                    <>
                      {TextContent}
                      {ImageContent}
                    </>
                  ) : (
                    <>
                      {ImageContent}
                      {TextContent}
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* DESKTOP — Fluid Edge-to-Edge Layout                            */}
      {/* ============================================================ */}
      <div className="hidden lg:block w-full">
        
        {/* Row 1: Pre-production Text & Pre-production Image (Right) */}
        <div className="flex items-center mb-24 w-full">
          <div className="w-[40%] flex justify-end pr-12 xl:pr-24 pl-6">
            <div className="max-w-[450px] w-full">
              <StepTitle>{steps[0].title}</StepTitle>
              <StepSubtitle>{steps[0].subtitle}</StepSubtitle>
              <StepBody>{steps[0].text}</StepBody>
            </div>
          </div>
          <div className="w-[60%] flex justify-start ml-auto">
            {steps[0].image && (
              <GatsbyImage
                image={steps[0].image}
                alt={steps[0].alt}
                className="w-[calc(50vw+300px)] h-[528px] object-cover max-w-full rounded-r-sm" 
              />
            )}
          </div>
        </div>

        {/* Row 2: Camera Image (Left) & Production Text */}
        <div className="flex items-center mb-24 w-full">
          <div className="w-[60%] flex justify-end mr-auto">
            {steps[1].image && (
              <GatsbyImage
                image={steps[1].image}
                alt={steps[1].alt}
                className="w-[calc(50vw+300px)] h-[528px] object-cover max-w-full rounded-l-sm"
              />
            )}
          </div>
          <div className="w-[40%] flex justify-start pl-12 xl:pl-24 pr-6">
            <div className="max-w-[450px] w-full">
              <StepTitle>{steps[1].title}</StepTitle>
              <StepSubtitle>{steps[1].subtitle}</StepSubtitle>
              <StepBody>{steps[1].text}</StepBody>
            </div>
          </div>
        </div>

        {/* Row 3: Post-production Text & Post-production Image (Right) */}
        <div className="flex items-center w-full">
          <div className="w-[40%] flex justify-end pr-12 xl:pr-24 pl-6">
            <div className="max-w-[450px] w-full">
              <StepTitle>{steps[2].title}</StepTitle>
              <StepSubtitle>{steps[2].subtitle}</StepSubtitle>
              <StepBody>{steps[2].text}</StepBody>
            </div>
          </div>
          <div className="w-[60%] flex justify-start ml-auto">
            {steps[2].image && (
              <GatsbyImage
                image={steps[2].image}
                alt={steps[2].alt}
                className="w-[calc(50vw+300px)] h-[528px] object-cover max-w-full rounded-r-sm"
              />
            )}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServicesProcess2;