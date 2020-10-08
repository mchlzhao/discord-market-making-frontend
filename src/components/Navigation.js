import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
  // used to have 'navbar-expand-lg'
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Prophetic
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className={`nav-item  ${props.location.pathname === "/" ? "active" : ""}`}>
                <Link className="nav-link" to="/">
                  Markets
                </Link>
              </li>
              <li className={`nav-item  ${props.location.pathname === "/accounts" ? "active" : ""}`}>
                <Link className="nav-link" to="/accounts">
                  Accounts
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);