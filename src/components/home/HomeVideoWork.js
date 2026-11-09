import React from "react";

const HomeVideoWork = ({ videoHeading, videoParagraph }) => {
  return (
    <section
      className="
        relative w-full bg-pocketYellow
        flex items-center
        min-h-screen
        py-20 sm:py-24 md:py-28
        overflow-hidden
      "
    >
      <div className="w-full px-6 sm:px-10 md:px-16 lg:px-24">
        <div className="max-w-[1400px] mx-auto md:pl-12 lg:pl-24">
          
          {/* Dynamic Heading */}
          <h2 className="text-[42px] sm:text-5xl md:text-7xl lg:text-[110px] font-black leading-[1.05] md:leading-[0.95] tracking-[-0.03em] text-white">
            {videoHeading ? (
              <div dangerouslySetInnerHTML={{ __html: videoHeading }} />
            ) : (
              "Take a look at some of our video work..."
            )}
          </h2>

          {/* Dynamic Paragraph */}
          <div className="video-work-paragraph mt-8 md:mt-10 text-pocketBlack text-base sm:text-base md:text-lg font-medium leading-[1.5] md:leading-[1.6] max-w-2xl">
            {videoParagraph ? (
              <div dangerouslySetInnerHTML={{ __html: videoParagraph }} />
            ) : (
              "Lorem ipsum dolor sit amet consectetur. Placerat quisque feugiat porta quam ornare. In nec lacinia consectetur placerat vestibulum sem odio. In feugiat elit fames eget lobortis turpis scelerisque tincidunt. Enim."
            )}
          </div>

          {/* Arrow */}
          <div className="mt-20 flex justify-center xl:hidden">
            <MobileChevronArrow className="w-32 sm:w-44 md:w-56 lg:w-64 h-auto" />
          </div>
        </div>
      </div>

      {/* Desktop Arrow */}
      <div className="hidden xl:block absolute top-[60%] translate-y-16 right-[20%] 2xl:right-[32%]">
        <DesktopChevronArrow className="w-[190px] h-auto 2xl:w-[214px]" />
      </div>
    </section>
  );
};

// --- DESKTOP ARROW (xl+) ---
const DesktopChevronArrow = ({ className = "" }) => (
  <svg width="214" height="246" viewBox="0 0 214 246" xmlns="http://www.w3.org/2000/svg" className={`animate-bounce ${className}`} aria-hidden="true">
    <path d="M10 10L107 107L204 10" fill="none" stroke="white" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// --- MOBILE / TABLET / LG ARROW ---
const MobileChevronArrow = ({ className = "" }) => (
  <svg viewBox="0 0 214 127" xmlns="http://www.w3.org/2000/svg" className={`animate-bounce ${className}`} aria-hidden="true">
    <path d="M10 10L107 107L204 10" fill="none" stroke="white" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default HomeVideoWork;