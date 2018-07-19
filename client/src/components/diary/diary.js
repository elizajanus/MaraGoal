import React from "react";
import PropTypes from 'prop-types';
//import RaisedButton from "material-ui/RaisedButton";
import axios from 'axios';
//import LoginApp from "../LoginApp";
//import { withStyles } from '@material-ui/core/styles';
//import AppBar from '@material-ui/core/AppBar';
//import Toolbar from '@material-ui/core/Toolbar';
//import Typography from '@material-ui/core/Typography';
//import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { Form, FormGroup, FormControl, ControlLabel, Button, Panel, Glyphicon } from 'react-bootstrap';
import ReactDOM from 'react-dom';
//import "./diary.css";


class Diary extends React.Component {
  state = {
    username: sessionStorage["username"],
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

  propTypes = {
    onAddEntry: PropTypes.func
  }

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
    username: this.state.username,
    dateOfRun: this.state.dateOfRun,
    runningTime: this.state.runningTime,
    runningDistance: this.state.runningDistance,
    runningSurface: this.state.runningSurface,
    runningInjury: this.state.runningInjury,
    weatherOnRun: this.state.weatherOnRun,
    soloOrGroup: this.state.soloOrGroup,
    speedHillsOrNormal: this.state.speedHillsOrNormal
   }
  this.setState({
    open: !this.state.open
  })
   console.log(this.state);
   axios.post('/api/diary', entry) 
   .then(res => {
     console.log(res);
     console.log(res.data);
      this.props.onAddEntry(res.data);
   
     console.log(this.props);
     
   })
   .catch(err => console.log(err));
   
   

  }

  render() {
    return (
      <div>
      <Button bsStyle="primary" onClick={() => this.setState({ open: !this.state.open })}> <Glyphicon glyph="plus" /> Log a Run</Button>
      <Panel expanded={this.state.open}>
      <Panel.Collapse>
            <Panel.Body>
            <h1>How was your run today?</h1>
      <Form inline>
        <FormGroup style={{margin:"1em"}}>
        <ControlLabel style={{color: "#444444",marginRight:"1em"}}>Date</ControlLabel><FormControl class= "running-form"
          name="dateOfRun"
          hintText="ex 10/10/2018"
          placeholder="Date of Run"
          value={this.state.dateOfRun}
          onChange={e => this.change(e)}
        
        />
        </FormGroup>
        
        <FormGroup style={{margin:"1em"}}>
        <ControlLabel style={{color: "#444444",marginRight:"1em"}}>Time</ControlLabel><FormControl class= "running-form"
          name="runningTime"
          hintText="ex 9:30"
          placeholder="Average Pace (mm:ss)"
          value={this.state.runningTime}
          onChange={e => this.change(e)}
        />
        </FormGroup>
        
        <FormGroup style={{margin:"1em"}}>
        <ControlLabel style={{color: "#444444",marginRight:"1em"}}>Distance</ControlLabel><FormControl class= "running-form"
          name="runningDistance"
          hintText="ex 14 mi"
          placeholder="Running Distance (mi or km)"
          value={this.state.runningDistance}
          onChange={e => this.change(e)}
        />
        </FormGroup>
        
        <FormGroup style={{margin:"1em"}}>
        <ControlLabel style={{color: "#444444",marginRight:"1em"}}>Surface</ControlLabel><FormControl class= "running-form"
          name="runningSurface"
          hintText="ex Road, Track, Trail, Beach, etc..."
          placeholder="Running Surface "
          value={this.state.runningSurface}
          onChange={e => this.change(e)}
        />
        </FormGroup>
        
        <FormGroup style={{margin:"1em"}}>
        <ControlLabel style={{color: "#444444",marginRight:"1em"}}>Injury?</ControlLabel><FormControl class= "running-form"
          name="runningInjury"
          hintText="ex None, Knee, Ankle, Neck, Back, "
          placeholder="Current Injuries"
          value={this.state.runningInjury}
          onChange={e => this.change(e)}
        />
        </FormGroup>
        
        <FormGroup style={{margin:"1em"}}>
        <ControlLabel style={{color: "#444444",marginRight:"1em"}}>Weather</ControlLabel><FormControl class= "running-form"
          name="weatherOnRun"
          hintText="ex Sunny, Humid, Chilly, Rainy"
          placeholder="Weather on Run"
          value={this.state.weatherOnRun}
          onChange={e => this.change(e)}
        />
        </FormGroup>
        
        <FormGroup style={{margin:"1em"}}>
        <ControlLabel style={{color: "#444444",marginRight:"1em"}}>Solo or Group?</ControlLabel><FormControl class= "running-form"
          name="soloOrGroup"
          hintText="ex Solo"
          placeholder="Solo or Group Run?"
          value={this.state.soloOrGroup}
          onChange={e => this.change(e)}
        />
        </FormGroup>
        
        <FormGroup style={{margin:"1em"}}>
        <ControlLabel style={{color: "#444444",marginRight:"1em"}}>Speed, Hills, or Easy?</ControlLabel>
        <FormControl class= "running-form"
          name="speedHillsOrNormal"
          hintText="ex Speed work?"
          placeholder="Speed, Hill, or Easy?"
          value={this.state.speedHillsOrNormal}
          onChange={e => this.change(e)}
        />
        </FormGroup>
  
        <Button onClick={this.onSubmit} bsStyle="success">Submit</Button>
      </Form>
      </Panel.Body>
          </Panel.Collapse>
      </Panel>
      </div>
    );
  };
}

export default Diary;
