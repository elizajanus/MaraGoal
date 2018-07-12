import React, { Component } from 'react';
import "../styles/CalendarApp.css";
import { Saturday, Sunday } from './events';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment))

let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])

// creates component: basic calendar with state for showing the selected day for a long run
class CalendarApp extends Component {
  state = {
    selectedDay: "Saturday",
    completedTask: false
  }

  // this function works in conjunction with the onClick event associated with the button; it changes the day depending on what the user selects
  changeDay(day){
    this.setState({ selectedDay: day })
  }  
  
  // depending on what the user selects, the events will show only saturday or sunday running schedule
  render () {
    return (
      <div>
        <button onClick={() => this.changeDay("Saturday")}>Saturday</button>
        <button onClick={() => this.changeDay("Sunday")}>Sunday</button>
        
       <BigCalendar
          events={this.state.selectedDay === "Saturday" ? Saturday : Sunday}
          views={allViews}
          step={60}
          showMultiDayTimes
          defaultDate={new Date(2018, 5, 1)}
      /> 
    </div>
    )
  }
}

export default CalendarApp;