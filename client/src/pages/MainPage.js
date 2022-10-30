import React from 'react';
import { FullPage, Slide } from 'react-full-page';

export default class FullPageExample extends React.Component {
  render() {
    return (
      <FullPage controls>
        <Slide>
          <img src={ require('../images/apple.jpg')} alt = "1">
          </img>
        </Slide>
        <Slide>
        <img src={ require('../images/jujube.jpg')} alt = "2">
          </img>
        </Slide>
      </FullPage>
    );
  }
};