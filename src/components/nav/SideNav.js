import React, { Component } from "react";
import { Drawer, Avatar, Icon } from "antd";
// Image
import myImg from "../../assets/imgs/IMG_5131.jpg";

class SideNav extends Component {
  render() {
    const { showDrawer, modalVisible } = this.props;
    return (
      <Drawer
        placement={"left"}
        closable={true}
        onClose={showDrawer}
        visible={modalVisible}
        className="side_nav"
        bodyStyle={{ sbackground: "#4b403d" }}
      >
        <div className="info_wrap">
          <Avatar size={90} src={myImg} icon="user" />
          <p>김혜인</p>
        </div>
        <div className="menu">
          <p>Home</p>
          <p>History</p>
          <p>Rewards</p>
          <p>Settings</p>
        </div>
        <div className="logout">
          <Icon type="logout" />
          <span style={{ marginLeft: "10px" }}>로그아웃</span>
        </div>
      </Drawer>
    );
  }
}

export default SideNav;
