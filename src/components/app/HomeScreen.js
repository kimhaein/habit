import React, { Component } from "react";
// common
import CardList from "../common/CardList";
import MainSlider from "../common/MainSlider";

class HomeScreen extends Component {
  _changeScreen = listId => {
    this.props.changeScreen(listId);
  };

  render() {
    const listData = this.props.cardList;
    console.log(listData);
    const cardList = listData.map(item => (
      <CardList
        changeScreen={() => this._changeScreen(item.cardId)}
        key={item.cardId}
        data={item}
      />
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
