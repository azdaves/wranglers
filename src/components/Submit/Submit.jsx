import React, { Component } from "react";

class Submit extends Component {
  render() {
    return (
      <div className="alert alert-success text-center my-5">
        Thank you
        <h2>Scored : {this.props.count}</h2>
      </div>
    );
  }
}

export default Submit;
