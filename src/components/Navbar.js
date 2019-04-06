import React from 'react'

function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-4">
            <div className="container">
                <a className="navbar-brand" href="Dashboard.html">
                    Administrador de tareas
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                    <span className="navbar-toggler-icon" />
                </button>
            </div>
        </nav>
    </div>
  )
}

export default Navbar;