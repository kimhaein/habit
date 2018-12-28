import React, { Component } from "react";
import { Modal } from "antd";
import Calendar from "../common/Calendar";
import Memo from "../common/Memo";

class DetailScreen extends Component {
  //input 값 변경
  _handleChangeEvent = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  //삭제
  _deleteConfirm = () => {
    const confirm = Modal.confirm;
    confirm({
      iconType: "close-circle",
      title: "정말 삭제하시겠습니까?",
      okText: "삭제",
      okType: "danger",
      cancelText: "취소",
      onOk() {
        console.log("Delete");
      }
    });
  };

  //수정
  _editConfirm = () => {
    const confirm = Modal.confirm;
    confirm({
      title: "수정하시겠습니까?",
      okText: "수정",
      okType: "danger",
      cancelText: "취소",
      onOk() {
        console.log("edit");
      }
    });
  };

  render() {
    const { detailData } = this.props;
    const style = { width: detailData.completion_rate + "%" };
    return (
      <div className="detail_wrap">
        <div className="detail_title">
          <input
            type="text"
            name="title"
            onChange={this._handleChangeEvent}
            defaultValue={detailData.title}
          />
        </div>
        <Calendar dateDate={detailData.dateDate} />
        <div className="detail_rate_wrap">
          <div className="detail_rate" style={style}>
            <span>{detailData.completion_rate}%</span>
          </div>
        </div>
        <Memo
          memo={detailData.memo}
          handleChangeEvent={this._handleChangeEvent}
        />
        <div className="btn_wrap">
          <button className="btn_m btn_color" onClick={this._deleteConfirm}>
            삭제
          </button>
          <button className="btn_m f_right" onClick={this._editConfirm}>
            수정
          </button>
        </div>
      </div>
    );
  }
}

export default DetailScreen;
