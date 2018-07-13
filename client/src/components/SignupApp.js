import React, { Component } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";

// import LoginApp from "./LoginApp";
// import { Link } from "react-router-dom";
// import API from "../../utils/API";


class SignupApp extends Component {

    state = {
        username: "",
        email: "",
        password: "",
        selectedDay: "saturday"
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
            
            
            // window.location.replace(data);
            // If there's an error, handle it by throwing up a bootstrap alert
        }).catch(err => console.log(err));
    }

    // loginButtonClick = () => {
    //     window.location.replace('/login');
    // }

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
        <div>
        <ul className="nav nav-tabs">
        <li className="nav-item">
            <Link
                to="/signup"
                // className={
                //     window.location.pathname === "/signup" ? "nav-link active" : "nav-link"
                // }
            >
                Signup
            </Link>
        </li>
        </ul>
            <div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                    <div className="navbar-header">
                    </div>
                    </div>
                </nav>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 col-md-offset-3">
                                    <h2>Signup Form</h2>
                                    {/* <form className="login"> */}
                                        <div className="form-group">
                                            <label>Username</label>
                                            <input
                                            value={this.state.username}
                                            onChange={this.handleUser}
                                            type="username" 
                                            className="form-control" 
                                            id="user-input" 
                                            placeholder="User" />
                                        </div>
                                        <div className="form-group">
                                            <label>Email address</label>
                                            <input 
                                            value={this.state.email} 
                                            onChange={this.handleEmail} 
                                            type="email" 
                                            className="form-control" 
                                            id="email-input" 
                                            placeholder="Email" />
                                        </div>
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input 
                                            value={this.state.password} 
                                            onChange={this.handlePassword} 
                                            type="password" 
                                            className="form-control" 
                                            id="password-input" 
                                            placeholder="Password" />
                                    </div>
                                    <div className="form-group">
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
                                    </div>
                                    <button onClick={this.submitButtonClick} className="btn btn-default">Signup</button>
                                    {/* </form> */}
                                <br />
                                <p>Already signed up? Login here.</p>
                                <Link 
                                to={"/login"}>
                                Login
                                </Link>
                                </div>
                                {/* {user.day === "saturday" ?
                                    (div) :
                                    (p)    
                                 } */}
                            </div>
                        </div>
            </div>
    </div>
        )
    }
}

export default SignupApp;