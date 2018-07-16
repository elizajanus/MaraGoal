import React from 'react';
import moment from 'moment';

class Message extends React.Component {
  render() {

    return (
      <div className={'message'}>
        <div className='username'>
          { this.props.username }
        </div>
        <div className='message-date'>
          { moment(this.props.date).format("dddd, MMMM Do, h:mm a") }
        </div>
        <div className='message-body'>
          { this.props.message }
        </div>
      </div>
    );
  }
}

Message.defaultProps = {
  message: '',
  username: '',
  fromMe: false
};

export default Message;
