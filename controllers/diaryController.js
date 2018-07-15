const db = require("../models");

// Defining methods for the diaryController
//how to connect to user....Karen?
module.exports = {
  findAll: function(req, res) {
    db.Diary
      .find(req.query)
      .sort({ date: -1 })
      .then(dbDiary => res.json(dbDiary))
      .catch(err => res.status(422).json(err));
  },
  findUserEntries: function(req, res) {
    var username = req.params.username;
    db.Diary
      .find({"username": { $gt: username } })
      .sort({ date: -1 })
      .then(dbDiary => res.json(dbDiary))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log(req.body)
    let diary = {
      username: req.body.username,
      dateOfRun: req.body.dateOfRun,
      runningTime: req.body.runningTime,
      runningDistance: req.body.runningDistance,
      runningSurface: req.body.runningSurface,
      runningInjury: req.body.runningInjury,
      weatherOnRun: req.body.weatherOnRun,
      soloOrGroup: req.body.soloOrGroup,
      speedHillsOrNormal: req.body.speedHillsOrNormal
    };
    db.Diary
      .create(diary)
      .then(dbDiary => res.json(dbDiary))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Diary
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbDiary => res.json(dbDiary))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.diary
      .findById({ _id: req.params.id })
      .then(dbDiary => dbDiary.remove())
      .then(dbDiary => res.json(dbDiary))
      .catch(err => res.status(422).json(err));
  }
};


//get on postman, lady! localhost 3001 