import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import Home from "./pages/Home";
import Filter from "./pages/Filter";
import Layout from "./pages/Layout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="filter" element={<Filter />} />
          {/* <Route path="*" element={<Home />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("main"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);