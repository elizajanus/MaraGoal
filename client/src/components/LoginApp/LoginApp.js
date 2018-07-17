import React, { Component } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";


class LoginApp extends Component {


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
    
    loginButtonClick = (e) => {
        e.preventDefault();
        axios.post("/api/users/login", {
           
            username: this.state.username,
            password: this.state.password
            
        }).then(function(data) {
            console.log(data)
            sessionStorage["username"] = data.data.username;
            sessionStorage["selectedDay"] = data.data.selectedDay;
            console.log("session storage: " + sessionStorage["username"]);
            
        }).then(function() {
            window.location.href = '/calendar';
        }).catch(function(err) {
            console.log(err);
        });      
    }

    handleUser = (e)=> {
        this.setState({username: e.target.value});
    }

    handlePassword = (e)=> {
        this.setState({password: e.target.value})
    }


    render () {
        return (
            <div className="Login">
            <form onSubmit={this.loginButtonClick}>
                <FormGroup controlId="username" bsSize="large">
                <ControlLabel>Username</ControlLabel>
                <FormControl
                    autoFocus
                    type="username"
                    value={this.state.username}
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
                    Login
                </Button>
                <p>Not signed up yet? Sign up here.</p>
                    <Link 
                        to={"/signup"}>
                        Signup
                    </Link>
            </form>
            </div>
        );
        }
    }


export default LoginApp;

