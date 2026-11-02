import React, { useRef, useState } from "react";

const categories = [
  { label: "Beauty", value: "Beauty" },
  { label: "Company", value: "Company" },
  { label: "Food", value: "Food" },
  { label: "Photography", value: "Photography" },
  { label: "Events", value: "Events" },
  { label: "Jewellery", value: "Jewellery" },
];

const dummyDescription = "Our professional video production services are used to promote beauty and cosmetics products. We can do this by creating brand films, delivering lifestyle content, covering cosmetic product launches and beauty events, and more!";

// Carousel data mapped to your specific videos
const portfolioData = [
  {
    id: 1,
    title: "James Read Tan",
    videoSrc: "/videos/pricing.mp4",
  },
  {
    id: 2,
    title: "Video Title 1",
    videoSrc: "/videos/lighting.mp4",
  },
  {
    id: 3,
    title: "Video Title 2",
    videoSrc: "/videos/review.mp4",
  },
  {
    id: 4,
    title: "Video Title 3",
    videoSrc: "/videos/hazzy.mp4",
  },
];

const VideographyPortfolio = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [activeTab, setActiveTab] = useState("Beauty");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const currentVideo = portfolioData[currentIndex];

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

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % portfolioData.length);
    setIsPlaying(false);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + portfolioData.length) % portfolioData.length);
    setIsPlaying(false);
  };

  return (
    <section className="w-full bg-[#179CBD] py-16 md:py-24 px-4 md:px-8 flex justify-center overflow-hidden">
      <div className="w-full max-w-[1440px] flex flex-col items-center">
        
        {/* Top Heading */}
        <h2 
          className="text-white text-center mb-8 max-w-[1000px]"
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 700,
            fontSize: "clamp(32px, 4.5vw, 64px)",
            lineHeight: "100%",
            letterSpacing: "-0.05em",
          }}
        >
          A Snapshot of our Video Production Portfolio
        </h2>

        {/* =========================================
            DESKTOP/TABLET CATEGORY TABS (1350px+)
        ========================================= */}
        <div className="hidden min-[1350px]:flex flex-wrap justify-center items-center gap-6 md:gap-10 mb-12 w-full max-w-[1100px]">
          {categories.map((cat) => {
            const isActive = activeTab === cat.value;
            return (
              <button
                key={cat.value}
                onClick={() => setActiveTab(cat.value)}
                className="transition-all"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: isActive ? 700 : 500,
                  fontSize: "20px",
                  lineHeight: "100%",
                  letterSpacing: "-0.05em",
                  backgroundColor: isActive ? "#FCBE17" : "transparent",
                  color: isActive ? "#000000" : "#FFFFFF",
                  borderRadius: isActive ? "20px" : "0px",
                  padding: isActive ? "12px 24px" : "0px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* =========================================
            MOBILE CUSTOM DROPDOWN (Under 1350px)
        ========================================= */}
        <div className="w-full max-w-[350px] mb-6 min-[1350px]:hidden relative z-20">
          
          {/* Dropdown Toggle Button */}
          <button 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full bg-white border border-black text-black flex justify-between items-center py-3 px-4 font-bold text-[18px]"
            style={{ borderRadius: "0" }}
          >
            <span>{activeTab.toUpperCase()}</span>
            <svg 
              width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg"
              className={`transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : "rotate-0"}`}
            >
              <path d="M1 1L7 7L13 1" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Dropdown Menu (List) */}
          {isDropdownOpen && (
            <div className="absolute top-full left-0 w-full bg-white border border-t-0 border-black flex flex-col">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => {
                    setActiveTab(cat.value);
                    setIsDropdownOpen(false);
                  }}
                  className="w-full text-center text-black font-medium text-[18px] py-4 border-b border-black last:border-b-0 hover:bg-gray-100 transition-colors"
                >
                  {cat.label.toUpperCase()}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* =========================================
            MAIN CONTENT AREA
        ========================================= */}
        <div className="w-full max-w-[1300px] border-[4px] border-white bg-transparent flex flex-col">
          
          {/* Video Area */}
          <div className="relative w-full aspect-[4/3] md:aspect-video md:h-[680px] bg-black">
            <video
              key={currentVideo.videoSrc} // Forces re-render when video changes
              ref={videoRef}
              src={currentVideo.videoSrc}
              className="w-full h-full object-cover"
              loop
              playsInline
              muted={isMuted}
              onClick={togglePlay}
            />
          </div>

          {/* Custom Controls Bar (Hidden on Mobile) */}
          <div className="hidden min-[1350px]:flex w-full bg-[#179CBD] border-t-[4px] border-white h-[90px] md:h-[100px] items-center justify-between px-6 md:px-12 relative">
            
            <div className="w-1/3"></div>

            <div className="flex items-center justify-center gap-8 md:gap-14 w-1/3">
              {/* Prev Button */}
              <button onClick={handlePrev} className="text-white hover:text-[#FCBE17] transition-colors flex items-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
                </svg>
              </button>
              
              {/* Play/Pause Button */}
              <button 
                onClick={togglePlay} 
                className="w-[68px] h-[68px] rounded-full border-[3px] border-white flex items-center justify-center text-white hover:text-[#FCBE17] hover:border-[#FCBE17] transition-colors bg-[#179CBD] shadow-sm shrink-0"
              >
                {isPlaying ? (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                  </svg>
                ) : (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="ml-0.5">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
              </button>

              {/* Next Button */}
              <button onClick={handleNext} className="text-white hover:text-[#FCBE17] transition-colors flex items-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.5 12L6 6v12zM16 6h2v12h-2z" />
                </svg>
              </button>
            </div>

            <div className="w-1/3 flex justify-end">
              <button onClick={toggleMute} className="text-white hover:text-[#FCBE17] transition-colors">
                {isMuted ? (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                  </svg>
                ) : (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Bottom Info Panel */}
          <div className="w-full flex flex-col min-[1350px]:flex-row min-[1350px]:border-t-[4px] min-[1350px]:border-white">
            
            {/* Left: Dynamic Title Box */}
            <div className="w-full min-[1350px]:w-[35%] p-6 md:p-12 bg-[#FCBE17] min-[1350px]:bg-white min-[1350px]:border-r-[4px] border-white flex items-center justify-center min-[1350px]:justify-start">
              <h3 
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(26px, 2.5vw, 36px)",
                  lineHeight: "1.1",
                  letterSpacing: "-0.04em",
                  color: "#000000"
                }}
              >
                {currentVideo.title}
              </h3>
            </div>

            {/* Right: Description Box */}
            <div className="w-full min-[1350px]:w-[65%] p-6 md:p-12 bg-[#179CBD] flex flex-col justify-center items-center min-[1350px]:items-start text-center min-[1350px]:text-left">
              <h4 
                className="text-white mb-2"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 700,
                  fontSize: "18px",
                  lineHeight: "1.2",
                  letterSpacing: "-0.03em",
                }}
              >
                Beauty and Cosmetics Video
              </h4>
              <p 
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 500,
                  fontSize: "15px",
                  lineHeight: "1.5",
                  letterSpacing: "-0.02em",
                  color: "#FFFFFF"
                }}
              >
                {dummyDescription}
              </p>
            </div>
          </div>

          {/* Mobile Only Carousel Controls */}
          <div className="flex min-[1350px]:hidden justify-center items-center gap-4 mt-8 pb-4">
            <button 
              onClick={handlePrev}
              className="w-[40px] h-[40px] bg-[#FCBE17] rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors shadow-sm"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 12H5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 19L5 12L12 5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button 
              onClick={handleNext}
              className="w-[40px] h-[40px] bg-[#FCBE17] rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors shadow-sm"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 5L19 12L12 19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default VideographyPortfolio;