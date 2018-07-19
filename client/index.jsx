import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="top-container">
				<div className="top-content-container">
					<div className="content-header-container">
					</div>
					<div className="content-body-container">
					</div>
				</div>
			</div>
		);
	}
}




ReactDom.render(<App />, document.getElementById('topShelf'));