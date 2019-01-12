import React, { Component } from "react";
import Card from "../Card/Card";
import { Link } from "react-router-dom";

class Opinions extends Component {
  
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-12">
            <div className="bg-light border my-2 p-3">
              <h4 className="text-center">{this.props.desc}</h4>
            </div>
          </div>
        </div>
        <div className="row">
          {this.props.opinions.map((opinion, i) => (
            <Card key={i} data={opinion} selected={this.props.selected} />
          ))}
        </div>
        {this.props.count > 3 && (
          <div className="row">
            <div className="col-12">
              <Link
                to="bodyeffect"
                className="btn float-right btn-lg btn-primary"
              >
                Next
              </Link>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default Opinions;
