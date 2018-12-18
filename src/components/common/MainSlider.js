import React, { Component } from 'react';
import Slider from "react-slick";

class MainSlider extends Component {
  render() {
    const settings = {
      arrows: false,
      dots: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings} >
        <div className="main_slider">
          <div className="slier_thumnail"></div>
          <p className="title">물 2L씩 마시기</p>
          <div className="graph_wrap">
            <span className="graph"></span>
          </div>
          <p>80%</p>
        </div>
        <div className="main_slider">
          <div className="slier_thumnail"></div>
          <p className="title">자기 전 스트레칭</p>
          <div className="graph_wrap">
            <span className="graph"></span>
          </div>
          <p>80%</p>
        </div>
        <div className="main_slider">
          <div className="slier_thumnail"></div>
          <p className="title">산책 가기</p>
          <div className="graph_wrap">
            <span className="graph"></span>
          </div>
          <p>80%</p>
        </div>
      </Slider>

    );
  }
}

export default MainSlider;
