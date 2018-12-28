import React, { Component, Fragment } from "react";
// Nav
import TopNav from "../nav/TopNav";
// screen
import DetailScreen from "../app/DetailScreen";
import HomeScreen from "../app/HomeScreen";

class App extends Component {
  state = {
    screen: "",
    detailNo: null,
    cardList: [
      {
        cardId: 1,
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
        cardId: 2,
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
        dateDate: [
          {
            dateID: 1,
            date: "2018-11-24",
            type: "default"
          },
          {
            dateID: 2,
            date: "2018-11-25",
            type: "processing"
          },
          {
            dateID: 3,
            date: "2018-12-26",
            type: "default"
          },
          {
            dateID: 4,
            date: "2018-12-27",
            type: "processing"
          }
        ],
        completion_rate: 80,
        memo: "물을 마시자 물을 마시자"
      },
      {
        id: 2,
        title: "매일 스트레칭",
        dateDate: [
          {
            dateID: 1,
            date: "2018-12-24",
            type: "processing"
          },
          {
            dateID: 2,
            date: "2018-12-25",
            type: "processing"
          },
          {
            dateID: 3,
            date: "2018-12-26",
            type: "processing"
          },
          {
            dateID: 4,
            date: "2018-12-27",
            type: "processing"
          }
        ],
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
        {this._renderScreen()}
      </Fragment>
    );
  }
}

export default App;
