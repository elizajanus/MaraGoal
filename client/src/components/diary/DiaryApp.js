import React, { Component } from 'react';
import axios from 'axios';
import Diary from './diary.js';
import DiaryTable from "./Table.js";
import Header from "../Header";
import { Grid, Row, Column, Clearfix } from "react-bootstrap";
import data from './diaryEntries.json';

class DiaryApp extends Component {
  //this section is for input for the diary
  constructor(props) {
    super(props);
  }
  state = { 
    diaryEntries: []
  };
  componentDidMount() {
    axios.get("/api/diary")
      .then(res => {
        // console.log(res.data);
        const diaryEntries = res.data;
        const filteredDiaryEntries = diaryEntries.filter(entry => {
          // console.log(entry.username);
          return sessionStorage.getItem('username') === entry.username
        });
        this.setState({ diaryEntries: filteredDiaryEntries });
      });
  }
  
  addEntry(newEntry) {
    // console.log('state?', this.state.diaryEntries);
    let updatedDiaryEntries = this.state.diaryEntries;
    updatedDiaryEntries.push(newEntry);
    this.setState({ diaryEntries: updatedDiaryEntries });
    
  }

  render() {
    return (
  

          <div className="App">
            <Header />
            <Grid>
            <Row>
            <Diary onAddEntry={this.addEntry.bind(this)} />
            </Row>
            <Row>
            <DiaryTable diaryEntries={this.state.diaryEntries} />
            </Row>
            </Grid>
          </div>

    )
  }
};

export default DiaryApp;