/* eslint react/prop-types: 0 */
import React from 'react';
import {
  Map,
  Marker,
  GoogleApiWrapper,
} from 'google-maps-react';
// import GOOGLE_API_KEY from '../config/google';

class MapView extends React.Component {
  constructor(props) {
    super(props);
    const { lat, lng } = this.props;
    this.state = {
      theLat: lat,
      theLng: lng,

    };
  }

  componentWillReceiveProps(nextProps) {
    const { lat, lng } = this.state;
    if (nextProps.lat !== lat || nextProps.lng !== lng) {
      this.setState({
        theLat: nextProps.lat,
        theLng: nextProps.lng,
      });
    }
  }

  render() {
    // var map = new google.maps.Map(document.getElementById('theMap'), {
  //     center: {lat: 51.5033640, lng: -0.1276250},
  //     zoom: 4
  //   });
    const { theLat, theLng } = this.state;
    const style = {
      height: '140px',
      width: '280px',
      margin: '5px 10px',
      border: '1px lightgrey solid',
    };
    let stuff;
    const { google } = this.props;
    if (theLat === 0 || theLng === 0) {
      stuff = <span />;
    } else {
      stuff = (
        <div className="showMap">
          <Map
            google={google}
            style={style}
            zoom={14}
            initialCenter={{ lat: theLat, lng: theLng }}
          >
            <Marker
              onClick={this.onMarkerClick}
              name="Current location"
            />
          </Map>
        </div>
      );
    }
    return stuff;
  }
}

const key = process.env.GOOGLE_API_KEY;
export default GoogleApiWrapper({
  apiKey: key,
})(MapView);
