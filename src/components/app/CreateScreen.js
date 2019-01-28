import React, { Component } from "react";
import { message, Input, TimePicker, DatePicker } from "antd";
import { Modal, ImagePicker, Button } from "antd-mobile";
import TopNav from "../nav/TopNav";
import Memo from "../common/Memo";
// Image
import iconImg from "../../assets/imgs/icon.png";

class CreateScreen extends Component {
  state = {
    files: []
  };

  _onChange(time, timeString) {
    console.log(time, timeString);
  }
  //등록
  _createConfirm = () => {
    message.success("등록");
  };

  onCancel = () => {
    document.getElementsByTagName(
      "body"
    )[0].style.overflowY = this.originbodyScrollY;
    this.setState({
      show: false,
      startTime: undefined,
      endTime: undefined
    });
  };

  onConfirm = (startTime, endTime) => {
    document.getElementsByTagName(
      "body"
    )[0].style.overflowY = this.originbodyScrollY;
    this.setState({
      show: false,
      startTime,
      endTime
    });
  };

  //이미지
  onImgChange = (files, type, index) => {
    console.log(files, type, index);
    this.setState({
      files
    });
  };

  //onChangeSticker
  onChangeSticker = event => {
    const CLASS = "selected";
    const hasClass = event.target.parentNode.classList.contains(CLASS);
    const sections = document.querySelectorAll(`.${CLASS}`);
    for (let i = 0; i < sections.length; i++) {
      sections[i].classList.remove(CLASS);
    }
    if (!hasClass) {
      event.target.parentNode.classList.add(CLASS);
    }
  };

  render() {
    const { files } = this.state;
    return (
      <div>
        <TopNav />
        <div className="sub_wrap">
          <div className="title">습관 등록</div>
          <div className="create_wrap">
            <div>
              <p>목표</p>
              <Input />
            </div>
            <div>
              <p>기간</p>
              <DatePicker
                style={{ float: "left", width: "48%" }}
                placeholder="시작일"
              />
              <DatePicker
                style={{ float: "right", width: "48%" }}
                placeholder="종료일"
              />
            </div>
            <div>
              <p>알람</p>
              <TimePicker
                style={{ width: "100%" }}
                use12Hours
                format="h:mm a"
                placeholder="알람시간"
              />
            </div>
            <div>
              <div className="rewards" style={{ float: "left" }}>
                <p>보상</p>
                <ImagePicker
                  length="1"
                  files={files}
                  onChange={this.onImgChange}
                  onImageClick={(index, fs) => console.log(index, fs)}
                  selectable={files.length < 1}
                  onAddImageClick={this.onAddImageClick}
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
                <Input />
              </div>
            </div>
            <div>
              <p>스티커</p>
              <ul className="card_contents">
                <li className="sticker_list selected">
                  <label className="sticker" htmlFor="stiker_01">
                    <img src={iconImg} alt="iconImg" />
                  </label>
                  <input
                    type="radio"
                    id="stiker_01"
                    name="color"
                    value="#ef9a9a"
                    checked="checked"
                    onChange={this.onChangeSticker}
                  />
                </li>
                <li className="sticker_list">
                  <label className="sticker" htmlFor="stiker_02">
                    <img src={iconImg} alt="iconImg" />
                  </label>
                  <input
                    type="radio"
                    id="stiker_02"
                    name="color"
                    value="#e57373"
                    onChange={this.onChangeSticker}
                  />
                </li>
                <li className="sticker_list">
                  <label className="sticker" htmlFor="stiker_03">
                    <img src={iconImg} alt="iconImg" />
                  </label>
                  <input
                    type="radio"
                    id="stiker_03"
                    name="color"
                    value="#fbc02d"
                    onChange={this.onChangeSticker}
                  />
                </li>
                <li className="sticker_list">
                  <label className="sticker" htmlFor="stiker_04">
                    <img src={iconImg} alt="iconImg" />
                  </label>
                  <input
                    type="radio"
                    id="stiker_04"
                    name="color"
                    value="#9ccc65"
                    onChange={this.onChangeSticker}
                  />
                </li>
                <li className="sticker_list">
                  <label className="sticker" htmlFor="stiker_05">
                    <img src={iconImg} alt="iconImg" />
                  </label>
                  <input
                    type="radio"
                    id="stiker_05"
                    name="color"
                    value="#1a237e"
                    onChange={this.onChangeSticker}
                  />
                </li>
                <li className="sticker_list">
                  <label className="sticker" htmlFor="stiker_06">
                    <img src={iconImg} alt="iconImg" />
                  </label>
                  <input
                    type="radio"
                    id="stiker_06"
                    name="color"
                    value="#9575cd"
                    onChange={this.onChangeSticker}
                  />
                </li>
              </ul>
            </div>
            <Memo memo={""} handleChangeEvent={this._handleChangeEvent} />
            <div className="btn_wrap">
              <div className="btn">
                <Button
                  type="primary"
                  onClick={() =>
                    Modal.alert("등록", "등록하시겠습니까?", [
                      {
                        text: "Cancel",
                        onPress: () => console.log("cancel")
                      },
                      { text: "Ok", onPress: () => console.log("ok") }
                    ])
                  }
                >
                  등록
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateScreen;
