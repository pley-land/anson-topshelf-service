const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const db = require('../database/index.js');

let app = express();
let port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../public'));

app.get('/biz/:restaurant/info', (req, res) => {
	// req._parsedOriginalUrl.path.split('/')[2]
	db.getRestInfo('in-n-out', (err, data) => {
		if (err) {
			console.log(err);
			res.status(400).json({result: 'failed'});
		} else {
			// console.log('status: ', status);
			res.status(200).json(data);
		}
	});
	// res.status(200).json({result: 'all good'});
})



app.listen(port, () => {
	console.log(`Listening to port ${port}`);
});