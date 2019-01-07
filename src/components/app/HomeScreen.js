import React, { Component } from "react";
// common
import CardList from "../common/CardList";
import MainSlider from "../common/MainSlider";

class HomeScreen extends Component {
  state = {
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
    ]
  };
  render() {
    const listData = this.state.cardList;
    const cardList = listData.map(item => (
      <CardList key={item.cardId} data={item} />
    ));
    return (
      <div className="main_wrap">
        <MainSlider cardList={listData} />
        <div className="card_wrap">{cardList}</div>
      </div>
    );
  }
}

export default HomeScreen;
