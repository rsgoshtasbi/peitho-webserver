import React, { PureComponent } from "react";
import Header from "components/header";
import Login from "pages/Login";

// import "./styles.css";

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Header />
        <Login />
      </div>
    );
  }
}
