import axios from "axios";

export default {

  getSavedMessages: function() {
    return axios.get("/api/messages/saved");
  },

  saveMessages: function(message) {
    return axios.post("/api/messages/post", message);
  }

};
