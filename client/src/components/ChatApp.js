import React, { Component } from 'react';
import '../styles/ChatApp.css';
import io from 'socket.io-client';
import Messages from './Messages';
import ChatInput from './ChatInput';
import config from '../config';

class ChatApp extends Component {
  socket = {};
  constructor(props) {
    super(props);
    this.state = { messages: [] };
    //HERE is where we do the get request for the message based on the API.js file
    this.sendHandler = this.sendHandler.bind(this);
    
    // Connect to the server
    this.socket = io(config.api, { query: `username=${props.username}` }).connect();

    // Listen for messages from the server
    this.socket.on('server:message', message => {
      this.addMessage(message);
    });
  }

  sendHandler(message) {
    const messageObject = {
      username: this.props.username,
      message
    };


    // Emit the message to the server
    this.socket.emit('client:message', messageObject);


    messageObject.fromMe = true;
    this.addMessage(messageObject);
  }

  addMessage(message) {
    // Append the message to the component state
    //HERE is where I make the call to push the messages both to the MongoDB server and to the initial array in the state
    const messages = this.state.messages;
    messages.push(message);
    this.setState({ messages });
  }

  render() {
    return (
              <div className="container">
                <h3>MaraGoal Groupchat</h3>
                  <div className="column">
                    <Messages messages={this.state.messages} />
                    <ChatInput onSend={this.sendHandler} />
                  </div>
              </div>
    );
  }

}
ChatApp.defaultProps = {
  username: 'MaraGoal user'
};

export default ChatApp;
