import React, { Component } from 'react';
import Form from './diary.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Table from "./Table.js";

class DiaryApp extends Component {
//this section is for input for the diary
state = { 
  fields: {}
};

onChange = updatedValue => {
  this.setState({
    fields: {
       ...this.state.fields,
      ...updatedValue
    }
  });
};

render() {
  return (
    
  <div>
      <MuiThemeProvider>
        <div className="App">
          <Form onChange={fields => this.onChange(fields)} />
          {/*<Table
          data={this.state.data}
          header={[
            {
              name: "Username",
              prop: "username"
            },
            {
              name: "Date",
              prop: "dateOfRun"
            },
            {
              name: "Time",
              prop: "runningTime"
            },
            {
              name: "Surface",
              prop: "runningSurface"
            },
            {
              name: "Injury",
              prop: "runningInjury"
            },
            {
              name: "Weather",
              prop: "weatherOnRun"
            },
            {
              name: "Solo or Group Run",
              prop: "soloOrGroup"
            },
            {
              name: "Speed, Hills, or Easy Run",
              prop: "speedHillsOrNormal"
            }
          ]}
        />*/}
        </div>
      </MuiThemeProvider>
        </div>
  )
}
};

export default DiaryApp;
