import React, { Component } from 'react';
//import { TextField } from "material-ui/TextField";
//import { RaisedButton } from "material-ui/RaisedButton";

class DiaryApp extends Component {
  state = {
    dateOfRun: "",
    runningTime: "",
    runningSurface: "",
    runningInjury: "",
    weatherOnRun: "",
    soloOrGroup: "",
    speedHillsOrNormal: "",
  };

  change = e => {
    this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    // this.props.onSubmit(this.state);
    this.setState({
      dateOfRun: "",
      runningTime: "",
      runningSurface: "",
      runningInjury: "",
      weatherOnRun: "",
      soloOrGroup: "",
      speedHillsOrNormal: "",

    });
    this.props.onChange({
        dateOfRun: "",
        runningTime: "",
        runningDistance: "",
        runningSurface: "",
        runningInjury: "",
        weatherOnRun: "",
        soloOrGroup: "",
        speedHillsOrNormal: "",
    });
  };

  render() {
    return (
      <div className="container">
      <form>
        <div
          name="dateofRun"
          hintText="ex 10/10/2018"
          floatingLabelText="Date of Run"
          value={this.state.dateOfRun}
          onChange={e => this.change(e)}
          floatingLabelFixed
        />
        <br />
        <div
          name="runningTime"
          hintText="ex 9:30"
          floatingLabelText="Average Pace (mm:ss)"
          value={this.state.runningTime}
          onChange={e => this.change(e)}
          floatingLabelFixed
        />
        <br />
        <div
          name="runningDistance"
          hintText="ex 14 mi"
          floatingLabelText="Running Distance (mi or km)"
          value={this.state.runningDistance}
          onChange={e => this.change(e)}
          floatingLabelFixed
        />
        <br />
        <div
          name="runningSurface"
          hintText="ex Road, Track, Trail, Beach, etc..."
          floatingLabelText="Running Surface "
          value={this.state.runningSurface}
          onChange={e => this.change(e)}
          floatingLabelFixed
        />
        <br />
        <div
          name="runningInjury"
          hintText="ex None, Knee, Ankle, Neck, Back, "
          floatingLabelText="Current Injuries"
          value={this.state.runningInjury}
          onChange={e => this.change(e)}
          floatingLabelFixed
        />
        <br />
        <div
          name="weatherOnRun"
          hintText="ex Sunny, Humid, Chilly, Rainy"
          floatingLabelText="Weather on Run"
          value={this.state.weatherOnRun}
          onChange={e => this.change(e)}
          floatingLabelFixed
        />
        <br />
        <div
          name="soloOrGroup"
          hintText="ex Solo"
          floatingLabelText="Solo or Group Run?"
          value={this.state.soloOrGroup}
          onChange={e => this.change(e)}
          floatingLabelFixed
        />
        <br />
        <div
          name="speedHillOrNormal"
          hintText="ex Speed work?"
          floatingLabelText="Speed, Hill, or Easy?"
          value={this.state.speedHillOrNormal}
          onChange={e => this.change(e)}
          floatingLabelFixed
        />
        =
        <br />
        <button onClick={e => this.onSubmit(e)}>Submit</button>
      </form>
      </div>
    );
  }
};

export default DiaryApp;