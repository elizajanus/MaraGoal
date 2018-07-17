import React, { Component } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Signup.css";

class SignupApp extends Component {


    state = {
        username: "",
        email: "",
        password: "",
        selectedDay: "saturday"
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
            console.log(data.data);
            sessionStorage["username"] = data.data.username;
            sessionStorage["selectedDay"] = data.data.selectedDay;
            console.log(sessionStorage["username"]);
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
        
        <div className="Login">
            <form onSubmit={this.submitButtonClick}>
                <FormGroup controlId="username" bsSize="large">
                <ControlLabel>Username</ControlLabel>
                <FormControl
                    autoFocus
                    type="username"
                    value={this.state.username}
                    onChange={this.handleChange}
                />
                </FormGroup>
                <FormGroup controlId="email" bsSize="large">
                <ControlLabel>Email</ControlLabel>
                <FormControl
                    autoFocus
                    type="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                />
                </FormGroup>
                <FormGroup controlId="password" bsSize="large">
                <ControlLabel>Password</ControlLabel>
                <FormControl
                    value={this.state.password}
                    onChange={this.handleChange}
                    type="password"
                />
                </FormGroup>
                <FormGroup>
                    <input
                    type="radio" 
                    name="pickDay" 
                    value="saturday" 
                    className="form-control" 
                    id="day-input1" 
                    checked={this.state.selectedDay==="saturday"} 
                    onChange={this.handleDay} /><label htmlFor="day-input1">Saturday</label>
                    
                    <input 
                    type="radio" 
                    name="pickDay" 
                    value="sunday" 
                    className="form-control" 
                    id="day-input2" 
                    checked={this.state.selectedDay==="sunday"} 
                    onChange={this.handleDay} /><label htmlFor="day-input2">Sunday</label>
                </FormGroup>
                <Button
                    block
                    bsSize="large"
                    disabled={!this.validateForm()}
                    type="submit">
                    Sign up
                </Button>
                <br />
                <br />
                <p>Already signed up? Login here.</p>
                    <Link 
                        to={"/login"}>
                        Login
                    </Link>
            </form>
            </div>
        );
    }
}
                     

export default SignupApp;