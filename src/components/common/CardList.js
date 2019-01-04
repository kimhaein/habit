import React, { Component } from "react";
import { Icon } from "antd";
// Image
import iconImg from "../../assets/imgs/icon.png";

class CardList extends Component {
  _renderList = data => {
    const dataArray = data.sticker_list;
    return (
      <ul className="card_contents">
        {dataArray.map(item => {
          const bgcolor = item.value ? data.color : "";
          const style = {
            background: bgcolor,
            borderColor: data.color
          };
          return (
            <li key={item.stickerId} className="sticker_list">
              <div className="sticker" style={style}>
                <img src={iconImg} alt="iconImg" />
              </div>
              <p>{item.weekKo}</p>
            </li>
          );
        })}
      </ul>
    );
  };

  render() {
    const { changeScreen, data } = this.props;
    return (
      <div className="card_list" onClick={changeScreen}>
        <div className="card_header">
          <p>{data.title}</p>
          <span />
        </div>

        {this._renderList(data)}
      </div>
    );
  }
}

export default CardList;
