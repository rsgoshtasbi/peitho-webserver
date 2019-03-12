import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

export default class Header extends PureComponent {
  render() {
    return (
      <nav>
        <Link to="/">Dashboard</Link>
        <Link to="/login">Login</Link>
      </nav>
    );
  }
}
