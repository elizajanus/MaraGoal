import axios from "axios";

export default {

  getSavedMessages: function() {
    return axios.get("/api/messages/");
  },

  saveMessages: function(message) {
    return axios.post("/api/message", message);
  }
};
