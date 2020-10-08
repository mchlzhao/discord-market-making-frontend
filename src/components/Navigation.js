import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
    return (
        <div className="navigation">
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">
                    Prophetic
                </Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
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
            </nav>
        </div>
    );
}

export default withRouter(Navigation);