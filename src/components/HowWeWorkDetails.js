import React from "react";
import how1Img from "../images/How1.png";
import how2Img from "../images/How2.png";

const HowWeWorkDetails = () => {
  return (
    <section className="relative w-full bg-[#F7F7F7] py-16 md:py-32 overflow-hidden">
      
      {/* The Exact SVG "2" in the background (Hidden on mobile) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[691px] h-[945px] pointer-events-none -z-10 hidden lg:block">
        <svg width="691" height="945" viewBox="0 0 691 945" fill="none" xmlns="http://www.w3.org/2000/svg">
          <mask id="stroke0_3702_4543" maskUnits="userSpaceOnUse" x="-0.21582" y="-0.34082" width="691" height="945" fill="black">
            <rect fill="white" x="-0.21582" y="-0.34082" width="691" height="945"/>
            <path d="M38.5228 914.659V781.705L349.176 494.063C375.597 468.494 397.756 445.483 415.654 425.028C433.835 404.574 447.614 384.546 456.989 364.943C466.364 345.057 471.051 323.608 471.051 300.597C471.051 275.028 465.227 253.011 453.58 234.546C441.932 215.796 426.023 201.449 405.852 191.506C385.682 181.278 362.813 176.165 337.244 176.165C310.54 176.165 287.244 181.563 267.358 192.358C247.472 203.153 232.131 218.636 221.335 238.807C210.54 258.977 205.142 282.983 205.142 310.824H30.0001C30.0001 253.722 42.9262 204.148 68.7785 162.102C94.6308 120.057 130.852 87.5285 177.443 64.5171C224.034 41.5057 277.727 30.0001 338.523 30.0001C401.023 30.0001 455.426 41.0796 501.733 63.2387C548.324 85.1137 584.546 115.511 610.398 154.432C636.25 193.352 649.176 237.955 649.176 288.239C649.176 321.193 642.642 353.722 629.574 385.824C616.79 417.926 593.921 453.58 560.966 492.784C528.011 531.705 481.563 578.438 421.619 632.983L294.205 757.841V763.807H660.682V914.659H38.5228Z"/>
          </mask>
          <path d="M38.5228 914.659V781.705L349.176 494.063C375.597 468.494 397.756 445.483 415.654 425.028C433.835 404.574 447.614 384.546 456.989 364.943C466.364 345.057 471.051 323.608 471.051 300.597C471.051 275.028 465.227 253.011 453.58 234.546C441.932 215.796 426.023 201.449 405.852 191.506C385.682 181.278 362.813 176.165 337.244 176.165C310.54 176.165 287.244 181.563 267.358 192.358C247.472 203.153 232.131 218.636 221.335 238.807C210.54 258.977 205.142 282.983 205.142 310.824H30.0001C30.0001 253.722 42.9262 204.148 68.7785 162.102C94.6308 120.057 130.852 87.5285 177.443 64.5171C224.034 41.5057 277.727 30.0001 338.523 30.0001C401.023 30.0001 455.426 41.0796 501.733 63.2387C548.324 85.1137 584.546 115.511 610.398 154.432C636.25 193.352 649.176 237.955 649.176 288.239C649.176 321.193 642.642 353.722 629.574 385.824C616.79 417.926 593.921 453.58 560.966 492.784C528.011 531.705 481.563 578.438 421.619 632.983L294.205 757.841V763.807H660.682V914.659H38.5228Z" strokeWidth="60" stroke="#243450" strokeOpacity="0.1" mask="url(#stroke0_3702_4543)"/>
        </svg>
      </div>

      <div className="w-full flex flex-col gap-16 md:gap-32">
        
        {/* =========================================
            SECTION 1: Yes, you can join us for the shoot!
        ========================================= */}
        <div className="flex flex-col lg:flex-row items-center w-full">
          
          {/* Image - Left (Added px-6 for mobile, removed on desktop) */}
          <div className="w-full lg:w-1/2 xl:w-[755px] max-h-[529px] shrink-0 relative z-10 px-6 lg:px-0">
            <img
              src={how1Img}
              alt="Behind the scenes filming"
              className="w-full h-full lg:h-[529px] object-cover"
            />
          </div>

          {/* Text - Right */}
          <div className="w-full lg:w-1/2 xl:w-auto xl:flex-1 flex justify-center lg:justify-start px-6 md:px-12 lg:pl-12 xl:pl-32 lg:pr-12 mt-8 lg:mt-0">
            <div className="w-full max-w-[780px]">
              <h2 
                className="mb-4 md:mb-6 text-black xl:text-[#526E87]"
                style={{ 
                  fontFamily: "Inter, sans-serif", 
                  fontWeight: 800, 
                  fontSize: "clamp(28px, 3vw, 40px)",
                  lineHeight: "100%",
                  letterSpacing: "-0.05em",
                }}
              >
                Yes, you can join us for the shoot!
              </h2>
              
              <div className="space-y-4 md:space-y-6">
                <p 
                  className="text-left lg:text-justify text-black xl:text-[#526E87]"
                  style={{ 
                    fontFamily: "Inter, sans-serif", 
                    fontWeight: 500, 
                    fontSize: "clamp(16px, 1.5vw, 21px)",
                    lineHeight: "130%",
                    letterSpacing: "-0.05em",
                  }}
                >
                  Crazily, we still hear stories about clients being banned from attending shoots when working with some other agencies or production companies. It just doesn't make sense to us. We love having clients with us on set, and here's why... If the shot isn't as you like, you can tell us and we can change it. As simple as it is brilliant! We can avoid all of those difficult conversations in the edit about "wishing that cup was placed just a bit more to the left..." and just fix it there and then.
                </p>
                <p 
                  className="text-left lg:text-justify text-black xl:text-[#526E87]"
                  style={{ 
                    fontFamily: "Inter, sans-serif", 
                    fontWeight: 500, 
                    fontSize: "clamp(16px, 1.5vw, 21px)",
                    lineHeight: "130%",
                    letterSpacing: "-0.05em",
                  }}
                >
                  The beauty of anything creative is that there's no right and wrong, just loads of grey between the black and white. Whether something looks right is often perception, and as you're the client, we're here to make sure that the work we produce looks right to you.
                </p>
                <p 
                  className="text-left lg:text-justify text-black xl:text-[#526E87]"
                  style={{ 
                    fontFamily: "Inter, sans-serif", 
                    fontWeight: 500, 
                    fontSize: "clamp(16px, 1.5vw, 21px)",
                    lineHeight: "130%",
                    letterSpacing: "-0.05em",
                  }}
                >
                  And who doesn't like those orgasmic sounds of pleasure when that shot is EXACTLY as you like it? Believe it or not, most creatives suffer with imposter syndrome - we question every one of our own decisions, but take tremendous pride in delivering high quality work. That little noise you make when you like what you see on the screen means the world.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* =========================================
            SECTION 2: If it's right first time, something's wrong
        ========================================= */}
        <div className="flex flex-col-reverse lg:flex-row items-center w-full">
          
          {/* Text - Left */}
          <div className="w-full lg:w-1/2 xl:w-auto xl:flex-1 flex justify-center lg:justify-end px-6 md:px-12 lg:pl-12 xl:pl-12 lg:pr-12 xl:pr-32 mt-8 lg:mt-0">
            <div className="w-full max-w-[780px]">
              <h2 
                className="mb-4 md:mb-6 text-black xl:text-[#526E87]"
                style={{ 
                  fontFamily: "Inter, sans-serif", 
                  fontWeight: 800, 
                  fontSize: "clamp(28px, 3vw, 40px)",
                  lineHeight: "100%",
                  letterSpacing: "-0.05em",
                }}
              >
                If it's right first time, something's wrong
              </h2>
              
              <div className="space-y-4 md:space-y-6">
                <p 
                  className="text-left lg:text-justify text-black xl:text-[#526E87]"
                  style={{ 
                    fontFamily: "Inter, sans-serif", 
                    fontWeight: 500, 
                    fontSize: "clamp(16px, 1.5vw, 21px)",
                    lineHeight: "130%",
                    letterSpacing: "-0.05em",
                  }}
                >
                  With a million and one ways to edit a video or a still image, the distance between right and wrong gets further apart. One great aspect of working digitally is that you get to move things, delete things, put things back as they were four versions ago, all with relative ease.
                </p>
                <p 
                  className="text-left lg:text-justify text-black xl:text-[#526E87]"
                  style={{ 
                    fontFamily: "Inter, sans-serif", 
                    fontWeight: 500, 
                    fontSize: "clamp(16px, 1.5vw, 21px)",
                    lineHeight: "130%",
                    letterSpacing: "-0.05em",
                  }}
                >
                  We don't expect you to know whether you're happy until you've seen it, and if you don't love it, we can change it. Your budget will have included time for review and for us to deliver updated versions back to you, so the pressures off. Unless you're on a particularly tight deadline, in which case, scrap all of the above, WE NEED TO KNOW NOW :)
                </p>
              </div>
            </div>
          </div>

          {/* Image - Right (Added px-6 for mobile, removed on desktop) */}
          <div className="w-full lg:w-1/2 xl:w-[718px] max-h-[529px] shrink-0 relative z-10 flex justify-end px-6 lg:px-0">
            <img
              src={how2Img}
              alt="Reviewing edits and feedback"
              className="w-full h-full lg:h-[529px] object-cover"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default HowWeWorkDetails;