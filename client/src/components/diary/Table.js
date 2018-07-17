import React from "react";
import PropTypes from 'prop-types';
import data from './diaryEntries.json';
import diary from "./diary.js";
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
    diaryEntries: [],
    username: ""
  }
  propTypes = {
    diaryEntries: PropTypes.array
  }

  render() {
    return (
      <div>
      <AppBar class="appbar" position="static">
        <Toolbar>
          <Typography  class="typography" variant="title" color="inherit">
            Your Running Diary
          </Typography>
        </Toolbar>
      </AppBar>
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
            this.props.diaryEntries.map(row => (
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
    </div>
    );
  }
}

export default DiaryTable;
