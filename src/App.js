import React, { Component, Fragment } from "react";
// Nav
import TopNav from "./components/nav/TopNav";
// screen
import DetailScreen from "./components/app/DetailScreen";
import HomeScreen from "./components/app/HomeScreen";

class App extends Component {
  state = {
    screen: "",
    detailNo: null,
    cardList: [
      {
        cardId: 1,
        title: "매일 물 1리터 마시기",
        sticker_list: [
          { stickerId: 1, weekEn: "mon", weekKo: "월요일", value: true },
          { stickerId: 2, weekEn: "tue", weekKo: "화요일", value: true },
          { stickerId: 3, weekEn: "wed", weekKo: "수요일", value: false },
          { stickerId: 4, weekEn: "thu", weekKo: "목요일", value: false },
          { stickerId: 5, weekEn: "fri", weekKo: "금요일", value: true },
          { stickerId: 6, weekEn: "sat", weekKo: "토요일", value: false },
          { stickerId: 7, weekEn: "sun", weekKo: "일요일", value: true }
        ],
        color: "#e57373"
      },
      {
        cardId: 2,
        title: "매일 스트레칭",
        sticker_list: [
          { stickerId: 8, weekEn: "mon", weekKo: "월요일", value: false },
          { stickerId: 9, weekEn: "tue", weekKo: "화요일", value: false },
          { stickerId: 10, weekEn: "wed", weekKo: "수요일", value: false },
          { stickerId: 11, weekEn: "thu", weekKo: "목요일", value: false },
          { stickerId: 12, weekEn: "fri", weekKo: "금요일", value: true },
          { stickerId: 13, weekEn: "sat", weekKo: "토요일", value: true },
          { stickerId: 14, weekEn: "sun", weekKo: "일요일", value: true }
        ],
        color: "#fbc02d"
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
        memo: "물을 마시자 물을 마시자",
        color: "#e57373"
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
        memo: "유투브 링크 : ~~~~",
        color: "#fbc02d"
      }
    ],
    join: {
      userName: "username",
      password: "password"
    }
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
