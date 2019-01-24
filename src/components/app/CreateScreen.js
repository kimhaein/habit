import React, { Component } from "react";
import { message,Input,TimePicker,DatePicker } from "antd";
import { Modal,ImagePicker,Button} from 'antd-mobile';
import TopNav from "../nav/TopNav";
import Memo from "../common/Memo";
// Image
import iconImg from "../../assets/imgs/icon.png";


class CreateScreen extends Component {

  state = {
    files:[]
  };
  
  _onChange(time, timeString) {
    console.log(time, timeString);
  }
  //등록
  _createConfirm = () => {
    message.success("등록");
  };

  onCancel = () => {
    document.getElementsByTagName('body')[0].style.overflowY = this.originbodyScrollY;
    this.setState({
      show: false,
      startTime: undefined,
      endTime: undefined,
    });
  }

  onConfirm = (startTime, endTime) => {
    document.getElementsByTagName('body')[0].style.overflowY = this.originbodyScrollY;
    this.setState({
      show: false,
      startTime,
      endTime,
    });
  }

  //이미지
  onImgChange = (files, type, index) => {
    console.log(files, type, index);
    this.setState({
      files,
    });
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
              <Input   />
            </div>
            <div style={{overflow:'hidden'}}>
              <p>기간</p>
                <DatePicker style={{float:'left',width:'48%'}} placeholder="시작일" />
                <DatePicker style={{float:'right',width:'48%'}} placeholder="종료일" />
            </div>
            <div>
              <p>알람</p>
              <TimePicker use12Hours format="h:mm a" />
            </div>
            <div style={{overflow:'hidden'}}>
              <div style={{float:'left',width:'25%'}}>
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
              <div style={{float:'right',width:'70%'}}>
                <p>목표달성문구</p>
                <Input.TextArea/>
              </div>
            </div>
            <div>
              <p>스티커</p>
              <ul className="card_contents">
                <li className="sticker_list">
                  <div className="sticker" style={{background: 'red',borderColor: 'red'}}>
                    <img src={iconImg} alt="iconImg" />
                  </div>
                </li>
              </ul>
            </div>
            <Memo
              memo={''}
              handleChangeEvent={this._handleChangeEvent}
            />
            <div className="btn_wrap">
              <div className="btn">
                <Button
                  type="primary"
                  onClick={() =>
                    Modal.alert('등록', '등록하시겠습니까?', [
                      { text: 'Cancel', onPress: () => console.log('cancel') },
                      { text: 'Ok', onPress: () => console.log('ok') },
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
