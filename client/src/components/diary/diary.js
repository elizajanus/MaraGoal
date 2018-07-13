import React from "react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import axios from 'axios';

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
    date: this.state.dateOfRun,
    time: this.state.runningTime,
    distance: this.state.runningDistance,
    surface: this.state.runningSurface,
    injury: this.state.runningInjury,
    weather: this.state.weatherOnRun,
    soloOrGroup: this.state.soloOrGroup,
    speedHillsOrNormal: this.state.speedHillsOrNormal
   }

   axios.post('/api/diary', {entry}) 
   .then(res => {
     console.log(res);
     console.log(res.data);
   })
   
    // this.setState({
    //   dateOfRun: "",
    //   runningTime: "",
    //   runningDistance: "",
    //   runningSurface: "",
    //   runningInjury: "",
    //   weatherOnRun: "",
    //   soloOrGroup: "",
    //   speedHillsOrNormal: "",

    // });


  }

  render() {
    return (
      <form>
        <TextField
          name="dateOfRun"
          hintText="ex 10/10/2018"
          floatingLabelText="Date of Run"
          value={this.state.dateOfRun}
          onChange={this.change}
          floatingLabelFixed
        />
        <br />
        <TextField
          name="runningTime"
          hintText="ex 9:30"
          floatingLabelText="Average Pace (mm:ss)"
          value={this.state.runningTime}
          onChange={this.change}
          floatingLabelFixed
        />
        <br />
        <TextField
          name="runningDistance"
          hintText="ex 14 mi"
          floatingLabelText="Running Distance (mi or km)"
          value={this.state.runningDistance}
          onChange={this.change}
          floatingLabelFixed
        />
        <br />
        <TextField
          name="runningSurface"
          hintText="ex Road, Track, Trail, Beach, etc..."
          floatingLabelText="Running Surface "
          value={this.state.runningSurface}
          onChange={this.change}
          floatingLabelFixed
        />
        <br />
        <TextField
          name="runningInjury"
          hintText="ex None, Knee, Ankle, Neck, Back, "
          floatingLabelText="Current Injuries"
          value={this.state.runningInjury}
          onChange={this.change}
          floatingLabelFixed
        />
        <br />
        <TextField
          name="weatherOnRun"
          hintText="ex Sunny, Humid, Chilly, Rainy"
          floatingLabelText="Weather on Run"
          value={this.state.weatherOnRun}
          onChange={this.change}
          floatingLabelFixed
        />
        <br />
        <TextField
          name="soloOrGroup"
          hintText="ex Solo"
          floatingLabelText="Solo or Group Run?"
          value={this.state.soloOrGroup}
          onChange={this.change}
          floatingLabelFixed
        />
        <br />
        <TextField
          name="speedHillsOrNormal"
          hintText="ex Speed work?"
          floatingLabelText="Speed, Hill, or Easy?"
          value={this.state.speedHillsOrNormal}
          onChange={this.change}
          floatingLabelFixed
        />
        <br/>
        <RaisedButton label="Submit" onClick={this.onSubmit} primary />
      </form>
    );
  };
}

export default Diary;