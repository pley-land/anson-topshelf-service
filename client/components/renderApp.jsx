/* eslint-env browser */
/* eslint no-else-return: "error" */
import React from 'react';
import $ from 'jquery';
import Geocode from 'react-geocode';
// import GOOGLE_API_KEY from '../config/google';
import MapView from './mapView';
import MapInfo from './mapInfo';
import RestInfo from './restInfo';
import UserButtons from './userButtons';

let key = GOOGLE_API_KEY || process.env.GOOGLE_API_KEY;
Geocode.setApiKey(key);

export default class App extends React.Component {
  constructor(props) {
    super(props);
    const { name } = this.props;
    this.state = {
      name: name,
      address: '',
      phone: '',
      website: '',
      tags: '',
      price: 0,
      averageRating: 0,
      reviews: 0,
      lat: 0,
      lng: 0,
    };
  }

  componentDidMount() {
    this.getInfo();
  }

  getInfo() {
    const { name } = this.state;
    $.ajax({
      url: `http://localhost:3001/biz/${name}/info`,
      method: 'GET',
      dataType: 'json',
    }).then((response) => {
      Geocode.fromLatLng(response.lat, response.lng).then(
        (geoResponse) => {
          this.setState({
            address: geoResponse.results[0].formatted_address,
            phone: response.phone,
            website: response.website,
            averageRating: response.averageRating,
            price: response.price,
            tags: response.tags,
            reviews: response.reviews,
            lat: parseFloat(response.lat),
            lng: parseFloat(response.lng),
          });
        },
        (err) => {
          console.error(err);
        },
      );
    }, (err) => {
      console.log(err);
      return err;
    });
  }

  render() {
    const {
      address,
      phone,
      website,
      price,
      tags,
      averageRating,
      name,
      reviews,
      lat,
      lng,
    } = this.state;
    return (
      <div className="top-container">
        <div className="top-content-container">
          <div className="content-header-container">
            <RestInfo
              name={name}
              averageRating={averageRating}
              price={price}
              tags={tags}
              reviews={reviews}
            />
            <UserButtons />
          </div>
          <div className="content-body-container">
            <div className="content-map-info">
              <MapView lat={lat} lng={lng} />
              <MapInfo address={address} phone={phone} website={website} />
            </div>
          </div>
          <img src="https://s3-us-west-1.amazonaws.com/fec-static-anson/Screen+Shot+2018-07-30+at+12.04.08+PM.png" className="galleryImg" alt="gallery" />
        </div>
      </div>
    );
  }
}
