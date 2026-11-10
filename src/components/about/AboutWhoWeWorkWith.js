import React, { useState, useEffect } from "react";

import logoArgos from "../../images/partner-argos.png";
import logoSaputo from "../../images/partner-saputo.png";
import logoMacmillan from "../../images/partner-macmillan.png";
import logoKopparberg from "../../images/partner-kopparberg.png";
import logoLadbrokes from "../../images/partner-ladbrokes.png";
import logoCoop from "../../images/partner-coop.png";
import logoBusinessInsider from "../../images/partner-business-insider.png";
import logoGymGroup from "../../images/partner-gym-group.png";
import logoTelegraph from "../../images/partner-telegraph.png";
import logoStudio from "../../images/partner-studio.png";
import logoMuseum from "../../images/partner-museum.png";
import logoColmans from "../../images/partner-colmans.png";
import logoRightmove from "../../images/partner-rightmove.png";
import logoQvc from "../../images/partner-qvc.png";
import logoMasabi from "../../images/partner-masabi.png";
import logoVidaGlow from "../../images/partner-vida-glow.png";
import logoPrestigeFlowers from "../../images/partner-prestige-flowers.png";
import logoSoapGlory from "../../images/partner-soap-glory.png";

const PAGES = [
  [
    { src: logoArgos, alt: "Argos" }, { src: logoSoapGlory, alt: "Soap & Glory" }, { src: logoMacmillan, alt: "Macmillan" },
    { src: logoKopparberg, alt: "Kopparberg" }, { src: logoLadbrokes, alt: "Ladbrokes" }, { src: logoCoop, alt: "Co-op" },
    { src: logoBusinessInsider, alt: "Business Insider" }, { src: logoGymGroup, alt: "The Gym Group" }, { src: logoTelegraph, alt: "The Telegraph" },
  ],
  [
    { src: logoStudio, alt: "Studio" }, { src: logoMuseum, alt: "Museum" }, { src: logoColmans, alt: "Colman's" },
    { src: logoRightmove, alt: "Rightmove" }, { src: logoQvc, alt: "QVC" }, { src: logoMasabi, alt: "Masabi" },
    { src: logoVidaGlow, alt: "Vida Glow" }, { src: logoPrestigeFlowers, alt: "Prestige Flowers" }, { src: logoSaputo, alt: "Saputo" },
  ],
];

