import React from 'react'
import { Link } from 'react-router-dom'

const NavigationBar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg custom-navbar shadow">
      <div className="container">

        {/* Logo */}
        <Link className="navbar-brand fw-bold" to="/">
           EV Charging Portal
        </Link>

        {/* Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="navbarNav">

          <ul className="navbar-nav mx-auto">

            <li className="nav-item">
              <Link className="nav-link" to="/">
                 Add Booking
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/view">
                 View Bookings
              </Link>
            </li>

          </ul>

          <span className="badge rounded-pill bg-warning text-dark fs-6 px-3 py-2">
            EV
          </span>

        </div>

      </div>
    </nav>
    </div>
  )
}

export default NavigationBar