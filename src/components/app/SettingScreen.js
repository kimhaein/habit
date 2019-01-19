import React, { Component } from "react";
import TopNav from "../nav/TopNav";
import { Avatar,Switch,Button } from "antd";
import { Modal} from 'antd-mobile';
// Image
import myImg from "../../assets/imgs/IMG_5131.jpg";

class SettingScreen extends Component {
  render() {
    return (
      <div>
        <TopNav />
        <div className="main_wrap">
          <div className="bg_wrap setting_wrap">
            <div className="member_wrap">
            <div className="member_thumnail">
                <Avatar size={90} src={myImg} icon="user" style={{margin:"0 auto",boxShadow: "0 0px 10px 1px rgba(0, 0, 0, 0.2)"}}/>
              </div>
              <p>김혜인</p>
              <p>최근접속일 : 2019-01-14</p>
            </div>
            <div className="setting_list_wrap">
              <div className="setting_list">
                <span onClick={() =>
                        Modal.alert('로그아웃', '로그아웃 하시겠습니까?', [
                          { text: 'Cancel', onPress: () => console.log('cancel') },
                          { text: 'Ok', onPress: () => console.log('ok') },
                        ])
                      }>
                  로그아웃
                </span>
                <span></span>
              </div>  
              <div className="setting_list">
                <span>비밀번호 변경</span>
                <span></span>
              </div>  
              <div className="setting_list">
                <span>푸시 알림</span>
                <span><Switch defaultChecked /></span>
              </div>  
              <div className="setting_list">
                <span>버전</span>
                <span>1.0.0</span>
              </div>  
            </div>
            <div className="copyright">
              COPYRIGHT &copy; KIMHAEIN
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SettingScreen;
