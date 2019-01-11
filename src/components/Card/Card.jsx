import React, { Component } from "react";

class Card extends Component {
  state = {};
  render() {
    return (
      <div className="col-lg-4 col-sm-6">
        <h4>Header</h4>
        <img src="something" alt="something" />
      </div>
    );
  }
}

export default Card;
