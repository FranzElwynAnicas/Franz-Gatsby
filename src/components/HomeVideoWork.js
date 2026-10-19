import React from "react";

const HomeVideoWork = () => {
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
          {/* Heading — natural wrapping on mobile, desktop keeps its own flow */}
          <h2 className="text-[42px] sm:text-5xl md:text-7xl lg:text-[110px] font-black leading-[1.05] md:leading-[0.95] tracking-[-0.03em] text-white">
            Take a look at some of our video work...
          </h2>

          {/* Paragraph — no forced breaks on mobile */}
          <p className="mt-8 md:mt-10 text-pocketBlack text-base sm:text-base md:text-lg font-medium leading-[1.5] md:leading-[1.6]">
            Lorem ipsum dolor sit amet consectetur. Placerat quisque feugiat porta
            <br className="hidden md:block" />
            quam ornare. In nec lacinia consectetur placerat vestibulum sem odio.
            <br className="hidden md:block" />
            In feugiat elit fames eget lobortis turpis scelerisque tincidunt. Enim.
          </p>

          {/* Mobile arrow — centered below the paragraph */}
          <div className="mt-20 flex justify-center md:hidden">
            <ChevronArrow className="w-28 sm:w-40 h-auto" />
          </div>
        </div>
      </div>

      {/* Tablet + desktop arrow */}
      <div className="hidden md:block absolute top-[60%] right-[20%] 2xl:right-[32%]">
        <ChevronArrow />
      </div>
    </section>
  );
};

const ChevronArrow = ({ className = "" }) => (
  <svg
    width="220"
    height="165"
    viewBox="0 0 214 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`animate-bounce ${className}`}
    aria-hidden="true"
  >
    <path
      d="M10 10L107 107L204 10"
      stroke="white"
      strokeWidth="20"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default HomeVideoWork;