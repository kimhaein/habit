import React, { Component } from 'react';
// common
import CardList from '../common/CardList';
import MainSlider from '../common/MainSlider';

class HomeScreen extends Component {
  render() {
    return (
      <div className="main_wrap">
        <MainSlider/>
        <div className="card_wrap">
          <CardList/>
          <CardList/>
        </div>
      </div>
    );
  }
}

export default HomeScreen;
