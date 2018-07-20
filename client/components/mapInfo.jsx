import React from 'react';
import $ from 'jquery';

class MapInfo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			address: 'Placeholder address',
			phone: '123-456-7890',
			website: 'www.placeholder.com'
		}
	}

	getInfo() {
		$.ajax({
			url: `http://localhost:3001/biz/in-n-out/info`,
			method: 'GET',
			dataType: 'json'
		}).then((response) => {
			console.log(response);
			var latlng = {lat: response.lat, lng: response.lng};
			var geocoder = new google.maps.Geocoder;
			geocoder.geocode({'location': latlng}, (results, status) => {
				if (status === 'OK') {
					console.log(results[0].formatted_address);
					this.setState({
						address: results[0].formatted_address,
						phone: response.phone,
						website: response.website
					})
				} else {
					console.log('not ok');
				}
			})
			// console.log(geocoder);
		}, (err) => {
			console.log(err);
			return;
		})
	}

	render() {
		return (
			<div className="map-info">
				<p className="map-info-address">
					{this.state.address}
				</p>
				<a>Get Directions</a>
				<p className="map-info-phone">
					{this.state.phone}
				</p>
				<a className="map-info-website">
					{this.state.website}
				</a>
			</div>
		)
	}

	componentDidMount() {
		this.getInfo();
	}
}

export default MapInfo;