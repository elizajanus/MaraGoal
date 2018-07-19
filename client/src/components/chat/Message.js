import React from 'react';
import moment from 'moment';
import { Panel, Row } from 'react-bootstrap';

class Message extends React.Component {
  render() {

    return (


      <Panel className={'message'}>
      <Panel.Heading>
        <div className='username'>
          { this.props.username }
        </div>
        <div className='message-date'>
          { moment(this.props.date).format("dddd, MMMM Do, h:mm a") }
        </div>
      </Panel.Heading>
      <Panel.Body>
        <div className='message-body'>
          { this.props.message }
        </div>
      </Panel.Body>
      </Panel>

    );
  }
}

Message.defaultProps = {
  message: '',
  username: '',
  fromMe: false
};

export default Message;
