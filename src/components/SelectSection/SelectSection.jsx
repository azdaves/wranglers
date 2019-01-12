import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Devices from "../Devices/Devices";
import BodyEffect from "../BodyEffect/BodyEffect";
import Opinions from "../Opinions/Opinions";

class SelectSection extends Component {
  render() {
    return (
      <Switch>
        
          <Route
            path="/bodyeffect"
            component={() => (
              <BodyEffect
                desc="What part of the body it effects"
                count={this.props.count}
                bodyParts={this.props.bodyParts}
                selected={this.props.selectedPart}
              />
            )}
          />
        
        
          <Route
            path="/opinions"
            component={() => (
              <Opinions
              desc="Provide your opinion about it"
                count={this.props.count}
                opinions={this.props.opinions}
                selected={this.props.selectedOpinion}
              />
            )}
          />
       
        <Route
          path="/"
          component={() => (
            <Devices
              desc="Which of the following devices have you seen in this campus"
              count={this.props.count}
              devices={this.props.devices}
              selected={this.props.selectedDevice}
            />
          )}
        />
      </Switch>
    );
  }
}

export default SelectSection;
