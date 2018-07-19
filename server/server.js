const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

let app = express();
let port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../public'));



app.listen(port, () => {
	console.log(`Listening to port ${port}`);
});