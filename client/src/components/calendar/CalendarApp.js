import React, { Component } from 'react';
import "./CalendarApp.css";
import { saturday, sunday } from './events';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment))

let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])

// creates component: basic calendar with state for showing the selected day for a long run
class CalendarApp extends Component {
  state = {
    selectedDay: ""
  }

  componentDidMount() {
    this.setState({
      selectedDay: sessionStorage['selectedDay'] || 'saturday',
    });
  }
  
  // depending on what the user selects, the events will show only saturday or sunday running schedule
  render () {
    return (
      <div>
        <BigCalendar
            events={this.state.selectedDay === "saturday" ? saturday : sunday}
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
