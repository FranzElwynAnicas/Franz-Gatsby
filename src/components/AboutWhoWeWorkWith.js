import React, { useState, useEffect } from "react";

/* ─── Same logo imports as PartnersGrid ─── */
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
    { src: logoArgos,           alt: "Argos" },
    { src: logoSoapGlory,       alt: "Soap & Glory" },
    { src: logoMacmillan,       alt: "Macmillan" },
    { src: logoKopparberg,      alt: "Kopparberg" },
    { src: logoLadbrokes,       alt: "Ladbrokes" },
    { src: logoCoop,            alt: "Co-op" },
    { src: logoBusinessInsider, alt: "Business Insider" },
    { src: logoGymGroup,        alt: "The Gym Group" },
    { src: logoTelegraph,       alt: "The Telegraph" },
  ],
  [
    { src: logoStudio,          alt: "Studio" },
    { src: logoMuseum,          alt: "Museum" },
    { src: logoColmans,         alt: "Colman's" },
    { src: logoRightmove,       alt: "Rightmove" },
    { src: logoQvc,             alt: "QVC" },
    { src: logoMasabi,          alt: "Masabi" },
    { src: logoVidaGlow,        alt: "Vida Glow" },
    { src: logoPrestigeFlowers, alt: "Prestige Flowers" },
    { src: logoSaputo,          alt: "Saputo" },
  ],
];

const NAME_CAROUSEL = [
  "Prestige Flowers",
  "The Telegraph",
  "James Read Tan",
];

