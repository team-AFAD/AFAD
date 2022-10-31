import React from 'react';
import {FullPage,Slide} from "https://cdn.skypack.dev/react-full-page@0.1.12";

export default class FullPageExample extends React.Component {
  render() {
    return (
      <FullPage controls controlsProps={{ className: "slide-navigation" }}>
        <Slide>
          {/* <img src={ require('../images/apple.jpg')} alt = "1">
          </img> */}
          <div className="section-common section-area1"></div>
        </Slide>

        <Slide>
        {/* <img src={ require('../images/jujube.jpg')} alt = "2">
          </img> */}
          <div className="section-common section-area2">
          2
        </div>
        </Slide>
        <Slide>
        <div className="section-common section-area3">
          3
        </div>
      </Slide>
      </FullPage>
    );
  }
};