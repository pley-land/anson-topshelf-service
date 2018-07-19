import React from 'react';

class MapInfo extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="map-info">
				<p className="map-info-address">
					Placeholder address
				</p>
				<a>Get Directions</a>
				<p class="map-info-phone">
					123-456-7890
				</p>
				<a class="map-info-website">
					www.placeholder.com
				</a>
			</div>
		)
	}
}

export default MapInfo;