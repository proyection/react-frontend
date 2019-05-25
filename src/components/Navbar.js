import React from 'react'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-4">
        <div className="container">
            <a className="navbar-brand" href="/">
                Projection
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse" id="mobile-nav">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/dashboard">
                            Dashboard
                        </a>
                    </li>
                </ul>

                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link " href="/register">
                            Sign Up
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">
                            Login
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  );
}

export default Navbar;