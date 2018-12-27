import React, { Component, Fragment } from "react";
// Nav
import TopNav from "../nav/TopNav";
import SideNav from "../nav/SideNav";
// screen
import DetailScreen from "../app/DetailScreen";
import HomeScreen from "../app/HomeScreen";

class App extends Component {
  state = {
    isDetail: true,
    screen: "",
    detailNo: null,
    cardList: [
      {
        id: 1,
        title: "매일 물 1리터 마시기",
        mon: true,
        tue: true,
        wed: false,
        thu: false,
        fri: true,
        sat: false,
        sun: true
      },
      {
        id: 2,
        title: "매일 스트레칭",
        mon: true,
        tue: true,
        wed: true,
        thu: true,
        fri: true,
        sat: false,
        sun: true
      }
    ],
    cardDetail: [
      {
        id: 1,
        title: "매일 물 1리터 마시기",
        date: ["2018.01.22", "2018.01.23", "2018.01.24"],
        completion_rate: 80,
        memo: "물을 마시자 물을 마시자"
      },
      {
        id: 2,
        title: "매일 스트레칭",
        date: ["2018.02.12", "2018.02.13", "2018.01.13"],
        completion_rate: 50,
        memo: "유투브 링크 : ~~~~"
      }
    ]
  };

  _changeScreen = detailNo => {
    this.setState({
      screen: "Detail",
      detailNo
    });
  };
  _renderScreen = () => {
    const detailData = this.state.cardDetail.filter(
      value => this.state.detailNo === value.id
    );

    switch (this.state.screen) {
      case "Detail":
        return <DetailScreen detailData={detailData[0]} />;
      default:
        return (
          <HomeScreen
            changeScreen={this._changeScreen}
            cardList={this.state.cardList}
          />
        );
    }
  };
  render() {
    return (
      <Fragment>
        <TopNav />
        <SideNav />
        {this._renderScreen()}
      </Fragment>
    );
  }
}

export default App;
