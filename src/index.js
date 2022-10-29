import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Footer from "./component/footer";
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById("App"));
root.render(
  <React.StrictMode>
    <App />
    <Footer />
  </React.StrictMode>
);