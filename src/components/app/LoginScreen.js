import React, { Component } from "react";

class LoginScreen extends Component {
  //input 값 변경
  _handleChangeEvent = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    return (
      <div className="main_wrap">
        <div className="bg_wrap">
          <h2>로그인</h2>
          <input type="text" name="id" onChange={this._handleChangeEvent} />
          <input type="text" name="pw" onChange={this._handleChangeEvent} />
          <div className="btn_wrap">
            <button className="btn_color">로그인</button>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginScreen;
