import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Devices from "../Devices/Devices";
import BodyEffect from "../BodyEffect/BodyEffect";
import Opinions from "../Opinions/Opinions";
import Submit from "../Submit/Submit";
import Survey from "../Survey/Survey";
import NotFound from "../NotFound/NotFound";

class SelectSection extends Component {
  render() {
    return <Switch>
        {this.props.sectionNumber === 5 && <Route path="/submit" exact component={() => <Submit count={this.props.count} />} />}
        {this.props.sectionNumber === 4 && <Route path="/survey" exact component={() => <Survey count={this.props.count} updateScore={this.props.updateScore} />} />}
        {this.props.sectionNumber === 3 && <Route path="/opinions" exact component={() => <Opinions desc="Provide your opinion about it" count={this.props.count} opinions={this.props.opinions} opinionLength={this.props.opinionLength} selected={this.props.selectedOpinion} updateScore={this.props.updateScore} />} />}
        {this.props.sectionNumber === 2 && <Route path="/bodyeffect" exact component={() => <BodyEffect desc="What part of the body it effects" count={this.props.count} bodyParts={this.props.bodyParts} partsLength={this.props.partsLength} selected={this.props.selectedPart} updateScore={this.props.updateScore} />} />}
        <Route path="/not-found" exact component={NotFound} />
        {this.props.sectionNumber === 1 && <Route path="/" exact component={() => <Devices desc="Which of the following devices have you seen in this campus" count={this.props.count} devices={this.props.devices} selected={this.props.selectedDevice} updateScore={this.props.updateScore} />} />}
        <Redirect to="/not-found" />
      </Switch>;
  }
}

export default SelectSection;
