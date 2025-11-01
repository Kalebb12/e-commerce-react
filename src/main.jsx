import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { BrowserRouter } from "react-router";
import { ConvexAuthProvider } from "@convex-dev/auth/react";

const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ConvexAuthProvider client={convex}>
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </ConvexAuthProvider>
  </StrictMode>
);
