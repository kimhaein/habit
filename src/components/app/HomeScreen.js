import React, { Component,Fragment } from 'react';
// screen
import TopNav from '../nav/TopNav';
import SideNav from '../nav/SideNav';
import CardList from '../common/CardList';
import MainSlider from '../common/MainSlider';

class HomeScreen extends Component {
  state = {
    isLogin:true,
  }

  __renderMain = (isLogin) => {
    if(isLogin){
      return  <TopNav/>
    }
  }

  render() {
    return (
      <Fragment>
        <TopNav/>
        <SideNav/>
        <div className="main_wrap">
          <MainSlider/>
          <div className="card_wrap">
            <CardList/>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default HomeScreen;
