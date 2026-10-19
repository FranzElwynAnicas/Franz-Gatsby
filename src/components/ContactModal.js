import React, { useEffect, useState } from "react";

const ContactModal = ({ isOpen, onClose }) => {
  const [visible, setVisible] = useState(false);

  // Slide-in trigger
  useEffect(() => {
    if (isOpen) {
      const t = setTimeout(() => setVisible(true), 20);
      return () => clearTimeout(t);
    } else {
      setVisible(false);
    }
  }, [isOpen]);

  // Lock scroll + ESC to close
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  // Keep mounted while closing animation plays
  if (!isOpen && !visible) return null;

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Modal card — slides in from RIGHT to center */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative w-full max-w-[1200px] bg-[#179CBD] rounded-xl overflow-hidden
                    h-auto md:h-[641px] max-h-[95vh] overflow-y-auto
                    shadow-2xl transition-all duration-500 ease-out
                    ${
                      visible
                        ? "translate-x-0 opacity-100"
                        : "translate-x-[120%] opacity-0"
                    }`}
      >
        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-5 text-3xl leading-none hover:opacity-70 z-10"
          style={{ color: "#FFFFFF" }}
        >
          ✕
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 h-full">
          {/* LEFT — heading + bullet text */}
          <div className="hidden md:flex flex-col justify-center pl-[8%] pr-0 pt-16 pb-10">
            <h2 className="text-white font-extrabold text-[44px] md:text-[60px] lg:text-[80px] leading-[100%] tracking-[-0.05em]">
              Have a
              <br />
              project you
              <br />
              want to
              <br />
              discuss?
            </h2>

            <div className="flex gap-3 mt-14">
              <span className="mt-[6px] w-4 h-4 bg-white shrink-0" />
              <p className="text-black font-medium text-[15px] md:text-[16px] lg:text-[18px] leading-[150%] tracking-[-0.05em]">
                <span className="block whitespace-nowrap">
                  Lorem ipsum dolor sit amet consectetur.
                </span>
                <span className="block whitespace-nowrap">
                  Nulla purus rhoncus at mattis. Et ac vitae
                </span>
                <span className="block whitespace-nowrap">
                  ornare volutpat.
                </span>
              </p>
            </div>
          </div>

          {/* RIGHT — form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col justify-center px-6 md:px-0 md:pr-[10%] md:pl-8 py-12 md:py-0 gap-4"
          >
            <Field label="Full Name*" placeholder="Full Name" />
            <Field label="Contact Number*" placeholder="Contact Number" />
            <Field label="Email Address*" placeholder="Email Address" />

            <div className="flex flex-col">
              <label className="text-black font-medium text-[18px] md:text-[20px] leading-[120%] tracking-[-0.05em] mb-1">
                Message
              </label>
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full md:w-[390px] h-[90px] bg-white border border-black
                           px-2.5 py-2 text-[16px] tracking-[-0.05em] resize-none
                           placeholder:text-[#526E87] focus:outline-none"
              />
            </div>

            <div className="flex justify-end mt-2">
              <button
                type="submit"
                className="w-[125px] h-[45px] bg-[#FBBF1E] hover:bg-[#e6ad13]
                           text-black font-bold rounded-md transition-colors"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const Field = ({ label, placeholder }) => (
  <div className="flex flex-col">
    <label className="text-black font-medium text-[18px] md:text-[20px] leading-[120%] tracking-[-0.05em] mb-1">
      {label}
    </label>
    <input
      type="text"
      placeholder={placeholder}
      className="w-full md:w-[390px] h-[45px] bg-white border border-black
                 px-2.5 text-[16px] tracking-[-0.05em]
                 placeholder:text-[#526E87] focus:outline-none"
    />
  </div>
);

export default ContactModal;