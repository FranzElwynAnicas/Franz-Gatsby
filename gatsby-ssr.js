import React from "react";
import { ContactModalProvider } from "./src/contexts/ContactModalContext";

export const wrapRootElement = ({ element }) => (
  <ContactModalProvider>{element}</ContactModalProvider>
);