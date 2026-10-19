import React, { createContext, useContext, useState } from "react";
import ContactModal from "../components/ContactModal";

const ContactModalContext = createContext();

export const ContactModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ContactModalContext.Provider
      value={{ open: () => setIsOpen(true), close: () => setIsOpen(false) }}
    >
      {children}
      <ContactModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </ContactModalContext.Provider>
  );
};

export const useContactModal = () => useContext(ContactModalContext);