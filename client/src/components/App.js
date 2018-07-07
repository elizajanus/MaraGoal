import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavTabs from "./NavTabs";
import ChatApp from './ChatApp';
import CalendarApp from './CalendarApp';
import DiaryApp from "./diary/DiaryApp";

const App = () =>  (
      <Router>
    <div>
      <NavTabs />
      <Switch>
      <Route exact path="/calendar" component={CalendarApp} />
      <Route exact path="/groupchat" component={ChatApp} />
      <Route exact path="/diary" component={DiaryApp} />
      </Switch>
    </div>
  </Router>
    );

  
export default App;