import React, { Component } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";

class LoginApp extends Component {

    state = {
        username: "",
        password: "",
        selectedDay: ""
    }

    loginButtonClick () {
        
        axios.post("/api/users/login", {
            username: this.state.username,
            selectedDay: this.state.selectedDay,
            password: this.state.password
        }).then(function(data) {
            sessionStorage["username"] = data.data.username;
            sessionStorage["selectedDay"] = data.data.selectedDay;
            console.log(sessionStorage["username"]);
            // window.location.replace();
            // If there's an error, log the error
        }).catch(function(err) {
            console.log(err);
        });      
    }

    handleUser = (e)=> {
        this.setState({username: e.target.value});
    }

    // handleEmail = (e)=> {
    //     this.setState({email: e.target.value})
    // }

    handlePassword = (e)=> {
        this.setState({password: e.target.value})
    }


    render () {
        return (
            <div>
                <ul className="nav nav-tabs">
            <li className="nav-item">
            <Link
                to="/login"
                // className={
                //     window.location.pathname === "/signup" ? "nav-link active" : "nav-link"
                // }
            >
                Login
            </Link>
        </li>
        </ul>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                        </div>
                    </div>
                </nav>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3">
                            <h2>Login Form</h2>
                            <form className="login">
                            <div className="form-group">
                                    <label for="exampleInputUser1">Username</label>
                                    <input 
                                        value={this.state.username}
                                        onChange={this.handleUser} 
                                        type="username" 
                                        className="form-control" 
                                        id="user-input" 
                                        placeholder="User" />
                                </div>
                                {/* <div className="form-group">
                                    <label for="exampleInputEmail1">Email address</label>
                                    <input 
                                        value={this.state.email}
                                        onChange={this.handleEmail} 
                                        type="email" 
                                        className="form-control" 
                                        id="email-input" 
                                        placeholder="Email" />
                                </div> */}
                            <div className="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input 
                                    value={this.state.password}
                                    onChange={this.handlePassword} 
                                    type="password" 
                                    className="form-control" 
                                    id="password-input" 
                                    placeholder="Password" />
                            </div>
                            <button onClick={() => this.loginButtonClick} type="submit" className="btn btn-default">Login</button>

                            </form>
                        <br />
                        <p>Already signed up? Login here.</p>
                                <Link 
                                    to={"/signup"}>
                                    Signup
                                </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginApp;