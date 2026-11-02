import React, { useState } from "react";

const courseBoxes = [
  {
    id: 1,
    title: "Those new to the industry might be interested in",
    details: [
      "Camera setup and best practice",
      "Lighting techniques",
      "Getting started with professional video editing",
    ],
  },
  {
    id: 2,
    title: "Photographers adding video production to their offering",
    details: [
      "How to take what you know in photography and apply it to moving imagery",
      "Editing for video",
    ],
  },
  {
    id: 3,
    title: "Video production professionals adding new services or sectors",
    details: [
      "You might work in food & drink but are keen to add the ability to shoot products",
      "Tackling events",
      "Working in the studio",
      "Building confidence with recording sound",
    ],
  },
];

const CoursesExamples = () => {
  const [activeBox, setActiveBox] = useState(null);

  // Logic to perfectly anchor the clicked box while pushing the others
  const getJustify = () => {
    if (activeBox === 1) return "lg:justify-start lg:pl-6 lg:pl-12";
    if (activeBox === 3) return "lg:justify-end lg:pr-6 lg:pr-12";
    return "lg:justify-center";
  };

  return (
    <section className="w-full bg-[#F7F7F7] py-16 md:py-24 flex flex-col items-center overflow-hidden">
      <div className="w-full flex flex-col items-center">
        {/* Heading — black until xl, #526E87 at xl+ */}
        <h2
          className="text-black xl:text-[#526E87] text-center mb-12 md:mb-20 max-w-[1000px] px-6"
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 700,
            fontSize: "clamp(40px, 6vw, 120px)",
            lineHeight: "100%",
            letterSpacing: "-0.05em",
          }}
        >
          Example Courses
        </h2>

        {/* Container for the Boxes */}
        <div className="w-full flex pb-8 overflow-hidden px-6 md:px-12">
          {/* Mobile: flex-col (stacked) | Tablet/Desktop (lg+): flex-row */}
          <div
            className={`flex flex-col lg:flex-row items-stretch transition-all duration-500 w-full gap-6 md:gap-8 justify-center ${getJustify()}`}
          >
            {courseBoxes.map((box) => {
              const isOpen = activeBox === box.id;

              return (
                <div
                  key={box.id}
                  className={`relative flex shrink-0 transition-all duration-500 ease-in-out w-full max-w-[418px] lg:max-w-none mx-auto lg:mx-0 ${
                    isOpen ? "lg:w-[1098px]" : "lg:w-[418px]"
                  }`}
                >
                  {/* Yellow Box */}
                  <div
                    onClick={() => setActiveBox(isOpen ? null : box.id)}
                    className="w-full lg:w-[418px] h-[418px] bg-[#FCBE17] p-8 md:p-10 flex flex-col justify-center cursor-pointer hover:bg-yellow-500 transition-colors relative z-10 shrink-0"
                  >
                    <div className="flex flex-row items-end gap-2 pr-4">
                      <h3
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontWeight: 700,
                          fontSize: "clamp(28px, 4vw, 40px)",
                          lineHeight: "110%",
                          letterSpacing: "-0.05em",
                          color: "#000000",
                        }}
                      >
                        {box.title}
                      </h3>

                      {/* Arrow directly next to the text */}
                      <div className="mb-[6px] shrink-0">
                        <svg
                          width="34"
                          height="30"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5 12H19M19 12L12 5M19 12L12 19"
                            stroke="black"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Blue Expanding Panel */}
                  <div
                    className={`
                      h-[418px] bg-[#179CBD] flex flex-col overflow-hidden transition-all duration-500 ease-in-out
                      /* Mobile Sliding Overlay */
                      absolute top-0 left-0 w-full z-20 p-8 md:p-10
                      ${isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 pointer-events-none"}
                      /* Tablet/Desktop Expanding Panel */
                      lg:relative lg:translate-x-0 lg:top-auto lg:left-auto
                      ${isOpen ? "lg:w-[680px] lg:opacity-100" : "lg:w-0 lg:opacity-0 lg:p-0"}
                    `}
                  >
                    <div className="flex-1 flex items-center w-full h-full">
                      <div className="space-y-4 md:space-y-6 w-full">
                        {box.details.map((detail, i) => (
                          <div key={i} className="flex items-start gap-4">
                            <div className="mt-[8px] md:mt-[14px] w-2.5 h-2.5 rounded-full bg-white shrink-0" />
                            <span
                              style={{
                                fontFamily: "Inter, sans-serif",
                                fontWeight: 700,
                                fontSize: "clamp(20px, 3vw, 32px)",
                                lineHeight: "110%",
                                letterSpacing: "-0.05em",
                                color: "#FFFFFF",
                              }}
                            >
                              {detail}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Back Arrow */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveBox(null);
                      }}
                      className="absolute bottom-6 right-6 text-white hover:opacity-75 transition-opacity"
                    >
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19 12H5M5 12L12 19M5 12L12 5"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* How Much? Button */}
        <div className="w-full max-w-[1440px] px-6 md:px-12 flex justify-center lg:justify-end mt-4">
          <button
            className="flex items-center justify-center bg-[#FCBE17] hover:bg-yellow-500 transition-colors relative w-full max-w-[418px] lg:w-[237px]"
            style={{
              height: "83px",
              boxShadow: "3px 3px 6px 0px #526E87",
            }}
          >
            <div
              className="absolute bg-[#179CBD] rounded-full flex items-center justify-center"
              style={{
                width: "50.29px",
                height: "50.29px",
                top: "16px",
                left: "20.5px",
                transform: "rotate(15.91deg)",
              }}
            >
              <svg
                width="27"
                height="30"
                viewBox="0 0 27 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26.1822 24.4708L8.36433 29.442L6.93623 25.239L24.7541 20.2677L26.1822 24.4708ZM18.1801 16.1986L5.04423 19.8636L3.68014 15.849L16.816 12.184L18.1801 16.1986ZM10.0318 10.0425L13.8192 19.9545C14.2245 21.0187 14.3103 21.9786 14.0767 22.8343C13.8484 23.68 13.2408 24.5154 12.2539 25.3407L8.50487 24.8014C8.83212 24.6327 9.03555 24.3826 9.11517 24.0511C9.20011 23.7094 9.20251 23.3307 9.12238 22.9148C9.05023 22.4967 8.9395 22.0808 8.79017 21.667L4.9307 11.4657C4.34681 9.95304 4.20614 8.57447 4.5087 7.33003C4.81657 6.0755 5.4679 5.00872 6.4627 4.12967C7.45482 3.24277 8.6933 2.59218 10.1781 2.17791C11.4314 1.82823 12.6037 1.6902 13.695 1.76382C14.7836 1.82958 15.7698 2.08287 16.6537 2.52369C17.543 2.95442 18.2952 3.54796 18.9106 4.30431C19.5259 5.06066 19.9856 5.95064 20.2897 6.97427L15.3961 8.19783C15.1854 7.52623 14.8843 7.02593 14.4928 6.69691C14.1013 6.3679 13.6594 6.17327 13.167 6.11302C12.6746 6.05277 12.1689 6.09503 11.65 6.23981C11.1471 6.38012 10.7308 6.62089 10.401 6.96209C10.0765 7.29322 9.87185 7.71981 9.78704 8.24185C9.70754 8.75382 9.78913 9.35404 10.0318 10.0425Z"
                  fill="white"
                />
              </svg>
            </div>
            <span
              className="ml-[30px]"
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 500,
                fontSize: "20px",
                lineHeight: "100%",
                letterSpacing: "-0.05em",
                color: "#000000",
              }}
            >
              How Much?
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CoursesExamples;