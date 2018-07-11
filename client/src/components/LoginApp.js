import React, { Component } from 'react';


class LoginApp extends Component {

    state = {
        email: "",
        password: ""
    }

    loginButtonClick () {
        
        axios.post("/api/users/login", {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }).then(function(data) {
            window.location.replace(data);
            // If there's an error, log the error
        }).catch(function(err) {
            console.log(err);
        });      
    }

    handleUser = (e)=> {
        this.setState({username: e.target.value});
    }

    handleEmail = (e)=> {
        this.setState({email: e.target.value})
    }

    handlePassword = (e)=> {
        this.setState({password: e.target.value})
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
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Email address</label>
                                    <input 
                                        value={this.state.email}
                                        onChange={this.handleEmail} 
                                        type="email" 
                                        className="form-control" 
                                        id="email-input" 
                                        placeholder="Email" />
                                </div>
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
                        <p>Or sign up <a href="/">here</a></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginApp;