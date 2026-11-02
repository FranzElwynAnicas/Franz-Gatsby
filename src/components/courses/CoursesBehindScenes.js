import React, { useRef, useState } from "react";

const videos = [
  "/videos/lighting.mp4",
  "/videos/review.mp4",
  "/videos/pricing.mp4",
  "/videos/hazzy.mp4",
];

const CoursesBehindScenes = () => {
  const videoRef = useRef(null);
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleNext = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length);
    setIsPlaying(false);
  };

  const handlePrev = () => {
    setCurrentVideo((prev) => (prev - 1 + videos.length) % videos.length);
    setIsPlaying(false);
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="w-full bg-[#FCBE17] py-16 md:py-24 flex flex-col items-center overflow-hidden">
      
      <div className="w-full max-w-[1440px] px-6 md:px-12 flex flex-col items-center">
        
        {/* Heading */}
        <h2 
          className="mb-6 md:mb-10 text-center whitespace-nowrap"
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 700,
            fontSize: "clamp(40px, 7.5vw, 120px)", 
            lineHeight: "100%",
            letterSpacing: "-0.05em",
            color: "#000000",
          }}
        >
          Want to see us at work?
        </h2>

        {/* Paragraphs */}
        <div 
          className="w-full max-w-[1060px] mx-auto mb-8 md:mb-12 space-y-4 text-left md:text-center"
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 500,
            fontSize: "20px",
            lineHeight: "130%", 
            letterSpacing: "-0.05em",
            color: "#000000",
          }}
        >
          <p>
            If you hadn't already guessed, we love what we do, and we're proud of the video production projects that our team have delivered.
          </p>
          <p>
            Have a look at some of these <strong>behind the scenes</strong> videos to see what it's like to be on set with us.
          </p>
        </div>

        {/* Video Carousel */}
        <div className="relative w-full max-w-[1300px] flex items-center justify-center">
          
          {/* Left Arrow - Hidden on Mobile */}
          <button 
            onClick={handlePrev}
            className="hidden md:block absolute left-0 md:-left-6 z-20 p-2 hover:opacity-75 transition-opacity"
            aria-label="Previous video"
          >
            <svg width="80" height="46" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-90">
              <path d="M6 9L12 15L18 9" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Video Container */}
          <div className="w-full max-w-[1060px] aspect-[4/3] md:aspect-video md:h-[618px] bg-black/10 relative overflow-hidden shadow-lg">
            <video
              key={videos[currentVideo]} 
              ref={videoRef}
              src={videos[currentVideo]}
              className="w-full h-full object-cover cursor-pointer"
              loop
              playsInline
              onClick={togglePlay}
            />

            {!isPlaying && (
              <button
                onClick={togglePlay}
                aria-label="Play video"
                className="absolute inset-0 flex items-center justify-center bg-black/10 hover:bg-black/20 transition-colors"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 bg-[#179CBD] rounded-full flex items-center justify-center hover:scale-105 transition-transform shadow-md">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="white" className="ml-1 md:w-8 md:h-8">
                    <polygon points="8,5 8,19 19,12" />
                  </svg>
                </div>
              </button>
            )}
          </div>

          {/* Right Arrow - Hidden on Mobile */}
          <button 
            onClick={handleNext}
            className="hidden md:block absolute right-0 md:-right-6 z-20 p-2 hover:opacity-75 transition-opacity"
            aria-label="Next video"
          >
            <svg width="80" height="46" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="-rotate-90">
              <path d="M6 9L12 15L18 9" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Video Instruction Text */}
        <p 
          className="mt-3 text-left w-full max-w-[1060px]"
          style={{ 
            fontFamily: "Inter, sans-serif",
            fontWeight: 500,
            fontSize: "16px",
            lineHeight: "200%",
            letterSpacing: "-0.05em",
            color: "#000000"
          }}
        >
          *Click on Video to toggle sound
        </p>

        {/* Mobile Controls (Pill Buttons) */}
        <div className="flex md:hidden items-center justify-center gap-4 mt-6">
          <button 
            onClick={handlePrev}
            className="w-[40px] h-[40px] bg-[#179CBD] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity shadow-sm"
            aria-label="Previous video"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 12H5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 19L5 12L12 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          <button 
            onClick={handleNext}
            className="w-[40px] h-[40px] bg-[#179CBD] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity shadow-sm"
            aria-label="Next video"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 5L19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
};

export default CoursesBehindScenes;