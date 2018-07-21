import React from 'react';

const RestInfo = (props) => (
  <div className="content-rest-info">
    <h1>
      {props.name}
    </h1>
    <div className="rest-info-numbers">
      <div id="ratings">
        {props.average_rating}
      </div>
      <div id="reviews">
        No. of reviews
      </div>
      <div id="details">
        <a href="">Details</a>
      </div>
    </div>
    <div id="rest2">
      <span id="price_range">
        {props.price}
      </span>
      <span>
        {props.tags}
      </span>
    </div>
  </div>
);

export default RestInfo;
