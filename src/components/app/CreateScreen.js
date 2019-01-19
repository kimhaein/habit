import React, { Component } from "react";
import { message, Button,Icon,Input,TimePicker,DatePicker,Upload } from "antd";
import { Modal} from 'antd-mobile';
import TopNav from "../nav/TopNav";
import Memo from "../common/Memo";
// Image
import iconImg from "../../assets/imgs/icon.png";


class CreateScreen extends Component {

  state = {
    imageUrl:''
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

  getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }

  handleChange = (info) => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      this.getBase64(info.file.originFileObj, imageUrl => this.setState({
        imageUrl,
        loading: false,
      }));
    }
  }

  render() {
    const imageUrl = this.state.imageUrl;
    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? 'loading' : 'plus'} />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    return (
      <div>
        <TopNav />
        <div className="create_wrap">
          <div>
            <p>목표</p>
            <Input allowClear onChange={this.onChange} />
          </div>
          <div style={{overflow:'hidden'}}>
            <p>기간</p>
              <DatePicker style={{float:'left',width:'48%'}} placeholder="시작일" />
              <DatePicker style={{float:'right',width:'48%'}} placeholder="종료일" />
          </div>
          <div>
            <p>알람</p>
            <TimePicker use12Hours format="h:mm a" onChange={this._onChange} />
          </div>
          <div>
            <p>보상</p>
            <Upload
              name="avatar"
              listType="picture-card"
              className="avatar-uploader"
              showUploadList={false}
              action="//jsonplaceholder.typicode.com/posts/"
              // beforeUpload={}
              onChange={this.handleChange}
            >
              {imageUrl ? <img src={imageUrl} alt="avatar" /> : uploadButton}
            </Upload>
          </div>
          <div>
            <p>목표달성문구</p>
            <Input allowClear onChange={this.onChange} />
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
    );
  }
}

export default CreateScreen;
