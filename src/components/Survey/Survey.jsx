import React, { Component } from "react";
import classes from "./Survey.module.css";

class Survey extends Component {
  state = {};

  handleSubmit = e => {
    e.preventDefault();
    const obj = {
      problem: e.target.problem.value,
      saw: e.target.saw.value,
      where: e.target.where.value,
      msgToAdmin: e.target.msgToAdmin.value
    };
    console.log(obj);
  };

  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e)} className="form my-5">
        <div className="form-group">
          <label htmlFor="q1">
            Do you think vaping is a problem on this campus?
          </label>
          <input id="q1" type="text" name="problem" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="q2">
            How often have you seen someone vaping on campus?
          </label>
          <input id="q2" type="text" name="saw" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="q3">Where?</label>
          <input id="q3" type="text" name="where" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="q4">Message to Admin</label>
          <input
            id="q4"
            type="text"
            name="msgToAdmin"
            className="form-control"
          />
        </div>

        <button type="submit" className={`btn ${classes.nextBtn}`}>
          Submit
        </button>
      </form>
    );
  }
}

export default Survey;
