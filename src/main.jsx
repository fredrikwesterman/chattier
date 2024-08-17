import { createRoot } from "react-dom/client";
import App from "./Comps/App";
import "./Style/index.css";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./Context/AuthContextProvider";
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://2b52eede3645d31b926a2f67b7f2d200@o4507793185112064.ingest.de.sentry.io/4507793291018320",
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration(),
  ],
  // Tracing
  tracesSampleRate: 1.0, //  Capture 100% of the transactions
  // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});

createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthContextProvider>
);