const AboutWhoWeWorkWith = () => {
  const [page, setPage] = useState(0);
  const [nameIndex, setNameIndex] = useState(0);
  const [enterFade, setEnterFade] = useState(false);

  /* Rotate logo pages every 5s */
  useEffect(() => {
    const timer = setInterval(() => {
      setPage((prev) => (prev + 1) % PAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  /* Rotate name every 4s */
  useEffect(() => {
    const cycle = setInterval(() => {
      setNameIndex((i) => (i + 1) % NAME_CAROUSEL.length);
      setEnterFade(true);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setEnterFade(false));
      });
    }, 4000);
    return () => clearInterval(cycle);
  }, []);

  return (
    <section className="w-full bg-pocketTeal">

      {/* ============================================================ */}
      {/* MOBILE — heading, text, rotating name, View Testimonials btn  */}
      {/* ============================================================ */}
      <div className="lg:hidden px-6 pt-16 pb-20">
        {/* Heading */}
        <h2
          className="text-white font-black leading-[1] tracking-[-0.05em] mb-8"
          style={{ fontSize: "48px" }}
        >
          Who We
          <br />
          Work With
        </h2>

        {/* Body copy */}
        <div className="flex flex-col gap-6 text-white text-[16px] font-medium leading-[1.4] tracking-[-0.05em]">
          <p>
            We have provided video and photography services to a huge variety of
            clients in our history, from crowdfunders and startups through to
            more established names and global businesses. We love that mix, and
            being entrusted with the visuals for clients of any size is
            extremely satisfying.
          </p>

          <p>
            We work with most clients directly, and we're also able to provide
            our services to agencies and other creative companies who don't
            have access to video and photography services in house.
          </p>

          <p>
            We're very proud to have worked with known clients such as{" "}
            <span
              className="inline-flex items-center justify-center align-middle mx-1 bg-pocketYellow text-black"
              style={{
                minWidth: "140px",
                height: "26px",
                borderRadius: "2px",
                padding: "0 8px",
              }}
            >
              <span
                className="font-bold whitespace-nowrap"
                style={{
                  fontSize: "16px",
                  letterSpacing: "-0.05em",
                  lineHeight: "1.2",
                  opacity: enterFade ? 0 : 1,
                  transition: enterFade
                    ? "none"
                    : "opacity 2000ms cubic-bezier(0.22, 1, 0.36, 1)",
                }}
              >
                {NAME_CAROUSEL[nameIndex]}
              </span>
            </span>{" "}
            and many more emerging names that you'll come to know very soon.
          </p>
        </div>

        {/* View Testimonials button — centered */}
        <div className="mt-10 flex justify-center">
          <a
            href="https://www.pocketcreatives.co.uk/testimonials/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-pocketYellow text-black font-bold hover:opacity-90 transition-opacity"
            style={{
              fontSize: "18px",
              letterSpacing: "-0.05em",
              lineHeight: "1.2",
              padding: "16px 28px",
              borderRadius: "8px",
            }}
          >
            View Testimonials
          </a>
        </div>
      </div>

      {/* ============================================================ */}
      {/* DESKTOP — completely unchanged                                */}
      {/* ============================================================ */}
      <div className="hidden lg:block min-h-screen items-start pt-56 pb-24">
        <div className="pocket-container w-full">

          {/* Heading */}
          <h2
            className="text-white font-black tracking-[-0.05em] leading-[1.2] mb-16 -ml-20"
            style={{ fontSize: "clamp(48px, 8vw, 120px)" }}
          >
            Who We Work With
          </h2>

          <div className="grid grid-cols-2 gap-16 items-start">

            {/* Left: body copy */}
            <div className="flex flex-col gap-8 text-white text-[20px] font-medium leading-[1.2] tracking-[-0.05em]">
              <p className="text-justify">
                We have provided video and photography services to a huge variety of<br />
                clients in our history, from crowdfunders and startups through to more<br />
                established names and global businesses. We love that mix, and being<br />
                entrusted with the visuals for clients of any size is extremely satisfying.
              </p>

              <p className="text-left">
                We work with most clients directly, and we're also able to provide our<br />
                services to agencies and other creative companies who don't have<br />
                access to video and photography services in house.
              </p>

              <p className="text-left">
                We're very proud to have worked with known clients<br />
                such as{" "}
                <span
                  className="inline-flex items-center justify-center align-middle mx-1 bg-pocketYellow text-black"
                  style={{
                    width: "160px",
                    height: "28px",
                    borderRadius: "2px",
                  }}
                >
                  <span
                    className="font-bold"
                    style={{
                      fontSize: "20px",
                      letterSpacing: "-0.05em",
                      lineHeight: "1.2",
                      opacity: enterFade ? 0 : 1,
                      transition: enterFade
                        ? "none"
                        : "opacity 2000ms cubic-bezier(0.22, 1, 0.36, 1)",
                    }}
                  >
                    {NAME_CAROUSEL[nameIndex]}
                  </span>
                </span>{" "}
                and many more emerging names that<br />
                you'll come to know very soon.
              </p>
            </div>

            {/* Right: logo carousel + yellow pill */}
            <div className="flex flex-col gap-4">
              <div className="relative overflow-hidden">
                <div
                  className="flex transition-transform duration-700 ease-in-out"
                  style={{ transform: `translateX(-${page * 100}%)` }}
                >
                  {PAGES.map((logos, pageIdx) => (
                    <div
                      key={pageIdx}
                      className="shrink-0 w-full grid grid-cols-3 gap-4"
                    >
                      {logos.map((logo, idx) => (
                        <div
                          key={idx}
                          className="w-full aspect-[2/1] bg-white rounded-2xl shadow-[0_4px_6px_rgba(0,0,0,0.18)] flex items-center justify-center px-6 py-4"
                        >
                          <img
                            src={logo.src}
                            alt={logo.alt}
                            className="max-w-full max-h-full object-contain"
                            draggable="false"
                          />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2" />
                <a
                  href="https://www.pocketcreatives.co.uk/testimonials/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full aspect-[2/1] bg-pocketYellow rounded-2xl flex items-center justify-end text-right text-black font-bold hover:opacity-90 transition-opacity px-4 py-4"
                  style={{
                    fontSize: "16px",
                    letterSpacing: "-0.05em",
                    lineHeight: "1.2",
                  }}
                >
                  <span>
                    You can see what<br />
                    what they say about <br />
                    us <span className="underline">here</span>
                  </span>
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