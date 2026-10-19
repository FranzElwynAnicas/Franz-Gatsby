import React, { useState } from "react";

const columns = [
  {
    title: "Proactive",
    body: (
      <>
        We pride ourselves on our quality of service
        above everything else. We've taken the time to
        build a cracking little team at Pocket, and we
        make sure that you feel the benefits of working
        with a dedicated video production company who
        are there for you, and dedicated to the success
        of your project.
      </>
    ),
  },
  {
    title: "Nerds for Visuals",
    body: (
      <>
        Lorem ipsum dolor sit amet consectetur.
        Fermentum ut laoreet nunc at amet. Pretium sed
        tristique eu erat dui elementum eu duis. Sem
        posuere congue pellentesque duis in. Nunc id
        ridiculus mattis ullamcorper in id accumsan eu
        habitant. Mollis duis eu tellus aliquam viverra.
        Amet feugiat et habitasse mauris massa iaculis.
        Id at.
      </>
    ),
  },
  {
    title: "Valuable",
    body: (
      <>
        Lorem ipsum dolor sit amet consectetur. Varius
        tempor id nulla aliquet gravida. Quis at auctor
        quis lectus velit id parturient bibendum. Amet a
        erat faucibus enim orci. Praesent magna facilisi
        erat eget dictumst nulla nunc. Scelerisque cras
        viverra ipsum at accumsan a. Sed sollicitudin
        lacinia amet arcu volutpat. Id.
      </>
    ),
  },
  {
    title: "Flexible",
    body: (
      <>
        Lorem ipsum dolor sit amet consectetur.
        Sollicitudin nibh sed nullam commodo volutpat
        urna mus. Tristique arcu non sed erat amet
        facilisi aliquet massa feugiat. Ipsum placerat
        accumsan sagittis egestas sagittis id volutpat.
        Mauris est lectus libero at sem. Amet magna
        euismod tristique interdum pretium. Massa
        venenatis.
      </>
    ),
  },
  {
    title: "Normal People",
    body: (
      <>
        Lorem ipsum dolor sit amet consectetur. Quis eu
        aliquam molestie arcu maecenas. Integer volutpat
        quisque orci facilisis. Et volutpat mauris lacus
        feugiat tempor. Facilisi risus id egestas eget sit
        adipiscing nec lectus. Consequat pretium sit in id
        phasellus vitae mi. Libero tempus ut leo egestas
        elit. Ut consectetur lacus amet porta.
      </>
    ),
  },
  {
    title: "Conscious",
    body: (
      <>
        Lorem ipsum dolor sit amet consectetur. Gravida
        eget sem non feugiat iaculis faucibus. Ut enim
        semper in commodo neque tortor leo eu. Convallis
        est in leo porttitor tempor vitae etiam urna.
        Aliquet fusce dolor aliquet sed dictum. Dolor
        auctor vitae ultricies nisi ridiculus. Est
        elementum massa ullamcorper et malesuada et
        tristique.
      </>
    ),
  },
];

const ITEMS_PER_PAGE = 3;

const HomeServicesCheck = () => {
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(columns.length / ITEMS_PER_PAGE);
  const isFirst = page === 0;
  const isLast = page === totalPages - 1;

  const handleNext = () => {
    if (!isLast) setPage((p) => p + 1);
  };

  const handlePrev = () => {
    if (!isFirst) setPage((p) => p - 1);
  };

  return (
    <section className="w-full min-h-screen bg-pocketYellow flex items-center">
      <div className="w-full py-20">
        <div className="px-8 md:pl-[12.5%] md:pr-16">
          {/* Top row: heading + Say Hello button (desktop only) */}
          <div className="flex items-start justify-between gap-10 mb-20">
            <h2 className="text-5xl md:text-7xl lg:text-[80px] font-black leading-[0.95] tracking-[-0.03em]">
              <span className="text-white">Services - </span>
              <span className="text-pocketTeal">Check ✓</span>
              <br />
              <span className="text-white">Quality - </span>
              <span className="text-pocketTeal">Check ✓</span>
              <br />
              <span className="text-white">People - </span>
              <span className="text-pocketTeal">Check ✓</span>
            </h2>

            <button className="hidden md:flex bg-white text-pocketTeal font-extrabold text-lg md:text-2xl rounded-full w-24 h-24 md:w-32 md:h-32 items-center justify-center hover:scale-105 transition-transform shrink-0 leading-tight shadow-[3px_3px_6px_0px_#526E87]">
              Say<br />Hello
            </button>
          </div>

          {/* MOBILE: single vertical stacked list, no arrows, no sliding */}
          <div className="md:hidden flex flex-col gap-10">
            {columns.map((col) => (
              <div key={col.title}>
                <h3 className="text-2xl text-pocketBlack font-medium mb-6">
                  {col.title}
                </h3>
                <p className="text-pocketBlack text-base font-medium leading-[1.4]">
                  {col.body}
                </p>
              </div>
            ))}

            {/* Say Hello ball - mobile only, centered below everything */}
            <div className="flex justify-center mt-6">
              <button className="bg-white text-pocketTeal font-extrabold text-lg rounded-full w-24 h-24 flex items-center justify-center hover:scale-105 transition-transform leading-tight shadow-[3px_3px_6px_0px_#526E87]">
                Say<br />Hello
              </button>
            </div>
          </div>

          {/* DESKTOP: sliding track + arrows */}
          <div className="hidden md:block">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-1000 ease-in-out"
                style={{ transform: `translateX(-${page * 100}%)` }}
              >
                {columns.map((col) => (
                  <div key={col.title} className="w-1/3 shrink-0 pr-8 lg:pr-12">
                    <h3 className="text-2xl md:text-3xl text-pocketBlack font-medium mb-8">
                      {col.title}
                    </h3>
                    <p className="text-pocketBlack text-base md:text-[20px] font-medium leading-[1.4]">
                      {col.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Arrow buttons */}
            <div className="flex items-center gap-4 mt-10">
              <button
                onClick={handlePrev}
                aria-label="Previous"
                className={`w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-[3px_3px_6px_0px_#526E87] hover:scale-105 transition-transform ${
                  isFirst ? "invisible" : "visible"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-pocketBlack"
                >
                  <path d="M19 12H5" />
                  <path d="M12 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={handleNext}
                aria-label="Next"
                className={`w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-[3px_3px_6px_0px_#526E87] hover:scale-105 transition-transform ${
                  isLast ? "invisible" : "visible"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-pocketBlack"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeServicesCheck;