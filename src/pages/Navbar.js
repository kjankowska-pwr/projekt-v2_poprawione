import React from "react";
import { NavLink } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <NavLink to="/Main">Strona główna</NavLink>
          </li>
          <li>
            <NavLink to="/Regular">Wszystkie</NavLink>
          </li>
          <li>
            <NavLink to="/Hot">Najlepsze</NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
