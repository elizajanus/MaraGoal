import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ChatApp from './ChatApp';
import CalendarApp from './CalendarApp';
import DiaryApp from './DiaryApp';

class App extends Component {
  render() {
    return (
      <div>
        <CalendarApp />
        <ChatApp />
        <DiaryApp />
      </div>
    );
  }
}

export default App;

