import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/900.css";
import "./src/styles/global.css";

import React from "react";
import { ContactModalProvider } from "./src/contexts/ContactModalContext";

export const wrapRootElement = ({ element }) => (
  <ContactModalProvider>{element}</ContactModalProvider>
);