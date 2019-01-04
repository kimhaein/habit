import React, { Component } from "react";
import { Form, Icon, Input, Button } from "antd";

class SignUpScreen extends Component {
  render() {
    return (
      <div className="main_wrap">
        <div className="bg_wrap">
          <h2>회원가입</h2>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              <Input
                size="large"
                prefix={<Icon type="user" style={{ fontSize: 13 }} />}
                placeholder="UserID"
              />
            </Form.Item>
            <Form.Item>
              <Input
                size="large"
                prefix={<Icon type="mail" style={{ fontSize: 13 }} />}
                type="email"
                placeholder="email"
              />
            </Form.Item>
            <Form.Item>
              <Input
                size="large"
                prefix={<Icon type="lock" style={{ fontSize: 13 }} />}
                type="password"
                placeholder="Password1"
              />
            </Form.Item>
            <Form.Item>
              <Input
                size="large"
                prefix={<Icon type="check-circle" style={{ fontSize: 13 }} />}
                type="password"
                placeholder="Password2"
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" size={"large"} htmlType="submit" block>
                sign up
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}

export default SignUpScreen;
