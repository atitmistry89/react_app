import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
      <header className="pt-3 pt-sm-5">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-3">
                    <a href="/react_app"><img src="./react_app/images/logo.png" alt="Logo" /></a>
                </div>
                <div className="col-lg-9">
                    <div className="header-right d-flex align-items-center justify-content-end">
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/react_app">Home</Link>
                                </li>
                                <li>
                                    <Link to="/filter">Filter</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
      </header>
    );
}
  
export default Header;