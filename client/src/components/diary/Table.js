import React from "react";
import PropTypes from 'prop-types';
//import data from './diaryEntries.json';
//import diary from "./diary.js";
//import { withStyles } from '@material-ui/core/styles';
//import AppBar from '@material-ui/core/AppBar';
//import Toolbar from '@material-ui/core/Toolbar';
//import Typography from '@material-ui/core/Typography';
 
import { Table } from 'react-bootstrap';

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

          <h1 style={{color: "#ffffff"}}>
            Your Running Diary
          </h1>

        <Table>
        <thead>
          <tr style={{color: "#ffffff"}}>
              <th>Date</th>  
              <th>Pace</th>
              <th>Distance</th>
              <th>Surface</th>
              <th>Injury</th>
              <th>Weather</th>
              <th>Solo/Group</th>
              <th>Speed/Hill/Normal</th>
          </tr>
        </thead>
        <tbody>
          {
            this.props.diaryEntries.map(row => (
              <tr style={{color: "#ffffff"}}>
                <td>
                {row.dateOfRun}
                </td>
                <td>{row.runningTime}</td>
                <td>{row.runningDistance}</td>
                <td>{row.runningSurface}</td>
                <td>{row.runningInjury}</td>
                <td>{row.weatherOnRun}</td>
                <td>{row.soloOrGroup}</td>
                <td>{row.speedHillsOrNormal}</td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </div>
    );
  }
}

export default DiaryTable;
