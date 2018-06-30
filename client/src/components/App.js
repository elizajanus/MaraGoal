import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ChatApp from './ChatApp';
import CalendarApp from './CalendarApp';

class App extends Component {
  render() {
    return (
      <div>
        <CalendarApp />
        <ChatApp />
      </div>
    );
  }
}

export default App;

