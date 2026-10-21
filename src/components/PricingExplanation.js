import React from "react";

const PricingExplanation = () => {
  return (
    <section className="w-full bg-[#179cbd] py-16 md:py-32 overflow-hidden">
      {/* Container limits max width and adds padding so it never touches the edges */}
      <div className="w-full max-w-[1280px] mx-auto px-6 md:px-12">
        
        {/* First Block: Cheap or Expensive? */}
        <div className="mb-16 md:mb-24">
          
          {/* Yellow Title Box */}
          <div 
            className="flex items-center justify-center lg:justify-start bg-[#FCBE17] mb-6 md:mb-10 w-full lg:w-[849px] h-auto lg:h-[128px] py-6 lg:py-0 px-6 lg:px-[23px]"
          >
            <h2 
              className="font-bold text-black w-full lg:w-[750px] text-center lg:text-left"
              style={{ 
                fontSize: "clamp(28px, 5vw, 80px)", /* Reduced from 6vw to 5vw */
                lineHeight: "123%", 
                letterSpacing: "-0.05em" 
              }}
            >
              Cheap or Expensive?
            </h2>
          </div>
          
          {/* Paragraph Text */}
          <div 
            className="font-medium text-white w-full lg:w-[1234px] text-[16px] md:text-[20px]"
            style={{ 
              lineHeight: "123%", 
              letterSpacing: "-0.05em" 
            }}
          >
            <p className="mb-6">
              To give you some context, we aim to be in the middle band in terms of our pricing structure, which means that our typical daily rates for photography and video production will sit in between those agencies who work at the very upper end of our industry, with individual freelancers at the lower end of the pricing range.
            </p>
            <p>
              It's important to note that we're not talking about quality here, just price. We're often chosen ahead of the largest of our competitors as we can deliver great quality photography and video production services for a lower price. This is because we run an efficient setup, with less overheads and no bloat.
            </p>
          </div>
        </div>

        {/* Second Block: So how does it work? */}
        <div>
          
          {/* Yellow Title Box (Indented to the right on desktop) */}
          <div 
            className="flex items-center justify-center lg:justify-start bg-[#FCBE17] mb-6 md:mb-10 w-full lg:w-[847px] h-auto lg:h-[128px] ml-0 lg:ml-[calc(100%-847px)] py-6 lg:py-0 px-6 lg:px-[27px]"
          >
            <h2 
              className="font-bold text-black w-full lg:w-[748px] text-center lg:text-left"
              style={{ 
                fontSize: "clamp(28px, 5vw, 80px)", 
                lineHeight: "123%", 
                letterSpacing: "-0.05em" 
              }}
            >
              So how does it work?
            </h2>
          </div>
          
          {/* Paragraph Text */}
          <div 
            className="font-medium text-white w-full lg:w-[1205px] text-[16px] md:text-[20px]"
            style={{ 
              lineHeight: "123%", 
              letterSpacing: "-0.05em" 
            }}
          >
            <p className="mb-6">
              Our setup also makes us attractive to start-ups, those who are crowdfunding, and businesses who still need great photography and video production, but are working within tighter budgets.
            </p>
            <p className="mb-6">
              We do this by using modular pricing – knowing that each photography and video production project is different, you pay for just what you need.
            </p>
            <p className="mb-6">
              While some clients may need just an hour of photography to capture some simple pack shots for a new addition to their range, others may need a multiple camera setup for a TV advert to showcase their brand to the world. We have the ability to quote easily for both ends of that spectrum.
            </p>
            <p>
              If you already have a total budget available, share that with us and we can work out how to deliver as much as possible for what you have to spend.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PricingExplanation;