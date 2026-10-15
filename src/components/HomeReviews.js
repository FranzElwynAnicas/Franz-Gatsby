import React, { useRef, useEffect, useState } from "react";

const reviews = [
  {
    name: "Winnie Asawakanjanakit",
    text: "I had a such a great time working with Steven and his team! They were very professional and they created a safe space for me which made my job as a model on set easier and more enjoyable. Would definitely love to work with them again. :)",
  },
  {
    name: "Crime And Comedy Theatre Co..",
    text: "Steve & Charlie at Pocket Creatives were fantastic, really first class. Our project involved an older actor and not only did they conduct the pre-shoot with personable, fact-finding efficiency, but they were very considerate, accommodating...",
  },
  {
    name: "John Bond",
    text: "Very professional company to deal with and delighted with the product videos received. Always a pleasure to deal with Steven and his team.",
  },
  {
    name: "Marcus Ramtohul",
    text: "I've shot with Pocket Creatives on a number of occasions as a model and actor. Always delivering amazing results for clients - gorgeous images and a fun and creative environment. I am constantly looking forward to the next opportunity to shoot with...",
  },
  {
    name: "Klara Niklewicz",
    text: "Really enjoyed working with Pocket Creatives on a video campaign & webinar. Delivery was quick and to high standard. Thank you!",
  },
  {
    name: "Michelle Vellacott",
    text: "Pocket Creatives are a great, friendly production company and we love having them use our studios at Tower Bridge Studios. Always a wonderful atmosphere when they are here. Pre-production for the shoot is always very smooth and efficient. A great...",
  },
];

const HomeReviews = () => {
  const scrollRef = useRef(null);
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  // Auto-slide reviews
  useEffect(() => {
    const timer = setInterval(() => {
      if (!scrollRef.current) return;
      const el = scrollRef.current;
      const maxScroll = el.scrollWidth - el.clientWidth;

      if (el.scrollLeft >= maxScroll - 10) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: 380, behavior: "smooth" });
      }
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  const allReviews = [...reviews, ...reviews];

  return (
    <section className="w-full min-h-screen bg-pocketWhite flex items-center overflow-hidden">
      <div className="w-full py-20">
        <div className="pl-[12.5%] pr-8 md:pr-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16 items-start mb-16">
            {/* LEFT: Heading + Google rating */}
            <div>
              <h2 className="text-4xl md:text-6xl lg:text-[80px] font-extrabold leading-[1.1] tracking-[-0.03em] text-pocketGrey">
                Go behind the
                <br />
                scenes of our
                <br />
                <span className="text-pocketTeal">5 Star</span>{" "}
                <span className="text-pocketGrey">Service</span>
              </h2>

              <div className="flex items-center gap-4 mt-10">
                <svg viewBox="0 0 48 48" className="w-12 h-12 shrink-0" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#FFC107" d="M43.611,20.083H42V20H24c0,0,0,0,0,0v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
                  <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
                  <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
                  <path fill="#1976D2" d="M43.611,20.083H42V20H24c0,0,0,0,0,0v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
                </svg>

                <div className="text-pocketGrey text-2xl md:text-3xl font-extrabold leading-tight">
                  <div>based on</div>
                  <div>88 reviews</div>
                </div>
              </div>
            </div>

            {/* RIGHT: Behind-the-scenes video */}
            <div>
              <p className="text-pocketGrey text-base font-medium mb-3">
                *Click on Video to toggle sound
              </p>
              <div className="w-full aspect-[16/9] relative overflow-hidden rounded-md bg-pocketGrey/30">
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover cursor-pointer"
                  src="/videos/review.mp4"
                  loop
                  playsInline
                  preload="metadata"
                  onClick={togglePlay}
                />

                {!playing && (
                  <button
                    onClick={togglePlay}
                    aria-label="Play video"
                    className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors"
                  >
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-pocketTeal rounded-full flex items-center justify-center hover:scale-105 transition-transform">
                      <svg width="26" height="26" viewBox="0 0 24 24" fill="white" className="ml-1">
                        <polygon points="8,5 8,19 19,12" />
                      </svg>
                    </div>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Reviews — full-width scroll */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div className="shrink-0 w-[12.5vw]"></div>

          {allReviews.map((r, idx) => (
            <div
              key={idx}
              className="shrink-0 w-[357px] h-[293px] bg-pocketLightGrey rounded-[32px] p-3 flex flex-col"
            >
              <div className="bg-white rounded-3xl p-6 flex-1 flex flex-col justify-between">
                <p className="text-pocketBlack text-base font-medium leading-[1.4]">
                  {r.text}
                </p>
              </div>
              <p className="text-pocketGrey text-lg font-extrabold pt-3 pl-3 truncate">
                {r.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeReviews;