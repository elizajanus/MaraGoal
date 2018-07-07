const db = require("../models");

// Defining methods for the diaryController
module.exports = {
  findAll: function(req, res) {
    db.Diary
      .find(req.query)
      .sort({ date: -1 })
      .then(dbDiary => res.json(dbDiary))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    const article = {
      _id: req.body._id,
      title: req.body.headline.main,
      url: req.body.web_url
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