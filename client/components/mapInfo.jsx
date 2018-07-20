import React from 'react';
import $ from 'jquery';

// class MapInfo extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			address: 'Placeholder address',
// 			phone: '123-456-7890',
// 			website: 'www.placeholder.com'
// 		}
// 	}


// 	render() {
// 		const {address, phone, website} = this.props.info;
// 		return (
// 			<div className="map-info">
// 				<p className="map-info-address">
// 					{this.state.address}
// 				</p>
// 				<a>Get Directions</a>
// 				<p className="map-info-phone">
// 					{this.state.phone}
// 				</p>
// 				<a className="map-info-website">
// 					{this.state.website}
// 				</a>
// 			</div>
// 		)
// 	}
// }

const MapInfo = (props) => (
	<div className="map-info">
		<p className="map-info-address">
			{props.address}
		</p>
		<a>Get Directions</a>
		<p className="map-info-phone">
			{props.phone}
		</p>
		<a className="map-info-website">
			{props.website}
		</a>
	</div>
)

export default MapInfo;