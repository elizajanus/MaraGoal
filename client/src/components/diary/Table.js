import React from "react";
import data from './diaryEntries.json';
import diary from "./diary.js";
import axios from 'axios';
import LoginApp from "../LoginApp/LoginApp.js";
import API from '../../utils/API';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
 
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from "material-ui/Table";

class DiaryTable extends React.Component {
  
  state = {
    diaryEntries: []
  }
  
  componentDidMount() {
    const that = this;
    API.getRunStats()
      .then(function(res) {
        console.log(res.data);
        const diaryEntries = res.data;
        console.log(that);
        that.setState({ diaryEntries: res.data });
      })
  }
  // getDiaryEntries = (e) => {
    
  //   e.preventDefault();
  //   axios.get("/api/diary", {
  //       params: sessionStorage["username"]
  //   }).then(function(response) {
  //       console.log("this is my table:" + response);
  //   }).catch(function(err) {
  //       console.log(err);
  //   });
  // }

  
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
        {this.state.diaryEntries.map(row => {
          return (
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
           ); 
          })}
      </TableBody>
    </Table>
    );
  }
}

export default DiaryTable;
