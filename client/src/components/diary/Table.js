import React from "react";
import data from './diaryEntries.json';
import diary from "./diary.js";
import axios from 'axios';
import LoginApp from "../LoginApp/LoginApp.js";
 
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from "material-ui/Table";

// db.User.find({SessionStorage(username)}).populate("diaryEntries").then(function(dbUser) {req.json(dbUser)

class DiaryTable extends React.Component {
  state = {
    diaryEntries: [],
    username: [],
  }

  

  // componentDidMount() {
  //   this.setState({
  //     username: sessionStorage['username'],
  //   });
  //   axios.get('/api/diary', {params: {username}}) 
  //  .then(res => {
  //    console.log(res);
  //    console.log(res.data);
  //    username.setState({e : response.data});
     
  //    })
  // };
    // get username or unique ID from session storage
    // Make AJAX request to  server to load diary entries belonging to that user
    // In the request's "then" handler, update the state's diaryEntries property with the data returned
  

  render() {
    return (
      <Table>
      <TableHeader>
        <TableRow>
            <TableHeaderColumn>Date</TableHeaderColumn>
            <TableHeaderColumn>Pace</TableHeaderColumn>
            <TableHeaderColumn>Distance</TableHeaderColumn>
            <TableHeaderColumn>Surface</TableHeaderColumn>
            <TableHeaderColumn>Injury</TableHeaderColumn>
            <TableHeaderColumn>Weather</TableHeaderColumn>
            <TableHeaderColumn>Solo/Group</TableHeaderColumn>
            <TableHeaderColumn>Speed/Hill/Normal</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody>
        {
          this.state.diaryEntries.map(row => (
            <TableRow>
              <TableRowColumn>{row.dateOfRun}</TableRowColumn>
              <TableRowColumn>{row.runningTime}</TableRowColumn>
              <TableRowColumn>{row.runningDistance}</TableRowColumn>
              <TableRowColumn>{row.runningSurface}</TableRowColumn>
              <TableRowColumn>{row.runningInjury}</TableRowColumn>
              <TableRowColumn>{row.weatherOnRun}</TableRowColumn>
              <TableRowColumn>{row.soloOrGroup}</TableRowColumn>
              <TableRowColumn>{row.speedHillsOrNormal}</TableRowColumn>
            </TableRow>
          ))
        }
      </TableBody>
    </Table>
    );
  }
}

export default DiaryTable;