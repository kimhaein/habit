import React, { Component } from "react";
import { Form, Icon, Input, Button, Checkbox } from "antd";
// Image
import kakakoImg from "../../assets/imgs/kakao.png";

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
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              <Input
                size="large"
                prefix={<Icon type="user" style={{ fontSize: 13 }} />}
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item>
              <Input
                size="large"
                prefix={<Icon type="lock" style={{ fontSize: 13 }} />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Checkbox>Remember me</Checkbox>
              <Button type="primary" size={"large"} htmlType="submit" block>
                Log in
              </Button>
            </Form.Item>
          </Form>
          <img src={kakakoImg} alt="kakao" style={{ width: "100%" }} />
          <div style={{ textAlign: "center", marginTop: 30 }}>
            아이디 찾기 | 비밀번호 찾기
          </div>
        </div>
      </div>
    );
  }
}

export default LoginScreen;
