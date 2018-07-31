const express = require('express');
const bodyParser = require('body-parser');
// const request = require('request');
const db = require('../database/index.js');
var React = require('react');
var reactDom = require('react-dom/server');

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/../public`));

app.get('/biz/:restaurant/info', (req, res) => {
  // req.params.restaurant
  db.getRestInfo(req.params.restaurant).then((response) => {
    console.log(response);
    res.status(200).json(response);
  }, (err) => {
    res.status(400).json({ result: err });
  });
  // res.status(200).json({result: 'all good'});
});

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
