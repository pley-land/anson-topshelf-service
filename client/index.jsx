/* eslint-env browser */
/* eslint no-else-return: "error" */
import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';
import MapView from './components/mapView.jsx';
import MapInfo from './components/mapInfo';
import RestInfo from './components/restInfo';
import UserButtons from './components/userButtons';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'in-n-out',
      address: '',
      phone: '',
      website: '',
      tags: '',
      price: 0,
      average_rating: 0
    };
  }

  getInfo() {
    const { name } = this.state;
    $.ajax({
      url: `http://localhost:3001/biz/${name}/info`,
      method: 'GET',
      dataType: 'json',
    }).then((response) => {
      console.log(response);
      const latlng = {
        lat: response.lat,
        lng: response.lng,
      };
      const geocoder = new google.maps.Geocoder();
      geocoder.geocode({ location: latlng }, (results, status) => {
        if (status === 'OK') {
          console.log(results[0]);
          // this.setState({
          //   address: results[0].formatted_address,
          //   phone: response.phone,
          //   website: response.website
          // })
          this.setState({
            average_rating: response.average_rating,
            price: response.price,
            tags: response.tags,
            address: results[0].formatted_address,
            phone: response.phone,
            website: response.website,
          })
        } else {
          console.log('not ok');
        }
      });
      // console.log(geocoder);
    }, (err) => {
      console.log(err);
      return err;
    });
  }

  render() {
    const {address, phone, website, price, tags, average_rating, name} = this.state;
    return (
      <div className="top-container">
        <div className="top-content-container">
          <div className="content-header-container">
            <RestInfo name={name} average_rating={average_rating} price={price} tags={tags}/>
            <UserButtons />
          </div>
          <div className="content-body-container">
            <div className="content-map-info">
              <MapView />
              <MapInfo address={address} phone={phone} website={website}/>
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.getInfo();
  }
}

ReactDom.render(<App />, document.getElementById('topShelf'));
