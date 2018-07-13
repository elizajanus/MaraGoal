import React from "react";
import data from './diaryEntries.json';
import diary from "./diary.js";
import axios from 'axios';
 
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from "material-ui/Table";

//import data from where?  how do I do getposts to do this? get json from mlab?

class DiaryTable extends React.Component {
  state = {
    diaryEntries: data,
    user: {username: 'koeaves'}
  }
  //store the user in the state in some part of the app and then pass taht user down through props to 
//did mount request to get and populate all of the diary entries with that user...get up get route on backend
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