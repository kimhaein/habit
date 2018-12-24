import React, { Component,Fragment } from 'react';
// Nav
import TopNav from '../nav/TopNav';
import SideNav from '../nav/SideNav';
// screen
import DetailScreen from '../app/DetailScreen';
import HomeScreen from '../app/HomeScreen';

class App extends Component {
  state = {
    isDetail:true,
    screen:'',
  }
  __changeScreen = () => {
    // this.setState({
    
    // })
  }
  __renderScreen = () => {
    switch (this.state.screen) {
      case 'Detail': return <DetailScreen/>
      default: return <HomeScreen />
    }
  }
  render() {
    return (
      <Fragment>
        <TopNav/>
        <SideNav/>
        {this.__renderScreen()}
      </Fragment>
    );
  }
}

export default App;
