import React, { Component } from "react";

class CardList extends Component {
  _renderList = data => {
    let html;
    data.sticker_list.forEach(v => {});
    return html;
  };

  render() {
    const { changeScreen, data } = this.props;
    return (
      <div className="card_list" onClick={changeScreen}>
        <div className="card_header">
          <p>{data.title}</p>
          <span />
        </div>

        <ul className="card_contents">
          {this._renderList(data)}
          <li className="sticker_list">
            <div className="sticker" />
            <p>월요일</p>
          </li>
          <li className="sticker_list">
            <div className="sticker" />
            <p>화요일</p>
          </li>
          <li className="sticker_list">
            <div className="sticker" />
            <p>수요일</p>
          </li>
          <li className="sticker_list">
            <div className="sticker" />
            <p>목요일</p>
          </li>
          <li className="sticker_list">
            <div className="sticker" />
            <p>금요일</p>
          </li>
          <li className="sticker_list">
            <div className="sticker" />
            <p>토요일</p>
          </li>
          <li className="sticker_list">
            <div className="sticker" />
            <p>일요일</p>
          </li>
        </ul>
      </div>
    );
  }
}

export default CardList;
