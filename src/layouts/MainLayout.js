import React from 'react'
import { NavLink } from 'react-router-dom'

const MainLayout = ({ children }) => (
  <div className="flexbox-container">
    <div className="sidebar">
      <div className="sidebar-logo">
        <i className="fa fa-television"></i> Betaseries
      </div>
      <div className="sidebar-menu">
        <div className="sidebar-menu-item">
          <NavLink to="/" className="sidebar-menu-item-link" activeClassName="mod-active">
            <span>Mes séries</span>
          </NavLink>
        </div>
      </div>
    </div>
    <div className="main-container">
      {children}
    </div>
  </div>
)

export default MainLayout