import React from 'react';
import "./App.css";
import events from './events';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import BigCalendar from 'react-big-calendar'
import moment from 'moment'

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment))

let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])

let Basic = () => (
  <BigCalendar
    events={events}
    views={allViews}
    step={60}
    showMultiDayTimes
    defaultDate={new Date(2018, 5, 1)}
  />
)

// if user selects saturday long runs, then we show only the event.js desc "saturday" options
// else if user selects sunday long runs, then we show only the event.js desc "sunday" options
export default Basic