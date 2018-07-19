import React from 'react';

class RestInfo extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="content-rest-info">
				<h1>Restaurant Name</h1>
				<div className="rest-info-numbers">
					<div id="ratings">Ratings</div>
					<div id="reviews">No. of reviews</div>
					<div id="details">Details</div>
				</div>
				<div>
					<span>Price range</span>
					<span>Tags</span>
				</div>


			</div>
		)
	}
}

export default RestInfo;