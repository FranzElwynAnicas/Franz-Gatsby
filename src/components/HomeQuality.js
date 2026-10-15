import React from "react";

const QualitySection = () => {
  return (
    <section className="w-full min-h-screen bg-pocketTeal flex items-center">
      <div className="w-full py-20">
        <div className="pl-[12.5%] pr-8 md:pr-16">
          {/* Heading — forced 2 lines */}
          <h2 className="text-5xl md:text-7xl lg:text-[120px] font-black leading-[0.85] tracking-[-0.05em] text-white">
            We <span className="text-pocketYellow">squeeze</span> quality into
            <br />
            every pixel...
          </h2>

          {/* Paragraph + right text */}
          <div className="mt-16 md:mt-24 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Left paragraph — 3 forced lines */}
            <p className="text-pocketBlack text-base md:text-[20px] font-medium leading-[1.7]">
              Lorem ipsum dolor sit amet consectetur. Placerat quisque feugiat porta
              <br className="hidden md:block" />
              quam ornare. In nec lacinia consectetur placerat vestibulum sem odio.
              <br className="hidden md:block" />
              In feugiat elit fames eget lobortis turpis scelerisque tincidunt. Enim.
            </p>

            {/* Right paragraph — white bold */}
            <p className="text-white text-2xl md:text-3xl lg:text-[40px] font-extrabold leading-[1.1] tracking-[-0.02em] max-w-[540px]">
              See some of our Photography work for different industries below.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualitySection;