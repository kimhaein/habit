import React, { Component } from "react";
import { Drawer } from "antd";

class SideNav extends Component {
  render() {
    const { showDrawer, modalVisible } = this.props;
    return (
      <Drawer
        placement={"left"}
        closable={true}
        onClose={showDrawer}
        visible={modalVisible}
      >
        <div>img</div>
        <div>
          <p>Main</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </div>
      </Drawer>
    );
  }
}

export default SideNav;
