import React, { Component } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "../Header";
import { Col, Button, FormGroup, FormControl, ControlLabel, Grid, Row  } from "react-bootstrap";
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
            // console.log(data)
            sessionStorage["username"] = data.data.username;
            sessionStorage["selectedDay"] = data.data.selectedDay;
            // console.log("session storage: " + sessionStorage["username"]);
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
            <div className="Login" style={{color: "#ffffff"}}>
                <div className="vAlign">
                    <Grid>
                        <Col sm={6} md={4} mdOffset={4} smOffset={3} lg={4} lgOffset={8}>
                        <Row>
                        <img style={{maxWidth:"100%",margin:"24px 0"}}src='/images/Logo2-01.png' alt="MaraGoal" />
                        </Row>
                        <form onSubmit={this.loginButtonClick}>
                            <Row>
                                <FormGroup controlId="username" bsSize="large">
                                <ControlLabel>Username</ControlLabel>
                                <FormControl
                                    autoFocus
                                    type="username"
                                    value={this.state.username}
                                    onChange={this.handleChange}
                                />
                                </FormGroup>
                            </Row>
                            <Row>
                                <FormGroup controlId="password" bsSize="large">
                                <ControlLabel>Password </ControlLabel>
                                <FormControl
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                    type="password"
                                />
                                </FormGroup>
                            </Row>
                            <Row>
                                <Button 
                                    block
                                    bsSize="large"
                                    bsStyle="primary" 
                                    disabled={!this.validateForm()}
                                    type="submit">
                                    Login
                                </Button>
                                <br />
                                <p>Not signed up yet? <Link className="link" to={"/signup"}>Sign up here</Link>.</p>
                            </Row>    
                        </form>
                        </Col>
                    </Grid>
                    </div>
            </div>
        );
    }
}

export default LoginApp;