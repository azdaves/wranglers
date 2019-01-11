import React, { Component } from "react";
import Card from "./components/Card/Card";
import logo from "./assets/images/logo.png";
import "./App.css";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <nav class="navbar navbar-light bg-light">
          <a href="/" className="navbar-brand">
            <img width="60" src={logo} alt="logo" />
            <span>Wranglers</span>
          </a>
        </nav>

        <div className="container">
          <div className="row">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
