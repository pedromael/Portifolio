import getProjects from './modules/process.js';
import addProject from './modules/process.js';

var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.sendFile(__dirname+'/assets/index.html');
});

app.get('/project', function (req, res) {
    res.sendFile(__dirname+'/assets/src/projects.html');
});

app.get('/about', function (req, res) {
    res.sendFile(__dirname+'/assets/src/about.html');
});

app.get('/contact', function (req, res) {
    res.sendFile(__dirname+'/assets/src/contact.html');
});

app.post('/addProject', function (req, res) {
    // This function will be used to add a new project
    var result = addProject(req);
    if (result) {
        res.status(200).send('Project added successfully');
    } else {
        res.status(500).send('Error adding project');
    }
})

app.get('/getProjects', function (req, res) {
    // This function will be used to render the projects page
    var projects = getProjects(res);
    if (projects) {
        res.status(200).send(projects);
    } else {
        res.status(500).send('Error getting projects');
    }
})

app.listen(8000, function () {
  console.log('Listening on port 8000!');
});