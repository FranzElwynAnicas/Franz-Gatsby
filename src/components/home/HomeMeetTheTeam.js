import React, { useState } from "react";
import stevenImg from "../../images/team-steven.png";
import haiderImg from "../../images/team-haider.png";

const HomeMeetTheTeam = ({ 
  e1Pill, e1Name, e1Roles, e1Bio, e1Photo,
  e2Pill, e2Name, e2Roles, e2Bio, e2Photo,
  e3Pill, e3Name, e3Roles, e3Bio, e3Photo,
  e4Pill, e4Name, e4Roles, e4Bio, e4Photo,
  e5Pill, e5Name, e5Roles, e5Bio, e5Photo,
  e6Pill, e6Name, e6Roles, e6Bio, e6Photo
}) => {
  const [activeIndex, setActiveIndex] = useState(0); 

  const parseRoles = (wpRoles, fallbackRoles = []) => {
    if (!wpRoles) return fallbackRoles;
    return wpRoles.split('\n').filter(r => r.trim() !== '');
  };

  // Default fallback data for Steven and Haider
  const defaultSteven = {
    pillName: "Steven",
    fullName: "Steven Mayatt",
    photo: stevenImg,
    roles: ["Managing Director", "Creative Director", "Photographer", "Entrepreneur", "Marketeer", "Coffee Drinker"],
    bio: "Lorem ipsum dolor sit amet consectetur. Placerat quisque feugiat porta quam ornare. In nec lacinia consectetur placerat vestibulum sem odio. In feugiat elit fames eget lobortis turpis scelerisque tincidunt. Enim."
  };

  const defaultHaider = {
    pillName: "Haider",
    fullName: "Haider Romero Perez",
    photo: haiderImg,
    roles: ["Technical Director", "Cinematographer", "Cameraman", "Editor", "Colourist", "Intrepid Cyclist"],
    bio: "Lorem ipsum dolor sit amet consectetur. Placerat quisque feugiat porta quam ornare. In nec lacinia consectetur placerat vestibulum sem odio. In feugiat elit fames eget lobortis turpis scelerisque tincidunt. Enim."
  };

  const members = [
    { 
      pillName: e1Pill || defaultSteven.pillName, 
      fullName: e1Name || defaultSteven.fullName, 
      photo: e1Photo || defaultSteven.photo, 
      roles: parseRoles(e1Roles, defaultSteven.roles), 
      bio: e1Bio || defaultSteven.bio 
    },
    { 
      pillName: e2Pill || defaultHaider.pillName, 
      fullName: e2Name || defaultHaider.fullName, 
      photo: e2Photo || defaultHaider.photo, 
      roles: parseRoles(e2Roles, defaultHaider.roles), 
      bio: e2Bio || defaultHaider.bio 
    },
    { pillName: e3Pill || "", fullName: e3Name || "", photo: e3Photo || null, roles: parseRoles(e3Roles), bio: e3Bio || "" },
    { pillName: e4Pill || "", fullName: e4Name || "", photo: e4Photo || null, roles: parseRoles(e4Roles), bio: e4Bio || "" },
    { pillName: e5Pill || "", fullName: e5Name || "", photo: e5Photo || null, roles: parseRoles(e5Roles), bio: e5Bio || "" },
    { pillName: e6Pill || "", fullName: e6Name || "", photo: e6Photo || null, roles: parseRoles(e6Roles), bio: e6Bio || "" },
  ];

  const active = members[activeIndex];
  const hasData = active && active.fullName !== "";

  const renderName = (fullName) => {
    if (!fullName) return null;
    const nameParts = fullName.trim().split(" ");
    const firstName = nameParts[0];
    const lastName = nameParts.slice(1).join(" "); 

    return (
      <>
        <span className="text-pocketYellow font-extrabold text-4xl lg:text-5xl 2xl:text-[80px] leading-none">
          {firstName}
        </span>
        {lastName && (
          <span className="text-pocketTeal font-extrabold text-2xl lg:text-3xl 2xl:text-[40px] leading-none ml-3">
            {lastName}
          </span>
        )}
      </>
    );
  };

  return (
    <section className="w-full min-h-screen bg-pocketWhite flex items-center overflow-hidden">
      <div className="w-full py-16 md:py-20 lg:py-24">
        <div className="px-6 md:px-10 lg:pl-[12.5%] lg:pr-16">
          
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold text-pocketGrey tracking-[-0.02em] mb-8 md:mb-12">
            Meet the Team
          </h2>

          {/* MOBILE LAYOUT */}
          <div className="block md:hidden">
            <div className="flex gap-3 mb-8 overflow-x-auto scrollbar-hide max-w-[80vw]">
              {members.map((m, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`shrink-0 px-5 py-2 rounded-xl text-base transition-colors ${
                    activeIndex === index ? "bg-pocketYellow text-white font-bold" : "text-pocketGrey font-medium"
                  }`}
                >
                  {m.pillName || `Coming Soon`}
                </button>
              ))}
            </div>

            {hasData ? (
              <>
                <div className="flex items-start gap-6 mb-8">
                  <div className="w-[140px] h-[175px] rounded-2xl overflow-hidden bg-pocketLightGrey shrink-0">
                    {active.photo ? (
                      <img src={active.photo} alt={active.fullName} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs text-center p-2">No Photo</div>
                    )}
                  </div>
                  <div className="flex flex-col justify-center pt-2">
                    <h3 className="leading-none tracking-[-0.03em] mb-1">
                      {renderName(active.fullName)}
                    </h3>
                  </div>
                </div>
                <div className="flex flex-wrap gap-x-5 gap-y-1 mb-6">
                  {active.roles.map((role) => (
                    <span key={role} className="text-pocketGrey text-[17px] font-extrabold">{role}</span>
                  ))}
                </div>
                <p className="text-pocketGrey text-[17px] font-medium leading-[1.6]">{active.bio}</p>
              </>
            ) : (
              <>
                <h3 className="mb-10 leading-none tracking-[-0.03em]"><span className="text-pocketYellow font-extrabold text-4xl">Coming Soon</span></h3>
                <p className="text-pocketGrey text-base font-medium leading-[1.5]">More team members coming soon.</p>
              </>
            )}
          </div>

          {/* DESKTOP LAYOUT */}
          <div className="hidden md:grid grid-cols-[1fr_1.2fr] lg:grid-cols-2 2xl:grid-cols-[550px_1fr] gap-8 lg:gap-10 xl:gap-16 2xl:gap-24 items-start">
            
            <div className="w-full max-w-[550px] aspect-[5/6] rounded-2xl overflow-hidden bg-pocketLightGrey">
              {hasData && active.photo ? (
                <img src={active.photo} alt={active.fullName} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-pocketGrey text-base">
                  {hasData ? "No Photo Provided" : "[ Photo coming soon ]"}
                </div>
              )}
            </div>

            <div>
              <div className="mb-10 lg:mb-12 max-w-[520px]">
                <div className="flex gap-3 lg:gap-4 2xl:gap-6 mb-3">
                  {members.slice(0, 3).map((m, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`flex-1 px-3 lg:px-4 2xl:px-6 py-2 lg:py-2.5 rounded-xl text-sm lg:text-base 2xl:text-lg transition-colors ${
                        activeIndex === index ? "bg-pocketYellow text-white font-bold" : "text-pocketGrey hover:bg-pocketTeal hover:text-white font-medium"
                      }`}
                    >
                      {m.pillName || `Coming Soon`}
                    </button>
                  ))}
                </div>
                <div className="flex gap-3 lg:gap-4 2xl:gap-6 pl-8 lg:pl-12 2xl:pl-24">
                  {members.slice(3, 6).map((m, index) => (
                    <button
                      key={index + 3}
                      onClick={() => setActiveIndex(index + 3)}
                      className={`flex-1 px-3 lg:px-4 2xl:px-6 py-2 lg:py-2.5 rounded-xl text-sm lg:text-base 2xl:text-lg transition-colors ${
                        activeIndex === index + 3 ? "bg-pocketYellow text-white font-bold" : "text-pocketGrey hover:bg-pocketTeal hover:text-white font-medium"
                      }`}
                    >
                      {m.pillName || `Coming Soon`}
                    </button>
                  ))}
                </div>
              </div>

              {hasData ? (
                <>
                  <h3 className="mb-8 lg:mb-10 leading-none tracking-[-0.03em] flex flex-wrap items-baseline gap-x-3">
                    {renderName(active.fullName)}
                  </h3>
                  <div className="flex flex-wrap gap-x-4 lg:gap-x-6 gap-y-2 mb-8 lg:mb-12 max-w-[600px]">
                    {active.roles.map((role) => (
                      <span key={role} className="text-pocketGrey text-base lg:text-lg 2xl:text-xl font-extrabold">{role}</span>
                    ))}
                  </div>
                  <p className="text-pocketGrey text-base lg:text-lg 2xl:text-xl font-medium leading-[1.6] lg:leading-[1.7] max-w-[620px] mb-8 lg:mb-12">{active.bio}</p>
                </>
              ) : (
                <>
                  <h3 className="mb-8 lg:mb-10 leading-none tracking-[-0.03em]"><span className="text-pocketYellow font-extrabold text-4xl lg:text-5xl 2xl:text-[80px]">Coming Soon</span></h3>
                  <p className="text-pocketGrey text-base lg:text-lg 2xl:text-xl font-medium leading-[1.6] lg:leading-[1.7] max-w-[620px]">More team members coming soon.</p>
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