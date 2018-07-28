/* eslint react/prop-types: 0 */
import React from 'react';
import {
  Map,
  Marker,
  GoogleApiWrapper,
} from 'google-maps-react';

class MapView extends React.Component {
  render() {
    // var map = new google.maps.Map(document.getElementById('theMap'), {
  //     center: {lat: 51.5033640, lng: -0.1276250},
  //     zoom: 4
  //   });
    const style = {
      height: '140px',
      width: '280px',
      margin: '5px 10px',
    };
    const { google } = this.props;
    return (
      <div>
        <Map
          google={google}
          style={style}
          zoom={14}
          initialCenter={{ lat: 37.7823392, lng: -122.41540567 }}
        >
          <Marker
            onClick={this.onMarkerClick}
            name="Current location"
          />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: (GOOGLE_API_KEY),
})(MapView);
