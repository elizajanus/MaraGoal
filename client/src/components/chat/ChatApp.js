import React, { Component } from 'react';
import './ChatApp.css';
import io from 'socket.io-client';
import Messages from './Messages';
import ChatInput from './ChatInput';
import config from '../../config';
import API from '../../utils/API';
import axios from "axios";

/*axios.get("api/users/login", {
  
}).then(function(data) {
  console.log(data);
  sessionStorage["username"] = data.data.username;
  console.log(sessionStorage["username"]);
  // window.location.replace();
  // If there's an error, log the error
}).catch(function(err) {
  console.log(err);
});      */

class ChatApp extends Component {
  socket = {};
  
  state = {
    username: this.props.username,
    messages: []
  };

  componentWillMount() {
    this.loadMessages();
    // Connect to the server
    this.socket = io(config.api, { query: `username=${this.props.username}` }).connect();
    
    // Listen for messages from the server
    this.socket.on('server:message', message => {
      this.addMessage(message);
    });
  }

  sendHandler = (message) => {
    const messageObject = {
      username: this.state.username,
      message: message
    };

//console.log(messageObject);
    // Emit the message to the server
    this.socket.emit('client:message', messageObject);


   // messageObject.fromMe = true;
    //this.addMessage(messageObject);
    console.log(messageObject)
    API.saveMessage(messageObject)
      .then(res => this.loadMessages())
      .catch(err => console.log(err));
  }

  loadMessages = () => {
    API.getSavedMessages()
      .then(res =>
        this.setState({ messages: res.data })
      )
      .catch(err => console.log(err));
  };

  addMessage(message) {
    // Append the message to the component state
    const messages = [...this.state.messages, message];
    this.setState({ messages });
  }

  render() {
    return (
              <div className="container">
                <h3>MaraGoal Groupchat</h3>
                  <div className="column">
                    <Messages username={this.state.username} messages={this.state.messages} />
                    <ChatInput onSend={this.sendHandler} />
                  </div>
              </div>
    );
  }

}
/*ChatApp.defaultProps = {
  username: 'MaraGoal user'
};*/

export default ChatApp;
