var express = require('express');
var apiRouter = require('express').Router();
var friends = require('../data/friends');
var htmlRoutes = require('./htmlRoutes');
var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

apiRouter.get('/api/friends', function(req, res) {
    res.json(friends);
});

app.use('/', htmlRoutes);

apiRouter.post('/api/friends', function(req, res) {

    let name = req.body.name;
    let answers = req.body.scores;
    let friendVal = [];
    let smallest = 50;
    var reducer = (accumulator, currentValue) => accumulator + currentValue;

    for (let i = 0; i < answers.length; i++) {
        answers[i] = parseInt(answers[i]);
    }

    for (let i = 0; i < friends.length; i++) {
        friendVal.push(friends[i].scores.reduce(reducer));
    }

    let myScore = answers.reduce(reducer);

    let diffArr = friendVal.map(function(item, index) {
        return Math.abs(item - myScore);
    });

    for (let i = 0; i < diffArr.length; i++) {
        if (diffArr[i] < smallest) {
            smallest = diffArr[i];
        }
    }

    foundFriend = diffArr.indexOf(smallest);

    myFriend = friends[foundFriend];
    console.log(myFriend);
    res.json(myFriend);
});

module.exports = apiRouter;