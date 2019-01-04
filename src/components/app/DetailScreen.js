import React, { Component } from "react";
import { message, Button, Popconfirm, Icon, Progress } from "antd";
import Calendar from "../common/Calendar";
import Memo from "../common/Memo";

message.config({
  top: 70
});

class DetailScreen extends Component {
  //input 값 변경
  _handleChangeEvent = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  //삭제
  _deleteConfirm = () => {
    message.success("삭제");
  };

  //수정
  _editConfirm = () => {
    message.success("수정");
  };

  render() {
    const { detailData } = this.props;
    const ButtonGroup = Button.Group;

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
          <Progress
            percent={detailData.completion_rate}
            status="active"
            strokeColor={"#e57373"}
          />
        </div>
        <Memo
          memo={detailData.memo}
          handleChangeEvent={this._handleChangeEvent}
        />
        <div className="btn_wrap">
          <ButtonGroup>
            <Popconfirm
              title="정말 삭제 하시겠습니까?"
              onConfirm={this._deleteConfirm}
              okText="삭제"
              cancelText="취소"
              icon={<Icon type="close-circle" style={{ color: "#e57373" }} />}
            >
              <Button type="primary">삭제</Button>
            </Popconfirm>
            <Popconfirm
              title="수정 하시겠습니까?"
              onConfirm={this._editConfirm}
              okText="수정"
              cancelText="취소"
              icon={
                <Icon type="question-circle" style={{ color: "#fbc02d" }} />
              }
            >
              <Button>수정</Button>
            </Popconfirm>
          </ButtonGroup>
        </div>
      </div>
    );
  }
}

export default DetailScreen;
