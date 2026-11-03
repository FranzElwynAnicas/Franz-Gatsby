import React, { useState } from "react";
import steven from "../../images/team-steven.png";
import haider from "../../images/team-haider.png";

const members = {
  steven: {
    id: "steven",
    firstName: "Steven",
    lastName: "Mayatt",
    photo: steven,
    roles: [
      "Managing Director",
      "Creative Director",
      "Photographer",
      "Entrepreneur",
      "Marketeer",
      "Coffee Drinker",
    ],
    bio:
      "Lorem ipsum dolor sit amet consectetur. Placerat quisque feugiat porta quam ornare. In nec lacinia consectetur placerat vestibulum sem odio. In feugiat elit fames eget lobortis turpis scelerisque tincidunt. Enim.",
  },
  haider: {
    id: "haider",
    firstName: "Haider",
    lastName: "Romero Perez",
    photo: haider,
    roles: [
      "Technical Director",
      "Cinematographer",
      "Cameraman",
      "Editor",
      "Colourist",
      "Intrepid Cyclist",
    ],
    bio:
      "Lorem ipsum dolor sit amet consectetur. Placerat quisque feugiat porta quam ornare. In nec lacinia consectetur placerat vestibulum sem odio. In feugiat elit fames eget lobortis turpis scelerisque tincidunt. Enim.",
  },
};

const tabs = [
  { id: "steven", firstName: "Steven" },
  { id: "haider", firstName: "Haider" },
  { id: "lauren", firstName: "Lauren" },
  { id: "ned", firstName: "Ned" },
  { id: "connor", firstName: "Connor" },
  { id: "rauchan", firstName: "Rauchan" },
];

