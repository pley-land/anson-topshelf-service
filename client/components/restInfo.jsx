/* eslint react/prop-types: 0 */
import React from 'react';

function RestInfo(props) {
  const {
    name,
    averageRating,
    reviews,
    price,
    tags,
  } = props;
  return (
    <div className="content-rest-info">
      <h1 id="rest-name-title">
        {name}
      </h1>
      <div className="rest-info-numbers">
        <div id="ratings">
          {averageRating}
        </div>
        <div id="reviews">
          {`${reviews} reviews`}
        </div>
        <div id="details">
          <a href="">
            Details
          </a>
        </div>
      </div>
      <div id="rest2">
        <span id="price_range">
          {price}
        </span>
        <span id="rest-tags">
          {tags}
        </span>
      </div>
    </div>
  );
}

export default RestInfo;
