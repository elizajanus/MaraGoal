import React, { Component } from 'react';


class SignupApp extends Component {

    state = {
        email: "",
        password: "",
        day: ""
    }

    signupButtonClick () {
        
        $.post("/api/login", {
            email: this.state.email,
            password: this.state.password
        }).then(function(data) {
            window.location.replace(data);
            // If there's an error, log the error
        }).catch(function(err) {
            console.log(err);
        });
          
    }
    render () {
        return (
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
                            <form className="login">
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Email address</label>
                                    <input onChange={(e) => this.setState({email: e.value})} type="email" className="form-control" id="email-input" placeholder="Email"></input>
                                </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input onChange={(e) => this.setState({password: e.value})} type="password" className="form-control" id="password-input" placeholder="Password"></input>
                            </div>
                            <button onClick={() => this.loginButtonClick} type="submit" className="btn btn-default">Signup</button>
                            </form>
                        <br />
                        <p>Or log in <a href="/">here</a></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}