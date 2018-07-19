import React from 'react';

class UserButtons extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="content-user-buttons">
				<button className="reviewButton">Write a Review</button>
				<div className="spanDiv">
					<button className="buttonSpans">Add Photo</button>
					<button  className="buttonSpans">Share</button>
					<button  className="buttonSpans">Save</button>
				</div>
			</div>
		)
	}
}

export default UserButtons;