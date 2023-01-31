import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import { RecoilRoot } from "recoil";
import { GoogleOAuthProvider } from "@react-oauth/google";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <GoogleOAuthProvider
        clientId={
          "751706688964-rmmj5jm1sns8jcjejt2hdfqambq1fvi3.apps.googleusercontent.com"
        }
      >
        <App />
      </GoogleOAuthProvider>
    </RecoilRoot>
  </React.StrictMode>
);

reportWebVitals();
