import React, { Component } from 'react';
import './ChatApp.css';
import openSocket from 'socket.io-client';
import Messages from './Messages';
import ChatInput from './ChatInput';
import { panel } from "react-bootstrap";
// import config from '../../config';
import API from '../../utils/API';
import Header from "../Header";
import { Grid, Row } from 'react-bootstrap';

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
    this.socket = openSocket();/*config.api, { query: `username=${this.state.username}` }*/
    
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
    console.log(message);
    // Append the message to the component state
    const messages = [...this.state.messages, message];
    this.setState({ messages });
    
     
  }

  render() {
    return (
              <div className="chat">
              <Header />
              <Grid>
                <h3>MaraGoal Groupchat</h3>

                  <div>
                    <Messages username={this.state.username} messages={this.state.messages} />
                                    <hr />
                    <ChatInput onSend={this.sendHandler} />
                  </div>
              </Grid>
              </div>
    );
  }

}
/*ChatApp.defaultProps = {
  username: 'MaraGoal user'
};*/

export default ChatApp;
