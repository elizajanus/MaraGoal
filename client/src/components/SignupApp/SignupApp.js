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
            
           
        }).catch(err => console.log(err));
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
                <Button
                    block
                    bsSize="large"
                    disabled={!this.validateForm()}
                    type="submit">
                    Signup
                </Button>
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