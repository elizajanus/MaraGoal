import React from "react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

export default class Form extends React.Component {
  state = {
        dateOfRun: "",
        dateOfRunnError: "",
        runningTime: "",
        runningTimeError: "",
        runningSurface: "",
        runningSurfaceError: "",
        runningInjury: "",
        runningInjuryError: "",
        weatherOnRun: "",
        weatherOnRunError: "",
        soloOrGroup: "",
        soloOrGroupError: "",
        speedHillsOrNormal: "",
        speedHillsOrNormalError: "",
      };
  

  change = e => {
    this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  validate = () => {
    let isError = false;
    const errors = {
      
        dateOfRunnError: "",
        runningTimeError: "",
        runningSurfaceError: "",
        runningInjuryError: "",
        weatherOnRunError: "",
        soloOrGroupError: "",
        speedHillsOrNormalError: "",
    };

    if (this.state.length < 1) {
      isError = true;
      errors.usernameError = "This is a required field";
    }

    this.setState({
      ...this.state,
      ...errors
    });

    return isError;
  };

  onSubmit = e => {
    e.preventDefault();
    // this.props.onSubmit(this.state);
    this.setState({
      username: "", //how do we get this to stay as the username the entire time without them having to rewrite it for each post?
      dateOfRun: "",
      runningTime: "",
      runningSurface: "",
      runningInjury: "",
      weatherOnRun: "",
      soloOrGroup: "",
      speedHillsOrNormal: "",

    });
    this.props.onChange({
        username: "",
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
      <form>
        <TextField
          name="username"
          hintText="RunRVALady"
          floatingLabelText="username"
          value={this.state.username}
          onChange={e => this.change(e)}
          floatingLabelFixed
        />
        <br />
        <TextField
          name="dateofRun"
          hintText="ex 10/10/2018"
          floatingLabelText="Date of Run"
          value={this.state.dateOfRun}
          onChange={e => this.change(e)}
          floatingLabelFixed
        />
        <br />
        <TextField
          name="runningTime"
          hintText="ex 9:30"
          floatingLabelText="Average Pace (mm:ss)"
          value={this.state.runningTime}
          onChange={e => this.change(e)}
          floatingLabelFixed
        />
        <br />
        <TextField
          name="runningDistance"
          hintText="ex 14 mi"
          floatingLabelText="Running Distance (mi or km)"
          value={this.state.runningDistance}
          onChange={e => this.change(e)}
          floatingLabelFixed
        />
        <br />
        <TextField
          name="runningSurface"
          hintText="ex Road, Track, Trail, Beach, etc..."
          floatingLabelText="Running Surface "
          value={this.state.runningSurface}
          onChange={e => this.change(e)}
          floatingLabelFixed
        />
        <br />
        <TextField
          name="runningInjury"
          hintText="ex None, Knee, Ankle, Neck, Back, "
          floatingLabelText="Current Injuries"
          value={this.state.runningInjury}
          onChange={e => this.change(e)}
          floatingLabelFixed
        />
        <br />
        <TextField
          name="weatherOnRun"
          hintText="ex Sunny, Humid, Chilly, Rainy"
          floatingLabelText="Weather on Run"
          value={this.state.weatherOnRun}
          onChange={e => this.change(e)}
          floatingLabelFixed
        />
        <br />
        <TextField
          name="soloOrGroup"
          hintText="ex Solo"
          floatingLabelText="Solo or Group Run?"
          value={this.state.soloOrGroup}
          onChange={e => this.change(e)}
          floatingLabelFixed
        />
        <br />
        <TextField
          name="speedHillsOrNormal"
          hintText="ex Speed work?"
          floatingLabelText="Speed, Hill, or Easy?"
          value={this.state.speedHillsOrNormal}
          onChange={e => this.change(e)}
          floatingLabelFixed
        />
        <br/>
        <RaisedButton label="Submit" onClick={e => this.onSubmit(e)} primary />
      </form>
    );
  };
}

