/* eslint-env browser */
import React from 'react';
import ReactDom from 'react-dom';
import MapView from './components/mapView';
import MapInfo from './components/mapInfo';
import RestInfo from './components/restInfo';
import UserButtons from './components/userButtons';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hello: 'hello',
    };
  }

  render() {
    const { hello } = this.state;
    return (
      <div className="top-container">
        <div className="top-content-container">
          <div className="content-header-container">
            <p>
              {hello}
            </p>
            <RestInfo />
            <UserButtons />
          </div>
          <div className="content-body-container">
            <div className="content-map-info">
              <MapView />
              <MapInfo />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('topShelf'));
