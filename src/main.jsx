// src/index.js
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App/App";
import "./index.css";
import Root from "./shared/components/Root/Root";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Root>
      <App />
    </Root>
  </StrictMode>
);
