import React from "react";

const QualitySection = () => {
  return (
    <section className="w-full min-h-screen bg-pocketTeal flex items-center overflow-hidden">
      <div className="w-full py-16 lg:py-20">
        {/* Padding: Mobile by default, Desktop offset at lg */}
        <div className="px-6 lg:pl-[12.5%] lg:pr-16">
          
          {/* Heading — natural wrapping on mobile, forced 2 lines from md up */}
          <h2 className="text-[42px] sm:text-5xl md:text-7xl lg:text-[80px] xl:text-[100px] font-black leading-[1.05] md:leading-[0.9] lg:leading-[0.85] tracking-[-0.03em] xl:tracking-[-0.04em] text-white">
            We <span className="text-pocketYellow">squeeze</span> quality into
            <br className="hidden md:block" />
            {" "}every pixel...
          </h2>

          {/* Paragraphs — stacked on mobile/md, side-by-side on desktop */}
          <div className="mt-10 lg:mt-24 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            
            {/* Left paragraph (Black, Regular) */}
            <p className="text-pocketBlack text-base lg:text-[20px] font-medium leading-[1.5] lg:leading-[1.7]">
              Lorem ipsum dolor sit amet consectetur. Placerat quisque feugiat porta
              quam ornare. In nec lacinia consectetur placerat vestibulum sem odio.
              In feugiat elit fames eget lobortis turpis scelerisque tincidunt. Enim.
            </p>

            {/* Right paragraph (White, Bold) */}
            <p className="text-white text-2xl sm:text-3xl lg:text-[40px] font-extrabold leading-[1.15] lg:leading-[1.1] tracking-[-0.02em] lg:max-w-[540px]">
              See some of our Photography work for different industries below.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualitySection;