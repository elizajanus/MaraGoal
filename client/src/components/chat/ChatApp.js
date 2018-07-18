import React, { Component } from 'react';
import './ChatApp.css';
import io from 'socket.io-client';
import Messages from './Messages';
import ChatInput from './ChatInput';
import config from '../../config';
import API from '../../utils/API';

class ChatApp extends Component {
  socket = {};
  
  state = {
    username: sessionStorage['username'],
    messages: []
  };

  componentWillMount() {
    console.log(sessionStorage['username']);
    this.loadMessages();   
    // Connect to the server
    this.socket = io(config.api, { query: `username=${this.state.username}` }).connect();
    
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
    this.loadMessages(); 
  }

  render() {
    return (
              <div className="container chat">
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
