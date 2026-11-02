import React, { useRef, useState } from "react";

const PricingHero = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <section className="w-full bg-[#FCBE17] min-h-screen pt-32 pb-16 lg:pt-36 lg:pb-24 relative overflow-hidden flex items-center justify-center">
      
      {/* Figma Exact £ Symbol SVG Background Watermark */}
      <div 
        className="absolute pointer-events-none select-none z-0 hidden lg:block"
        style={{
          top: "128px",
          left: "352px",
          width: "538px",
          height: "800px",
        }}
      >
        <svg 
          width="100%" 
          height="100%" 
          viewBox="0 0 599 690" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="stroke0_4436_2692" maskUnits="userSpaceOnUse" x="-0.203125" y="-0.227051" width="599" height="690" fill="black">
            <rect fill="white" x="-0.203125" y="-0.227051" width="599" height="690"/>
            <path d="M546.774 639.773H124.047V538.352H546.774V639.773ZM434.274 408.239H122.626V311.364H434.274V408.239ZM303.024 222.443L312.115 464.205C313.062 490.152 307.854 511.837 296.49 529.262C285.316 546.496 265.998 561.174 238.536 573.296L161.263 538.352C169.596 536.648 175.846 532.387 180.013 525.568C184.369 518.561 187.21 510.227 188.536 500.568C190.051 490.909 190.714 481.061 190.524 471.023L182.001 222.443C180.486 185.512 187.589 154.262 203.308 128.693C219.217 102.936 241.187 83.4282 269.217 70.1707C297.248 56.7237 328.876 50.0002 364.104 50.0002C393.839 50.0002 420.259 54.1669 443.365 62.5002C466.471 70.6441 485.979 82.2919 501.888 97.4434C517.986 112.406 529.918 130.114 537.683 150.568C545.448 171.023 548.857 193.466 547.911 217.898L432.854 214.773C433.232 198.674 430.392 185.796 424.331 176.137C418.27 166.477 410.126 159.47 399.899 155.114C389.672 150.758 378.403 148.58 366.092 148.58C354.161 148.58 343.365 151.326 333.706 156.818C324.236 162.121 316.661 170.265 310.979 181.25C305.486 192.046 302.835 205.777 303.024 222.443Z"/>
          </mask>
          <path d="M546.774 639.773H124.047V538.352H546.774V639.773ZM434.274 408.239H122.626V311.364H434.274V408.239ZM303.024 222.443L312.115 464.205C313.062 490.152 307.854 511.837 296.49 529.262C285.316 546.496 265.998 561.174 238.536 573.296L161.263 538.352C169.596 536.648 175.846 532.387 180.013 525.568C184.369 518.561 187.21 510.227 188.536 500.568C190.051 490.909 190.714 481.061 190.524 471.023L182.001 222.443C180.486 185.512 187.589 154.262 203.308 128.693C219.217 102.936 241.187 83.4282 269.217 70.1707C297.248 56.7237 328.876 50.0002 364.104 50.0002C393.839 50.0002 420.259 54.1669 443.365 62.5002C466.471 70.6441 485.979 82.2919 501.888 97.4434C517.986 112.406 529.918 130.114 537.683 150.568C545.448 171.023 548.857 193.466 547.911 217.898L432.854 214.773C433.232 198.674 430.392 185.796 424.331 176.137C418.27 166.477 410.126 159.47 399.899 155.114C389.672 150.758 378.403 148.58 366.092 148.58C354.161 148.58 343.365 151.326 333.706 156.818C324.236 162.121 316.661 170.265 310.979 181.25C305.486 192.046 302.835 205.777 303.024 222.443Z" strokeWidth="100" stroke="black" strokeOpacity="0.1" mask="url(#stroke0_4436_2692)"/>
        </svg>
      </div>

      {/* Content Container */}
      <div className="w-full max-w-[1536px] mx-auto px-6 md:px-8 lg:px-10 relative z-10 flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-12">
        
        {/* Left Side: Text Content */}
        <div className="w-full lg:flex-1 flex flex-col justify-start">
          
          <p 
            className="text-black mb-3"
            style={{ 
              fontFamily: "Inter, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(24px, 2.8vw, 40px)",
              lineHeight: "100%",
              letterSpacing: "-0.05em"
            }}
          >
            Avoiding the taboo:
          </p>
          
          <h1 
            className="text-black mb-8"
            style={{ 
              fontFamily: "Inter, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(48px, 6vw, 108px)",
              lineHeight: "100%",
              letterSpacing: "-0.05em"
            }}
          >
            <span className="whitespace-nowrap">Pricing for</span>
            <br />
            <span className="whitespace-nowrap">video production</span>
            <br />
            <span className="whitespace-nowrap">and photography</span>
          </h1>
          
          <div 
            className="text-black max-w-[700px] space-y-4 relative z-10"
            style={{ 
              fontFamily: "Inter, sans-serif",
              fontWeight: 500,
              fontSize: "clamp(16px, 1.4vw, 20px)",
              lineHeight: "135%",
              letterSpacing: "-0.05em"
            }}
          >
            <p>
              Price is important to everybody, and we know this is a major factor in deciding who you'll want to work with. We like to think that clients work with us for a range of reasons, from our quality of output to our project management, but getting the budget in the right place is something that we spend a lot of time on.
            </p>
            <p>
              We can either quote from scratch once we understand your brief, or work to your target spend. This flexibility makes us a great fit for both small and large clients alike. You can read a bit more below about how we structure our rates for both video production and photography below, and we're always here for any queries.
            </p>
          </div>

        </div>

        {/* Right Side: Video Container */}
        <div className="w-full lg:w-[456px] shrink-0 flex flex-col items-center lg:items-end mt-6 lg:mt-0 relative z-10">
          
          <div 
            onClick={toggleSound}
            className="w-full max-w-[456px] h-auto lg:h-[643px] bg-black relative overflow-hidden cursor-pointer shadow-md group"
          >
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              src="/videos/hero.mp4"
              autoPlay
              muted={isMuted}
              loop
              playsInline
            />
          </div>

          <p 
            className="mt-3 text-center lg:text-right w-full"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 500,
              fontSize: "16px",
              lineHeight: "200%",
              letterSpacing: "-0.05em",
              color: "#526E87"
            }}
          >
            *Click on Video to toggle sound
          </p>

        </div>

      </div>
    </section>
  );
};

export default PricingHero;