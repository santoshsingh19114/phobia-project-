import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import About from "./Components/About";
import Service from "./Components/Services";

import Teams from "./Components/Teams";
import Pricing from "./Components/Pricing";
import Faq from "./Components/Faq";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { Auth0Provider } from "@auth0/auth0-react";
import Chatbot from "./Components/Chatbot";
import { BrowserRouter } from "react-router-dom";
import { Home } from "@mui/icons-material";
import Services from "./Components/Teams";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-2bqs5qy4deoliq2g.us.auth0.com"
    clientId="kcyVp1xa6bBV0fw6ea0z4dH4ZdHzflRE"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    

    <App />
    {/* <Chatbot/> */}
    {/* <Navbar /> */}
    <Banner />
    <About />
    <Service />
    <Teams />
    <Pricing />
    <Faq />
    <Contact />
    <Footer />
  </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
