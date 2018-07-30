/* eslint react/prop-types: 0 */
import React from 'react';

function MapInfo(props) {
  const {
    address,
    phone,
    website,
  } = props;
  return (
    <div className="map-info">
      <p className="map-info-address maptext">
        {address}
      </p>
      <p className="maptext">
        Get Directions
      </p>
      <p className="map-info-phone maptext">
        {phone}
      </p>
      <p className="map-info-website maptext" href="">
        {website}
      </p>
    </div>
  );
}

export default MapInfo;
