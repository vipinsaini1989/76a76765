import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { Suspense } from "react";
import { ThemeProvider } from "next-themes";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Suspense fallback={null}>
        <App />
      </Suspense>
    </ThemeProvider>
  </StrictMode>
);
