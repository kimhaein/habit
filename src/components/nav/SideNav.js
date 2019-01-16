import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Drawer, Avatar } from "antd";
// Image
import myImg from "../../assets/imgs/IMG_5131.jpg";

class SideNav extends Component {
  _closeDrawer = () => {
    this.props.showDrawer();
  };
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
          <p onClick={this._closeDrawer}>
            <Link to="/">Home</Link>
          </p>
          {/* <p onClick={this._closeDrawer}>
            <Link to="/history">History</Link>
          </p> */}
          <p onClick={this._closeDrawer}>
            <Link to="/rewards">Rewards</Link>
          </p>
          <p onClick={this._closeDrawer}>
            <Link to="/setting">Settings</Link>
          </p>
        </div>
        <div className="login_state">
          <span style={{ marginRight: "10px" }} onClick={this._closeDrawer}>
            <Link to="/signIn">로그인</Link>
          </span>
          <span>|</span>
          <span style={{ marginLeft: "10px" }} onClick={this._closeDrawer}>
            <Link to="/signUp">회원가입</Link>
          </span>
        </div>
        {/* <div className="login_state">
          <span onClick={this._closeDrawer}>
            <Icon type="logout" style={{ marginRight: "10px" }} />
            로그아웃
          </span>
        </div> */}
      </Drawer>
    );
  }
}

export default SideNav;
