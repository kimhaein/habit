import React, { Component } from "react";
import { Link } from "react-router-dom";
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
    const { data } = this.props;

    return (
      <Link to={`/detail/${data.cardId}`}>
        <div className="card_list">
          <div className="card_header">
            <p className="f_left">{data.title}</p>
            <span className="f_right">
              <Icon
                type="ellipsis"
                style={{
                  fontSize: 20,
                  transform: "rotate(90deg)",
                  marginRight: "-10px"
                }}
              />
            </span>
          </div>
          {this._renderList(data)}
        </div>
      </Link>
    );
  }
}

export default CardList;
