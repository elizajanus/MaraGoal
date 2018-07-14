import React from "react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import axios from 'axios';
import LoginApp from "../LoginApp"

class Diary extends React.Component {
  state = {
    dateOfRun: "",
    dateOfRunError: "",
    runningDistance: "",
    runningDistanceError: "",
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
    speedHillsOrNormalError: ""
  };

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  validate = () => {
    let isError = false;
    const errors = {
        dateOfRunError: "",
        runningDistanceError: "",
        runningTimeError: "",
        runningSurfaceError: "",
        runningInjuryError: "",
        weatherOnRunError: "",
        soloOrGroupError: "",
        speedHillsOrNormalError: ""
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
   const entry = {
    dateOfRun: this.state.dateOfRun,
    runningTime: this.state.runningTime,
    runningDistance: this.state.runningDistance,
    runningSurface: this.state.runningSurface,
    runningInjury: this.state.runningInjury,
    weatherOnRun: this.state.weatherOnRun,
    soloOrGroup: this.state.soloOrGroup,
    speedHillsOrNormal: this.state.speedHillsOrNormal
   }
   console.log(this.state);
   axios.post('/api/diary', entry) 
   .then(res => {
     console.log(res);
     console.log(res.data);
   })
   .catch(err => console.log(err));

  }

  render() {
    return (
      <form>
        <TextField
          name="dateOfRun"
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
        <RaisedButton label="Submit" onClick={this.onSubmit} primary />
      </form>
    );
  };
}

export default Diary;