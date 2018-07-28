const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'mysqlpassword',
  database: 'pley',
});

// const geocoder = new google.maps.Geocoder;
// const infowindow = new google.maps.InfoWindow;

const getRestInfo = (name, callback) => {
  const query = `SELECT * FROM restaurants WHERE name = "${name}"`;
  connection.query(query, (err, data) => {
    if (err) {
      callback(err);
    } else {
      const info = data[0];
      callback(err, info);
    }
    return err || data;
  });
};

module.exports.getRestInfo = getRestInfo;
