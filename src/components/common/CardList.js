import React, { Component } from 'react';

class CardList extends Component {

  render() {
    const {changeScreen,data} = this.props
    return (
      <div className="card_list" onClick={changeScreen}>
        <div className="card_header">
          <p>{data.title}</p>
          <span></span>
        </div>
        <ul className="card_contents">
          <li className="sticker_list">
            <div className="sticker"></div>
            <p>월요일</p>
          </li>
          <li className="sticker_list">
            <div className="sticker"></div>
            <p>화요일</p>
          </li>
          <li className="sticker_list">
            <div className="sticker"></div>
            <p>수요일</p>
          </li>
          <li className="sticker_list">
            <div className="sticker"></div>
            <p>목요일</p>
          </li>
          <li className="sticker_list">
            <div className="sticker"></div>
            <p>금요일</p>
          </li>
          <li className="sticker_list">
            <div className="sticker"></div>
            <p>토요일</p>
          </li>
          <li className="sticker_list">
            <div className="sticker"></div>
            <p>일요일</p>
          </li>
        </ul>
      </div>
    );
  }
}

export default CardList;
