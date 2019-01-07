import React, { Component } from "react";
import TopNav from "../nav/TopNav";

class SettingScreen extends Component {
  render() {
    return (
      <div>
        <TopNav />
        <div className="main_wrap"> {"SettingScreen"}</div>
      </div>
    );
  }
}

export default SettingScreen;
