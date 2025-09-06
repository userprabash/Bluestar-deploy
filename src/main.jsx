import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./style.scss";
// import "./assets/css/animate.min.css";
// import "./assets/css/magnific-popup.css";
import "./assets/css/main.css";
import "./assets/css/meanmenu.css";
import "./assets/css/responsive.css";

import Header from "./Component/Header.jsx";
import Footer from "./Component/Footer.jsx";
import ScrollToTopButton from "./Component/ScrollToTopButton.jsx";

import { BrowserRouter } from "react-router-dom";

// Toastify imports
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Helmet Provider import
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <Header />
        <ScrollToTopButton />

        <App />

        <Footer />

        {/* Toast container */}
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
