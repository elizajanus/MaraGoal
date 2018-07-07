import axios from "axios";

export default {

  getSavedMessages: function() {
    return axios.get("/api/messages");
  },

  saveMessage: function(message) {
    return axios.post("/api/messages", message);
  },

  getRunStats: function () {
    return axios.post("/api/diary");
  },

  saveRunStats: function (fields) {
    return axios.post("/api/diary", fields);
  },
  
  getDailyEvents: function() {
    return axios.get("/api/events");
  },

  saveRunAsDone: function(event) {
    return axios.post("/api/events", event);
  }

};
