/* eslint-env browser */
/* eslint no-else-return: "error" */
import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';
import Geocode from 'react-geocode';
import MapView from './components/mapView';
import MapInfo from './components/mapInfo';
import RestInfo from './components/restInfo';
import UserButtons from './components/userButtons';

Geocode.setApiKey('AIzaSyD3DefVBOoJ5D_qvxhuMT0_0zgtgcadC8U');

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
      averageRating: 0,
      reviews: 0,
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
      console.log(response);
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
              <MapView />
              <MapInfo address={address} phone={phone} website={website} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

ReactDom.render(<App />, document.getElementById('topShelf'));
