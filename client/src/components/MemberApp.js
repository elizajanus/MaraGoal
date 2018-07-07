import React, { Component } from 'react';


class MemberApp extends Component {

    // state = {
    //     member: ""
    // };

    // getName () {
    //     axios.get("/api/user_data").then(function(data) {
    //         $(".member-name").text(data.email);
    //     });
    // }
    
    render () {
        return (
            <div>
                <nav class="navbar navbar-default">
                    <div class="container-fluid">
                        <div class="navbar-header">
                            <a class="navbar-brand" href="/logout">
                                Logout
                            </a>
                        </div>
                    </div>
                </nav>
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 col-md-offset-3">
                            <h2>Welcome <span class="member-name"></span></h2>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MemberApp;
