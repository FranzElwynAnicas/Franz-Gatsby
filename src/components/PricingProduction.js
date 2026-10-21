import React, { useState } from "react";
import videoproduction from "../images/videoproduction.png";
import photography from "../images/photography.png";

const PricingProduction = () => {
  const [activePanel, setActivePanel] = useState(0);

  const panelText = (
    <div className="font-medium text-[16px] lg:text-[20px] leading-[130%] lg:leading-[110%] tracking-[-0.05em] space-y-4 lg:space-y-5">
      <p>
        <a
          href="#video"
          className="font-bold underline hover:opacity-80 transition-opacity"
        >
          Video production
        </a>{" "}
        is a more complex process compared with photography, both in planning,
        production and the fact that the edit time will span days rather than
        hours, as it does it photography.
      </p>

      <p>
        Similarly to a photo shoot, you’ll need to think about the location:
        from studio spaces to Airbnbs for lifestyle work, and the consideration
        for sound as well.
      </p>

      <p>
        We may need a bigger team, if lighting, sound, or set requirements are
        needed. Additional equipment such as autocues, specialist lighting and
        microphones, cameras dedicated to slow motion may also be considered for
        more creative briefs.
      </p>

      <p>
        Actors and presenters, hair and makeup, set elements, props and
        materials, even fashion stylists, food stylists may required too.
      </p>

      <p>
        Editing often needs multiple days to complete, and we’ll best estimate
        this for you, allowing for time to feed back and make changes. We can
        also include music, sound effects and voiceover.
      </p>

      <p>
        The{" "}
        <a
          href="#pocket"
          className="font-bold underline hover:opacity-80 transition-opacity"
        >
          Pocket Creatives
        </a>{" "}
        team will always provide a full breakdown when we quote for you, which
        then makes it easier to see what resources your project needs to get
        made.
      </p>

      <p>
        To give you a general idea, a full day of filming with us starts at{" "}
        <span className="font-bold">£940+VAT.</span>
      </p>
    </div>
  );

  return (
    <section className="w-full overflow-hidden relative font-inter min-h-screen">
      {/* ================= MOBILE VIEW: ONE LONG VERTICAL STRIP ================= */}
      <div className="block md:hidden w-full">
        {/* Section 1: Video Production */}
        <div className="w-full bg-[#FCBE17] px-6 py-12 flex flex-col items-center">
          <h2 className="text-black font-bold tracking-[-0.05em] leading-[100%] text-[38px] mb-8 w-full text-left">
            Video Production
          </h2>

          <div className="w-full mb-8 shadow-sm overflow-hidden">
            <img
              src={videoproduction}
              alt="Video production behind the scenes"
              className="w-full h-auto object-cover aspect-square"
            />
          </div>

          <div className="w-full text-black">{panelText}</div>
        </div>

        {/* Section 2: Photography */}
        <div className="w-full bg-[#179CBD] px-6 py-12 flex flex-col items-center">
          <h2 className="text-white font-bold tracking-[-0.05em] leading-[100%] text-[38px] mb-8 w-full text-left">
            Photography
          </h2>

          <div className="w-full mb-8 shadow-sm overflow-hidden">
            <img
              src={photography}
              alt="Photography studio setup"
              className="w-full h-auto object-cover aspect-square"
            />
          </div>

          <div className="w-full text-white">{panelText}</div>
        </div>
      </div>

      {/* ================= DESKTOP VIEW: SLIDING FULL SCREEN PANELS ================= */}
      <div className="hidden md:block w-full overflow-hidden min-h-screen">
        <div
          className="flex w-[200%] transition-transform duration-700 ease-in-out min-h-screen"
          style={{ transform: `translateX(-${activePanel * 50}%)` }}
        >
          {/* PANEL 1: VIDEO PRODUCTION */}
          <div className="w-1/2 bg-[#FCBE17] shrink-0 min-h-screen flex flex-col justify-center py-16 md:py-24">
            <div className="w-full max-w-[1520px] mx-auto pl-6 md:pl-12 lg:pl-16 pr-32 md:pr-44 lg:pr-56 relative">
              <h2
                className="text-black font-bold tracking-[-0.05em] leading-[100%] mb-8 lg:mb-12"
                style={{ fontSize: "clamp(48px, 7.5vw, 120px)" }}
              >
                Video Production...
              </h2>

              <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
                {/* Image 490x490 */}
                <div className="w-full max-w-[320px] lg:max-w-[490px] aspect-square shrink-0 overflow-hidden shadow-sm">
                  <img
                    src={videoproduction}
                    alt="Video production behind the scenes"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Text Paragraphs */}
                <div className="w-full max-w-[620px] text-black">
                  {panelText}
                </div>
              </div>

              {/* Floating Circle Button (Right Edge) */}
              <button
                onClick={() => setActivePanel(1)}
                className="absolute right-2 md:right-6 lg:right-8 top-1/2 -translate-y-1/2 w-[120px] h-[120px] md:w-[150px] md:h-[150px] lg:w-[177px] lg:h-[177px] bg-[#179CBD] rounded-full flex flex-col items-center justify-center text-white font-bold text-sm md:text-lg lg:text-xl shadow-[2px_4px_8px_rgba(0,0,0,0.2)] hover:scale-105 transition-transform z-10 leading-tight text-center"
              >
                <span>Photography</span>
                <span className="text-xl md:text-3xl mt-1">→</span>
              </button>
            </div>
          </div>

          {/* PANEL 2: PHOTOGRAPHY */}
          <div className="w-1/2 bg-[#179CBD] shrink-0 min-h-screen flex flex-col justify-center py-16 md:py-24">
            <div className="w-full max-w-[1520px] mx-auto pr-6 md:pr-12 lg:pr-16 pl-48 md:pl-60 lg:pl-72 relative">
              <h2
                className="text-white font-bold tracking-[-0.05em] leading-[100%] mb-8 lg:mb-12"
                style={{ fontSize: "clamp(48px, 7.5vw, 120px)" }}
              >
                Photography...
              </h2>

              <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
                {/* Image 490x490 */}
                <div className="w-full max-w-[320px] lg:max-w-[490px] aspect-square shrink-0 overflow-hidden shadow-sm">
                  <img
                    src={photography}
                    alt="Photography studio setup"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Text Paragraphs */}
                <div className="w-full max-w-[620px] text-white">
                  {panelText}
                </div>
              </div>

              {/* Floating Circle Button (Left Edge - Clears Image) */}
              <button
                onClick={() => setActivePanel(0)}
                className="absolute left-2 md:left-6 lg:left-8 top-1/2 -translate-y-1/2 w-[120px] h-[120px] md:w-[150px] md:h-[150px] lg:w-[177px] lg:h-[177px] bg-[#FCBE17] rounded-full flex flex-col items-center justify-center text-black font-bold text-sm md:text-lg lg:text-xl shadow-[2px_4px_8px_rgba(0,0,0,0.2)] hover:scale-105 transition-transform z-10 leading-tight text-center"
              >
                <span>
                  Video
                  <br />
                  Production
                </span>
                <span className="text-xl md:text-3xl mt-1">←</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingProduction;