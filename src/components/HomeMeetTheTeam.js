import React, { useState } from "react";

import steven from "../images/team-steven.png";
import haider from "../images/team-haider.png";

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
      <div className="w-full py-16 md:py-20">
        {/* Symmetrical padding on mobile, offset on desktop */}
        <div className="px-6 md:pl-[12.5%] md:pr-16">
          
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold text-pocketGrey tracking-[-0.02em] mb-8 md:mb-10">
            Meet the Team
          </h2>

          {/* ============ MOBILE LAYOUT ============ */}
          <div className="block lg:hidden">
            
            {/* Tabs row — scrollable horizontally on mobile */}
            <div className="flex gap-3 mb-6 overflow-x-auto scrollbar-hide -mx-6 px-6">
              {tabs.slice(0, 3).map((tab) => {
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

            {/* Photo + Name side-by-side */}
            {active ? (
              <>
                <div className="flex items-start gap-4 mb-6">
                  {/* Photo on the left */}
                  <div className="w-[120px] h-[150px] rounded-2xl overflow-hidden bg-pocketLightGrey shrink-0">
                    <img
                      src={active.photo}
                      alt={`${active.firstName} ${active.lastName}`}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Name + action buttons on the right */}
                  <div className="flex flex-col justify-start pt-2">
                    <h3 className="leading-none tracking-[-0.03em] mb-1">
                      <span className="text-pocketYellow font-extrabold text-[34px]">
                        {active.firstName}
                      </span>
                    </h3>
                    {active.lastName && (
                      <h4 className="text-pocketTeal font-extrabold text-xl leading-tight mb-3">
                        {active.lastName}
                      </h4>
                    )}

                    {/* Action buttons (Msg + LinkedIn) */}
                    <div className="flex items-center gap-3">
                      <button className="bg-pocketTeal text-white font-bold rounded-full w-12 h-12 flex items-center justify-center text-[10px] leading-tight text-center">
                        Msg
                        <br />
                        {active.firstName}
                      </button>
                      <a
                        href="#"
                        aria-label="LinkedIn"
                        className="w-12 h-12 flex items-center justify-center"
                      >
                        <svg viewBox="0 0 24 24" fill="#179CBD" className="w-full h-full">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Roles — flex-wrapped bold text */}
                <div className="flex flex-wrap gap-x-4 gap-y-1 mb-6">
                  {active.roles.map((role) => (
                    <span
                      key={role}
                      className="text-pocketGrey text-base font-extrabold"
                    >
                      {role}
                    </span>
                  ))}
                </div>

                {/* Bio */}
                <p className="text-pocketGrey text-base font-medium leading-[1.5]">
                  {active.bio}
                </p>
              </>
            ) : (
              <>
                <h3 className="mb-10 leading-none tracking-[-0.03em]">
                  <span className="text-pocketYellow font-extrabold text-4xl">
                    Coming Soon
                  </span>
                </h3>
                <p className="text-pocketGrey text-base font-medium leading-[1.5]">
                  More team members coming soon.
                </p>
              </>
            )}
          </div>

          {/* ============ DESKTOP LAYOUT (unchanged) ============ */}
          <div className="hidden lg:grid grid-cols-[550px_1fr] gap-24 items-start">
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
              <div className="mb-12 max-w-[520px]">
                <div className="flex gap-6 mb-3">
                  {tabs.slice(0, 3).map((tab) => {
                    const isActive = activeId === tab.id;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveId(tab.id)}
                        className={`flex-1 px-6 py-2.5 rounded-xl text-lg transition-colors ${
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

                <div className="flex gap-6 pl-24">
                  {tabs.slice(3, 6).map((tab) => {
                    const isActive = activeId === tab.id;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveId(tab.id)}
                        className={`flex-1 px-6 py-2.5 rounded-xl text-lg transition-colors ${
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
                  <h3 className="mb-10 leading-none tracking-[-0.03em] flex flex-wrap items-baseline gap-x-3">
                    <span className="text-pocketYellow font-extrabold text-6xl lg:text-[80px]">
                      {active.firstName}
                    </span>
                    {active.lastName && (
                      <span className="text-pocketTeal font-extrabold text-4xl lg:text-[40px]">
                        {active.lastName}
                      </span>
                    )}
                  </h3>

                  <div className="flex flex-wrap gap-x-6 gap-y-2 mb-12 max-w-[600px]">
                    {active.roles.map((role) => (
                      <span
                        key={role}
                        className="text-pocketGrey text-xl font-extrabold"
                      >
                        {role}
                      </span>
                    ))}
                  </div>

                  <p className="text-pocketGrey text-xl font-medium leading-[1.7] max-w-[620px] mb-12">
                    {active.bio}
                  </p>

                  <div className="flex items-center justify-center gap-8 max-w-[620px]">
                    <button className="bg-pocketTeal text-white font-bold rounded-full w-24 h-24 flex items-center justify-center hover:opacity-90 transition-opacity leading-tight text-center text-base">
                      Msg
                      <br />
                      {active.firstName}
                    </button>

                    <a
                      href="#"
                      aria-label="LinkedIn"
                      className="w-20 h-20 flex items-center justify-center hover:opacity-80 transition-opacity"
                    >
                      <svg viewBox="0 0 24 24" fill="#526E87" className="w-full h-full">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                  </div>
                </>
              ) : (
                <>
                  <h3 className="mb-10 leading-none tracking-[-0.03em]">
                    <span className="text-pocketYellow font-extrabold text-6xl lg:text-[80px]">
                      Coming Soon
                    </span>
                  </h3>
                  <p className="text-pocketGrey text-xl font-medium leading-[1.7] max-w-[620px]">
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