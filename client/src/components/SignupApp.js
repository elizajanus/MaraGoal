import React, { Component } from 'react';


class SignupApp extends Component {

    state = {
        email: "",
        password: "",
        selectedDay: "saturday"
    }

    signupButtonClick () {  
 
        axios.post("/api/signup", {
            email: this.state.email,
            password: this.state.password,
            // day: day
        }).then(function(data) {
            window.location.replace(data);
            // If there's an error, handle it by throwing up a bootstrap alert
        }).catch(handleLoginErr);
    }

    handleChange (changeEvent) {
        this.setState({
            selectedDay: changeEvent.target.value
        });   
    }

    handleLoginErr(err) {
        console.log (err);
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
                            <div class="form-group">
                                <input type="radio" name="pickDay" value="Saturday" class="form-control" id="day-input1" checked={this.state.selectedDay==="saturday"}>Saturday</input><br></br>
                                <input type="radio" name="pickDay" value="Sunday" class="form-control" id="day-input2" checked={this.state.selectedDay==="sunday"}>Sunday</input><br></br>
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

export default SignupApp;