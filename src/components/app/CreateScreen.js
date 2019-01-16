import React, { Component } from "react";
import { message, Button, Popconfirm, Icon } from "antd";
import TopNav from "../nav/TopNav";
import Memo from "../common/Memo";


class CreateScreen extends Component {


  //등록
  _createConfirm = () => {
    message.success("등록");
  };

  render() {
    return (
      <div>
        <TopNav />
        <div className="detail_wrap">
        <div className="detail_title">
          <input
            type="text"
            name="title"
            onChange={this._handleChangeEvent}
          />
        </div>
        <Memo
          memo={''}
          handleChangeEvent={this._handleChangeEvent}
        />
        <div className="btn_wrap">
          <div className="btn">
            <Popconfirm
              title="등록 하시겠습니까?"
              onConfirm={this._createConfirm}
              okText="확인"
              cancelText="취소"
              icon={<Icon type="check-circle" style={{ color: "#9ccc65" }} />}
            >
              <Button type="primary" size={"large"} block>
                등록
              </Button>
            </Popconfirm>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default CreateScreen;
