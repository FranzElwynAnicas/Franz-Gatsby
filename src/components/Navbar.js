import React from "react";
import { Link } from "gatsby";
import logo from "../images/logo-pocket-light.png";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Works", to: "/works" },
  { label: "Services", to: "/services" },
  { label: "Pricing", to: "/pricing" },
];

const Navbar = ({ activePage = "Home" }) => {
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
        <Link to="/">
          <img
            src={logo}
            alt="Pocket Creatives"
            style={{ height: "42px", width: "auto" }}
          />
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center ml-auto" style={{ gap: "8px" }}>
          {navLinks.map((link) => {
            const isActive = link.label === activePage;
            return (
              <Link
                key={link.label}
                to={link.to}
                className={`rounded-full whitespace-nowrap transition-colors duration-200 ${
                  isActive
                    ? "bg-pocketYellow text-pocketBlack font-semibold"
                    : "text-pocketBlack font-semibold hover:bg-pocketYellow hover:text-pocketBlack"
                }`}
                style={{ fontSize: "17px", padding: "9px 20px" }}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Contact */}
        <Link
          to="/contact"
          className="hidden md:inline-block bg-pocketTeal text-white font-bold rounded-full hover:opacity-90 whitespace-nowrap"
          style={{ fontSize: "17px", padding: "9px 22px" }}
        >
          Contact
        </Link>

        {/* Clock */}
        <button
          aria-label="Recent"
          className="text-pocketGrey shrink-0"
          style={{ padding: "4px" }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
        </button>
      </nav>
    </header>
  );
};

export default Navbar;