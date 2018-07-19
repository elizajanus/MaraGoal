import React from 'react';
import Message from './Message';
import { Col, Row } from 'react-bootstrap';

class Messages extends React.Component {
  constructor(props) {
    super(props);
    this.messageList = React.createRef();
  }
  componentDidUpdate() {

    const messageList = this.messageList.current;

    // There is a new message in the state, scroll to bottom of list
    //console.log('messageList: %O', messageList);
    messageList.scrollIntoView(false);
    messageList.scrollIntoView({behavior: "instant", block: "end", inline: "end"});

  }


  render() {
    // Loop through all the messages in the state and create a Message component
    
    const messages = this.props.messages.map((message, i) => {
        return (
          <Message
            key={i}
            username={message.username}
            message={message.message}
            date={message.date} />
        );
      });
   
    return (


      <div className='messages' id='messageList' ref={this.messageList}>
        { messages }
      </div>

    );
  }
}


export default Messages;
