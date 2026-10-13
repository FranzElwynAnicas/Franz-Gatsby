import React from "react";

const VideoWorkSection = () => {
  return (
    <section className="w-full min-h-screen bg-pocketYellow flex items-center relative">
      <div className="w-full px-6 md:px-16 lg:px-24">
        <div className="max-w-[1400px] mx-auto pl-0 md:pl-12 lg:pl-24">
          {/* Heading */}
          <h2 className="text-5xl md:text-7xl lg:text-[110px] font-black leading-[0.95] tracking-[-0.03em] text-white">
            Take a look at some
            <br />
            of our video work...
          </h2>

          {/* Paragraph — 3 lines, forced breaks */}
          <p className="mt-8 md:mt-10 text-pocketBlack text-base md:text-lg leading-[1.6]">
            Lorem ipsum dolor sit amet consectetur. Placerat quisque feugiat porta
            <br className="hidden md:block" />
            quam ornare. In nec lacinia consectetur placerat vestibulum sem odio.
            <br className="hidden md:block" />
            In feugiat elit fames eget lobortis turpis scelerisque tincidunt. Enim.
          </p>
        </div>
      </div>

      {/* Arrow — absolutely positioned, doesn't affect text */}
      <div className="hidden md:block absolute right-[25%] lg:right-[32%] bottom-24 lg:bottom-40">
        <svg
          width="200"
          height="150"
          viewBox="0 0 214 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="animate-bounce"
        >
          <path
            d="M10 10L107 107L204 10"
            stroke="white"
            strokeWidth="20"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
};

export default VideoWorkSection;