const AboutWhoWeWorkWith = ({
  whoHeading, whoParagraph1, whoParagraph2, whoParagraph3,
  whoRotatingNames, whoTestimonialsUrl, whoTestimonialsCta,
}) => {
  const [page, setPage] = useState(0);
  const [nameIndex, setNameIndex] = useState(0);
  const [enterFade, setEnterFade] = useState(false);

  const namesList = whoRotatingNames
    ? whoRotatingNames.split("\n").map((n) => n.trim()).filter(Boolean)
    : ["Prestige Flowers", "The Telegraph", "James Read Tan"];

  useEffect(() => {
    const timer = setInterval(() => setPage((prev) => (prev + 1) % PAGES.length), 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const cycle = setInterval(() => {
      setNameIndex((i) => (i + 1) % namesList.length);
      setEnterFade(true);
      requestAnimationFrame(() => requestAnimationFrame(() => setEnterFade(false)));
    }, 4000);
    return () => clearInterval(cycle);
  }, [namesList.length]);

  const testimonialsLink = whoTestimonialsUrl || "https://www.pocketcreatives.co.uk/testimonials/";
  const ctaText = whoTestimonialsCta || "View Testimonials";

  return (
    <section className="w-full bg-pocketTeal">
      {/* MOBILE & TABLET */}
      <div className="lg:hidden px-6 md:px-12 pt-16 pb-20">
        <h2 className="text-white font-black leading-[1] tracking-[-0.05em] mb-8" style={{ fontSize: "48px" }}>
          {whoHeading || <><>Who We</> <br /> <>Work With</></>}
        </h2>

        <div className="flex flex-col gap-6 text-white text-[16px] md:text-[18px] font-medium leading-[1.4] tracking-[-0.05em]">
          {whoParagraph1 ? <div className="wordpress-content" dangerouslySetInnerHTML={{ __html: whoParagraph1 }} /> : <p>We have provided video and photography services to a huge variety of clients in our history, from crowdfunders and startups through to more established names and global businesses. We love that mix, and being entrusted with the visuals for clients of any size is extremely satisfying.</p>}
          {whoParagraph2 ? <div className="wordpress-content" dangerouslySetInnerHTML={{ __html: whoParagraph2 }} /> : <p>We work with most clients directly, and we're also able to provide our services to agencies and other creative companies who don't have access to video and photography services in house.</p>}
          {whoParagraph3 ? (
            <div className="wordpress-content" dangerouslySetInnerHTML={{ __html: whoParagraph3 }} />
          ) : (
            <p>
              We're very proud to have worked with known clients such as{" "}
              <span className="inline-flex items-center justify-center align-middle mx-1 bg-pocketYellow text-black" style={{ minWidth: "140px", height: "26px", borderRadius: "2px", padding: "0 8px" }}>
                <span className="font-bold whitespace-nowrap" style={{ fontSize: "16px", letterSpacing: "-0.05em", lineHeight: "1.2", opacity: enterFade ? 0 : 1, transition: enterFade ? "none" : "opacity 2000ms cubic-bezier(0.22, 1, 0.36, 1)" }}>
                  {namesList[nameIndex]}
                </span>
              </span>{" "}
              and many more emerging names that you'll come to know very soon.
            </p>
          )}
        </div>

        <div className="mt-10 flex justify-center">
          <a href={testimonialsLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-pocketYellow text-black font-bold hover:opacity-90 transition-opacity" style={{ fontSize: "18px", letterSpacing: "-0.05em", lineHeight: "1.2", padding: "16px 28px", borderRadius: "8px" }}>
            {ctaText}
          </a>
        </div>
      </div>

      {/* DESKTOP */}
      <div className="hidden lg:block min-h-screen items-start pt-40 xl:pt-56 pb-24">
        <div className="pocket-container w-full">
          <h2 className="text-white font-black tracking-[-0.05em] leading-[1.2] mb-12 xl:mb-16 -ml-4 xl:-ml-20" style={{ fontSize: "clamp(48px, 8vw, 120px)" }}>
            {whoHeading || "Who We Work With"}
          </h2>

          <div className="grid grid-cols-2 gap-10 xl:gap-16 items-start">
            <div className="flex flex-col gap-6 xl:gap-8 text-white text-[18px] xl:text-[20px] font-medium leading-[1.3] xl:leading-[1.2] tracking-[-0.05em]">
              {whoParagraph1 ? <div className="wordpress-content" dangerouslySetInnerHTML={{ __html: whoParagraph1 }} /> : <p>We have provided video and photography services to a huge variety of clients in our history, from crowdfunders and startups through to more established names and global businesses. We love that mix, and being entrusted with the visuals for clients of any size is extremely satisfying.</p>}
              {whoParagraph2 ? <div className="wordpress-content" dangerouslySetInnerHTML={{ __html: whoParagraph2 }} /> : <p>We work with most clients directly, and we're also able to provide our services to agencies and other creative companies who don't have access to video and photography services in house.</p>}
              {whoParagraph3 ? (
                <div className="wordpress-content" dangerouslySetInnerHTML={{ __html: whoParagraph3 }} />
              ) : (
                <p>
                  We're very proud to have worked with known clients such as{" "}
                  <span className="inline-flex items-center justify-center align-middle mx-1 bg-pocketYellow text-black" style={{ width: "160px", height: "28px", borderRadius: "2px" }}>
                    <span className="font-bold whitespace-nowrap" style={{ fontSize: "18px", letterSpacing: "-0.05em", lineHeight: "1.2", opacity: enterFade ? 0 : 1, transition: enterFade ? "none" : "opacity 2000ms cubic-bezier(0.22, 1, 0.36, 1)" }}>
                      {namesList[nameIndex]}
                    </span>
                  </span>{" "}
                  and many more emerging names that you'll come to know very soon.
                </p>
              )}
            </div>

            <div className="flex flex-col gap-4">
              <div className="relative overflow-hidden">
                <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${page * 100}%)` }}>
                  {PAGES.map((logos, pageIdx) => (
                    <div key={pageIdx} className="shrink-0 w-full grid grid-cols-3 gap-4">
                      {logos.map((logo, idx) => (
                        <div key={idx} className="w-full aspect-[2/1] bg-white rounded-2xl shadow-[0_4px_6px_rgba(0,0,0,0.18)] flex items-center justify-center px-4 xl:px-6 py-3 xl:py-4">
                          <img src={logo.src} alt={logo.alt} className="max-w-full max-h-full object-contain" draggable="false" />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2" />
                <a href={testimonialsLink} target="_blank" rel="noopener noreferrer" className="w-full aspect-[2/1] bg-pocketYellow rounded-2xl flex items-center justify-end text-right text-black font-bold hover:opacity-90 transition-opacity px-3 xl:px-4 py-3 xl:py-4" style={{ fontSize: "14px", letterSpacing: "-0.05em", lineHeight: "1.2" }}>
                  <span>You can see what<br />what they say about <br />us <span className="underline">here</span></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutWhoWeWorkWith;