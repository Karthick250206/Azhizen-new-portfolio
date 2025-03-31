import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AsHome } from "./screens/AsHome";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <AsHome />
  </StrictMode>,
);
