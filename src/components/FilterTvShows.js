import React from 'react'
import { NavLink } from 'react-router-dom'

const FilterTvShows = ({filter}) => (
  <ul className="tv-shows-filter clearfix">
    <li>
      <NavLink to="/" exact activeClassName="is-active">
        <span>En cours</span>
      </NavLink>
    </li>
    <li>
      <NavLink to="/archived" exact activeClassName="is-active">
        <span>Archivées</span>
      </NavLink>
    </li>
    <li>
      <NavLink to="/not-started" exact activeClassName="is-active">
        <span>Archivées et non commencées</span>
      </NavLink>
    </li>
    <li>
      <NavLink to="/finished" exact activeClassName="is-active">
        <span>Archivées et terminées</span>
      </NavLink>
    </li>
  </ul>
)

export default FilterTvShows