import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import logo from "../images/logo-pocket-light.png";

const navLinks = [
  { label: "Home",     to: "/",         width: 83,  padding: "6px 16px" },
  { label: "About",    to: "/about",    width: 85,  padding: "6px 16px" },
  { label: "Works",    to: "/works",    width: 85,  padding: "7px 15px" },
  { label: "Services", to: "/services", width: 107, padding: "6px 16px" },
  { label: "Pricing",  to: "/pricing",  width: 92,  padding: "8px 16px" },
];

const socials = [
  { label: "YouTube",   href: "https://youtube.com",   icon: "▶" },
  { label: "Vimeo",     href: "https://vimeo.com",     icon: "v" },
  { label: "Instagram", href: "https://instagram.com", icon: "◎" },
  { label: "Pinterest", href: "https://pinterest.com", icon: "p" },
  { label: "LinkedIn",  href: "https://linkedin.com",  icon: "in" },
  { label: "Facebook",  href: "https://facebook.com",  icon: "f" },
  { label: "X",         href: "https://x.com",         icon: "X" },
  { label: "TikTok",    href: "https://tiktok.com",    icon: "t" },
];

const textStyle = {
  fontFamily: "Inter, sans-serif",
  fontWeight: 500,
  fontStyle: "normal",
  lineHeight: "100%",
  letterSpacing: "0%",
};

const mobileLinkText = {
  ...textStyle,
  fontSize: "20px",
  textAlign: "center",
};

const WhatsAppIcon = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="currentColor"
    viewBox="0 0 16 16"
  >
    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
  </svg>
);

