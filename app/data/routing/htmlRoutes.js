var htmlRouter = require('express').Router();
var path = require('path');
var friends = require('../data/friends');

htmlRouter.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/', 'home.html'));
});

htmlRouter.get('/survey', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/', 'survey.html'));
});

htmlRouter.get('/surveyJS', function(req, res) {
    res.sendFile(path.join(__dirname, '../js/', 'survey.js'));
});

module.exports = htmlRouter;