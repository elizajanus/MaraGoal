import React from "react";
import ReactDOM from "react-dom";
import ReactSurvey from "react-survey";
import { diary } from "./diary";
 
ReactDOM.render(
  <ReactSurvey data={diarySurvey} />,
  document.getElementById("root")
);

const diarySurvey = {
        name: "Daily Run survey",
        id: 1,
        timeBeforePopUp: 5, // in seconds
        postUrl: "http://localhost:3000/diary",
        questions: [{
                text: "Date:",
                // FIGURE OUT HOW TO DO DATE INPUT
                // choices: [
                //   {
                //     text: "Yes",
                //     id: 1,
                //   },
                //   {
                //     text: "No",
                //     id: 2,
                //   },
                // ],
                // multiple: false,
                id: 1,
                required: true,
            },
            {
                text: "How many miles did you run today?",
                // FIGURE OUT HOW TO DO MILE INPUT
                // choices: [
                //   {
                //     text: "Yes",
                //     id: 3,
                //   },
                //   {
                //     text: "No",
                //     id: 4,
                //   },
                // ],
                // multiple: false,
                id: 2,
                required: true,
            },
            {
                text: "What kind of surface did you run on?",
                choices: [{
                        text: "Sidewalk",
                        id: 1,
                    },
                    {
                        text: "Road/Pavement",
                        id: 2,
                    },
                    {
                        text: "Trail",
                        id: 3,
                    },
                    {
                        text: "Track",
                        id: 4,
                    },
                ],
                multiple: true,
                id: 3,
                required: true,
            },
            {
                text: "What kind of injury did you run on?",
                choices: [{
                        text: "None",
                        id: 5,
                    },
                    {
                        text: "Knee",
                        id: 6,
                    },
                    {
                        text: "Ankle",
                        id: 7,
                    },
                    {
                        text: "Hip",
                        id: 8,
                    },
                    {
                        text: "Back",
                        id: 9,
                    },
                    {
                        text: "Shoulder",
                        id: 10,
                    },
                    {
                        text: "Neck",
                        id: 11,
                    },
                    {
                        text: "Foot",
                        id: 12,
                    },
                ],
                multiple: true,
                id: 4,
                required: true,
            },
            {
                text: "What kind of weather did you run in?",
                choices: [{
                        text: "Sun",
                        id: 13,
                    },
                    {
                        text: "Rain",
                        id: 14,
                    },
                    {
                        text: "Wind",
                        id: 15,
                    },
                    {
                        text: "Wintry Mix",
                        id: 16,
                    },
                    {
                        text: "Snow",
                        id: 17,
                    },
                    {
                        text: "Noticable Humidity",
                        id: 18,
                    },
                    {
                        text: "Noticeable Head",
                        id: 19,
                    },
                    {
                        text: "Noticeable Cold",
                        id: 20,
                    },
                    {
                        text: "Fair Temps",
                        id: 21,
                    },
                ],
                multiple: true,
                id: 5,
                required: true,
            },
            {
                text: "Was this a solo run?",
                choices: [{
                        text: "Yes",
                        id: 14,
                    },
                    {
                        text: "No",
                        id: 15,
                    }
                ],
                multiple: false,
                id: 6,
                required: true,
            },
            {
                text: "Did you do hills?",
                choices: [{
                        text: "Yes",
                        id: 13,
                    },
                    {
                        text: "No",
                        id: 14,
                    },
                ],
                multiple: false,
                id: 7,
                required: true,
            },
            {
                text: "Did you do speedwork?",
                choices: [{
                        text: "Yes",
                        id: 15,
                    },
                    {
                        text: "No",
                        id: 16,
                    },
                ],
                multiple: false,
                id: 8,
                required: true,
            },
        };


        export {
            diarySurvey
        };