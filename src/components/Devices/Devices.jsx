import React, { Component } from "react";
import { Link } from "react-router-dom";
import Card from "../Card/Card";

class Devices extends Component {
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
          {this.props.devices.map((device, i) => (
            <Card key={i} data={device} selected={this.props.selected} />
          ))}
        </div>
        {this.props.count > 0 && (
          <div className="row">
            <div className="col-12 text-right">
              <Link to="bodyeffect" className="btn btn-lg btn-primary">
                Next
              </Link>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default Devices;
