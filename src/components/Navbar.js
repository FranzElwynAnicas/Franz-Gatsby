import React from "react";
import logo from "../images/logo-pocket-light.png";

const Navbar = () => {
  const navLinks = [
    { label: "Home", active: true },
    { label: "About" },
    { label: "Works" },
    { label: "Services" },
    { label: "Pricing" },
  ];

  return (
    <header className="w-full py-6 flex justify-center items-center px-4 sticky top-0 z-50">
      <nav
        className="flex items-center justify-between bg-white rounded-[24px] shadow-[0_4px_16px_rgba(0,0,0,0.10)]"
        style={{
          width: "913px",
          maxWidth: "100%",
          height: "72px",
          paddingLeft: "32px",
          paddingRight: "32px",
          gap: "20px",
        }}
      >
        {/* Logo */}
        <img
          src={logo}
          alt="Pocket Creatives"
          style={{ height: "42px", width: "auto" }}
        />

        {/* Links */}
        <div className="hidden md:flex items-center ml-auto" style={{ gap: "8px" }}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={`#${link.label.toLowerCase()}`}
              className={`rounded-full transition-colors whitespace-nowrap ${
                link.active
                  ? "bg-pocketYellow text-pocketBlack font-semibold"
                  : "text-pocketBlack hover:text-pocketTeal"
              }`}
              style={{ fontSize: "17px", padding: "9px 20px" }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Contact */}
        <a
          href="#contact"
          className="hidden md:inline-block bg-pocketTeal text-white font-bold rounded-full hover:opacity-90 whitespace-nowrap"
          style={{ fontSize: "17px", padding: "9px 22px" }}
        >
          Contact
        </a>

        {/* Clock */}
        <button aria-label="Recent" className="text-pocketGrey shrink-0" style={{ padding: "4px" }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
        </button>
      </nav>
    </header>
  );
};

export default Navbar;