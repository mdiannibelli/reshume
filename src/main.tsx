/* eslint-disable @typescript-eslint/no-explicit-any */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./i18n";
import { Provider } from "react-redux";
import { formStore } from "@/store";
import { Buffer } from "buffer";

//? This is a workaround to fix the Buffer warning in the browser, it is needed for the pdf-renderer library.
(window as any).Buffer = Buffer;
(globalThis as any).Buffer = Buffer;

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <Provider store={formStore}>
      <App />
    </Provider>
  </StrictMode>
);
