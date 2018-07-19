import React from 'react';
import { FormGroup, FormControl, InputGroup, Button } from 'react-bootstrap';

class ChatInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { chatInput: '' };

    // React ES6 does not bind 'this' to event handlers by default
    this.submitHandler = this.submitHandler.bind(this);
    this.textChangeHandler = this.textChangeHandler.bind(this);
  }
  
  submitHandler(event) {
    // Stop the form from refreshing the page on submit
    event.preventDefault();

    // Clear the input box
    this.setState({ chatInput: '' });

    // Call the onSend callback with the chatInput message
    this.props.onSend(this.state.chatInput);

            // <input className="text" type="text"
          // onChange={this.textChangeHandler}
          // value={this.state.chatInput}
          // placeholder="Write a message..."
          // required />
  }

  textChangeHandler(event)  {
    this.setState({ chatInput: event.target.value });
  }

  render() {
    return (

      <form className="chat-input" onSubmit={this.submitHandler}>
<FormGroup>
    <InputGroup>
      <FormControl 
          className= "text" 
          type="text"
          onChange={this.textChangeHandler}
          value={this.state.chatInput}
          placeholder="Write a message..."
          required />
      <InputGroup.Button>
      <Button type="submit">Send</Button>
      </InputGroup.Button>
    </InputGroup>
  </FormGroup>
      </form>
        

    );
  }
}

ChatInput.defaultProps = {
};

export default ChatInput;