const Navbar = ({ activePage = "Home" }) => {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile viewport
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(max-width: 767px)");
    const handle = () => {
      setIsMobile(mq.matches);
      // auto-close menu if resizing out of mobile
      if (!mq.matches) setOpen(false);
    };
    handle();
    mq.addEventListener("change", handle);
    return () => mq.removeEventListener("change", handle);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Don't render anything until we know the viewport (avoids FOUC / double render)
  if (typeof window !== "undefined" && isMobile === null) return null;

  return (
    <>
      <style>{`
        html, body {
          overflow-x: hidden;
          max-width: 100vw;
        }
        *, *::before, *::after {
          box-sizing: border-box;
        }
      `}</style>

      {/* ================= MOBILE ================= */}
      {isMobile && (
        <>
          {/* Mobile top bar */}
          <header
            style={{
              position: "sticky",
              top: "16px",
              zIndex: 50,
              width: "100%",
              display: "flex",
              justifyContent: "center",
              paddingLeft: "16px",
              paddingRight: "16px",
            }}
          >
            <nav
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                background: "#fff",
                width: "100%",
                maxWidth: "338px",
                height: "72px",
                borderRadius: "24px",
                boxShadow: "0px 4px 16px 0px #0000001A",
                paddingLeft: "24px",
                paddingRight: "24px",
              }}
            >
              <Link to="/" style={{ display: "flex", flexShrink: 0 }}>
                <img
                  src={logo}
                  alt="Pocket Creatives"
                  style={{ width: "100px", height: "50px", objectFit: "contain" }}
                />
              </Link>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "24px",
                  flexShrink: 0,
                }}
              >
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "40px",
                    height: "40px",
                    color: "#5A6B7B",
                  }}
                >
                  <WhatsAppIcon size={40} />
                </a>

                <button
                  aria-label={open ? "Close menu" : "Open menu"}
                  aria-expanded={open}
                  onClick={() => setOpen((v) => !v)}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "40px",
                    height: "24px",
                    gap: "10px",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                  }}
                >
                  <span
                    style={{
                      display: "block",
                      width: "40px",
                      height: "3px",
                      background: "#FCBE17",
                      borderRadius: "2px",
                      transition:
                        "transform 500ms ease-in-out, opacity 500ms ease-in-out",
                      transform: open
                        ? "translateY(13px) rotate(45deg)"
                        : "translateY(0) rotate(0)",
                    }}
                  />
                  <span
                    style={{
                      display: "block",
                      width: "40px",
                      height: "3px",
                      background: "#FCBE17",
                      borderRadius: "2px",
                      transition: "opacity 500ms ease-in-out",
                      opacity: open ? 0 : 1,
                    }}
                  />
                  <span
                    style={{
                      display: "block",
                      width: "40px",
                      height: "3px",
                      background: "#FCBE17",
                      borderRadius: "2px",
                      transition:
                        "transform 500ms ease-in-out, opacity 500ms ease-in-out",
                      transform: open
                        ? "translateY(-13px) rotate(-45deg)"
                        : "translateY(0) rotate(0)",
                    }}
                  />
                </button>
              </div>
            </nav>
          </header>

          {/* Mobile full-screen menu */}
          <div
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 40,
              display: "flex",
              flexDirection: "column",
              background: "#fff",
              paddingTop: "104px",
              opacity: open ? 1 : 0,
              pointerEvents: open ? "auto" : "none",
              transform: open ? "translateY(0)" : "translateY(-8px)",
              transition:
                "opacity 500ms ease-in-out, transform 500ms ease-in-out",
              overflowY: "auto",
              overflowX: "hidden",
              width: "100%",
              maxWidth: "100vw",
            }}
          >
            <ul
              style={{
                listStyle: "none",
                margin: 0,
                padding: 0,
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {[...navLinks, { label: "Contact", to: "/contact" }].map((link) => (
                <li
                  key={link.label}
                  style={{
                    width: "100%",
                    maxWidth: "100%",
                    borderBottom: "1px solid #F5C518",
                  }}
                >
                  <Link
                    to={link.to}
                    onClick={() => setOpen(false)}
                    style={{
                      ...mobileLinkText,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "100%",
                      height: "88px",
                      color: "#000",
                      textDecoration: "none",
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Socials — 5 on top, 3 centered below */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "24px",
                padding: "40px 16px 24px",
                width: "100%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "24px",
                }}
              >
                {socials.slice(0, 5).map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "28px",
                      height: "28px",
                      fontSize: "22px",
                      fontWeight: 700,
                      color: "#5A6B7B",
                      flexShrink: 0,
                    }}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "24px",
                }}
              >
                {socials.slice(5).map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "28px",
                      height: "28px",
                      fontSize: "22px",
                      fontWeight: 700,
                      color: "#5A6B7B",
                      flexShrink: 0,
                    }}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Branding */}
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                padding: "16px 16px 40px",
                marginTop: "auto",
              }}
            >
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 600,
                  fontSize: "16px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  textAlign: "center",
                  color: "#000000",
                  margin: 0,
                  marginBottom: "8px",
                  width: "100%",
                  maxWidth: "288px",
                }}
              >
                Pocket Creatives
              </p>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 600,
                  fontSize: "16px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  textAlign: "center",
                  color: "#179CBD",
                  margin: 0,
                  width: "100%",
                  maxWidth: "288px",
                }}
              >
                Video Production &amp; Photography
              </p>
            </div>
          </div>
        </>
      )}

      {/* ================= DESKTOP / TABLET ================= */}
      {!isMobile && (
        <header
          style={{
            position: "sticky",
            top: "24px",
            zIndex: 50,
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingLeft: "16px",
            paddingRight: "16px",
          }}
        >
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              background: "#fff",
              width: "913px",
              maxWidth: "100%",
              height: "72px",
              borderRadius: "24px",
              boxShadow: "0px 4px 16px 0px #0000001A",
              paddingLeft: "32px",
              paddingRight: "32px",
              gap: "20px",
            }}
          >
            <Link to="/" style={{ flexShrink: 0 }}>
              <img
                src={logo}
                alt="Pocket Creatives"
                style={{ width: "100px", height: "50px", objectFit: "contain" }}
              />
            </Link>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginLeft: "auto",
                gap: "16px",
              }}
            >
              {navLinks.map((link) => {
                const isActive = link.label === activePage;
                return (
                  <Link
                    key={link.label}
                    to={link.to}
                    style={{
                      ...textStyle,
                      fontSize: "18px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      whiteSpace: "nowrap",
                      width: `${link.width}px`,
                      height: "34px",
                      borderRadius: "16px",
                      padding: link.padding,
                      gap: "10px",
                      boxSizing: "border-box",
                      textDecoration: "none",
                      background: isActive ? "#FCBE17" : "transparent",
                      color: "#000",
                      transition: "background 200ms ease",
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) e.currentTarget.style.background = "#FCBE17";
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) e.currentTarget.style.background = "transparent";
                    }}
                  >
                    {link.label}
                  </Link>
                );
              })}

              <Link
                to="/contact"
                style={{
                  ...textStyle,
                  fontSize: "18px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  whiteSpace: "nowrap",
                  background: "#179CBD",
                  color: "#fff",
                  width: "101px",
                  height: "34px",
                  borderRadius: "16px",
                  padding: "8px 16px",
                  gap: "10px",
                  boxSizing: "border-box",
                  textDecoration: "none",
                }}
              >
                Contact
              </Link>

              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "34px",
                  height: "34px",
                  color: "#5A6B7B",
                  flexShrink: 0,
                  transition: "color 200ms ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#25D366")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#5A6B7B")}
              >
                <WhatsAppIcon size={24} />
              </a>
            </div>
          </nav>
        </header>
      )}
    </>
  );
};

export default Navbar;