const HomeMeetTheTeam = () => {
  const [activeId, setActiveId] = useState("steven");
  const active = members[activeId] || null;

  return (
    <section className="w-full min-h-screen bg-pocketWhite flex items-center overflow-hidden">
      <div className="w-full py-16 md:py-20 lg:py-24">
        <div className="px-6 md:px-10 lg:pl-[12.5%] lg:pr-16">
          
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold text-pocketGrey tracking-[-0.02em] mb-8 md:mb-12">
            Meet the Team
          </h2>

          {/* ============ MOBILE LAYOUT (default only) ============ */}
          <div className="block md:hidden">
            
            {/* Tabs row — limited width to force a horizontal swipe */}
            <div className="flex gap-3 mb-8 overflow-x-auto scrollbar-hide max-w-[80vw]">
              {tabs.map((tab) => {
                const isActive = activeId === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveId(tab.id)}
                    className={`shrink-0 px-5 py-2 rounded-xl text-base transition-colors ${
                      isActive
                        ? "bg-pocketYellow text-white font-bold"
                        : "text-pocketGrey font-medium"
                    }`}
                  >
                    {tab.firstName}
                  </button>
                );
              })}
            </div>

            {/* Photo + Name/Buttons side-by-side */}
            {active ? (
              <>
                <div className="flex items-start gap-6 mb-8">
                  <div className="w-[140px] h-[175px] rounded-2xl overflow-hidden bg-pocketLightGrey shrink-0">
                    <img
                      src={active.photo}
                      alt={`${active.firstName} ${active.lastName}`}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex flex-col justify-center pt-2">
                    <h3 className="leading-none tracking-[-0.03em] mb-1">
                      <span className="text-pocketYellow font-extrabold text-[38px]">
                        {active.firstName}
                      </span>
                    </h3>
                    {active.lastName && (
                      <h4 className="text-pocketTeal font-extrabold text-[22px] leading-tight mb-4">
                        {active.lastName}
                      </h4>
                    )}

                    <div className="flex items-center gap-3">
                      <button className="bg-pocketTeal text-white font-bold rounded-full w-[50px] h-[50px] flex items-center justify-center text-[11px] leading-[1.1] text-center">
                        Msg<br />{active.firstName}
                      </button>
                      <a href="#" aria-label="LinkedIn" className="w-[50px] h-[50px] flex items-center justify-center">
                        <svg viewBox="0 0 24 24" fill="#179CBD" className="w-full h-full">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-x-5 gap-y-1 mb-6">
                  {active.roles.map((role) => (
                    <span key={role} className="text-pocketGrey text-[17px] font-extrabold">
                      {role}
                    </span>
                  ))}
                </div>

                <p className="text-pocketGrey text-[17px] font-medium leading-[1.6]">
                  {active.bio}
                </p>
              </>
            ) : (
              <>
                <h3 className="mb-10 leading-none tracking-[-0.03em]">
                  <span className="text-pocketYellow font-extrabold text-4xl">Coming Soon</span>
                </h3>
                <p className="text-pocketGrey text-base font-medium leading-[1.5]">
                  More team members coming soon.
                </p>
              </>
            )}
          </div>

          {/* ============ TABLET/DESKTOP LAYOUT (md, lg, xl, 2xl) ============ */}
          <div className="hidden md:grid grid-cols-[1fr_1.2fr] lg:grid-cols-2 2xl:grid-cols-[550px_1fr] gap-8 lg:gap-10 xl:gap-16 2xl:gap-24 items-start">
            
            {/* LEFT: Photo */}
            <div className="w-full max-w-[550px] aspect-[5/6] rounded-2xl overflow-hidden bg-pocketLightGrey">
              {active ? (
                <img
                  src={active.photo}
                  alt={`${active.firstName} ${active.lastName}`}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-pocketGrey text-base">
                  [ Photo coming soon ]
                </div>
              )}
            </div>

            {/* RIGHT: Tabs + Info */}
            <div>
              <div className="mb-10 lg:mb-12 max-w-[520px]">
                <div className="flex gap-3 lg:gap-4 2xl:gap-6 mb-3">
                  {tabs.slice(0, 3).map((tab) => {
                    const isActive = activeId === tab.id;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveId(tab.id)}
                        className={`flex-1 px-3 lg:px-4 2xl:px-6 py-2 lg:py-2.5 rounded-xl text-sm lg:text-base 2xl:text-lg transition-colors ${
                          isActive
                            ? "bg-pocketYellow text-white font-bold"
                            : "text-pocketGrey hover:bg-pocketTeal hover:text-white font-medium"
                        }`}
                      >
                        {tab.firstName}
                      </button>
                    );
                  })}
                </div>

                <div className="flex gap-3 lg:gap-4 2xl:gap-6 pl-8 lg:pl-12 2xl:pl-24">
                  {tabs.slice(3, 6).map((tab) => {
                    const isActive = activeId === tab.id;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveId(tab.id)}
                        className={`flex-1 px-3 lg:px-4 2xl:px-6 py-2 lg:py-2.5 rounded-xl text-sm lg:text-base 2xl:text-lg transition-colors ${
                          isActive
                            ? "bg-pocketYellow text-white font-bold"
                            : "text-pocketGrey hover:bg-pocketTeal hover:text-white font-medium"
                        }`}
                      >
                        {tab.firstName}
                      </button>
                    );
                  })}
                </div>
              </div>

              {active ? (
                <>
                  <h3 className="mb-8 lg:mb-10 leading-none tracking-[-0.03em] flex flex-wrap items-baseline gap-x-3">
                    <span className="text-pocketYellow font-extrabold text-4xl lg:text-5xl 2xl:text-[80px]">
                      {active.firstName}
                    </span>
                    {active.lastName && (
                      <span className="text-pocketTeal font-extrabold text-2xl lg:text-3xl 2xl:text-[40px]">
                        {active.lastName}
                      </span>
                    )}
                  </h3>

                  <div className="flex flex-wrap gap-x-4 lg:gap-x-6 gap-y-2 mb-8 lg:mb-12 max-w-[600px]">
                    {active.roles.map((role) => (
                      <span key={role} className="text-pocketGrey text-base lg:text-lg 2xl:text-xl font-extrabold">
                        {role}
                      </span>
                    ))}
                  </div>

                  <p className="text-pocketGrey text-base lg:text-lg 2xl:text-xl font-medium leading-[1.6] lg:leading-[1.7] max-w-[620px] mb-8 lg:mb-12">
                    {active.bio}
                  </p>

                  <div className="flex items-center justify-start gap-6 lg:gap-8 max-w-[620px]">
                    <button className="bg-pocketTeal text-white font-bold rounded-full w-16 h-16 lg:w-20 lg:h-20 2xl:w-24 2xl:h-24 flex items-center justify-center hover:opacity-90 transition-opacity leading-tight text-center text-xs lg:text-sm 2xl:text-base">
                      Msg<br />{active.firstName}
                    </button>

                    <a href="#" aria-label="LinkedIn" className="w-12 h-12 lg:w-16 lg:h-16 2xl:w-20 2xl:h-20 flex items-center justify-center hover:opacity-80 transition-opacity">
                      <svg viewBox="0 0 24 24" fill="#526E87" className="w-full h-full">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                  </div>
                </>
              ) : (
                <>
                  <h3 className="mb-8 lg:mb-10 leading-none tracking-[-0.03em]">
                    <span className="text-pocketYellow font-extrabold text-4xl lg:text-5xl 2xl:text-[80px]">Coming Soon</span>
                  </h3>
                  <p className="text-pocketGrey text-base lg:text-lg 2xl:text-xl font-medium leading-[1.6] lg:leading-[1.7] max-w-[620px]">
                    More team members coming soon.
                  </p>
                </>
              )}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default HomeMeetTheTeam;