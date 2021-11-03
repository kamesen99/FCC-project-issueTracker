'use strict';
require('dotenv').config();
const express     = require('express');
const bodyParser  = require('body-parser');
const expect      = require('chai').expect;
const cors        = require('cors');
const apiRoutes         = require('./routes/api.js');
const fccTestingRoutes  = require('./routes/fcctesting.js');
const runner            = require('./test-runner');
const myDB = require('./connection');

let app = express();

app.use('/public', express.static(process.cwd() + '/public'));

app.use(cors({origin: '*'})); //For FCC testing purposes only

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Sample front-end
app.route('/:project/')
  .get(function (req, res) {
    res.sendFile(process.cwd() + '/views/issue.html');
  });

  //Index page (static HTML)
app.route('/')
.get(function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

//For FCC testing purposes
fccTestingRoutes(app);

myDB(async client => {
  const myDataBase = await client.db('database').collection('users');
  //Routing for API
  apiRoutes(app, myDataBase);

  }).catch(e => {
    app.route('/').get((req, res) => {
      res.status(500).type('text').send(e);
    });
});

//404 Not Found Middleware
app.use(function(req, res, next) {
  res.status(404)
    .type('text')
    .send('Not Found');
});