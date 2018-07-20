const mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'mysqlpassword',
	database: 'pley'
});

// const geocoder = new google.maps.Geocoder;
// const infowindow = new google.maps.InfoWindow;

const getRestInfo = (name, callback) => {
	var query = `SELECT * FROM restaurants WHERE name = "${name}"`;
	connection.query(query, (err, data) => {
		if (err) {
			callback(err);
		} else {
			data[0].lat = parseFloat(data[0].lat);
			data[0].lng = parseFloat(data[0].lng);
					callback(err, data[0]);
		}
	})
}

module.exports.getRestInfo = getRestInfo;

