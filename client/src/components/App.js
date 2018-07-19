import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ChatApp from './chat/ChatApp';
import CalendarApp from './calendar/CalendarApp';
import DiaryApp from "./diary/DiaryApp";
import 'font-awesome/css/font-awesome.css';
import Header from "./Header/Header";
import '../index.css';
import SignupApp from './SignupApp/SignupApp';
import LoginApp from './LoginApp/LoginApp';

const App = () =>  (
    <Router> 
        <div>
            <Switch>
                <Route exact path="/" component={LoginApp} />
                <Route exact path="/login" component={LoginApp} />
                <Route exact path="/signup" component={SignupApp} />
                <Route exact path="/calendar" component={CalendarApp} />
                <Route exact path="/groupchat" component={ChatApp} />
                <Route exact path="/diary" component={DiaryApp} />
            </Switch>
        </div>
    </Router>
);

  
export default App;