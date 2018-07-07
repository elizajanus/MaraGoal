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
  }

};
