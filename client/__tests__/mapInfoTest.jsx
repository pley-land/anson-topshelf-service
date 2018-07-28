import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import renderer from 'react-test-renderer';
import App from '../components/userButtons';

describe('Testing UserButtons', () => {
  it('should render properly', () => {
    const output = renderer.create(
      <div className="content-user-buttons">
        <button className="reviewButton" type="button">
          <i className="material-icons">
            star
          </i>
          <span className="buttonText">
            Write a Review
          </span>
        </button>
        <div className="spanDiv">
          <button className="buttonSpans" type="button">
            <i className="material-icons">
              photo_camera
            </i>
            <span className="buttonText">
              Add Photo
            </span>
          </button>
          <button className="buttonSpans" type="button">
            <i className="material-icons">
              share
            </i>
            <span className="buttonText">
              Share
            </span>
          </button>
          <button className="buttonSpans" type="button">
            <i className="material-icons">
              save
            </i>
            <span className="buttonText">
              Save
            </span>
          </button>
        </div>
      </div>,
    ).toJSON();
    expect(output).toMatchSnapshot();
  });
});
