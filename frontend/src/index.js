import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./i18n";
import { initAnimation } from "./utils/animation";
import AOS from 'aos';
import 'aos/dist/aos.css';

// Initialize AOS animation library
AOS.init({
  duration: 800,
  once: false,
  mirror: true,
  offset: 100,
  easing: 'ease-out-cubic'
});

// Initialize custom animations when DOM is loaded
document.addEventListener('DOMContentLoaded', initAnimation);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
