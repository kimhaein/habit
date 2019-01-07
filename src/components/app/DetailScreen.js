import React, { Component } from "react";
import { message, Button, Popconfirm, Icon, Progress } from "antd";
import Calendar from "../common/Calendar";
import Memo from "../common/Memo";

message.config({
  top: 70
});

class DetailScreen extends Component {
  state = {
    detailData: [
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
    ]
  };
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
    const { cardId } = this.props.match.params;
    const detailData = this.state.detailData[cardId - 1];

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
          <div className="btn_L">
            <Popconfirm
              title="정말 삭제 하시겠습니까?"
              onConfirm={this._deleteConfirm}
              okText="삭제"
              cancelText="취소"
              icon={<Icon type="close-circle" style={{ color: "#e57373" }} />}
            >
              <Button type="primary" size={"large"} block>
                삭제
              </Button>
            </Popconfirm>
          </div>
          <div className="btn_R">
            <Popconfirm
              title="수정 하시겠습니까?"
              onConfirm={this._editConfirm}
              okText="수정"
              cancelText="취소"
              icon={
                <Icon type="question-circle" style={{ color: "#fbc02d" }} />
              }
            >
              <Button size={"large"} block>
                수정
              </Button>
            </Popconfirm>
          </div>
        </div>
      </div>
    );
  }
}

export default DetailScreen;
