// full-page header때문에 예쁘게 하기 어려움. 옆으로 넘기는 방식으로 바꿔야겠음.
// import React from 'react';
// import {FullPage,Slide} from "https://cdn.skypack.dev/react-full-page@0.1.12";
import "../styles/mainPage.scss";

// export default class FullPageExample extends React.Component {
//   render() {
//     return (
//       <FullPage controls controlsProps={{ className: "slide-navigation" }}>
//         <Slide>
//           {/* <img src={ require('../images/apple.jpg')} alt = "1">
//           </img> */}
//           <div className="section-common section-area1">
//             <div className='con1'>혼자 살면서 과일 사먹기 너무 비쌌죠?
//               <div className='con2'>양도 너무 많아서 버리기 일수</div>
//               <div className='con3'>
//               </div>
//             </div>
//           </div>
//         </Slide>

//         <Slide>
//         {/* <img src={ require('../images/jujube.jpg')} alt = "2">
//           </img> */}
//           <div className="section-common section-area2">
//             <div className='con1'>이젠 동네에서 같이 사요!
//               <div className='con2'>조금씩 살 수 있어서 남김없이 완벽해요
//               <div className='con3'>
//               </div>
//               </div>  
//             </div> 
//           </div>
//         </Slide>
//         <Slide>
//         <div className="section-common section-area3">
//           <div className='con1'>소량 공동구매 가격, 인원 모두 정할 수 있어요!
//                 <div className='con2'>이젠 AFAD에서 먹고 싶은 만큼만 사요. 우리.
//                 <div className='con3'>
//                 </div>
//                 </div>  
//           </div> 
//         </div>
//       </Slide>
//       </FullPage>
//     );
//   }
// };

import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      arrows: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="mainWrap">
        <Slider {...settings}>
          <div className="section-common section-area1">
            <div className='con'>혼자 살면서 과일 사먹기 너무 비쌌죠?<br/>
            양도 너무 많아서 버리기 일수.
            </div>
          </div>
          <div className="section-common section-area2">
            <div className='con'>이젠 동네에서 같이 사요!<br/>
            조금씩 살 수 있어서 남김없이 완벽해요.
            </div>
          </div>
          <div className="section-common section-area3">
            <div className='con'>소량 공동구매 가격, 인원 모두 정할 수 있어요!<br/>
            이젠 AFAD에서 먹고 싶은 만큼만 사요. 우리.</div>
          </div>

        </Slider>
      </div>
    );
  }
}




// export default class FullPageExample extends React.Component {
//   render() {
//     return (
