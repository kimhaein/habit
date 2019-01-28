import React, { Component } from "react";
import { message, Input, TimePicker, DatePicker, Progress } from "antd";
import { Modal, ImagePicker, Button } from "antd-mobile";
import Calendar from "../common/Calendar";
import Memo from "../common/Memo";
import moment from "moment";

message.config({
  top: 70
});

class DetailScreen extends Component {
  state = {
    detailData: [
      {
        id: 1,
        title: "매일 물 1리터 마시기",
        dateData: [
          {
            dateID: 1,
            start_date: "2019-01-07",
            type: "processing"
          },
          {
            dateID: 2,
            date: "2019-01-08",
            type: "processing"
          },
          {
            dateID: 3,
            date: "2019-01-09",
            type: "default"
          },
          {
            dateID: 4,
            date: "2019-01-10",
            type: "default"
          },
          {
            dateID: 5,
            date: "2019-01-11",
            type: "processing"
          },
          {
            dateID: 6,
            date: "2019-01-12",
            type: "default"
          },
          {
            dateID: 7,
            date: "2019-01-13",
            type: "processing"
          }
        ],
        completion_rate: 80,
        memo: "물을 마시자 물을 마시자",
        color: "#e57373",
        start_date: "2019-01-07",
        end_date: "2019-01-30",
        time: "10:00",
        rewards_txt: "아이패드",
        rewards_img: [
          {
            url: "https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg"
          }
        ]
      },
      {
        id: 2,
        title: "매일 스트레칭",
        dateData: [
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

  //이미지
  onImgChange = (files, type, index) => {
    console.log(files, type, index);
    this.setState({
      files
    });
  };

  render() {
    const { cardId } = this.props.match.params;
    const detailData = this.state.detailData[cardId - 1];
    const dateFormat = "YYYY-MM-DD";
    const timeFormat = "HH:mm";

    return (
      <div className="sub_wrap">
        <div className="title">습관 상세</div>
        <div className="create_wrap">
          <Calendar dateData={detailData.dateData} />
          <div className="detail_rate_wrap">
            <Progress
              percent={detailData.completion_rate}
              status="active"
              strokeColor={"#e57373"}
            />
          </div>
        </div>
        <div className="create_wrap">
          <div>
            <p>목표</p>
            <Input
              value={detailData.title}
              onChange={this._handleChangeEvent}
            />
          </div>
          <div>
            <p>기간</p>
            <DatePicker
              style={{ float: "left", width: "48%" }}
              placeholder="시작일"
              defaultValue={moment(detailData.start_date, dateFormat)}
            />
            <DatePicker
              style={{ float: "right", width: "48%" }}
              placeholder="종료일"
              defaultValue={moment(detailData.end_date, dateFormat)}
            />
          </div>
          <div>
            <p>알람</p>
            <TimePicker
              style={{ width: "100%" }}
              use12Hours
              format="h:mm a"
              placeholder="알람시간"
              defaultValue={moment(detailData.time, timeFormat)}
            />
          </div>
          <div>
            <div className="rewards" style={{ float: "left" }}>
              <p>보상</p>
              <ImagePicker
                length="1"
                files={detailData.rewards_img}
                onChange={this.onImgChange}
                // onImageClick={(index, fs) => (index === 'remove')?}
                selectable={detailData.rewards_img.length < 1}
                accept="image/gif,image/jpeg,image/jpg,image/png"
              />
            </div>
            <div
              style={{
                float: "right",
                width: "calc(100% - 80px)",
                marginTop: "30px"
              }}
            >
              <p>목표달성문구</p>
              <Input
                value={detailData.rewards_txt}
                onChange={this._handleChangeEvent}
              />
            </div>
          </div>
          <Memo
            memo={detailData.memo}
            handleChangeEvent={this._handleChangeEvent}
          />
          <div className="btn_wrap">
            <div className="btn btn_L">
              <Button
                type="primary"
                onClick={() =>
                  Modal.alert("삭제", "삭제하시겠습니까?", [
                    { text: "Cancel", onPress: () => console.log("cancel") },
                    { text: "Ok", onPress: () => console.log("ok") }
                  ])
                }
              >
                삭제
              </Button>
            </div>
            <div className="btn btn_R">
              <Button
                type="primary"
                onClick={() =>
                  Modal.alert("수정", "수정하시겠습니까?", [
                    { text: "Cancel", onPress: () => console.log("cancel") },
                    { text: "Ok", onPress: () => console.log("ok") }
                  ])
                }
              >
                수정
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DetailScreen;
