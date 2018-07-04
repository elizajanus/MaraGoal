var Message = React.createClass({
  handleMessageSubmit: function(donation) {
    //this is just an example of how you would submit a form
    //you would have to implement something separately on the server
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      type: 'POST',
      data: message,
      success: function(data) {
        //this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  getInitialState: function() {
    //this is not currently used, but you could display donations in real time
    //by updating the state of the donation data when the form is submitted,
    //then poll the server for new donations.
    return {data: []};
  },
  
});