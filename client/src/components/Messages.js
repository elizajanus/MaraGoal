import React from 'react';
import Message from './Message';
import API from '../utils/API';

class Messages extends React.Component {
  componentDidUpdate() {
    this.loadMessages();
    // There is a new message in the state, scroll to bottom of list
    const objDiv = document.getElementById('messageList');
    objDiv.scrollTop = objDiv.scrollHeight;
  }

  loadMessages = () => {
    API.getSavedMessages()
      .then(res =>
        this.setState({ messages: res.data })
      )
      .catch(err => console.log(err));
  };

  render() {
    // Loop through all the messages in the state and create a Message component
    
    const messages = this.props.messages.map((message, i) => {
        return (
          <Message
            key={i}
            username={message.username}
            message={message.message}
            fromMe={message.fromMe}
            date={message.date} />
        );
      });
   
    return (
      <div className='messages' id='messageList'>
        { messages }
      </div>
    );
  }
}

/*Messages.defaultProps = {
  messages: []
};*/

export default Messages;
