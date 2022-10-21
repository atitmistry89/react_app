import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import Home from "./pages/Home";
import Filter from "./pages/Filter";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={< Home />}></Route>
        <Route exact path='/filter' element={< Filter />}></Route>
      </Routes>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById("main"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);