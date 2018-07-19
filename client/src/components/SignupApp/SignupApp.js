import React, { Component } from 'react';
import axios from "axios";
import Header from "../Header";
import { Link } from "react-router-dom";
import { 
        Button,
        ButtonToolbar,
        ToggleButtonGroup,
        ToggleButton,
        FormGroup, 
        FormControl, 
        ControlLabel,
        Grid, Row, Col
} from "react-bootstrap";
import "./Signup.css";

class SignupApp extends Component {

    state = {
        username: "",
        email: "",
        password: "",
        selectedDay: ""
    }

    constructor(props) {
        super(props);
    
        this.state = {
          username: "",
          password: "",
          selectedDay:""
        };
      }
    
      validateForm() {
        return this.state.username.length > 0 && this.state.password.length > 0;
      }
    
      handleChange = event => {
        this.setState({
          [event.target.id]: event.target.value
        });
      }

    submitButtonClick = ()=> {  
 
        axios.post("api/users/signup", {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            selectedDay: this.state.selectedDay
        }).then(function(data) {
            // console.log(data.data);
            sessionStorage["username"] = data.data.username;
            sessionStorage["selectedDay"] = data.data.selectedDay;
            // console.log(sessionStorage["username"]);
        }).then(function() {
            window.location.href = '/calendar';
        }).catch(function(err) {
            console.log(err);
        }); 
    }

    handleUser = (e)=> {
        this.setState({username: e.target.value});
    }

    handleEmail = (e)=> {
        this.setState({email: e.target.value});
    }

    handlePassword = (e)=> {
        this.setState({password: e.target.value});
    }

    handleDay = (changeEvent)=> {
        this.setState({
            selectedDay: changeEvent.target.value
        });   
    }

    render () {
        return (
        
            <div className="Login" style={{color: "#ffffff"}}>
                <div className="vAlign">
                    <Grid>
                    <Col sm={6} md={4} mdOffset={4} smOffset={3} lg={4} lgOffset={8}>
                    <Row>
                        <img style={{maxWidth:"100%",margin:"24px 0"}}src='/images/Logo2-01.png' alt="MaraGoal" />
                        </Row>
                        <form onSubmit={this.submitButtonClick}>
                            <Row>
                                <FormGroup controlId="username" bsSize="large">
                                <ControlLabel>Username</ControlLabel>
                                <FormControl
                                    autoFocus
                                    type="text"
                                    value={this.state.username}
                                    onChange={this.handleChange}
                                />
                                </FormGroup>
                            </Row>
                            <Row>
                                <FormGroup controlId="email" bsSize="large">
                                <ControlLabel>Email</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                />
                                </FormGroup>
                            </Row>
                            <Row>
                                <FormGroup controlId="password" bsSize="large">
                                <ControlLabel>Password</ControlLabel>
                                <FormControl
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                    type="password"
                                />
                                </FormGroup>
                            </Row>
                            <Row>
                                <FormGroup>
                                    <p>Choose a day to do your long run</p>
                                        <ButtonToolbar>
                                            <ToggleButtonGroup type="radio" name="options">
                                            <FormControl
                                                type="radio"
                                                value="saturday"
                                                id="day-input1"
                                                name="pickDay" 
                                                checked={this.state.selectedDay==="saturday"} 
                                                onChange={this.handleDay}
                                                />Saturday
                                            <FormControl 
                                                type="radio"
                                                value="sunday"
                                                id="day-input2"
                                                name="pickDay" 
                                                checked={this.state.selectedDay==="sunday"} 
                                                onChange={this.handleDay}
                                                />
                                                Sunday
                                            </ToggleButtonGroup>
                                        </ButtonToolbar>
                                    { /*
                                    Saturday
                                    <FormControl
                                    type="radio" 
                                    name="pickDay" 
                                    value="saturday"
                                    className="form-control" 
                                    id="day-input1" 
                                    checked={this.state.selectedDay==="saturday"} 
                                    onChange={this.handleDay}/>
                                    
                                    <br/>
                                    Sunday
                                    <FormControl
                                    type="radio" 
                                    name="pickDay" 
                                    value="sunday"
                                    className="form-control" 
                                    id="day-input2" 
                                    checked={this.state.selectedDay==="sunday"} 
                                    onChange={this.handleDay}/>
                                    */}
                                </FormGroup>
                            </Row>
                            <Row>
                                <Button
                                    block
                                    bsSize="large"
                                    bsStyle="primary"
                                    disabled={!this.validateForm()}
                                    type="submit">
                                    Sign up
                                </Button>
                                <br />
                                <p>Already signed up? <Link to={"/login"}>Login here</Link>.</p>
                            </Row>
                        </form>
                        </Col>
                    </Grid>
                    </div>
            </div>
        );
    }
}
                     
export default SignupApp;