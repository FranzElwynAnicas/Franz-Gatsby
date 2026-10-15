import React, { useState, useEffect } from "react";

import logoArgos from "../images/partner-argos.png";
import logoSaputo from "../images/partner-saputo.png";
import logoMacmillan from "../images/partner-macmillan.png";
import logoKopparberg from "../images/partner-kopparberg.png";
import logoLadbrokes from "../images/partner-ladbrokes.png";
import logoCoop from "../images/partner-coop.png";
import logoBusinessInsider from "../images/partner-business-insider.png";
import logoGymGroup from "../images/partner-gym-group.png";
import logoTelegraph from "../images/partner-telegraph.png";
import logoStudio from "../images/partner-studio.png";
import logoMuseum from "../images/partner-museum.png";
import logoColmans from "../images/partner-colmans.png";
import logoRightmove from "../images/partner-rightmove.png";
import logoQvc from "../images/partner-qvc.png";
import logoMasabi from "../images/partner-masabi.png";
import logoVidaGlow from "../images/partner-vida-glow.png";
import logoPrestigeFlowers from "../images/partner-prestige-flowers.png";
import logoSoapGlory from "../images/partner-soap-glory.png";

const PAGES = [
  [
    { src: logoArgos, alt: "Argos" },
    { src: logoSoapGlory, alt: "Soap & Glory" },
    { src: logoMacmillan, alt: "Macmillan" },
    { src: logoKopparberg, alt: "Kopparberg" },
    { src: logoLadbrokes, alt: "Ladbrokes" },
    { src: logoCoop, alt: "Co-op" },
    { src: logoBusinessInsider, alt: "Business Insider" },
    { src: logoGymGroup, alt: "The Gym Group" },
    { src: logoTelegraph, alt: "The Telegraph" },
  ],
  [
    { src: logoStudio, alt: "Studio" },
    { src: logoMuseum, alt: "Museum" },
    { src: logoColmans, alt: "Colman's" },
    { src: logoRightmove, alt: "Rightmove" },
    { src: logoQvc, alt: "QVC" },
    { src: logoMasabi, alt: "Masabi" },
    { src: logoVidaGlow, alt: "Vida Glow" },
    { src: logoPrestigeFlowers, alt: "Prestige Flowers" },
    { src: logoSaputo, alt: "Saputo" },
  ],
];

const LogoCard = ({ src, alt }) => (
  <div className="w-full aspect-[2/1] bg-white rounded-2xl shadow-[0_4px_6px_rgba(0,0,0,0.18)] flex items-center justify-center px-6 py-4">
    <img
      src={src}
      alt={alt}
      className="max-w-full max-h-full object-contain"
    />
  </div>
);

const HomePartnersGrid = () => {
  const [page, setPage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPage((prev) => (prev + 1) % PAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full bg-pocketWhite py-16 md:py-24">
      <div className="pocket-container grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        {/* Left — text */}
        <div>
        <h2 className="text-[28px] md:text-[34px] lg:text-[40px] font-medium leading-[1.15] tracking-[-0.02em] mb-8 text-pocketGrey">
            As you can see, we've{" "}
            <span className="text-pocketYellow font-black">partnered</span>
            <br />
            with a lot of amazing people
            <br />
            <br />
            <span className="text-pocketTeal font-extrabold">
            in many different Industries:
            </span>
        </h2>
        <p className="text-pocketGrey text-base md:text-[20px] font-medium leading-loose max-w-lg">
            Lorem ipsum dolor sit amet consectetur. Placerat quisque feugiat
            porta quam ornare. In nec lacinia consectetur placerat vestibulum
            sem odio. In feugiat elit fames eget lobortis turpis scelerisque
            tincidunt. Enim.
        </p>
        </div>

        {/* Right — 3x3 paged slider */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${page * 100}%)` }}
          >
            {PAGES.map((logos, pageIdx) => (
              <div
                key={pageIdx}
                className="shrink-0 w-full grid grid-cols-3 gap-3 md:gap-4"
              >
                {logos.map((logo, idx) => (
                  <LogoCard key={idx} src={logo.src} alt={logo.alt} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePartnersGrid;