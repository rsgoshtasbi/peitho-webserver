import React, { PureComponent } from "react";
import { Route, withRouter } from "react-router-dom";
import { Switch } from "react-router";
import Header from "components/header";
import Dashboard from "pages/Dashboard";
import Login from "pages/Login";

// window.getCookie = function(name) {
//   var match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
//   if (match) return match[2];
// };

if (typeof window === "undefined") {
  global.window = {};
}
class App extends PureComponent {
  componentDidMount() {
    console.log(this.props);
    // const cookie = getCookie("JSESSIONIDS");
    // if (!cookie) this.props.history.push("/login");
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
