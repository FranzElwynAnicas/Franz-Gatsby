import React from "react";

const WorksCategoryBlock = ({
  title = "Beauty",
  links = [
    { label: "Beauty Videography", to: "#beauty-videography" },
    { label: "Beauty Photography", to: "#beauty-photography" },
  ],
}) => {
  const handleClick = (e, to) => {
    e.preventDefault();
    const el = document.querySelector(to);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="category-beauty"
      className="relative w-full aspect-[1920/858] bg-[#FCBE17]"
      style={{ scrollMarginTop: "120px" }}
    >
      <div className="absolute inset-0 flex flex-col justify-center">
        <div className="w-full max-w-[1280px] mx-auto px-6 md:px-12">
          <h2
            className="text-white font-extrabold tracking-[-0.05em] leading-[1]"
            style={{
              fontSize: "clamp(48px, 6.25vw, 120px)",
              marginBottom: "clamp(40px, 6vw, 100px)",
            }}
          >
            Category:
            <br />
            {title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-[600px_1fr] gap-10 md:gap-40 items-start">
            <p
              className="text-black font-medium tracking-[-0.05em]"
              style={{ fontSize: "20px", lineHeight: 2, whiteSpace: "nowrap" }}
            >
              Lorem ipsum dolor sit amet consectetur. Nulla purus rhoncus at mattis.
              <br />
              Et ac vitae ornare volutpat. Mollis sem scelerisque dictum nunc iaculis
              <br />
              vivamus donec. Molestie sed mattis aenean sit arcu ipsum amet
              <br />
              vulputate tellus. Blandit pellentesque magna egestas eget rhoncus
              <br />
              tincidunt. In ultrices velit et velit morbi vitae dolor fames. Rhoncus.
            </p>

            <div className="md:pl-4">
              <p
                className="text-black font-extrabold tracking-[-0.05em] mb-4"
                style={{ fontSize: "20px", lineHeight: 1.25 }}
              >
                Go to...
              </p>

              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.to}
                      onClick={(e) => handleClick(e, link.to)}
                      className="arrow-link inline-flex items-center gap-2 text-white font-extrabold tracking-[-0.05em] hover:opacity-90 transition-opacity"
                      style={{ fontSize: "20px", lineHeight: 1.25 }}
                    >
                      <span className="arrow-wrap" aria-hidden="true">
                        <svg
                          width="60"
                          height="14"
                          viewBox="0 0 60 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{ display: "block" }}
                        >
                          <line
                            x1="0"
                            y1="7"
                            x2="53"
                            y2="7"
                            stroke="black"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                          <polyline
                            points="47,1 53,7 47,13"
                            fill="none"
                            stroke="black"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .arrow-wrap {
          display: inline-block;
          position: relative;
          width: 24px;              /* ← longer resting arrow */
          height: 14px;
          overflow: hidden;
          transition: width 300ms ease-out;
          vertical-align: middle;
        }
        .arrow-wrap svg {
          position: absolute;
          top: 0;
          right: 0;
          width: 60px;
          height: 14px;
        }
        .arrow-link:hover .arrow-wrap {
          width: 38px;              /* ← shorter hover length */
        }
      `}</style>
    </section>
  );
};

export default WorksCategoryBlock;  