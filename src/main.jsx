import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import CursorState from "./context/cursor/CursorState.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CursorState>
      <App />
    </CursorState>
  </StrictMode>,
);
