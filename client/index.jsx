import React from 'react';
import ReactDom from 'react-dom';
import MapView from './components/mapView.jsx';
import MapInfo from './components/mapInfo.jsx';
import RestInfo from './components/restInfo.jsx';
import UserButtons from './components/userButtons.jsx';

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="top-container">
				<div className="top-content-container">
					<div className="content-header-container">
						<RestInfo />
						<UserButtons />
					</div>
					<div className="content-body-container">
						<div className="content-map-info">
							<MapView />
							<MapInfo />
						</div>
						<div className="content-gallery">
						</div>
					</div>
				</div>
			</div>
		);
	}
}




ReactDom.render(<App />, document.getElementById('topShelf'));