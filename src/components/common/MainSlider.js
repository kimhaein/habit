import React, { Component } from "react";
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
    const { cardList } = this.props;
    return (
      <Slider {...settings}>
        <div className="main_slider">
          <div className="slier_thumnail" />
          <p className="title">{cardList[0].title}</p>
          <div className="graph_wrap">
            <span className="graph" />
          </div>
          <p>80%</p>
        </div>
        <div className="main_slider">
          <div className="slier_thumnail" />
          <p className="title">{cardList[1].title}</p>
          <div className="graph_wrap">
            <span className="graph" />
          </div>
          <p>80%</p>
        </div>
      </Slider>
    );
  }
}

export default MainSlider;
